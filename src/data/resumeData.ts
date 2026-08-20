export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  type: 'work' | 'lab' | 'project';
  summary: string;
  highlights: string[];
  technologies: string[];
  metrics?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; proficiency: 'Expert / Daily Use' | 'Advanced Lab' | 'Core Skill' | 'Actively Learning'; tag: string }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  problemSolved: string;
  techStack: string[];
  quantifiableResult: string;
  highlights: string[];
  link?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  score: string;
  year: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  status: string;
  year: string;
}

export const resumeData = {
  personalInfo: {
    name: "AHMAD SHAAD ZAKI",
    headline: "Service Desk Associate & IT Support Engineer",
    subheadline: "Specializing in Active Directory DS, Windows Server & IAM Security Fundamentals",
    location: "Aligarh, Uttar Pradesh (Open to Relocation across India)",
    email: "ahmadalig20@gmail.com",
    phone: "+91 82187 71108",
    linkedin: "https://linkedin.com/in/ahmadshaadzaki",
    github: "https://github.com/ahmadshaadzaki",
    instagram: "https://instagram.com/ahmadshaadzaki", // Instagram profile & direct DM link
    bio: "B.Tech (CSE) graduate with hands-on lab experience in Windows Server 2022/2025, Active Directory, PowerShell scripting, and networking fundamentals. Seeking entry-level Service Desk Associate, IT Helpdesk Engineer, or L1 Support Engineer roles with long-term specialization in Identity & Access Management (IAM).",
    stats: [
      { label: "Virtual Lab Hours", value: "500+" },
      { label: "OS Environments", value: "Win Server & Ubuntu" },
      { label: "Certification", value: "SC-900 (In Progress)" },
      { label: "Support Readiness", value: "Tier 1 / L1 Prepared" },
    ]
  },

  experiences: [
    {
      id: "exp-1",
      role: "Sales Trainee (US IT Staffing / Bench Sales)",
      company: "SoftNice India Pvt Ltd",
      period: "Jan 2022 – May 2022",
      type: "work",
      summary: "Client-facing coordination and candidate pipeline management in high-velocity US IT staffing environment.",
      highlights: [
        "Coordinated directly with US-based enterprise clients on candidate technical requirements and job descriptions.",
        "Managed outbound client communications, candidate sourcing, and preliminary technical qualification.",
        "Maintained CRM and internal database records to support end-to-end candidate placement workflow."
      ],
      technologies: ["CRM Tools", "Database Coordination", "Client Communication", "US IT Staffing"],
      metrics: "Supported multi-client placement pipelines with 100% data tracking accuracy."
    },
    {
      id: "exp-2",
      role: "Multi-OS Virtual Lab & Domain Infrastructure",
      company: "Hands-on Home Lab",
      period: "Ongoing (2026)",
      type: "lab",
      summary: "Enterprise simulation environment built on VMware and VirtualBox featuring Windows Server 2022/2025 and Ubuntu Linux.",
      highlights: [
        "Deployed Active Directory Domain Services (AD DS) on Windows Server 2022/2025.",
        "Configured Organizational Units (OUs), Group Policy Objects (GPOs), user/computer objects, and RBAC.",
        "Practiced PowerShell scripting for automated user provisioning and administrative task automation.",
        "Utilized Ubuntu Linux daily for shell commands, SSH remote administration, and APT package management."
      ],
      technologies: ["Windows Server 2022/2025", "Active Directory DS", "PowerShell", "VMware", "Ubuntu Linux", "GPOs"],
      metrics: "Reduced manual AD user onboarding setup time by ~40% via PowerShell automation."
    },
    {
      id: "exp-3",
      role: "Identity & Access Management (IAM) Lifecycle Lab",
      company: "Self-Study & Practical Lab",
      period: "In Progress (2026)",
      type: "lab",
      summary: "Simulated Joiner-Mover-Leaver (JML) workflows, RBAC access control, and SC-900 security fundamentals.",
      highlights: [
        "Enforced Least Privilege principles and group-based access control in Windows AD DS.",
        "Studied Microsoft 365 Admin Center basics: user/license management, Exchange Online & Teams admin concepts.",
        "Studied ITIL Foundation v4 concepts for ITSM service desk and ServiceNow ticket triage practices."
      ],
      technologies: ["IAM Concepts", "JML Lifecycle", "ServiceNow", "Microsoft 365 Admin", "RBAC", "SC-900"],
      metrics: "100% alignment with standard Tier-1 ticket triage & access control security protocols."
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "proj-1",
      title: "Multi-OS Virtual Enterprise Domain",
      subtitle: "Full AD DS & Virtual Server Infrastructure",
      period: "2026",
      problemSolved: "Simulated realistic corporate IT helpdesk and server administration scenarios without physical server costs.",
      techStack: ["Windows Server 2022/2025", "VMware Workstation", "Active Directory DS", "GPO", "Ubuntu Linux"],
      quantifiableResult: "Built a functioning domain environment running 3 concurrent virtual nodes with full DNS/DHCP routing.",
      highlights: [
        "Configured domain controllers, created domain users and computer objects.",
        "Set up GPOs for password security policies, drive mapping, and desktop restriction rules.",
        "Tested network connectivity using TCP/IP tools (ping, nslookup, tracert, ipconfig)."
      ]
    },
    {
      id: "proj-2",
      title: "PowerShell Active Directory User Automation",
      subtitle: "Automated User Provisioning Script Suite",
      period: "2026",
      problemSolved: "Eliminated error-prone manual user creation steps in Active Directory during simulated Joiner (onboarding) workflows.",
      techStack: ["PowerShell", "Active Directory Module", "CSV Processing", "Windows Server"],
      quantifiableResult: "Cut user account creation time by 40% and standardized OU assignment.",
      highlights: [
        "Created PowerShell scripts to parse user data from CSV files and auto-populate AD attributes.",
        "Automated random temporary password generation and forced password change on first logon.",
        "Added log output generation for administrative auditing."
      ]
    },
    {
      id: "proj-3",
      title: "ITSM Service Desk & ITIL Triage Workflow",
      subtitle: "ServiceNow & Ticket Lifecycle Simulation",
      period: "2026",
      problemSolved: "Mastered Tier 1 ticket categorization, prioritization, escalation paths, and remote end-user troubleshooting.",
      techStack: ["ServiceNow", "ITIL v4 Framework", "Remote Desktop Support", "Troubleshooting"],
      quantifiableResult: "Achieved zero-delay ticket escalation modeling aligned with ITIL L1 support SLAs.",
      highlights: [
        "Practiced logging, assigning priority, and resolving hardware/software access issues.",
        "Built standard operating procedure (SOP) documentation for common password resets and network diagnostics.",
        "Self-studied Microsoft 365 administration for Cloud Identity troubleshooting."
      ]
    }
  ] as ProjectItem[],

  skillCategories: [
    {
      category: "Operating Systems & Directory Services",
      description: "Core Windows Server and Linux administration capabilities",
      skills: [
        { name: "Active Directory DS (OUs, GPOs, Object Mgmt)", proficiency: "Expert / Daily Use", tag: "Enterprise Lab" },
        { name: "Windows Server 2022 / 2025 Deployment", proficiency: "Advanced Lab", tag: "Daily Hands-on" },
        { name: "Windows 10 / 11 Desktop Troubleshooting", proficiency: "Expert / Daily Use", tag: "End-User Support" },
        { name: "Ubuntu Linux (Shell, SSH, APT)", proficiency: "Core Skill", tag: "Daily Use" },
      ]
    },
    {
      category: "Service Desk & ITSM Support",
      description: "Tier 1 / L1 troubleshooting, ticket triage, and end-user support",
      skills: [
        { name: "Ticket Triage & Escalation (L1 / Tier 1)", proficiency: "Expert / Daily Use", tag: "Core Capability" },
        { name: "ServiceNow Ticket Management", proficiency: "Core Skill", tag: "ITSM Tool" },
        { name: "ITIL v4 Framework Concepts", proficiency: "Actively Learning", tag: "In Progress" },
        { name: "Hardware & Software Diagnostics", proficiency: "Expert / Daily Use", tag: "Troubleshooting" },
      ]
    },
    {
      category: "Identity & Access Management (IAM)",
      description: "User lifecycle, RBAC security, and access control fundamentals",
      skills: [
        { name: "JML (Joiner-Mover-Leaver) Lifecycle", proficiency: "Advanced Lab", tag: "IAM Core" },
        { name: "RBAC & Principle of Least Privilege", proficiency: "Advanced Lab", tag: "Security Policy" },
        { name: "Authentication & Authorization Basics", proficiency: "Core Skill", tag: "SC-900 Prep" },
        { name: "SSO & Multi-Factor Auth (MFA) Concepts", proficiency: "Core Skill", tag: "Conceptual" },
      ]
    },
    {
      category: "Cloud, Scripting & Virtualization",
      description: "Automation tools, hypervisors, and cloud admin basics",
      skills: [
        { name: "PowerShell Scripting (AD Automation)", proficiency: "Actively Learning", tag: "Daily Learning" },
        { name: "Microsoft 365 Admin (Exchange/Teams)", proficiency: "Core Skill", tag: "Self-Study" },
        { name: "VMware Workstation & VirtualBox", proficiency: "Expert / Daily Use", tag: "Lab Standard" },
        { name: "Networking (TCP/IP, DNS, DHCP, Subnetting)", proficiency: "Core Skill", tag: "Foundational" },
      ]
    }
  ] as SkillCategory[],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
      institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
      score: "CGPA: 7.1",
      year: "Graduated 2025"
    },
    {
      degree: "Diploma in Computer Science & Engineering",
      institution: "Board of Technical Education Uttar Pradesh (UPBTE)",
      score: "71%",
      year: "Graduated 2021"
    }
  ] as EducationItem[],

  certifications: [
    {
      name: "Microsoft SC-900: Security, Compliance, and Identity Fundamentals",
      issuer: "Microsoft",
      status: "In Progress (Preparing)",
      year: "2026"
    }
  ] as CertificationItem[],

  softSkills: [
    "Client Communication",
    "Technical Documentation",
    "Analytical Problem Solving",
    "CRM & Database Coordination",
    "Cross-functional Team Collaboration",
    "Adaptability & Openness to Relocation"
  ]
};
