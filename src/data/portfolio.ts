import { assetUrl } from "@/lib/assets";
import inventory from "./projectInventory.json";
import certificateData from "./credentials.json";

/** Professional facts: supplied CV and certificates. Personal story: owner brief. */

export type Accent = "yellow" | "orange" | "pink" | "blue" | "green";

export interface Profile {
  name: string;
  fullName: string;
  firstName: string;
  initials: string;
  headline: string;
  targetRoles: string;
  location: string;
  summary: string;
  email: string;
}

export interface Links {
  /** Social destinations confirmed from PDF link annotations. */
  github?: string;
  linkedin?: string;
  tryhackme?: string;
  /** Phone-free public CV, resolved beneath the deployment base. */
  resume?: string;
}

export interface Project {
  id: string;
  name: string;
  subtitle?: string;
  period: string;
  role?: string;
  domain: string;
  stack: string[];
  summary: string;
  highlights: string[];
  award?: string;
  accent: Accent;
  featured?: boolean;
  github?: string;
  demo?: string;
  category: string;
  status: string;
  result: string;
  image?: string;
  imageAlt?: string;
}

export interface SkillGroup {
  id: string;
  label: string;
  accent: Accent;
  items: string[];
}

export interface Training {
  id: string;
  title: string;
  provider: string;
  hours?: string;
  period: string;
  location: string;
  status: "Completed" | "In progress" | "Course";
  focus: string[];
  description?: string;
  accent: Accent;
  /** Optional certificate image (e.g. /certificates/soc-analyst.jpg). Text fallback is used when absent. */
  image?: string;
  verifyUrl?: string;
}

export interface Achievement {
  id: string;
  placement: string;
  title: string;
  context?: string;
  date: string;
  accent: Accent;
  major: boolean;
  image?: string;
}

export interface Education {
  institution: string;
  short: string;
  degree: string;
  specialization: string;
  period: string;
  location: string;
}

export const profile: Profile = {
  name: "Yousef Elbana",
  fullName: "Yousef Osama AbdElhameed",
  firstName: "Yousef",
  initials: "YE",
  headline: "Cybersecurity Engineering Student",
  targetRoles: "SOC Analyst & Defensive Security",
  location: "Cairo, Egypt",
  summary:
    "Cybersecurity Engineering student targeting SOC Analyst and defensive security roles, with hands-on experience building attack-and-detection labs using Splunk, Snort, Linux, Kali Linux, and VMware. Strong offensive-security background covering network, web, and system exploitation, supporting a practical understanding of attacker behavior, log analysis, incident investigation, and mitigation.",
  email: "y3usef.osama@email.com",
};

export const links: Links = {
  github: "https://github.com/YousefE1bana",
  linkedin: "https://www.linkedin.com/in/yousefelbana",
  tryhackme: "https://tryhackme.com/p/ELbanna",
  resume: assetUrl("cv/Yousef_Osama_CV.pdf"),
};

export const aboutParagraphs: string[] = [
  "I'm a Cybersecurity Engineering student at the Egyptian Chinese University (B.Sc. Computer Science, expected July 2027), building toward SOC Analyst and defensive-security roles.",
  "Most of my time goes into attack-and-detection labs: standing up isolated multi-VM environments with Kali Linux attackers, Ubuntu and Metasploitable targets, and a Splunk server fed by the Universal Forwarder — then writing SPL searches, dashboards, and alerts to catch what the attacker side does.",
  "The offensive side isn't an afterthought. Red-team training across web, network, and Active Directory attacks gives me a working model of attacker behavior that shows up directly in how I approach log analysis, incident investigation, and mitigation.",
];

export const projects: Project[] = inventory.map(item => ({ ...item, accent: item.accent as Accent, image: item.image ? assetUrl(item.image) : undefined }));
export const reservedRepository = { name: "Akher-Kheit", github: "https://github.com/YousefE1bana/Akher-Kheit", note: "Public repository reserved. No source, README or project description published yet." };
export const credentials = certificateData.map(item => ({ ...item, image: assetUrl(`certificates/${item.file}`), thumbnail: assetUrl(`certificates/thumbnails/${item.file.replace(/\.(png|jpg)$/, '.webp')}`) }));

