import { resumeData } from '@/data/resumeData';

export default function PrintResumeView() {
  return (
    <div className="print-only text-black font-sans leading-tight">
      
      {/* Header */}
      <header className="text-center border-b pb-2 mb-3 border-gray-400">
        <h1 className="text-2xl font-serif font-bold tracking-wide uppercase">
          {resumeData.personalInfo.name}
        </h1>
        <p className="text-xs text-gray-800 mt-1">
          {resumeData.personalInfo.location} | {resumeData.personalInfo.email} | {resumeData.personalInfo.phone} | linkedin.com/in/ahmadshaadzaki
        </p>
      </header>

      {/* Career Objective */}
      <section className="mb-3">
        <h2 className="text-xs font-bold font-serif uppercase tracking-wider border-b border-gray-400 pb-0.5 mb-1 text-gray-900">
          CAREER OBJECTIVE
        </h2>
        <p className="text-[10pt] text-gray-900 text-justify leading-snug">
          B.Tech (CSE) graduate with hands-on lab experience in Windows Server, Active Directory, PowerShell scripting, and networking fundamentals, seeking an entry-level Service Desk Associate / IT Helpdesk Engineer / Technical Support Executive / L1 Support Engineer role. Comfortable with end-user troubleshooting, ticket resolution, and Windows/Microsoft 365 environment support, backed by prior client-facing coordination experience. Building toward a long-term specialization in Identity & Access Management (IAM) — with foundational knowledge of authentication, authorization, RBAC, and the JML (Joiner-Mover-Leaver) lifecycle — aiming for an IAM Analyst role after gaining hands-on IT support experience. Preparing for the Microsoft SC-900 certification. Open to relocation anywhere in India.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-3">
        <h2 className="text-xs font-bold font-serif uppercase tracking-wider border-b border-gray-400 pb-0.5 mb-1 text-gray-900">
          TECHNICAL SKILLS
        </h2>
        <div className="text-[9.5pt] space-y-1">
          <p><strong>Operating Systems:</strong> Windows 10, Windows 11, Windows Server 2022, Windows Server 2025, Linux (Ubuntu — basics)</p>
          <p><strong>Service Desk / IT Support:</strong> Ticket triage & resolution (Tier 1/L1), end-user troubleshooting, hardware/software issue diagnosis, remote support fundamentals, IT asset & access basics</p>
          <p><strong>Networking:</strong> TCP/IP, DNS, DHCP, Subnetting, OSI Model</p>
          <p><strong>Directory Services:</strong> Active Directory Domain Services — OU creation, GPO configuration, user/computer object management, group-based access control</p>
          <p><strong>Microsoft 365 Administration:</strong> User & license management basics, Exchange Online and Teams administration fundamentals (conceptual, self-study)</p>
          <p><strong>Scripting:</strong> PowerShell (basic scripting for AD user provisioning and admin task automation — actively learning)</p>
          <p><strong>Identity & Access (IAM):</strong> IAM concepts (RBAC, authentication/authorization, access lifecycle), JML Lifecycle, Least Privilege Principle, SSO & MFA (conceptual)</p>
          <p><strong>ITSM / Ticketing:</strong> ServiceNow (working knowledge); ITIL Foundation concepts (in progress)</p>
          <p><strong>Linux Administration:</strong> Ubuntu shell basics, SSH, package management (apt) — daily hands-on use</p>
          <p><strong>Tools:</strong> VMware, VirtualBox, Windows Server 2022/2025, Google Workspace, Microsoft Office Suite, Git/GitHub (learning)</p>
          <p><strong>Soft Skills:</strong> Client Communication, Documentation, Problem-Solving, CRM/Database Coordination</p>
        </div>
      </section>

      {/* Projects / Hands-on Lab Work */}
      <section className="mb-3">
        <h2 className="text-xs font-bold font-serif uppercase tracking-wider border-b border-gray-400 pb-0.5 mb-1 text-gray-900">
          PROJECTS / HANDS-ON LAB WORK
        </h2>
        <div className="text-[9.5pt] space-y-1">
          <div className="flex justify-between font-bold">
            <span>Home Lab Infrastructure — Multi-OS Virtual Environment</span>
            <span>Ongoing, 2026</span>
          </div>
          <ul className="list-disc list-inside space-y-0.5 pl-1">
            <li>Built and maintain a multi-OS virtual lab using VMware and VirtualBox, running Windows Server 2022, Windows Server 2025, and Ubuntu.</li>
            <li>Deployed Windows Server 2022/2025 and configured Active Directory Domain Services: created Organizational Units (OUs), configured Group Policy Objects (GPOs), managed user/computer objects, and set up group-based access control.</li>
            <li>Practicing PowerShell scripting for AD user provisioning and repetitive admin task automation.</li>
            <li>Daily hands-on use of Ubuntu for shell fundamentals, SSH, and package management (apt).</li>
            <li>Self-studying Microsoft 365 administration basics — user and license management, Exchange Online and Teams admin concepts.</li>
          </ul>
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-3">
        <h2 className="text-xs font-bold font-serif uppercase tracking-wider border-b border-gray-400 pb-0.5 mb-1 text-gray-900">
          WORK EXPERIENCE
        </h2>
        <div className="text-[9.5pt] space-y-1">
          <div className="flex justify-between font-bold">
            <span>Sales Trainee — SoftNice India Pvt Ltd (US IT Staffing / Bench Sales)</span>
            <span>Jan – May 2022</span>
          </div>
          <ul className="list-disc list-inside space-y-0.5 pl-1">
            <li>Coordinated with US-based clients on candidate requirements; managed outbound calling and candidate sourcing.</li>
            <li>Maintained CRM/database records and supported end-to-end candidate placement coordination.</li>
          </ul>
        </div>
      </section>

      {/* Learning & Self-Study */}
      <section className="mb-3">
        <h2 className="text-xs font-bold font-serif uppercase tracking-wider border-b border-gray-400 pb-0.5 mb-1 text-gray-900">
          LEARNING & SELF-STUDY
        </h2>
        <div className="text-[9.5pt] space-y-1">
          <div className="flex justify-between font-bold">
            <span>Windows Server & Active Directory Lab</span>
            <span>In Progress, 2026</span>
          </div>
          <ul className="list-disc list-inside space-y-0.5 pl-1">
            <li>Set up Windows Server 2022 and Windows Server 2025 in a virtual lab environment (VMware/VirtualBox) and configured Active Directory Domain Services and Organizational Units.</li>
            <li>Studying core IAM concepts (authentication, authorization, RBAC, access lifecycle) while preparing for the SC-900 certification.</li>
            <li>Building PowerShell scripting skills daily for AD administration tasks.</li>
            <li>Learning ITIL Foundation concepts and Microsoft 365 administration basics to strengthen IT service management fundamentals for service desk / support roles.</li>
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-3">
        <h2 className="text-xs font-bold font-serif uppercase tracking-wider border-b border-gray-400 pb-0.5 mb-1 text-gray-900">
          CERTIFICATIONS
        </h2>
        <p className="text-[9.5pt]">
          <strong>Microsoft SC-900:</strong> Security, Compliance, and Identity Fundamentals — In Progress
        </p>
      </section>

      {/* Education */}
      <section className="mb-2">
        <h2 className="text-xs font-bold font-serif uppercase tracking-wider border-b border-gray-400 pb-0.5 mb-1 text-gray-900">
          EDUCATION
        </h2>
        <div className="text-[9.5pt] space-y-1">
          <div className="flex justify-between">
            <span>Bachelor of Technology, Computer Science & Engineering — AKTU — CGPA: 7.1</span>
            <span>2025</span>
          </div>
          <div className="flex justify-between">
            <span>Diploma, Computer Science & Engineering — UPBTE — 71%</span>
            <span>2021</span>
          </div>
        </div>
      </section>

    </div>
  );
}
