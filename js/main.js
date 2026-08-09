/* ==========================================
   MAIN APPLICATION ENGINE - AHMAD SHAAD ZAKI
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize Application
  initThemeEngine();
  renderSkills('all');
  renderProjects();
  renderProtectedDetails();
  initNavigation();
  initModals();
  initScrollEffects();
});

/* ==========================================
   SCROLL EFFECTS & SCROLL TO TOP
   ========================================== */
function initScrollEffects() {
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Scroll Reveal Animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
      }
    });
  }, observerOptions);

  document.querySelectorAll('section, .glass-card, .timeline-item').forEach(el => {
    el.classList.add('reveal-on-scroll');
    observer.observe(el);
  });
}

/* ==========================================
   1. THEME ENGINE & SELECTION MODAL
   ========================================== */
function initThemeEngine() {
  const savedTheme = localStorage.getItem('selected_portfolio_theme') || 'cyber';
  setTheme(savedTheme);

  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const openThemeModalBtn = document.getElementById('openThemeModalBtn');
  const themeModal = document.getElementById('themeModal');

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      openModal('themeModal');
    });
  }

  if (openThemeModalBtn) {
    openThemeModalBtn.addEventListener('click', () => {
      openModal('themeModal');
    });
  }

  // Populate Theme Options in Modal
  const themeContainer = document.getElementById('themeOptionsGrid');
  if (themeContainer) {
    themeContainer.innerHTML = PORTFOLIO_DATA.themes.map(theme => `
      <div class="theme-card-option ${theme.id === savedTheme ? 'selected' : ''}" data-theme-id="${theme.id}">
        <div class="theme-swatch" style="background: ${theme.bg}; border: 2px solid ${theme.accent}; color: ${theme.accent};">
          <i class="fa-solid fa-shield-halved"></i>
        </div>
        <div>
          <h4 style="font-weight: 700; font-size: 1rem; color: var(--text-main);">${theme.name}</h4>
          <p style="font-size: 0.8rem; color: var(--text-muted); margin-top: 2px;">${theme.tagline}</p>
        </div>
      </div>
    `).join('');

    themeContainer.querySelectorAll('.theme-card-option').forEach(card => {
      card.addEventListener('click', () => {
        const themeId = card.getAttribute('data-theme-id');
        setTheme(themeId);
        
        // Update selected class
        themeContainer.querySelectorAll('.theme-card-option').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        
        const selectedThemeObj = PORTFOLIO_DATA.themes.find(t => t.id === themeId);
        showToast(`Theme changed to: ${selectedThemeObj ? selectedThemeObj.name : themeId}`, 'success');
        closeModal('themeModal');
      });
    });
  }
}

function setTheme(themeId) {
  document.documentElement.setAttribute('data-theme', themeId);
  localStorage.setItem('selected_portfolio_theme', themeId);
  
  // Update Theme Badge indicator if present
  const currentThemeLabel = document.getElementById('currentThemeName');
  if (currentThemeLabel) {
    const themeObj = PORTFOLIO_DATA.themes.find(t => t.id === themeId);
    currentThemeLabel.textContent = themeObj ? themeObj.name : themeId;
  }
}

/* ==========================================
   2. DYNAMIC SKILLS RENDERER
   ========================================== */
