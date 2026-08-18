/* ==========================================
   PORTFOLIO DATA - AHMAD SHAAD ZAKI
   ========================================== */

const PORTFOLIO_DATA = {
  profile: {
    name: "Ahmad Shaad Zaki",
    title: "Computer Science & Engineering Graduate",
    location: "Aligarh, Uttar Pradesh, India",
    email: "ahmadalig20@gmail.com",
    phone: "+91 82187 71108",
    linkedin: "https://linkedin.com/in/ahmadshaadzaki",
    github: "https://github.com/ahmadshaadzaki",
    instagram: "https://instagram.com/iahmadshaad",
    web3FormsKey: "YOUR_WEB3FORMS_ACCESS_KEY", // Replace with free key from https://web3forms.com
    resumePdf: "Ahmad_Shaad_Zaki_Resume.pdf",
    photoImg: "My photo.jpeg",
    degreeImg: "BTech_Degree_DigiLocker.png",
    status: "B.Tech CSE Graduate — First Division (AKTU 2025)",
    summary: "B.Tech (CSE) graduate from Dr. A.P.J. Abdul Kalam Technical University with First Division honors. Possesses hands-on experience in Windows Server 2022, Active Directory, PowerShell automation scripting, networking fundamentals, and multi-OS virtual environments."
  },

  skills: [
    {
      category: "os",
      name: "Operating Systems & Administration",
      icon: "fa-solid fa-server",
      level: "Daily Hands-On",
      desc: "Windows 10/11, Windows Server 2022, Ubuntu Linux shell fundamentals, SSH configuration, package management (apt), CentOS & Kali Linux basics.",
      tags: ["Windows Server 2022", "Ubuntu", "CentOS", "Kali Linux", "SSH", "Bash"]
    },
    {
      category: "directory",
      name: "Active Directory Domain Services (AD DS)",
      icon: "fa-solid fa-sitemap",
      level: "Advanced Hands-On",
      desc: "OU structure design, Group Policy Objects (GPOs), User/Computer object management, Group-Based Access Control (GBAC), and domain join procedures.",
      tags: ["AD DS", "GPO", "OUs", "GBAC", "Windows Server 2022"]
    },
    {
      category: "scripting",
      name: "PowerShell Scripting & Automation",
      icon: "fa-solid fa-code",
      level: "Applied Hands-On",
      desc: "Automating user provisioning, bulk account creation scripts, group membership management, and administrative task automation.",
      tags: ["PowerShell", "AD Cmdlets", "Automation", "CLI Administration"]
    },
    {
      category: "networking",
      name: "Networking Fundamentals",
      icon: "fa-solid fa-network-wired",
      level: "Core Competency",
      desc: "TCP/IP protocol suite, DNS record resolution, DHCP IP allocation, IPv4 Subnetting, and OSI Model 7-layer architecture.",
      tags: ["TCP/IP", "DNS", "DHCP", "Subnetting", "OSI Model"]
    },
    {
      category: "tools",
      name: "Virtualization, ITSM & Tools",
      icon: "fa-solid fa-layer-group",
      level: "Working Knowledge",
      desc: "VMware Workstation, Oracle VirtualBox multi-OS setup, ServiceNow ticketing workflows, ITIL Foundation concepts, Google Workspace, Git/GitHub.",
      tags: ["VMware", "VirtualBox", "ServiceNow", "ITIL", "Google Workspace", "Git/GitHub"]
    }
  ],

  projects: [
    {
      id: "home-lab-infra",
      title: "Multi-OS Virtual Infrastructure & Domain Lab",
      timeline: "2026",
      category: "Systems & Virtualization",
      status: "Active Virtual Lab",
      desc: "Architected and maintain a multi-OS virtual lab using VMware Workstation and Oracle VirtualBox to simulate an enterprise domain infrastructure.",
      highlights: [
        "Deployed Windows Server 2022 and configured Active Directory Domain Services from scratch.",
        "Created Organizational Units (OUs) for department-wise hierarchy and configured granular Group Policy Objects (GPOs).",
        "Configured security groups and managed access control permissions following Least Privilege principles.",
        "Integrated Linux (Ubuntu, CentOS, Kali Linux) VMs into the network for cross-platform system testing."
      ],
      terminalDemo: {
        title: "User-Provisioning-Automation.ps1",
        command: "Import-Csv .\\NewUsers.csv | ForEach-Object { New-ADUser -Name $_.Name -UserPrincipalName $_.UPN -Path $_.OU -Enabled $true }",
        output: "SUCCESS: Provisioned 25 Domain Users in OU=Engineering,DC=lab,DC=local with Group Policies Enforced."
      },
      tags: ["Windows Server 2022", "Active Directory", "VMware", "PowerShell", "Group Policy"]
    },
    {
      id: "access-control-lab",
      title: "Directory User Provisioning & Group Policy Automation Lab",
      timeline: "2026",
      category: "Automation & Security",
      status: "Lab Verified",
      desc: "Designed access control management policies to simulate structured user lifecycle transitions within an enterprise directory.",
      highlights: [
        "Implemented Group-Based Access Control mapping department roles to specific security groups.",
        "Scripted user onboarding credentials creation with forced password reset policies.",
        "Simulated user offboarding procedures ensuring instant access revocation and computer account disablement."
      ],
      terminalDemo: {
        title: "User-Access-Management.ps1",
        command: "Disable-ADAccount -Identity 'jdoe' | Revoke-ADGroupMembership -All",
        output: "AUDIT: User 'jdoe' disabled. Group memberships cleared."
      },
      tags: ["Active Directory", "PowerShell", "Access Control", "Group Policy", "Automation"]
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
        "Managed outbound communication, candidate sourcing, and screening for technical roles.",
        "Maintained CRM/database records and supported end-to-end placement workflow coordination."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
      institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
      year: "Graduated 2025",
      score: "First Division (CGPA: 7.1)"
    },
    {
      degree: "Diploma - Computer Science & Engineering",
      institution: "Board of Technical Education Uttar Pradesh (UPBTE)",
      year: "Graduated 2021",
      score: "First Division (Score: 71%)"
    }
  ],

  themes: [
    {
      id: "cyber",
      name: "Cyber Security Slate",
      tagline: "Slate & Neon Azure Theme",
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
