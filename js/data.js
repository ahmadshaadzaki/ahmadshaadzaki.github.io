/* ==========================================
   PORTFOLIO DATA - AHMAD SHAAD ZAKI
   ========================================== */

const PORTFOLIO_DATA = {
  profile: {
    name: "Ahmad Shaad Zaki",
    title: "System Administrator & IAM Specialist",
    location: "Aligarh, Uttar Pradesh, India",
    relocation: "Open to Relocation Anywhere in India",
    email: "ahmadalig20@gmail.com",
    phone: "+91 82187 71108",
    linkedin: "https://linkedin.com/in/ahmadshaadzaki",
    github: "https://github.com/ahmadshaadzaki",
    web3FormsKey: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with free key from https://web3forms.com
    resumePdf: "Ahmad_Shaad_Zaki_Resume.pdf",
    photoImg: "My photo.jpeg",
    status: "Actively Seeking Entry-Level SysAdmin / IT Support / IAM Roles",
    summary: "B.Tech (CSE) graduate with hands-on lab experience in Windows Server 2022, Active Directory, PowerShell scripting, and networking fundamentals. Specializing in Identity & Access Management (IAM), RBAC, JML Lifecycle, and Least Privilege principles. Preparing for Microsoft SC-900 certification."
  },

  skills: [
    {
      category: "directory",
      name: "Active Directory Domain Services (AD DS)",
      icon: "fa-solid font-awesome fa-sitemap",
      level: "Advanced Hands-On",
      desc: "OU structure design, GPO deployment, User/Computer object management, Group-Based Access Control (GBAC), and domain join procedures.",
      tags: ["AD DS", "GPO", "OUs", "GBAC", "Windows Server 2022"]
    },
    {
      category: "iam",
      name: "Identity & Access Management (IAM)",
      icon: "fa-solid fa-user-shield",
      level: "Foundational & Lab Experienced",
      desc: "Role-Based Access Control (RBAC), Joiner-Mover-Leaver (JML) lifecycle, Principle of Least Privilege, SSO & MFA (conceptual).",
      tags: ["RBAC", "JML Lifecycle", "Least Privilege", "MFA", "AuthN/AuthZ"]
    },
    {
      category: "scripting",
      name: "PowerShell Scripting & Automation",
      icon: "fa-solid fa-code",
      level: "Active Learning & Applied",
      desc: "Automating AD user provisioning, bulk user creation scripts, group membership assignments, and repetitive administrative task automation.",
      tags: ["PowerShell", "AD Cmdlets", "Automation", "CLI Administration"]
    },
    {
      category: "os",
      name: "Operating Systems & Linux Admin",
      icon: "fa-solid fa-server",
      level: "Daily Hands-On",
      desc: "Windows Server 2022, Windows 10/11, Ubuntu Linux shell fundamentals, SSH configuration, package management (apt), CentOS & Kali Linux basics.",
      tags: ["Windows Server 2022", "Ubuntu", "CentOS", "Kali Linux", "SSH", "Bash"]
    },
    {
      category: "networking",
      name: "Networking Fundamentals",
      icon: "fa-solid fa-network-wired",
      level: "Core Competency",
      desc: "TCP/IP protocol suite, DNS record resolution, DHCP IP allocation, IPv4 Subnetting, and OSI Model 7-layer architecture troubleshooting.",
      tags: ["TCP/IP", "DNS", "DHCP", "Subnetting", "OSI Model"]
    },
    {
      category: "itsm",
      name: "ITSM, Ticketing & Virtualization",
      icon: "fa-solid fa-layer-group",
      level: "Working Knowledge",
      desc: "ServiceNow ticketing workflows, ITIL Foundation concepts, VMware Workstation, VirtualBox multi-OS setup, Google Workspace administration.",
      tags: ["ServiceNow", "ITIL", "VMware", "VirtualBox", "Google Workspace"]
    }
  ],

  projects: [
    {
      id: "home-lab-infra",
      title: "Home Lab Infrastructure — Multi-OS Virtual Environment",
      timeline: "Ongoing (2026)",
      category: "SysAdmin & Virtualization",
      status: "Active Virtual Lab",
      desc: "Architected and maintain a multi-OS virtual lab using VMware Workstation and Oracle VirtualBox to simulate an enterprise domain infrastructure.",
      highlights: [
        "Deployed Windows Server 2022 and configured Active Directory Domain Services from scratch.",
        "Created Organizational Units (OUs) for department-wise hierarchy and configured granular Group Policy Objects (GPOs).",
        "Configured security groups and managed access control permissions following Least Privilege principle.",
        "Integrated Linux (Ubuntu, CentOS, Kali Linux) VMs into the network for cross-platform system testing."
      ],
      terminalDemo: {
        title: "ActiveDirectory-Provisioning.ps1",
        command: "Import-Csv .\\NewUsers.csv | ForEach-Object { New-ADUser -Name $_.Name -UserPrincipalName $_.UPN -Path $_.OU -Enabled $true }",
        output: "SUCCESS: Provisioned 25 Domain Users in OU=Engineering,DC=lab,DC=local with Group Policies Enforced."
      },
      tags: ["Windows Server 2022", "Active Directory", "VMware", "PowerShell", "Group Policy"]
    },
    {
      id: "iam-rbac-lab",
      title: "IAM RBAC & JML User Lifecycle Governance Lab",
      timeline: "2026",
      category: "Security & IAM",
      status: "Lab Verified",
      desc: "Designed access control governance policies to simulate Joiner-Mover-Leaver (JML) user transitions within an enterprise directory.",
      highlights: [
        "Implemented Role-Based Access Control (RBAC) mapping department roles to specific AD security groups.",
        "Scripted onboarding automated emails and temporary credentials creation with forced password reset at next logon.",
        "Simulated offboarding procedures (Leaver) ensuring instant access revocation and computer account disablement."
      ],
      terminalDemo: {
        title: "Revoke-LeaverAccess.ps1",
        command: "Disable-ADAccount -Identity 'jdoe' | Revoke-ADGroupMembership -All",
        output: "SECURITY AUDIT: User 'jdoe' disabled. Token revoked. Group memberships cleared."
      },
      tags: ["IAM", "RBAC", "JML Lifecycle", "Least Privilege", "SC-900 Concepts"]
    }
  ],

  experience: [
    {
      role: "Sales Trainee (US IT Staffing / Bench Sales)",
      company: "SoftNice India Pvt Ltd",
      duration: "Jan 2022 – May 2022",
      location: "India (Client-facing)",
      summary: "Client communication, candidate sourcing, CRM management, and technical talent placement coordination.",
      points: [
        "Coordinated with US-based clients on technical candidate requirements and job descriptions.",
        "Managed outbound communication, candidate sourcing, and screening for IT system roles.",
        "Maintained CRM/database records and supported end-to-end placement workflow coordination."
      ]
    }
  ],

  certifications: [
    {
      name: "Microsoft SC-900: Security, Compliance, and Identity Fundamentals",
      issuer: "Microsoft",
      status: "In Progress",
      desc: "Focusing on Microsoft Security concepts, Azure AD / Entra ID identity services, threat protection, compliance, and zero trust architecture."
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
      institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
      year: "Graduated 2025",
      score: "CGPA: 7.1"
    },
    {
      degree: "Diploma - Computer Science & Engineering",
      institution: "Board of Technical Education Uttar Pradesh (UPBTE)",
      year: "Graduated 2021",
      score: "Score: 71%"
    }
  ],

  themes: [
    {
      id: "cyber",
      name: "Cyber Security Slate",
      tagline: "Slate & Neon Azure (Recommended for SysAdmin)",
      accent: "#00f2fe",
      bg: "#0a0e17"
    },
    {
      id: "obsidian",
      name: "Obsidian Violet",
      tagline: "Glassmorphic Deep Purple & Violet Glow",
      accent: "#a855f7",
      bg: "#0b0813"
    },
    {
      id: "emerald",
      name: "Emerald Matrix",
      tagline: "Dark Charcoal & Glowing Mint Accent",
      accent: "#10b981",
      bg: "#07120d"
    },
    {
      id: "navy",
      name: "Executive Navy",
      tagline: "Deep Oceanic Navy & Metallic Gold",
      accent: "#eab308",
      bg: "#08101d"
    },
    {
      id: "pristine",
      name: "Pristine Light",
      tagline: "High-Contrast Clean Light Mode",
      accent: "#0284c7",
      bg: "#f8fafc"
    }
  ]
};