function renderSkills(filterCategory = 'all') {
  const skillsContainer = document.getElementById('skillsGrid');
  if (!skillsContainer) return;

  const filtered = filterCategory === 'all' 
    ? PORTFOLIO_DATA.skills 
    : PORTFOLIO_DATA.skills.filter(s => s.category === filterCategory);

  skillsContainer.innerHTML = filtered.map(skill => `
    <div class="glass-card skill-card">
      <div>
        <div class="skill-header">
          <div class="skill-title-group">
            <div class="skill-icon">
              <i class="${skill.icon}"></i>
            </div>
            <h3 class="skill-name">${skill.name}</h3>
          </div>
          <span class="skill-level-badge">${skill.level}</span>
        </div>
        <p class="skill-desc">${skill.desc}</p>
      </div>
      <div class="skill-tags">
        ${skill.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');

  // Skill Filters Event Listener
  const filterBtns = document.querySelectorAll('.skills-filter .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-filter');
      renderSkills(cat);
    });
  });
}

/* ==========================================
   3. PROJECTS & HANDS-ON LABS RENDERER
   ========================================== */
function renderProjects() {
  const container = document.getElementById('projectsGrid');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.projects.map(proj => `
    <div class="glass-card project-card">
      <div class="project-badge-row">
        <span class="project-status"><i class="fa-solid fa-flask"></i> ${proj.status}</span>
        <span class="tag mono-font" style="font-size:0.75rem;">${proj.timeline}</span>
      </div>
      <h3 class="project-title">${proj.title}</h3>
      <p class="project-desc">${proj.desc}</p>
      
      <h4 style="font-size: 0.875rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem;">Key Architecture Highlights:</h4>
      <ul class="project-highlights">
        ${proj.highlights.map(h => `<li><i class="fa-solid fa-circle-check"></i> <span>${h}</span></li>`).join('')}
      </ul>

      ${proj.terminalDemo ? `
        <div class="terminal-box">
          <div class="terminal-header">
            <div class="terminal-dots">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
            </div>
            <span class="mono-font">${proj.terminalDemo.title}</span>
          </div>
          <div class="terminal-body">
            <div class="terminal-line"><span class="terminal-prompt">PS C:\\Lab></span> ${proj.terminalDemo.command}</div>
            <div class="terminal-output">${proj.terminalDemo.output}</div>
          </div>
        </div>
      ` : ''}

      ${proj.githubUrl ? `
        <div style="margin-top: 1.25rem;">
          <a href="${proj.githubUrl}" target="_blank" rel="noopener" class="btn btn-outline" style="width: 100%; justify-content: center; gap: 0.6rem;">
            <i class="fa-brands fa-github" style="font-size: 1.1rem;"></i> View Public GitHub Repository
          </a>
        </div>
      ` : ''}

      <div class="skill-tags" style="margin-top: 1.25rem;">
        ${proj.tags.map(t => `<span class="tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================
   4. PROTECTED DETAILS & SECURITY DECODER
   ========================================== */
function renderProtectedDetails() {
  const emailVal = document.getElementById('protectedEmailDisplay');
  const phoneVal = document.getElementById('protectedPhoneDisplay');
  const locationVal = document.getElementById('protectedLocationDisplay');

  if (emailVal) emailVal.textContent = SecurityUtils.getProtectedEmail();
  if (phoneVal) phoneVal.textContent = SecurityUtils.getProtectedPhone();
  if (locationVal) locationVal.textContent = PORTFOLIO_DATA.profile.relocation;
}

/* ==========================================
   5. NAVIGATION & MOBILE DRAWER
   ========================================== */
function initNavigation() {
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // Active section highlighting on scroll
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(sec => {
      const sectionHeight = sec.offsetHeight;
      const sectionTop = sec.offsetTop - 100;
      const sectionId = sec.getAttribute('id');
      const navItem = document.querySelector(`.nav-links a[href*=${sectionId}]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        if (navItem) navItem.classList.add('active');
      } else {
        if (navItem) navItem.classList.remove('active');
      }
    });
  });
}

/* ==========================================
   6. MODAL SYSTEM
   ========================================== */
function initModals() {
  // Global modal overlay triggers
  document.querySelectorAll('[data-modal-open]').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetModal = btn.getAttribute('data-modal-open');
      openModal(targetModal);
    });
  });

  document.querySelectorAll('.modal-close, [data-modal-close]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-overlay');
      if (modal) closeModal(modal.id);
    });
  });

  // Close modal when clicking outside
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay.id);
      }
    });
  });

  // Photo Lightbox Trigger
  const avatarWrapper = document.getElementById('heroAvatarWrapper');
  if (avatarWrapper) {
    avatarWrapper.addEventListener('click', () => {
      openModal('photoModal');
    });
  }
}

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================
   7. TOAST NOTIFICATION SYSTEM
   ========================================== */
function showToast(message, type = 'info') {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;

  let icon = 'fa-solid fa-circle-info';
  if (type === 'success') icon = 'fa-solid fa-circle-check';
  if (type === 'error') icon = 'fa-solid fa-triangle-exclamation';

  toast.innerHTML = `<i class="${icon}"></i> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
