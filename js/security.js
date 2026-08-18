/* ==========================================
   SECURITY MODULE - CLIENT-SIDE PROTECTIONS
   ========================================== */

const SecurityModule = (function () {
  'use strict';

  // 1. HTML Sanitization to prevent XSS
  function escapeHTML(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // 2. Dynamic Memory Contact De-obfuscation (Anti-Scraper protection)
  // Email encoded as char codes: "ahmadalig20@gmail.com"
  const _eCodes = [97,104,109,97,100,97,108,105,103,50,48,64,103,109,97,105,108,46,99,111,109];
  // Phone encoded as char codes: "+91 82187 71108"
  const _pCodes = [43,57,49,32,56,50,49,56,55,32,55,49,49,48,56];

  function getDecodedEmail() {
    return String.fromCharCode.apply(null, _eCodes);
  }

  function getDecodedPhone() {
    return String.fromCharCode.apply(null, _pCodes);
  }

  function renderSecureContactLinks() {
    const emailElems = document.querySelectorAll('.js-secure-email');
    const phoneElems = document.querySelectorAll('.js-secure-phone');

    const email = getDecodedEmail();
    const phone = getDecodedPhone();

    emailElems.forEach(el => {
      el.textContent = email;
      if (el.tagName === 'A') {
        el.href = 'mailto:' + email;
      }
    });

    phoneElems.forEach(el => {
      el.textContent = phone;
      if (el.tagName === 'A') {
        el.href = 'tel:' + phone.replace(/\s+/g, '');
      }
    });
  }

  // 3. Form Rate Limiting (Coooling period: 60 seconds)
  const RATE_LIMIT_KEY = 'security_form_last_sub';
  const COOLDOWN_MS = 60000;

  function isRateLimited() {
    const lastSub = localStorage.getItem(RATE_LIMIT_KEY);
    if (!lastSub) return false;
    const elapsed = Date.now() - parseInt(lastSub, 10);
    return elapsed < COOLDOWN_MS;
  }

  function getRemainingCooldown() {
    const lastSub = localStorage.getItem(RATE_LIMIT_KEY);
    if (!lastSub) return 0;
    const elapsed = Date.now() - parseInt(lastSub, 10);
    const remaining = Math.ceil((COOLDOWN_MS - elapsed) / 1000);
    return remaining > 0 ? remaining : 0;
  }

  function recordSubmission() {
    localStorage.setItem(RATE_LIMIT_KEY, Date.now().toString());
  }

  // 4. Honeypot check
  function isHoneypotTriggered(form) {
    const honeypot = form.querySelector('input[name="hp_website_confirm"]');
    return honeypot && honeypot.value.trim() !== '';
  }

  return {
    escapeHTML: escapeHTML,
    getDecodedEmail: getDecodedEmail,
    getDecodedPhone: getDecodedPhone,
    renderSecureContactLinks: renderSecureContactLinks,
    isRateLimited: isRateLimited,
    getRemainingCooldown: getRemainingCooldown,
    recordSubmission: recordSubmission,
    isHoneypotTriggered: isHoneypotTriggered
  };
})();

if (typeof window !== 'undefined') {
  window.SecurityModule = SecurityModule;
}