export const skillGroups: SkillGroup[] = [
  {
    id: "siem",
    label: "SIEM & Detection",
    accent: "yellow",
    items: [
      "Splunk (SPL, log ingestion, dashboards, alerts, investigations)",
      "IBM QRadar (basic log analysis)",
      "Snort",
    ],
  },
  {
    id: "soc",
    label: "SOC & Monitoring",
    accent: "blue",
    items: ["Log Analysis", "Incident Investigation", "Sysmon", "Windows Event Logs", "MITRE ATT&CK"],
  },
  {
    id: "offensive",
    label: "Offensive Security",
    accent: "orange",
    items: ["Nmap", "Burp Suite", "Metasploit", "Nessus", "Netcat", "SQLMap", "John the Ripper"],
  },
  {
    id: "web-network",
    label: "Web & Network Security",
    accent: "pink",
    items: ["OWASP Top 10", "SQLi", "XSS", "SSRF", "IDOR", "JWT", "Privilege Escalation", "Network Reconnaissance"],
  },
  {
    id: "programming",
    label: "Programming",
    accent: "green",
    items: ["Python", "C++"],
  },
  {
    id: "scripting",
    label: "Scripting",
    accent: "green",
    items: ["Bash", "PowerShell (working familiarity)"],
  },
  {
    id: "systems",
    label: "Systems & Platforms",
    accent: "blue",
    items: [
      "Linux",
      "Windows",
      "VMware Workstation",
      "UFW",
      "Splunk Universal Forwarder",
      "Wireshark",
      "FTK Imager",
      "Autopsy",
    ],
  },
];

export const training: Training[] = [
  {
    id: "soc-diploma",
    title: "SOC Analyst Diploma – Tier 1",
    provider: "AMIT Learning",
    hours: "160 Hours",
    period: "Dec. 2025 – Jun. 2026",
    location: "Cairo, Egypt",
    status: "Completed",
    focus: ["SOC operations", "Incident response", "Threat hunting", "Malware analysis", "Digital forensics", "Splunk", "IBM QRadar"],
    description:
      "Hands-on training in SOC operations, incident response, threat hunting, malware analysis, digital forensics, network monitoring, and SIEM investigations using Splunk and IBM QRadar. Applied defensive and investigative techniques through practical labs, TryHackMe challenges, LetsDefend scenarios, and attack-and-detection exercises.",
    accent: "yellow",
  },
  {
    id: "red-teaming",
    title: "Red Teaming & Ethical Hacking Diploma",
    provider: "Red Nexus",
    period: "Jul. 2025 – Apr. 2026",
    location: "Online",
    status: "Completed",
    focus: ["Web pentesting", "Network pentesting", "Active Directory attacks", "Privilege escalation", "Source-code review", "Post-exploitation"],
    description:
      "Practical offensive-security training covering web and network penetration testing, Active Directory attacks, privilege escalation, source-code review, exploitation, and post-exploitation techniques.",
    accent: "orange",
    image: assetUrl("certificates/red-teaming-diploma.png"),
  },
  {
    id: "ejpt",
    title: "Penetration Testing Student – eJPTv2-Aligned",
    provider: "Hossam Ayman Shady",
    hours: "50.5 Hours",
    period: "Apr. 2026",
    location: "Online",
    status: "Course",
    focus: ["Penetration testing", "eJPTv2-aligned curriculum"],
    accent: "pink",
    image: assetUrl("certificates/ejpt-certificate.png"),
    verifyUrl: "https://ude.my/UC-da527920-7090-4ca8-a885-5ff0e9aeaed2",
  },
  {
    id: "palo-alto",
    hours: "40 Hours",
    image: assetUrl("certificates/palo-alto-network-security.png"),
    verifyUrl: "https://paloaltonetworksacademy.net/mod/customcert/verify_certificate.php",
    title: "Network Security Fundamentals",
    provider: "Innovera – Palo Alto Networks Cybersecurity Academy",
    period: "Jul. – Sep. 2026",
    location: "Cairo, Egypt",
    status: "Completed",
    focus: ["Networking fundamentals", "NGFW", "Zero Trust", "SASE", "SD-WAN", "Packet analysis", "Certificates", "NAT", "Firewall configuration"],
    description:
      "Hands-on training covering networking fundamentals, NGFW concepts, Zero Trust, SASE, SD-WAN, packet analysis, certificates, NAT, and firewall security configuration.",
    accent: "blue",
  },
  {
    id: "thm-cybersecurity101",
    title: "Cyber Security 101 Learning Path",
    provider: "TryHackMe",
    hours: "45h 23m",
    period: "Jul. 2026",
    location: "Online",
    status: "Completed",
    focus: ["Network Security", "Web Exploitation", "Linux & Windows Privilege Escalation", "Cryptography", "Defensive Security"],
    description:
      "Comprehensive foundational cybersecurity curriculum covering defensive operations, attack methodologies, web security, cryptography, and endpoint administration.",
    accent: "green",
    image: assetUrl("certificates/thm-cybersecurity101.png"),
    verifyUrl: "https://tryhackme.com/p/ELbanna",
  },
  {
    id: "thm-presecurity",
    title: "Pre Security Learning Path",
    provider: "TryHackMe",
    hours: "19h 10m",
    period: "Jun. 2026",
    location: "Online",
    status: "Completed",
    focus: ["Cybersecurity Basics", "Network Fundamentals", "Web Basics", "Linux & Windows Fundamentals"],
    description:
      "Foundational prerequisite training covering network architecture, the OSI model, core web concepts, and Linux & Windows command-line administration.",
    accent: "yellow",
    image: assetUrl("certificates/thm-presecurity.png"),
    verifyUrl: "https://tryhackme.com/p/ELbanna",
  },
];

