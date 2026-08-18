/* ==========================================
   PORTFOLIO DATA - AHMAD SHAAD ZAKI
   ========================================== */

const PORTFOLIO_DATA = {
  profile: {
    name: "Ahmad Shaad Zaki",
    title: "B.Tech CSE Graduate | AWS CloudOps & Infrastructure Specialist",
    subTitle: "AWS Cloud Operations & Infrastructure Management | Governance & Monitoring",
    location: "Aligarh, Uttar Pradesh, India",
    email: "ahmadalig20@gmail.com",
    phone: "+91 82187 71108",
    linkedin: "https://linkedin.com/in/ahmadshaadzaki",
    github: "https://github.com/ahmadshaadzaki",
    instagram: "https://instagram.com/iahmadshaad",
    web3FormsKey: "", // Optional free Web3Forms access key
    resumePdf: "",
    photoImg: "My photo.jpeg",
    degreeImg: "BTech_Degree_DigiLocker.png",
    status: "Targeting AWS Certified CloudOps Engineer – Associate Certification",
    summary: "B.Tech (CSE) graduate from AKTU (First Division) specializing in the AWS Ops/Infra track. Focused on AWS Cloud Infrastructure Management, IAM Security Policies, CloudWatch Operations, Auto Scaling, Systems Manager, VPC Networking, and Cloud Governance — operational cloud execution without heavy software programming or complex math."
  },

  executionPlan: [
    {
      phase: "Phase 1: AWS Cloud Operations Core Foundations",
      status: "Active Preparation",
      badge: "AWS Infrastructure",
      icon: "fa-brands fa-aws",
      desc: "Mastering AWS core compute, storage, networking, and security governance primitives.",
      items: [
        "AWS IAM: Least-privilege role policies, MFA enforcement, cross-account access control.",
        "Amazon EC2 & VPC: Elastic Cloud Compute instance management, Security Groups, NACLs, Subnet routing.",
        "Amazon S3: Storage bucket policies, lifecycle rules, versioning, and server-side encryption.",
        "DNS & Traffic: Amazon Route 53 domain management and Elastic Load Balancing (ELB)."
      ]
    },
    {
      phase: "Phase 2: Cloud Operations, Monitoring & Systems Management",
      status: "Core Competency Focus",
      badge: "CloudOps & Administration",
      icon: "fa-solid fa-chart-line",
      desc: "Managing system health, operational monitoring, automated scaling, and patching across AWS environments.",
      items: [
        "Amazon CloudWatch: Operational metrics collection, alarm notifications, custom log groups.",
        "AWS Systems Manager (SSM): Run Command, Parameter Store, Patch Manager, Session Manager.",
        "AWS CloudTrail: Audit logging, compliance tracking, and operational security monitoring.",
        "Auto Scaling & Resilience: High-availability topology design and dynamic scaling policies."
      ]
    },
    {
      phase: "Phase 3: Infrastructure as Code & Operational Automation",
      status: "Next Execution Milestone",
      badge: "No-Dev Infra Automation",
      icon: "fa-solid fa-gears",
      desc: "Declarative infrastructure provisioning and CLI automation scripts without heavy software programming.",
      items: [
        "AWS CloudFormation & AWS CLI: Declarative YAML/JSON template deployment and CLI management.",
        "Terraform Basics: Infrastructure provisioning using HashiCorp HCL syntax.",
        "Bash & PowerShell Scripting: Operational task automation, batch log cleanup, and maintenance scripts."
      ]
    },
    {
      phase: "Phase 4: Target Certification & Industry Validation",
      status: "Target Milestone",
      badge: "AWS Certification",
      icon: "fa-solid fa-certificate",
      desc: "Formal industry certification validating hands-on cloud operations mastery.",
      items: [
        "AWS Certified CloudOps Engineer – Associate (renamed from AWS SysOps Administrator – Associate).",
        "AWS Certified Solutions Architect – Associate (Infrastructure Architecture).",
        "Continuous Cloud Governance, FinOps Cost Optimization, and Incident Response Playbooks."
      ]
    }
  ],

  skills: [
    {
      category: "foundations",
      name: "1. Linux + Networking Foundations",
      icon: "fa-solid fa-terminal",
      level: "Core Foundation",
      desc: "Linux shell administration, SSH key management, system monitoring, TCP/IP networking protocols, DNS zone resolution, DHCP IP allocation, and IPv4 CIDR subnetting.",
      tags: ["Linux Shell", "SSH", "TCP/IP", "DNS", "DHCP", "Subnetting (CIDR)", "OSI Model", "Bash Scripting"]
    },
    {
      category: "core-aws",
      name: "2. Core AWS Services",
      icon: "fa-brands fa-aws",
      level: "AWS Cloud Primitives",
      desc: "Core cloud compute, storage, security, and networking primitives. IAM least-privilege policies, S3 bucket lifecycle rules, EC2 AMI management, Route 53, and VPC subnet isolation.",
      tags: ["Amazon EC2", "Amazon S3", "AWS IAM", "Amazon VPC", "Route 53", "Elastic Load Balancing (ELB)"]
    },
    {
      category: "sysops",
      name: "3. SysOps-Specific Depth",
      icon: "fa-solid fa-chart-line",
      level: "CloudOps & Administration",
      desc: "Operational monitoring, metric alarms, automated patching via SSM Patch Manager, session management without open SSH ports, CloudTrail audit logging, and dynamic Auto Scaling policies.",
      tags: ["Amazon CloudWatch", "AWS Systems Manager (SSM)", "AWS CloudTrail", "EC2 Auto Scaling", "AWS CloudFormation", "FinOps Cost Optimization"]
    }
  ],
  projects: [],

  experience: [
    {
      role: "Sales Trainee (US IT Staffing / Bench Sales)",
      company: "SoftNice India Pvt Ltd",
      duration: "Jan 2022 – May 2022",
      location: "India (Client-facing)",
      summary: "Technical client communication, candidate sourcing, CRM management, and technical talent placement coordination.",
      points: [
        "Coordinated directly with US-based clients on technical talent requirements, skill matrix evaluation, and job specifications.",
        "Managed outbound technical communication, candidate sourcing, and preliminary technical interview screening.",
        "Maintained CRM/database integrity and supported end-to-end recruitment lifecycle coordination."
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
      institution: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)",
      year: "2021 – 2025",
      score: "First Division (CGPA: 7.1)",
      verified: true
    },
    {
      degree: "Diploma in Computer Science & Engineering",
      institution: "Board of Technical Education Uttar Pradesh (UPBTE)",
      year: "2018 – 2021",
      score: "First Division (71%)",
      verified: true
    }
  ],

  themes: [
    {
      id: "aws",
      name: "AWS Dark Mode",
      tagline: "Deep Charcoal Grey (#19222d) & Vivid AWS Orange (#ff9900)",
      accent: "#ff9900",
      bg: "#19222d"
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

if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
