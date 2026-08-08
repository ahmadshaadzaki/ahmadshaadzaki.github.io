# Ahmad Shaad Zaki - Professional Portfolio Website 🛡️

[![Live Website](https://img.shields.io/badge/Live-ahmadshaadzaki.github.io-00f2fe?style=for-the-badge&logo=githubpages&logoColor=black)](https://ahmadshaadzaki.github.io/)
[![Role](https://img.shields.io/badge/Role-System%20Admin%20%26%20IAM%20Specialist-blue?style=for-the-badge&logo=windows)](https://ahmadshaadzaki.github.io/)
[![Certification](https://img.shields.io/badge/Microsoft-SC--900%20(In%20Progress)-10b981?style=for-the-badge&logo=microsoft)](https://ahmadshaadzaki.github.io/)
[![Security Verified](https://img.shields.io/badge/Security-XSS%20%26%20Honeypot%20Shield-purple?style=for-the-badge&logo=shield)](https://ahmadshaadzaki.github.io/)

Welcome to the official repository for **Ahmad Shaad Zaki**'s professional personal portfolio website. Built specifically for recruiters, hiring managers, and IT leadership, this web application highlights expertise in **System Administration, Active Directory Domain Services (AD DS), Identity & Access Management (IAM), PowerShell Automation, Networking, and Multi-OS Virtual Infrastructure**.

---

## 🌐 Live Demo & Deployment

- **Live URL**: [https://ahmadshaadzaki.github.io/](https://ahmadshaadzaki.github.io/)
- **Repository**: [github.com/ahmadshaadzaki/ahmadshaadzaki.github.io](https://github.com/ahmadshaadzaki/ahmadshaadzaki.github.io)

---

## 🌟 Highlights & Key Features

### 1. 🛡️ Multi-Theme Engine (Default: Cyber Security Slate)
- **5 Curated Color Themes**:
  1. **Cyber Security Slate** *(Default)*: Slate background `#0a0e17`, neon azure `#00f2fe` terminal aesthetic.
  2. **Obsidian Violet**: Glassmorphic deep purple & glowing violet highlights.
  3. **Emerald Matrix**: Dark charcoal & glowing mint accents.
  4. **Executive Navy**: Deep oceanic navy & metallic gold highlights.
  5. **Pristine Light**: High-contrast, clean minimalist light mode.
- Interactive **Select Theme** modal with real-time preview and browser `localStorage` persistence.

### 2. 🔒 Comprehensive Client Security & Privacy Protection
- **XSS Sanitization**: Input sanitization via `SecurityUtils.sanitizeInput()` escaping special characters.
- **Anti-Spambot Honeypot**: Hidden decoy trap field neutralizing automated web scraping bots.
- **Obfuscated Contact Identifiers**: Dynamic memory assembly of email (`ahmadalig20@gmail.com`) and phone number (`+91 82187 71108`) to prevent crawler scraping.
- **Client Rate Limiting**: Restricts contact form submissions to prevent spam floods.

### 3. 🖥️ Interactive Virtual Lab & Terminal Console Showcase
- Detailed architecture highlights of the **Multi-OS Virtual Environment** running Windows Server 2022, Ubuntu Linux, CentOS, and Kali Linux.
- Interactive terminal console code boxes demonstrating PowerShell Active Directory user provisioning scripts.

### 4. 📄 Resume & Profile Integration
- Direct 1-click download button for official PDF resume (`Ahmad_Shaad_Zaki_Resume.pdf`).
- Interactive profile card featuring `My photo.jpeg` with glowing status ring and full-screen image lightbox modal view.

### 5. ✉️ Direct Contact Form
- Direct email dispatch to `ahmadalig20@gmail.com` via Web3Forms API.
- Automatic mailto fallback & 1-click **Copy Email to Clipboard** action button.

---

## 🛠️ Technical Stack

- **Frontend**: HTML5, Vanilla CSS3 (Custom CSS Properties, Glassmorphism, CSS Grid & Flexbox), Vanilla JavaScript (ES6+).
- **Typography & Icons**: Inter, JetBrains Mono, FontAwesome 6.5.
- **Form Service**: Web3Forms API with client-side mailto fallback.
- **Hosting**: GitHub Pages (SSL Enforced).

---

## 📁 Repository Structure

```
├── index.html                   # Main semantic HTML structure & metadata
├── css/
│   ├── themes.css               # Color variables for 5 curated themes
│   └── styles.css               # Core layout, glassmorphism, responsive styles
├── js/
│   ├── data.js                  # Profile, skills, labs, experience & theme objects
│   ├── security.js              # XSS sanitization, anti-bot honeypot & obfuscation
│   ├── contact.js               # Form handler, rate limiting & direct email dispatch
│   └── main.js                  # Theme engine, modal controllers & navigation
├── Ahmad_Shaad_Zaki_Resume.pdf  # PDF Resume
├── My photo.jpeg                # Profile Photo
└── README.md                    # Documentation
```

---

## ⚙️ Local Development Setup

To run this repository locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmadshaadzaki/ahmadshaadzaki.github.io.git
   cd ahmadshaadzaki.github.io
   ```
2. Start any static web server (e.g. Python HTTP server or Node `serve`):
   ```bash
   python -m http.server 8080
   ```
3. Open `http://localhost:8080` in your web browser.

---

## 👤 Contact & Profile

- **Name**: Ahmad Shaad Zaki
- **Role**: System Administrator & IAM Specialist
- **Location**: Aligarh, Uttar Pradesh (Open to Relocation Anywhere in India)
- **LinkedIn**: [linkedin.com/in/ahmadshaadzaki](https://linkedin.com/in/ahmadshaadzaki)
- **Email**: `ahmadalig20@gmail.com`
- **Phone**: `+91 82187 71108`

---

&copy; 2026 Ahmad Shaad Zaki. All Rights Reserved.
