const fs = require('fs');
const path = require('path');

// Generate a valid minimal PDF file for Muhammad Saad's Resume
function generateResumePdf() {
  const content = [
    "%PDF-1.4",
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >> endobj",
    "4 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >> endobj",
    "5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",
  ];

  const streamLines = [
    "BT",
    "/F1 22 Tf",
    "50 740 Td",
    "(MUHAMMAD SAAD) Tj",
    "/F2 12 Tf",
    "0 -20 Td",
    "(Social Media & AI Content Creator | Taxila, Punjab, Pakistan) Tj",
    "0 -15 Td",
    "(Email: muhammadsaad.webdev@gmail.com | Phone: +92-3225425081 | LinkedIn: linkedin.com/in/muhammadsaad023) Tj",
    "0 -25 Td",
    "/F1 14 Tf",
    "(PROFESSIONAL SUMMARY) Tj",
    "/F2 10 Tf",
    "0 -16 Td",
    "(Software Engineering graduate with a strong focus in creative marketing, social media, and AI-powered content) Tj",
    "0 -13 Td",
    "(production. Proven track record in transforming complex software and business features into engaging visual content) Tj",
    "0 -13 Td",
    "(through AI-generated promotional videos, marketing scripts, and digital design collateral.) Tj",
    "0 -24 Td",
    "/F1 14 Tf",
    "(EXPERIENCE) Tj",
    "/F1 11 Tf",
    "0 -16 Td",
    "(Dynamic Solutions Pakistan  |  March 2026 - Present) Tj",
    "/F2 10 Tf",
    "0 -13 Td",
    "(Role: IT & Software Support Associate | SEO & Creative Content) Tj",
    "0 -13 Td",
    "(- Created promotional content for software products including Dynamic Business Suite and ERP systems.) Tj",
    "0 -13 Td",
    "(- Developed AI-assisted marketing videos, bilingual Urdu/English scripts, and scene concepts.) Tj",
    "0 -13 Td",
    "(- Prepared product-focused visual content, social media graphics, and digital marketing materials.) Tj",
    "0 -13 Td",
    "(- Supported SEO and website content activities to drive digital presence and discoverability.) Tj",
    "0 -18 Td",
    "/F1 11 Tf",
    "(Marq Networks  |  April 2025 - September 2025) Tj",
    "/F2 10 Tf",
    "0 -13 Td",
    "(Role: WordPress Developer & SEO Executive) Tj",
    "0 -13 Td",
    "(- Managed website content, structured pages, and digital visual assets using WordPress & Elementor.) Tj",
    "0 -13 Td",
    "(- Executed on-page SEO strategies, metadata enhancements, and keyword alignment.) Tj",
    "0 -13 Td",
    "(- Monitored search indexing, mobile usability, and query metrics using Google Search Console.) Tj",
    "0 -24 Td",
    "/F1 14 Tf",
    "(EDUCATION) Tj",
    "/F1 11 Tf",
    "0 -16 Td",
    "(COMSATS University Islamabad  |  Graduation: January 2025) Tj",
    "/F2 10 Tf",
    "0 -13 Td",
    "(Bachelor of Science in Software Engineering (BS SE)) Tj",
    "0 -24 Td",
    "/F1 14 Tf",
    "(CORE SKILLS & TOOLS) Tj",
    "/F2 10 Tf",
    "0 -15 Td",
    "(Content Creation: Social Media Management, Promotional Videos, Short-Form Production, Scriptwriting, Visual Storytelling) Tj",
    "0 -13 Td",
    "(AI & Creative Tools: Google Flow, Canva, CapCut, AI Video Generation, Generative Media Workflows) Tj",
    "0 -13 Td",
    "(Digital Marketing: SEO Fundamentals, Social Media Marketing, Content Strategy, Google Search Console) Tj",
    "0 -13 Td",
    "(Technical Skills: WordPress, Elementor, HTML5, CSS3, Software Architecture Principles) Tj",
    "ET"
  ];

  const streamContent = streamLines.join("\n");
  const streamLength = Buffer.byteLength(streamContent, "utf-8");

  content.push(
    `6 0 obj << /Length ${streamLength} >> stream\n${streamContent}\nendstream\nendobj`
  );

  // Cross-reference table
  let currentOffset = 0;
  const offsets = [];
  const fullBody = [];

  for (let i = 0; i < content.length; i++) {
    offsets.push(currentOffset);
    const chunk = content[i] + "\n";
    fullBody.push(chunk);
    currentOffset += Buffer.byteLength(chunk, "utf-8");
  }

  const xrefStart = currentOffset;
  let xref = `xref\n0 7\n0000000000 65535 f \n`;
  for (let i = 0; i < offsets.length; i++) {
    const padded = String(offsets[i]).padStart(10, '0');
    xref += `${padded} 00000 n \n`;
  }

  const trailer = `trailer << /Size 7 /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`;
  fullBody.push(xref);
  fullBody.push(trailer);

  fs.writeFileSync(path.join('public', 'documents', 'resume.pdf'), fullBody.join(''), 'binary');
  console.log('Successfully generated public/documents/resume.pdf');
}

generateResumePdf();
