/* ==========================================
   SECURITY & PRIVACY UTILITIES - AHMAD SHAAD ZAKI
   ========================================== */

const SecurityUtils = {
  // Sanitize user input to prevent XSS injection
  sanitizeInput(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;')
      .replace(/\//g, '&#x2F;');
  },

  // Honeypot field validation (blocks automated bot submissions)
  isSpamBotSubmission(formElement) {
    const honeypot = formElement.querySelector('input[name="website_url_check"]');
    if (honeypot && honeypot.value && honeypot.value.trim() !== '') {
      console.warn("Security Alert: Bot activity detected via honeypot field.");
      return true;
    }
    return false;
  },

  // Client-side rate limiting (max 3 form submits per 60 seconds)
  checkRateLimit(key = "contact_form_submit", maxAttempts = 3, timeWindowMs = 60000) {
    const now = Date.now();
    const attempts = JSON.parse(localStorage.getItem(`rate_limit_${key}`) || '[]');
    const recentAttempts = attempts.filter(timestamp => now - timestamp < timeWindowMs);
    
    if (recentAttempts.length >= maxAttempts) {
      return false; // Rate limit exceeded
    }
    
    recentAttempts.push(now);
    localStorage.setItem(`rate_limit_${key}`, JSON.stringify(recentAttempts));
    return true;
  },

  // Anti-scraper email & phone decoder (prevents plain-text scraping by spambots)
  getProtectedEmail() {
    const user = "ahmadalig20";
    const domain = "gmail.com";
    return `${user}@${domain}`;
  },

  getProtectedPhone() {
    const country = "+91";
    const part1 = "82187";
    const part2 = "71108";
    return `${country} ${part1} ${part2}`;
  },

  // Security status summary for recruiters
  getSecurityAuditLog() {
    return {
      xssProtection: "Strict Client-Side Escaping Active",
      botDefense: "Honeypot Trap & Client Rate-Limiter Active",
      privacyShield: "Obfuscated Personal Identifiers",
      dataHandling: "No persistent tracking cookies used",
      httpsReadiness: "Clean static asset paths ready for SSL/TLS deployment"
    };
  }
};
