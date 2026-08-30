const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

function generateCleanOnePageResume() {
  const doc = new PDFDocument({
    size: "A4", // 595.28 x 841.89
    margins: { top: 32, bottom: 32, left: 36, right: 36 },
    info: {
      Title: "Sabika Latif - Resume",
      Author: "Sabika Latif",
      Subject: "Software Quality Assurance Engineer | SQA Team Lead",
    },
  });

  const destPublic = path.join(__dirname, "public", "resume", "Sabika-Latif-Resume.pdf");
  const destOut = path.join(__dirname, "out", "resume", "Sabika-Latif-Resume.pdf");

  const writeStream = fs.createWriteStream(destPublic);
  doc.pipe(writeStream);

  // Exact Theme Colors (Pine Green & High Legibility Dark Slate)
  const cPine = "#2c3c2f";       // Primary Brand & Headings (Pine Green)
  const cSage = "#58795e";       // Subtitles, Section Lines, Accent Titles
  const cBody = "#24292e";       // Body text (high contrast, ultra readable)
  const cMuted = "#57606a";      // Dates & Locations

  const left = 36;
  const contentWidth = 595.28 - 72; // 523.28 pt

  // ===================== HEADER =====================
  doc.fillColor(cPine).font("Helvetica-Bold").fontSize(19).text("SABIKA LATIF", left, 32, {
    characterSpacing: 0.8,
  });

  doc.fillColor(cSage).font("Helvetica-Bold").fontSize(10).text(
    "Software Quality Assurance Engineer | SQA Team Lead",
    left,
    55
  );

  // Contact line
  doc.fillColor(cMuted).font("Helvetica").fontSize(8.5).text(
    "Email: Sabikalatif2@gmail.com   |   Phone: +92 309 5945909   |   Location: Rawalpindi / Islamabad, Pakistan   |   LinkedIn: linkedin.com/in/sabika-latif",
    left,
    70,
    { width: contentWidth }
  );

  // Divider
  doc.strokeColor(cSage).lineWidth(1).moveTo(left, 86).lineTo(left + contentWidth, 86).stroke();

  let y = 96;

  // Helper for Section Headers with equal, consistent breathing room
  function drawSectionHeader(title) {
    doc.fillColor(cPine).font("Helvetica-Bold").fontSize(10).text(title.toUpperCase(), left, y, {
      characterSpacing: 0.5,
    });
    const lineY = y + 13;
    doc.strokeColor(cSage).lineWidth(0.8).moveTo(left, lineY).lineTo(left + contentWidth, lineY).stroke();
    y += 18;
  }

  // ===================== 1. SUMMARY =====================
  drawSectionHeader("Summary");
  const summaryText =
    "Results-driven SQA Team Lead and Quality Assurance Engineer with 2+ years of experience spearheading end-to-end testing across Android, iOS, and web platforms. Skilled in building test automation frameworks using Antigravity and executing comprehensive manual, API, and UI testing with tools like JIRA, GitLab, and Postman. Proven track record of leading QA initiatives, streamlining CI/CD testing workflows, mentoring teams, and ensuring high-standard product releases in fast-paced Agile environments.";

  doc.fillColor(cBody).font("Helvetica").fontSize(8.3).text(summaryText, left, y, {
    width: contentWidth,
    lineGap: 2.2,
    align: "justify",
  });
  y += 42;

  // ===================== 2. EXPERIENCE =====================
  drawSectionHeader("Work Experience");

  // Job 1
  doc.fillColor(cPine).font("Helvetica-Bold").fontSize(9.2).text("SQA Team Lead | Senior SQA Engineer", left, y);
  doc.fillColor(cMuted).font("Helvetica-Bold").fontSize(8.2).text("09/2024 – Present", left, y, {
    align: "right",
    width: contentWidth,
  });
  y += 11;

  doc.fillColor(cSage).font("Helvetica-Bold").fontSize(8.3).text("Zeesofttech", left, y, { continued: true });
  doc.fillColor(cMuted).font("Helvetica").text("  —  Islamabad, Pakistan");
  y += 11;

  const job1Bullets = [
    "Lead end-to-end QA operations across Android, iOS, and web platforms, managing test planning, defect lifecycles via JIRA/GitLab, and team mentorship to ensure reliable releases.",
    "Developed automated test suites using the Antigravity framework to streamline application workflows and significantly reduce manual regression time.",
  ];

  job1Bullets.forEach((bullet) => {
    doc.fillColor(cSage).font("Helvetica-Bold").fontSize(8).text("•", left + 4, y);
    doc.fillColor(cBody).font("Helvetica").fontSize(8.2).text(bullet, left + 14, y, {
      width: contentWidth - 14,
      lineGap: 1.5,
    });
    y += 21;
  });
  y += 2;

  // Job 2
  doc.fillColor(cPine).font("Helvetica-Bold").fontSize(9.2).text("Software Quality Assurance Engineer Intern", left, y);
  doc.fillColor(cMuted).font("Helvetica-Bold").fontSize(8.2).text("05/2024 – 09/2024", left, y, {
    align: "right",
    width: contentWidth,
  });
  y += 11;

  doc.fillColor(cSage).font("Helvetica-Bold").fontSize(8.3).text("Zeesofttech", left, y, { continued: true });
  doc.fillColor(cMuted).font("Helvetica").text("  —  Islamabad, Pakistan");
  y += 11;

  const job2Bullets = [
    "Authored and executed structured test plans, scenarios, and bug reports across native Android and iOS apps, performing functional, regression, UI/UX, and Postman API testing.",
    "Tracked and prioritized defect lifecycles via JIRA and GitLab, analyzing quality metrics and collaborating with cross-functional teams to streamline sprint releases.",
  ];

  job2Bullets.forEach((bullet) => {
    doc.fillColor(cSage).font("Helvetica-Bold").fontSize(8).text("•", left + 4, y);
    doc.fillColor(cBody).font("Helvetica").fontSize(8.2).text(bullet, left + 14, y, {
      width: contentWidth - 14,
      lineGap: 1.5,
    });
    y += 21;
  });
  y += 2;

  // Job 3
  doc.fillColor(cPine).font("Helvetica-Bold").fontSize(9.2).text("Cross-Platform Mobile Application Developer", left, y);
  doc.fillColor(cMuted).font("Helvetica-Bold").fontSize(8.2).text("10/2023 – 03/2024", left, y, {
    align: "right",
    width: contentWidth,
  });
  y += 11;

  doc.fillColor(cSage).font("Helvetica-Bold").fontSize(8.3).text("Terasharp", left, y, { continued: true });
  doc.fillColor(cMuted).font("Helvetica").text("  —  Remote");
  y += 11;

  const job3Bullets = [
    "Developed and maintained responsive cross-platform mobile applications for Android and iOS using Flutter and Dart, integrating RESTful APIs for seamless backend synchronization.",
    "Collaborated with UI/UX designers and backend engineers to optimize app performance, resolve critical bugs, and deliver stable, high-quality releases.",
  ];

  job3Bullets.forEach((bullet) => {
    doc.fillColor(cSage).font("Helvetica-Bold").fontSize(8).text("•", left + 4, y);
    doc.fillColor(cBody).font("Helvetica").fontSize(8.2).text(bullet, left + 14, y, {
      width: contentWidth - 14,
      lineGap: 1.5,
    });
    y += 21;
  });
  y += 2;

  // Job 4
  doc.fillColor(cPine).font("Helvetica-Bold").fontSize(9.2).text("Software Design & Engineering Intern", left, y);
  doc.fillColor(cMuted).font("Helvetica-Bold").fontSize(8.2).text("07/2023 – 09/2023", left, y, {
    align: "right",
    width: contentWidth,
  });
  y += 11;

  doc.fillColor(cSage).font("Helvetica-Bold").fontSize(8.3).text("Terasharp", left, y, { continued: true });
  doc.fillColor(cMuted).font("Helvetica").text("  —  Remote");
  y += 11;

  const job4Bullets = [
    "Participated in architectural discussions, requirements gathering, and rapid prototyping for multi-tier client software solutions.",
    "Contributed to core feature implementation, routine debugging, and baseline functional testing to guarantee code stability prior to staging deployments.",
  ];

  job4Bullets.forEach((bullet) => {
    doc.fillColor(cSage).font("Helvetica-Bold").fontSize(8).text("•", left + 4, y);
    doc.fillColor(cBody).font("Helvetica").fontSize(8.2).text(bullet, left + 14, y, {
      width: contentWidth - 14,
      lineGap: 1.5,
    });
    y += 21;
  });
  y += 6;

  // ===================== 3. MOBILE QA PROJECTS =====================
  drawSectionHeader("Key Mobile Applications Tested");

  const appProjects = [
    {
      title: "AI Math Solver & Scanner (iOS & Android):",
      detail: "Validated camera OCR equation parsing accuracy, bounding boxes, Postman APIs, and App Store / Google Play in-app purchases.",
    },
    {
      title: "AI Voice Typing Keyboard (Android):",
      detail: "Developed Antigravity automation test scripts to validate multilingual keyboards, real-time speech STT latency, and IME services.",
    },
    {
      title: "English Dictionary & Voice Translator (iOS & Android):",
      detail: "Tested offline SQLite database queries, camera OCR translation, TTS audio pronunciations, and subscription renewals.",
    },
  ];

  appProjects.forEach((proj) => {
    doc.fillColor(cSage).font("Helvetica-Bold").fontSize(8.2).text("•", left + 4, y);
    doc.fillColor(cPine).font("Helvetica-Bold").fontSize(8.2).text(proj.title, left + 14, y, { continued: true });
    doc.fillColor(cBody).font("Helvetica").text(" " + proj.detail, { width: contentWidth - 14, lineGap: 1.3 });
    y += 14;
  });
  y += 5;

  // ===================== 4. SKILLS & TOOLS =====================
  drawSectionHeader("Technical Skills & Toolset");

  const skillLines = [
    { label: "Testing Methodologies: ", text: "Manual & Functional QA, Regression Testing, Exploratory Testing, UI/UX, Mobile QA (Android & iOS), Test Planning, Defect Lifecycle, IAP Audits" },
    { label: "API & Data Validation: ", text: "REST API Verification via Postman, JSON Payload Schema Validation, Status Codes, SQLite Database Integrity" },
    { label: "Automation & Tools: ", text: "Antigravity Test Automation Framework, JIRA, GitLab, Git, TestFlight, Android Studio, Xcode, Flutter & Dart, Agile/Scrum" },
  ];

  skillLines.forEach((s) => {
    doc.fillColor(cSage).font("Helvetica-Bold").fontSize(8.2).text("•", left + 4, y);
    doc.fillColor(cPine).font("Helvetica-Bold").fontSize(8.2).text(s.label, left + 14, y, { continued: true });
    doc.fillColor(cBody).font("Helvetica").fontSize(8.2).text(s.text, { width: contentWidth - 14, lineGap: 1.2 });
    y += 13;
  });
  y += 5;

  // ===================== 5. EDUCATION =====================
  drawSectionHeader("Education");
  doc.fillColor(cPine).font("Helvetica-Bold").fontSize(9).text("Bachelor's of Science in Software Engineering (BS SE)", left, y);
  doc.fillColor(cMuted).font("Helvetica-Bold").fontSize(8.2).text("2018 – 2022", left, y, {
    align: "right",
    width: contentWidth,
  });
  y += 11;

  doc.fillColor(cSage).font("Helvetica-Bold").fontSize(8.3).text("International Islamic University", left, y, { continued: true });
  doc.fillColor(cMuted).font("Helvetica").text("  —  Islamabad, Pakistan");

  doc.end();

  writeStream.on("finish", () => {
    console.log("Clean 1-page Pine Green Resume generated at:", destPublic);
    fs.copyFileSync(destPublic, destOut);
    console.log("Copied to out folder:", destOut);
  });
}

generateCleanOnePageResume();
