const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

function generateEnhancvResume() {
  // A4 Page: 595.28 x 841.89
  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 32, bottom: 28, left: 32, right: 32 },
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

  // Exact Enhancv Color Palette with Pine & Sage Green
  const cPine = "#2c3c2f";        // Dark Pine Green (Name, Main Titles)
  const cDark = "#1f2937";        // Charcoal for Job Titles & Company
  const cBody = "#374151";        // Dark Slate for Body & Bullets (High readability)
  const cMuted = "#6b7280";       // Dates, Locations, Subtext
  const cGreenBg = "#8ec59b";     // Header Banner Green (#8ec59b / #94ca9d)
  const cIconBg = "#2d7d52";      // Section Icon Box Color
  const cDot = "#2d7d52";         // Bullets

  // Column Geometry
  const leftColX = 32;
  const leftColW = 152;
  const colGap = 24;
  const rightColX = leftColX + leftColW + colGap; // 208
  const rightColW = 595.28 - 32 - rightColX;      // 355.28

  // ----------------------------------------------------
  // HELPER: Section Header with Small Square Icon
  // ----------------------------------------------------
  function drawLeftSectionHeader(title, y) {
    // Small icon box
    doc.roundedRect(leftColX, y, 16, 16, 3).fill(cIconBg);
    // Draw icon inside (e.g., small white symbol)
    doc.fillColor("#ffffff").font("Helvetica-Bold").fontSize(8).text("▪", leftColX + 4.5, y + 3.5);
    // Text title
    doc.fillColor(cPine).font("Helvetica-Bold").fontSize(10).text(title.toUpperCase(), leftColX + 22, y + 3.5, {
      characterSpacing: 0.5,
    });
    return y + 24;
  }

  function drawRightSectionHeader(title, y) {
    doc.roundedRect(rightColX, y, 16, 16, 3).fill(cIconBg);
    doc.fillColor("#ffffff").font("Helvetica-Bold").fontSize(8).text("▪", rightColX + 4.5, y + 3.5);
    doc.fillColor(cPine).font("Helvetica-Bold").fontSize(10).text(title.toUpperCase(), rightColX + 22, y + 3.5, {
      characterSpacing: 0.5,
    });
    return y + 24;
  }

  // ====================================================
  // RIGHT COLUMN: TOP HEADER
  // ====================================================
  // Name
  doc.fillColor(cPine).font("Helvetica-Bold").fontSize(26).text("SABIKA", rightColX, 32, {
    characterSpacing: 1.2,
  });

  // Green Banner for Role
  doc.roundedRect(rightColX, 64, rightColW, 26, 4).fill(cGreenBg);
  doc.fillColor(cPine).font("Helvetica-Bold").fontSize(9.5).text(
    "SOFTWARE QUALITY ASSURANCE ENGINEER | TEAM LEAD",
    rightColX + 8,
    72,
    { characterSpacing: 0.5 }
  );

  // ====================================================
  // LEFT COLUMN: CONTACTS, LANGUAGES, SKILLS
  // ====================================================
  let ly = 32;

  // 1. CONTACTS
  ly = drawLeftSectionHeader("Contacts", ly);

  const contacts = [
    { icon: "📞", text: "+923095945909" },
    { icon: "✉️", text: "Sabikalatif2@gmail.com" },
    { icon: "🔗", text: "Sabika Latif" },
    { icon: "📍", text: "Rawalpindi" },
  ];

  contacts.forEach((c) => {
    doc.fillColor(cBody).font("Helvetica").fontSize(8.5).text(c.text, leftColX + 12, ly, {
      width: leftColW - 12,
    });
    ly += 16;
  });
  ly += 12;

  // 2. LANGUAGES
  ly = drawLeftSectionHeader("Languages", ly);
  doc.fillColor(cDark).font("Helvetica-Bold").fontSize(8.5).text("ENGLISH", leftColX, ly);
  doc.fillColor(cMuted).font("Helvetica").fontSize(8.5).text("Proficient", leftColX + leftColW - 45, ly);
  ly += 24;

  // 3. SKILLS
  ly = drawLeftSectionHeader("Skills", ly);

  const skills = [
    "Software Quality Assurance",
    "Software Testing",
    "JIRA · TestRail · GitLab",
    "Test Case Design & Execution",
    "Functional & Regression Testing",
    "Mobile Testing (Android & iOS)",
    "REST API Testing · Postman",
    "Antigravity Test Automation",
    "User Acceptance Testing (UAT)",
    "System Testing · Smoke Testing",
    "In-App Purchases (IAP) Audits",
    "Flutter & Dart",
    "SQL · SQLite Database",
    "SDLC & STLC Methodologies",
  ];

  skills.forEach((s) => {
    doc.fillColor(cBody).font("Helvetica").fontSize(8.2).text(s, leftColX, ly, {
      width: leftColW,
      lineGap: 1.5,
    });
    ly += 14.5;
  });

  // ====================================================
  // RIGHT COLUMN: SUMMARY, EXPERIENCE, EDUCATION
  // ====================================================
  let ry = 104;

  // 1. SUMMARY
  ry = drawRightSectionHeader("Summary", ry);
  const summary =
    "Results-driven SQA Team Lead and Quality Assurance Engineer with 2+ years of experience spearheading end-to-end testing across Android, iOS, and web platforms. Skilled in building test automation frameworks using Antigravity and executing comprehensive manual, API, and UI testing with tools like JIRA, GitLab, and Postman. Proven track record of leading QA initiatives, streamlining CI/CD testing workflows, mentoring teams, and ensuring high-standard product releases in fast-paced Agile environments.";

  doc.fillColor(cBody).font("Helvetica").fontSize(8.2).text(summary, rightColX, ry, {
    width: rightColW,
    lineGap: 2,
    align: "justify",
  });
  ry += 54;

  // 2. EXPERIENCE
  ry = drawRightSectionHeader("Experience", ry);

  // Job 1
  doc.fillColor(cDark).font("Helvetica-Bold").fontSize(9.5).text("Zeesofttech", rightColX, ry);
  doc.fillColor(cMuted).font("Helvetica").fontSize(8.5).text("Islamabad, Pakistan", rightColX, ry, {
    align: "right",
    width: rightColW,
  });
  ry += 12;

  doc.fillColor(cPine).font("Helvetica-Bold").fontSize(8.5).text("SQA Team Lead | Senior SQA Engineer", rightColX, ry);
  doc.fillColor(cMuted).font("Helvetica").fontSize(8.2).text("10/2024 – Present", rightColX, ry, {
    align: "right",
    width: rightColW,
  });
  ry += 12;

  const job1Bullets = [
    "Lead end-to-end QA operations across Android, iOS, and web platforms, managing test planning, defect lifecycles via JIRA/GitLab, and team mentorship to ensure reliable releases.",
    "Developed automated test suites using the Antigravity framework to streamline application workflows and significantly reduce manual regression time.",
  ];

  job1Bullets.forEach((bullet) => {
    doc.fillColor(cDot).font("Helvetica-Bold").fontSize(7.5).text("•", rightColX + 4, ry);
    doc.fillColor(cBody).font("Helvetica").fontSize(8).text(bullet, rightColX + 14, ry, {
      width: rightColW - 14,
      lineGap: 1.5,
    });
    ry += 21;
  });
  ry += 5;

  // Job 2
  doc.fillColor(cDark).font("Helvetica-Bold").fontSize(9.5).text("Zeesofttech", rightColX, ry);
  doc.fillColor(cMuted).font("Helvetica").fontSize(8.5).text("Islamabad, Pakistan", rightColX, ry, {
    align: "right",
    width: rightColW,
  });
  ry += 12;

  doc.fillColor(cPine).font("Helvetica-Bold").fontSize(8.5).text("Software Quality Assurance Engineer Intern", rightColX, ry);
  doc.fillColor(cMuted).font("Helvetica").fontSize(8.2).text("05/2024 – 10/2024", rightColX, ry, {
    align: "right",
    width: rightColW,
  });
  ry += 12;

  const job2Bullets = [
    "Authored and executed structured test plans, scenarios, and bug reports across native Android and iOS apps, performing functional, regression, UI/UX, and Postman API testing.",
    "Tracked and prioritized defect lifecycles via JIRA and GitLab, analyzing quality metrics and collaborating with cross-functional teams to streamline sprint releases.",
  ];

  job2Bullets.forEach((bullet) => {
    doc.fillColor(cDot).font("Helvetica-Bold").fontSize(7.5).text("•", rightColX + 4, ry);
    doc.fillColor(cBody).font("Helvetica").fontSize(8).text(bullet, rightColX + 14, ry, {
      width: rightColW - 14,
      lineGap: 1.5,
    });
    ry += 21;
  });
  ry += 5;

  // Job 3
  doc.fillColor(cDark).font("Helvetica-Bold").fontSize(9.5).text("Terasharp", rightColX, ry);
  doc.fillColor(cMuted).font("Helvetica").fontSize(8.5).text("Remote", rightColX, ry, {
    align: "right",
    width: rightColW,
  });
  ry += 12;

  doc.fillColor(cPine).font("Helvetica-Bold").fontSize(8.5).text("Cross-Platform Mobile Application Developer", rightColX, ry);
  doc.fillColor(cMuted).font("Helvetica").fontSize(8.2).text("11/2023 – 04/2024", rightColX, ry, {
    align: "right",
    width: rightColW,
  });
  ry += 12;

  const job3Bullets = [
    "Developed and maintained responsive cross-platform mobile applications for Android and iOS using Flutter and Dart, integrating RESTful APIs for seamless backend synchronization.",
    "Collaborated with UI/UX designers and backend engineers to optimize app performance, resolve critical bugs, and deliver stable, high-quality releases.",
  ];

  job3Bullets.forEach((bullet) => {
    doc.fillColor(cDot).font("Helvetica-Bold").fontSize(7.5).text("•", rightColX + 4, ry);
    doc.fillColor(cBody).font("Helvetica").fontSize(8).text(bullet, rightColX + 14, ry, {
      width: rightColW - 14,
      lineGap: 1.5,
    });
    ry += 21;
  });
  ry += 5;

  // Job 4
  doc.fillColor(cDark).font("Helvetica-Bold").fontSize(9.5).text("Terasharp", rightColX, ry);
  doc.fillColor(cMuted).font("Helvetica").fontSize(8.5).text("Remote", rightColX, ry, {
    align: "right",
    width: rightColW,
  });
  ry += 12;

  doc.fillColor(cPine).font("Helvetica-Bold").fontSize(8.5).text("Software Design & Engineering Intern", rightColX, ry);
  doc.fillColor(cMuted).font("Helvetica").fontSize(8.2).text("08/2023 – 10/2023", rightColX, ry, {
    align: "right",
    width: rightColW,
  });
  ry += 12;

  const job4Bullets = [
    "Participated in architectural discussions, requirements gathering, and rapid prototyping for multi-tier client software solutions.",
    "Contributed to core feature implementation, routine debugging, and baseline functional testing to guarantee code stability prior to staging deployments.",
  ];

  job4Bullets.forEach((bullet) => {
    doc.fillColor(cDot).font("Helvetica-Bold").fontSize(7.5).text("•", rightColX + 4, ry);
    doc.fillColor(cBody).font("Helvetica").fontSize(8).text(bullet, rightColX + 14, ry, {
      width: rightColW - 14,
      lineGap: 1.5,
    });
    ry += 21;
  });
  ry += 10;

  // 3. EDUCATION
  ry = drawRightSectionHeader("Education", ry);
  doc.fillColor(cDark).font("Helvetica-Bold").fontSize(9.5).text("International Islamic University", rightColX, ry);
  doc.fillColor(cMuted).font("Helvetica").fontSize(8.5).text("Islamabad", rightColX, ry, {
    align: "right",
    width: rightColW,
  });
  ry += 12;

  doc.fillColor(cPine).font("Helvetica").fontSize(8.5).text("Bachelor's of Science in Software Engineering", rightColX, ry);
  doc.fillColor(cMuted).font("Helvetica").fontSize(8.2).text("2018 – 2022", rightColX, ry, {
    align: "right",
    width: rightColW,
  });

  doc.end();

  writeStream.on("finish", () => {
    console.log("Enhancv 1-page replica generated successfully at:", destPublic);
    fs.copyFileSync(destPublic, destOut);
    console.log("Copied to out folder:", destOut);
  });
}

generateEnhancvResume();