export const achievements: Achievement[] = [
  {
    id: "hackarena",
    placement: "1st Place",
    title: "HACKARENA-ECU Cyber Security Competition",
    context: "Team Dali Exploit",
    date: "May 2026",
    accent: "yellow",
    major: true,
    image: assetUrl("certificates/hackarena-ctf.jpg"),
  },
  {
    id: "project-day",
    placement: "1st Place",
    title: "ECU Project Day",
    context: "E-Banking Security System",
    date: "Dec. 30, 2025",
    accent: "orange",
    major: true,
  },
  {
    id: "icpc",
    placement: "Honorable Mention",
    title: "ICPC ECPC Qualifications",
    date: "Jul. 2024",
    accent: "blue",
    major: false,
    image: assetUrl("certificates/icpc-honorable-mention.jpg"),
  },
  {
    id: "student-club",
    placement: "Certificate of Contribution",
    title: "Microsoft Student Clubs – ECU",
    context: "HR Team Member · 2024–2025 Season",
    date: "2024 – 2025",
    accent: "green",
    major: false,
    image: assetUrl("certificates/hr-student-club.jpg"),
  },
];

export const education: Education = {
  institution: "Egyptian Chinese University",
  short: "ECU",
  degree: "B.Sc. in Computer Science",
  specialization: "Cybersecurity Engineering",
  period: "Sep. 2023 – Expected Jul. 2027",
  location: "Cairo, Egypt",
};

const documentedMinutes = training.reduce((total, item) => {
  if (!item.hours) return total;
  const clock = item.hours.match(/(\d+)h\s+(\d+)m/);
  return total + (clock ? Number(clock[1]) * 60 + Number(clock[2]) : Number.parseFloat(item.hours) * 60);
}, 0);

/** Snapshot metrics — derived from the project/training data or certificate evidence. */
export const snapshot = [
  {
    id: "wins",
    value: "2×",
    label: "1st Place finishes",
    detail: "HACKARENA-ECU · ECU Project Day",
    accent: "yellow" as Accent,
  },
  {
    id: "projects",
    value: String(projects.length),
    label: "Projects",
    detail: "Security · Software · Graphics · Tools",
    accent: "pink" as Accent,
  },
  {
    id: "hours",
    value: `${Math.floor(documentedMinutes / 60)}h+`,
    label: "Documented training hours",
    detail: "160h SOC · 50.5h course · 64h 33m THM · 40h NSF",
    accent: "blue" as Accent,
  },
  {
    id: "focus",
    value: "SOC",
    label: "Target specialization",
    detail: "Splunk · Snort · Kali · VMware",
    accent: "orange" as Accent,
  },
];

export const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "training", label: "Training" },
  { id: "achievements", label: "Awards" },
  { id: "personal", label: "Off the clock" },
  { id: "contact", label: "Contact" },
];
