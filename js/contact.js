/* ==========================================
   DIRECT CONTACT FORM HANDLER - AHMAD SHAAD ZAKI
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const directMailtoBtn = document.getElementById('directMailtoBtn');
  const copyEmailBtn = document.getElementById('copyEmailBtn');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // 1. Check Spam Honeypot
      if (SecurityUtils.isSpamBotSubmission(contactForm)) {
        showToast("Spam detection triggered. Submission blocked.", "error");
        return;
      }

      // 2. Check Rate Limiter
      if (!SecurityUtils.checkRateLimit('contact_form', 3, 60000)) {
        showToast("Too many submissions! Please wait 1 minute before trying again.", "error");
        return;
      }

      // 3. Extract & Sanitize Input
      const name = SecurityUtils.sanitizeInput(document.getElementById('senderName').value.trim());
      const email = SecurityUtils.sanitizeInput(document.getElementById('senderEmail').value.trim());
      const subject = SecurityUtils.sanitizeInput(document.getElementById('senderSubject').value.trim());
      const message = SecurityUtils.sanitizeInput(document.getElementById('senderMessage').value.trim());

      // 4. Validate Inputs
      if (!name || !email || !message) {
        showToast("Please fill in all required fields (Name, Email, Message).", "error");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showToast("Please enter a valid email address.", "error");
        return;
      }

      // Update Button State to Loading
      const originalBtnText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<i class="fa-solid fa-circle-notch fa-spin"></i> Dispatching Message...`;

      try {
        // Attempt Direct Sending via Web3Forms (Sends email directly to ahmadalig20@gmail.com)
        // Web3Forms Public Access Key configured for direct delivery to ahmadalig20@gmail.com
        const web3FormsEndpoint = "https://api.web3forms.com/submit";
        
        // Extract access key from data.js or default fallback
        const accessKey = (PORTFOLIO_DATA.profile.web3FormsKey && PORTFOLIO_DATA.profile.web3FormsKey !== "YOUR_WEB3FORMS_ACCESS_KEY") 
          ? PORTFOLIO_DATA.profile.web3FormsKey 
          : "4d16d634-6e69-42b7-8d26-72410a5661bb"; // Default access key endpoint

        const formData = new FormData();
        formData.append("access_key", accessKey);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("subject", subject || `Portfolio Contact from ${name}`);
        formData.append("message", message);
        formData.append("from_name", "Ahmad's Portfolio Website");

        const response = await fetch(web3FormsEndpoint, {
          method: "POST",
          body: formData
        });

        const data = await response.json();

        if (response.ok && data.success) {
          showToast("⚡ Message sent directly to Ahmad's inbox! Thank you.", "success");
          contactForm.reset();
        } else {
          // Fallback to mailto if endpoint requires fresh key
          triggerMailtoFallback(name, email, subject, message);
        }
      } catch (err) {
        console.warn("Direct API dispatch failed, activating mailto fallback:", err);
        triggerMailtoFallback(name, email, subject, message);
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    });
  }

  // Fallback function when offline or API requires fallback
  function triggerMailtoFallback(name, email, subject, message) {
    const targetEmail = SecurityUtils.getProtectedEmail();
    const mailtoUrl = `mailto:${targetEmail}?subject=${encodeURIComponent(subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open user default email client
    window.location.href = mailtoUrl;
    showToast("Email client opened with pre-filled message! Click Send in your mail app.", "info");
  }

  // Direct Mailto Button Event
  if (directMailtoBtn) {
    directMailtoBtn.addEventListener('click', () => {
      const email = SecurityUtils.getProtectedEmail();
      window.location.href = `mailto:${email}?subject=Hiring%20Inquiry%20-%20System%20Administrator%20Role`;
    });
  }

  // Copy Email Button Event
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = SecurityUtils.getProtectedEmail();
      navigator.clipboard.writeText(email).then(() => {
        showToast("Copied ahmadalig20@gmail.com to clipboard!", "success");
      }).catch(() => {
        showToast(`Email: ${email}`, "info");
      });
    });
  }
});
