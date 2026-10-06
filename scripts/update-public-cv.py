"""Reconcile the phone-free public CV with the audited project and certificate data."""
from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from xml.sax.saxutils import escape
from pypdf import PdfReader
import json, re

root=Path(__file__).resolve().parent.parent
projects=json.loads((root/'src/data/projectInventory.json').read_text(encoding='utf-8'))
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameCV',fontName='Helvetica-Bold',fontSize=21,leading=24,textColor=colors.HexColor('#142139'),spaceAfter=7))
styles.add(ParagraphStyle(name='SectionCV',fontName='Helvetica-Bold',fontSize=12,leading=15,textColor=colors.HexColor('#245ae8'),spaceBefore=13,spaceAfter=6))
styles.add(ParagraphStyle(name='BodyCV',fontName='Helvetica',fontSize=9,leading=12,spaceAfter=5))
styles.add(ParagraphStyle(name='ProjectCV',fontName='Helvetica-Bold',fontSize=10,leading=13,spaceBefore=9,spaceAfter=4))
story=[]
def text(value, style='BodyCV'): story.append(Paragraph(value,styles[style]))
def section(value): text(value,'SectionCV')
def project(p, bullets):
    text(escape(p['name'])+' — '+escape(p['subtitle']), 'ProjectCV')
    text(escape(p['period'])+' | '+escape(p.get('role',p['status'])))
    for bullet in bullets: text('• '+escape(bullet))
    text('<font color="#55677f">'+escape(' / '.join(p['stack']))+'</font>')
text('Yousef Osama AbdElhameed','NameCV')
text('Cybersecurity Engineering Student · SOC Analyst &amp; Defensive Security')
text('Cairo, Egypt · <link href="mailto:y3usef.osama@email.com">y3usef.osama@email.com</link> · <link href="https://www.linkedin.com/in/yousefelbana">LinkedIn</link> · <link href="https://github.com/YousefE1bana">GitHub</link> · <link href="https://tryhackme.com/p/ELbanna">TryHackMe</link>')
section('Summary')
text('Cybersecurity Engineering student building toward SOC Analyst and defensive-security roles. Hands-on attack-and-detection labs with Splunk, Snort, Linux, Kali Linux and VMware. Offensive-security training informs log analysis, incident investigation and bounded response. Project work spans network security, application security, system architecture and graphics.')
section('Education')
text('<b>Egyptian Chinese University (ECU)</b> — Cairo, Egypt<br/>B.Sc. Computer Science · Cybersecurity Engineering<br/>September 2023 – Expected July 2027')
section('Technical Skills')
for value in ['<b>SIEM &amp; detection:</b> Splunk (SPL, ingestion, dashboards, alerts, investigations), IBM QRadar (basic), Snort', '<b>SOC &amp; monitoring:</b> log analysis, incident investigation, Sysmon, Windows Event Logs, MITRE ATT&amp;CK', '<b>Offensive:</b> Nmap, Burp Suite, Metasploit, Nessus, Netcat, SQLMap, John the Ripper', '<b>Web &amp; network:</b> OWASP Top 10, SQLi, XSS, SSRF, IDOR, JWT, privilege escalation, reconnaissance', '<b>Programming &amp; scripting:</b> Python, C++; Bash, PowerShell (working familiarity)', '<b>Systems:</b> Linux, Windows, VMware, UFW, nftables, Splunk Universal Forwarder, Wireshark, FTK Imager, Autopsy']:
    text(value)
section('Selected Projects')
project(projects[0], ['One project: NetShield with its broader SOC Attack & Detection Home Lab context.', 'V2 Python/Flask console: durable alerts, incidents, flow evidence, 25 versioned indicators and 33 offline scenarios. Manual nftables response has expiry, rollback and kernel readback; observe-only is the default.', 'The surrounding isolated multi-VM lab includes Kali, Ubuntu, Metasploitable, Splunk ingestion and SPL investigations. Offline replay cannot authorize live response.'])
project(projects[1], ['First place — ECU Project Day, December 30, 2025.', 'Evaluated XGBoost on 24.4M transactions: CV-reported 94.69% ROC-AUC, a dataset result rather than a production guarantee.', 'JWT, OTP authentication, RBAC, rate limiting, audit logging and transaction monitoring in a university prototype.'])
project(projects[2], ['Leading a six-person team; own scope, architecture, security requirements and delivery coordination.', 'Ongoing graduation project connecting Egyptian patients and care providers; architecture remains a proposed design, not a deployment claim.'])
story.append(PageBreak())
text('Yousef Elbana · Further work & training','ProjectCV')
section('More from the Workshop')
for p in projects[3:]:
    project(p,[p['summary'],p['result']])
section('Professional Training')
for value in ['<b>SOC Analyst Diploma — Tier 1</b> · AMIT Learning · 160 hours<br/>December 2025 – June 2026 · Completed<br/>SOC operations, incident response, threat hunting, malware analysis, digital forensics, Splunk and IBM QRadar.', '<b>Red Teaming &amp; Ethical Hacking Diploma</b> · Red Nexus<br/>July 2025 – April 2026 · Completed<br/>Web/network penetration testing, Active Directory, privilege escalation, code review and post-exploitation.', '<b>Penetration Testing Student — eJPTv2-Aligned</b> · Hossam Ayman Shady · 50.5 hours<br/>April 2026 · Udemy course completion; not an INE eJPT certification.', '<b>Palo Alto Network Security Fundamentals</b> · Innovera / Palo Alto Networks Cybersecurity Academy · 40 hours<br/>Completed: Academy certificate September 8, 2026, validation m8PPpCl5P7.<br/>Innovera Academy completion certificate confirms the same 40-hour training; no date or ID printed. Hours counted once.', '<b>TryHackMe learning paths</b> · Pre Security (June 2026, 19h 10m) and Cyber Security 101 (July 2026, 45h 23m) · Completed.']:
    text(value)
section('Achievements & Contribution')
for value in ['<b>1st Place — HACKARENA-ECU Cyber Security Competition</b> · Team Dali Exploit · May 2026', '<b>1st Place — ECU Project Day</b> · E-Banking Security System · December 30, 2025', '<b>Honorable Mention — ICPC ECPC Qualifications</b> · July 2024', '<b>Certificate of Contribution — Microsoft Student Clubs, ECU</b> · HR Team Member · 2024–2025']:
    text(value)
def footer(canvas,doc):
    canvas.setFont('Helvetica',8); canvas.setFillColor(colors.HexColor('#55677f'))
    canvas.drawString(38,24,'Yousef Elbana · Public CV · Updated October 6, 2026')
    canvas.drawRightString(A4[0]-38,24,str(doc.page))
target=root/'public/cv/Yousef_Osama_CV.pdf'
SimpleDocTemplate(str(target),pagesize=A4,rightMargin=38,leftMargin=38,topMargin=32,bottomMargin=36,title='Yousef Elbana — Cybersecurity Engineering',author='Yousef Elbana').build(story,onFirstPage=footer,onLaterPages=footer)
pdf=PdfReader(target)
extracted='\n'.join(page.extract_text() for page in pdf.pages)
assert len(pdf.pages)==2, f'Expected 2 pages, got {len(pdf.pages)}'
assert not re.search(r'(?<!\d)(?:\+?20|0)1[0125](?:[-\s]?\d){8}(?!\d)',extracted)
assert 'automated' not in extracted.lower()
assert extracted.count('NetShield — SOC Attack & Detection Home Lab')==1
print(f'Public CV reconciled: {len(pdf.pages)} pages, no phone, one NetShield project, completed 40-hour NSF training.')
