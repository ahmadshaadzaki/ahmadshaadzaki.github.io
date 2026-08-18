/* ==========================================
   CONTACT FORM HANDLING & SECURITY INTEGRATION
   ========================================== */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('formSubmitBtn');
    const feedbackEl = document.getElementById('formFeedback');

    if (!contactForm) return;

    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      // Clear existing feedback
      feedbackEl.className = 'form-feedback';
      feedbackEl.style.display = 'none';
      feedbackEl.textContent = '';

      // 1. Honeypot bot check
      if (window.SecurityModule && SecurityModule.isHoneypotTriggered(contactForm)) {
        // Silently simulate success for bots
        feedbackEl.className = 'form-feedback success';
        feedbackEl.textContent = 'Message sent successfully! Thank you.';
        feedbackEl.style.display = 'block';
        contactForm.reset();
        return;
      }

      // 2. Rate limiting check
      if (window.SecurityModule && SecurityModule.isRateLimited()) {
        const remaining = SecurityModule.getRemainingCooldown();
        feedbackEl.className = 'form-feedback error';
        feedbackEl.textContent = `Security Rate Limit: Please wait ${remaining} seconds before sending another message.`;
        feedbackEl.style.display = 'block';
        return;
      }

      // 3. Form fields extraction & validation
      const nameInput = contactForm.querySelector('input[name="name"]');
      const emailInput = contactForm.querySelector('input[name="email"]');
      const subjectInput = contactForm.querySelector('input[name="subject"]');
      const messageInput = contactForm.querySelector('textarea[name="message"]');

      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const subject = subjectInput.value.trim();
      const message = messageInput.value.trim();

      if (!name || !email || !subject || !message) {
        feedbackEl.className = 'form-feedback error';
        feedbackEl.textContent = 'Please fill out all required fields.';
        feedbackEl.style.display = 'block';
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        feedbackEl.className = 'form-feedback error';
        feedbackEl.textContent = 'Please enter a valid email address.';
        feedbackEl.style.display = 'block';
        return;
      }

      // Disable button & show spinner state
      submitBtn.disabled = true;
      const originalBtnHtml = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

      try {
        const accessKey = window.PORTFOLIO_DATA && PORTFOLIO_DATA.profile && PORTFOLIO_DATA.profile.web3FormsKey;

        if (accessKey && accessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
          // Send via Web3Forms API
          const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json'
            },
            body: JSON.stringify({
              access_key: accessKey,
              name: SecurityModule.escapeHTML(name),
              email: SecurityModule.escapeHTML(email),
              subject: SecurityModule.escapeHTML(subject),
              message: SecurityModule.escapeHTML(message)
            })
          });

          const result = await response.json();
          if (result.success) {
            feedbackEl.className = 'form-feedback success';
            feedbackEl.textContent = 'Message sent successfully! Ahmad will respond shortly.';
            contactForm.reset();
            if (window.SecurityModule) SecurityModule.recordSubmission();
          } else {
            throw new Error(result.message || 'Submission failed');
          }
        } else {
          // Fallback simulation mode
          await new Promise(resolve => setTimeout(resolve, 1000));
          feedbackEl.className = 'form-feedback success';
          feedbackEl.textContent = 'Message delivered! Thank you for contacting Ahmad Shaad Zaki.';
          contactForm.reset();
          if (window.SecurityModule) SecurityModule.recordSubmission();
        }
      } catch (err) {
        feedbackEl.className = 'form-feedback error';
        feedbackEl.textContent = 'An error occurred while sending your message. Please try emailing directly.';
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
        feedbackEl.style.display = 'block';
      }
    });
  });
})();
