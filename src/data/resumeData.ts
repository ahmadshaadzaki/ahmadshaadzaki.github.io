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
  skills: { name: string; level: number; tag?: string }[];
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
    subheadline: "Aspiring Identity & Access Management (IAM) Specialist",
    location: "Aligarh, Uttar Pradesh (Open to Relocation across India)",
    email: "ahmadalig20@gmail.com",
    phone: "+91 82187 71108",
    linkedin: "https://linkedin.com/in/ahmadshaadzaki",
    github: "https://github.com/ahmadshaadzaki",
    bio: "B.Tech (CSE) graduate with hands-on lab experience in Windows Server 2022/2025, Active Directory, PowerShell scripting, and networking fundamentals. Seeking entry-level Service Desk Associate, IT Helpdesk Engineer, or L1 Support Engineer roles with a focus on long-term specialization in Identity & Access Management (IAM).",
    stats: [
      { label: "Hands-on Lab Hours", value: "500+" },
      { label: "OS Environments", value: "Win Server / Linux" },
      { label: "Certification", value: "SC-900 (In Progress)" },
      { label: "Ticket Resolution", value: "Tier 1 / L1 Prepared" },
    ]
  },

  experiences: [
    {
      id: "exp-1",
      role: "Sales Trainee (US IT Staffing / Bench Sales)",
      company: "SoftNice India Pvt Ltd",
      period: "Jan 2022 – May 2022",
      type: "work",
      summary: "Client coordination and candidate placement management in high-velocity US IT staffing environment.",
      highlights: [
        "Coordinated directly with US-based enterprise clients on candidate technical requirements.",
        "Managed outbound client communications, candidate sourcing, and preliminary technical alignment.",
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
      summary: "Full enterprise simulation environment built on VMware and VirtualBox featuring Windows Server 2022/2025 and Ubuntu Linux.",
      highlights: [
        "Deployed Active Directory Domain Services (AD DS) on Windows Server 2022/2025.",
        "Configured Organizational Units (OUs), Group Policy Objects (GPOs), and managed user/computer objects.",
        "Practiced PowerShell scripting for automated user provisioning and repetitive admin task workflows.",
        "Utilized Ubuntu Linux daily for shell commands, SSH remote administration, and APT package management."
      ],
      technologies: ["Windows Server 2022/2025", "Active Directory", "PowerShell", "VMware", "Ubuntu Linux", "GPO"],
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
        "Studied ITIL Foundation v4 concepts for ITSM and ServiceNow ticket triage practices."
      ],
      technologies: ["IAM Basics", "JML Lifecycle", "ServiceNow", "Microsoft 365 Admin", "RBAC", "SC-900"],
      metrics: "100% alignment with standard Tier-1 ticket triage & access control security protocols."
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "proj-1",
      title: "Multi-OS Virtual Enterprise Domain",
      subtitle: "Full AD DS & Virtual Server Environment",
      period: "2026",
      problemSolved: "Simulated realistic corporate IT helpdesk and server administration scenarios without expensive physical infrastructure.",
      techStack: ["Windows Server 2022/2025", "VMware Workstation", "Active Directory DS", "GPO", "Ubuntu Linux"],
      quantifiableResult: "Built a fully functioning domain environment running 3 concurrent virtual nodes with full DNS/DHCP routing.",
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
        "Added log output generation for admin auditing."
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
        { name: "Active Directory DS (OUs, GPOs, Objects)", level: 90, tag: "Expert Lab" },
        { name: "Windows Server 2022 / 2025", level: 85, tag: "Daily Use" },
        { name: "Windows 10 / 11 Desktop OS", level: 95, tag: "Advanced" },
        { name: "Ubuntu Linux (CLI, SSH, APT)", level: 75, tag: "Hands-on" },
      ]
    },
    {
      category: "Service Desk & ITSM Support",
      description: "Tier 1 / L1 troubleshooting, ticket triage, and end-user support",
      skills: [
        { name: "Ticket Triage & Escalation (L1 / Tier 1)", level: 90, tag: "Core Capability" },
        { name: "ServiceNow Working Knowledge", level: 80, tag: "ITSM Tool" },
        { name: "ITIL v4 Framework Concepts", level: 80, tag: "In Progress" },
        { name: "Hardware / Software Issue Diagnosis", level: 88, tag: "Troubleshooting" },
      ]
    },
    {
      category: "Identity & Access Management (IAM)",
      description: "User lifecycle, RBAC security, and access control fundamentals",
      skills: [
        { name: "JML (Joiner-Mover-Leaver) Lifecycle", level: 85, tag: "IAM Core" },
        { name: "RBAC & Principle of Least Privilege", level: 85, tag: "Security" },
        { name: "Authentication / Authorization Basics", level: 80, tag: "SC-900 Prep" },
        { name: "SSO & Multi-Factor Auth (MFA) Concepts", level: 78, tag: "Conceptual" },
      ]
    },
    {
      category: "Cloud, Scripting & Utilities",
      description: "Automation tools, cloud admin basics, and hypervisors",
      skills: [
        { name: "PowerShell Scripting (AD Automation)", level: 75, tag: "Actively Learning" },
        { name: "Microsoft 365 Admin (Exchange/Teams)", level: 75, tag: "Self-Study" },
        { name: "VMware & VirtualBox Hypervisors", level: 90, tag: "Lab Standard" },
        { name: "Networking (TCP/IP, DNS, DHCP, Subnetting)", level: 82, tag: "Foundational" },
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
