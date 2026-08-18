/* ==========================================
   MAIN APPLICATION LOGIC & SPA CONTROLLER
   ========================================== */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    // 1. Initialize Security Obfuscation Links
    if (window.SecurityModule) {
      SecurityModule.renderSecureContactLinks();
    }

    const data = window.PORTFOLIO_DATA || {};

    // 2. Render Theme Selection Modal Options
    renderThemeModalOptions(data.themes || []);

    // 3. Initialize Theme Engine
    initThemeEngine(data.themes || []);

    // 4. Render Core Skills & Technical Pillars
    renderSkillsGrid(data.skills || []);

    // 5. Render Target Entry-Level Roles
    renderTargetRoles(data.targetRoles || []);

    // 6. Render AWS CloudOps Execution Plan
    renderExecutionPlan(data.executionPlan || []);

    // 7. Render Work Experience Timeline
    renderExperience(data.experience || []);

    // 6. Setup Navigation & Scroll Spy
    setupScrollSpy();
    setupMobileNav();

    // 7. Setup Modals
    setupModals();

    // 8. Setup Scroll Reveal Animations & Back-to-Top Button
    setupScrollEffects();
  });

  /* ------------------------------------------
     THEME ENGINE
     ------------------------------------------ */
  function initThemeEngine(themes) {
    const savedTheme = localStorage.getItem('theme_preference') || 'aws';
    setTheme(savedTheme);
  }

  function setTheme(themeId) {
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('theme_preference', themeId);

    // Update active state in theme modal options
    const options = document.querySelectorAll('.theme-option-card');
    options.forEach(opt => {
      if (opt.getAttribute('data-theme-id') === themeId) {
        opt.classList.add('selected');
      } else {
        opt.classList.remove('selected');
      }
    });
  }

  function renderThemeModalOptions(themes) {
    const container = document.getElementById('themeOptionsGrid');
    if (!container) return;

    let html = '';
    themes.forEach(theme => {
      html += `
        <div class="theme-option-card" data-theme-id="${theme.id}">
          <div>
            <h4 style="font-size: 1rem; font-weight: 700; color: var(--text-main);">${SecurityModule.escapeHTML(theme.name)}</h4>
            <p style="font-size: 0.8rem; color: var(--text-muted);">${SecurityModule.escapeHTML(theme.tagline)}</p>
          </div>
          <div class="theme-preview-dots">
            <span class="preview-dot" style="background: ${theme.accent};"></span>
            <span class="preview-dot" style="background: ${theme.bg}; border: 1px solid rgba(255,255,255,0.2);"></span>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;

    container.querySelectorAll('.theme-option-card').forEach(card => {
      card.addEventListener('click', function () {
        const themeId = this.getAttribute('data-theme-id');
        setTheme(themeId);
      });
    });
  }

  /* ------------------------------------------
     SKILLS & TECHNICAL PILLARS RENDERER
     ------------------------------------------ */
  function renderSkillsGrid(skills) {
    const grid = document.getElementById('skillsGrid');
    if (!grid) return;

    let html = '';
    skills.forEach(skill => {
      const tagsHtml = (skill.tags || []).map(t => `<span class="tag-chip">${SecurityModule.escapeHTML(t)}</span>`).join('');

      html += `
        <div class="card-glass skill-card">
          <div class="skill-card-header">
            <div class="skill-icon">
              <i class="${SecurityModule.escapeHTML(skill.icon)}"></i>
            </div>
            <div>
              <h3 style="font-size: 1.1rem; font-weight: 800;">${SecurityModule.escapeHTML(skill.name)}</h3>
            </div>
            <span class="skill-level-badge">${SecurityModule.escapeHTML(skill.level)}</span>
          </div>
          
          <p style="font-size: 0.9rem; color: var(--text-muted);">${SecurityModule.escapeHTML(skill.desc)}</p>

          <div class="tag-cloud">
            ${tagsHtml}
          </div>
        </div>
      `;
    });

    grid.innerHTML = html;
  }

  /* ------------------------------------------
     ENTRY-LEVEL TARGET ROLES RENDERER
     ------------------------------------------ */
  function renderTargetRoles(targetRoles) {
    const grid = document.getElementById('targetRolesGrid');
    if (!grid) return;

    let html = '';
    targetRoles.forEach(role => {
      const tagsHtml = (role.tags || []).map(t => `<span class="tag-chip">${SecurityModule.escapeHTML(t)}</span>`).join('');

      html += `
        <div class="card-glass skill-card">
          <div class="skill-card-header">
            <div class="skill-icon">
              <i class="${SecurityModule.escapeHTML(role.icon)}"></i>
            </div>
            <div>
              <h3 style="font-size: 1.1rem; font-weight: 800;">${SecurityModule.escapeHTML(role.title)}</h3>
            </div>
            <span class="skill-level-badge">${SecurityModule.escapeHTML(role.badge)}</span>
          </div>
          
          <p style="font-size: 0.9rem; color: var(--text-muted);">${SecurityModule.escapeHTML(role.desc)}</p>

          <div class="tag-cloud">
            ${tagsHtml}
          </div>
        </div>
      `;
    });

    grid.innerHTML = html;
  }

  /* ------------------------------------------
     AWS CLOUDOPS EXECUTION PLAN RENDERER
     ------------------------------------------ */
  function renderExecutionPlan(executionPlan) {
    const container = document.getElementById('executionPlanGrid');
    if (!container) return;

    let html = '';
    executionPlan.forEach(plan => {
      const itemsHtml = (plan.items || []).map(item => `<li>${SecurityModule.escapeHTML(item)}</li>`).join('');

      html += `
        <div class="card-glass" style="display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
              <span class="section-badge" style="margin-bottom: 0; background: rgba(255,153,0,0.12); color: var(--accent-primary); border-color: var(--border-highlight);">${SecurityModule.escapeHTML(plan.badge)}</span>
              <span style="font-size: 0.8rem; font-weight: 700; color: var(--accent-primary);">${SecurityModule.escapeHTML(plan.status)}</span>
            </div>

            <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.6rem;">
              <i class="${SecurityModule.escapeHTML(plan.icon)}" style="color: var(--accent-primary);"></i>
              ${SecurityModule.escapeHTML(plan.phase)}
            </h3>

            <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1rem;">${SecurityModule.escapeHTML(plan.desc)}</p>

            <ul class="project-highlights">
              ${itemsHtml}
            </ul>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  /* ------------------------------------------
     WORK EXPERIENCE RENDERER
     ------------------------------------------ */
  function renderExperience(experience) {
    const container = document.getElementById('experienceTimeline');
    if (!container) return;

    let html = '';
    experience.forEach(exp => {
      const pointsHtml = exp.points.map(p => `<li>${SecurityModule.escapeHTML(p)}</li>`).join('');

      html += `
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="card-glass">
            <h3 class="timeline-role">${SecurityModule.escapeHTML(exp.role)}</h3>
            <div class="timeline-company">${SecurityModule.escapeHTML(exp.company)} — ${SecurityModule.escapeHTML(exp.location)}</div>
            <div class="timeline-duration"><i class="fa-regular fa-calendar-check"></i> ${SecurityModule.escapeHTML(exp.duration)}</div>
            <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 0.75rem;">${SecurityModule.escapeHTML(exp.summary)}</p>
            <ul class="project-highlights">
              ${pointsHtml}
            </ul>
          </div>
        </div>
      `;
    });

    container.innerHTML = html;
  }

  /* ------------------------------------------
     NAVIGATION & SCROLL SPY
     ------------------------------------------ */
  function setupScrollSpy() {
    const headerNav = document.getElementById('headerNav');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        headerNav.classList.add('scrolled');
      } else {
        headerNav.classList.remove('scrolled');
      }

      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }

  function setupMobileNav() {
    const toggleBtn = document.getElementById('mobileNavToggle');
    const navMenu = document.getElementById('navMenu');

    if (toggleBtn && navMenu) {
      toggleBtn.addEventListener('click', function () {
        navMenu.classList.toggle('mobile-open');
      });

      navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
          navMenu.classList.remove('mobile-open');
        });
      });
    }
  }

  /* ------------------------------------------
     MODALS CONTROLLER
     ------------------------------------------ */
  function setupModals() {
    // 1. Theme Modal
    bindModal('themeModalBtn', 'themeModal');

    // 2. Photo Lightbox
    bindModal('photoCardBtn', 'photoModal');

    // 3. Degree Lightbox
    bindModal('degreeCardBtn', 'degreeModal');
    bindModal('degreeModalTrigger', 'degreeModal');

    // 4. Recruiter QR Code Modal
    bindModal('qrModalBtn', 'qrModal');
  }

  function bindModal(triggerId, modalId) {
    const trigger = document.getElementById(triggerId);
    const modal = document.getElementById(modalId);
    if (!trigger || !modal) return;

    trigger.addEventListener('click', function () {
      modal.classList.add('active');
    });

    const closeBtn = modal.querySelector('.modal-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        modal.classList.remove('active');
      });
    }

    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }

  /* ------------------------------------------
     SCROLL EFFECTS & BACK TO TOP
     ------------------------------------------ */
  function setupScrollEffects() {
    // Reveal on scroll
    const reveals = document.querySelectorAll('.reveal-on-scroll');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.15 });

    reveals.forEach(el => observer.observe(el));

    // Floating Back to Top Button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (scrollTopBtn) {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 400) {
          scrollTopBtn.classList.add('visible');
        } else {
          scrollTopBtn.classList.remove('visible');
        }
      });

      scrollTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

})();
