const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

function createResumePDF() {
  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 32, bottom: 32, left: 36, right: 36 },
    info: {
      Title: "Sabika Latif - SQA Engineer Resume",
      Author: "Sabika Latif",
      Subject: "Software Quality Assurance Engineer / SQA Team Lead Resume",
      Keywords: "QA, SQA Engineer, Software Testing, Mobile QA, Antigravity, Postman, JIRA",
    },
  });

  const targetDir = path.join(__dirname, "public", "resume");
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const outDir = path.join(__dirname, "out", "resume");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const pdfPathPublic = path.join(targetDir, "Sabika-Latif-Resume.pdf");
  const pdfPathOut = path.join(outDir, "Sabika-Latif-Resume.pdf");

  const writeStream = fs.createWriteStream(pdfPathPublic);
  doc.pipe(writeStream);

  // PALETTE COLORS (Theme #38019)
  const cForest = "#2c3c2f"; // Primary Dark Green Text & Titles
  const cSage = "#58795e";   // Subheaders, Section Accents
  const cCeladon = "#94ca9d";// Borders & Pills
  const cMint = "#bafdc5";   // Highlights
  const cPistachio = "#e6f5e8"; // Header Accent Box Fill
  const cBody = "#202d23";   // Crisp Readable Dark Body Text
  const cMuted = "#4f6954";  // Metadata & Dates

  const pageWidth = 595.28;
  const leftMargin = 36;
  const rightMargin = 36;
  const contentWidth = pageWidth - leftMargin - rightMargin;

  // --- HEADER SECTION ---
  doc.roundedRect(leftMargin, 30, contentWidth, 80, 8).fillAndStroke(cPistachio, cCeladon);

  // Name
  doc.fillColor(cForest).font("Helvetica-Bold").fontSize(20).text("SABIKA LATIF", leftMargin + 16, 40, {
    characterSpacing: 0.5,
  });

  // Title
  doc.fillColor(cSage).font("Helvetica-Bold").fontSize(10.5).text(
    "Software Quality Assurance Engineer | SQA Team Lead",
    leftMargin + 16,
    63
  );

  // Contact Info Row
  const contactText =
    "Email: sabikalatif2@gmail.com  |  Phone: +92 309 5945909  |  Location: Islamabad, Pakistan (Open to Remote)";
  doc.fillColor(cBody).font("Helvetica").fontSize(8).text(contactText, leftMargin + 16, 80);

  const linksText =
    "LinkedIn: linkedin.com/in/sabika-latif  |  GitHub: github.com/sabeeqalatif-byte";
  doc.fillColor(cSage).font("Helvetica-Bold").fontSize(8).text(linksText, leftMargin + 16, 92);

  let currentY = 122;

  // HELPER: Section Heading with elegant accent bar
  function drawSectionHeader(title) {
    doc.fillColor(cForest).font("Helvetica-Bold").fontSize(11).text(title.toUpperCase(), leftMargin, currentY, {
      characterSpacing: 0.5,
    });
    const lineY = currentY + 14;
    doc.strokeColor(cSage).lineWidth(1.5).moveTo(leftMargin, lineY).lineTo(leftMargin + contentWidth, lineY).stroke();
    currentY += 20;
  }

  // --- 1. PROFESSIONAL SUMMARY ---
  drawSectionHeader("Professional Summary");
  doc.fillColor(cBody).font("Helvetica").fontSize(8.7).text(
    "Results-driven SQA Team Lead and Quality Assurance Engineer with 2+ years of experience spearheading end-to-end manual and automated testing across 15+ live mobile applications on the Apple App Store and Google Play Store. Proven expertise in building test automation suites with the Antigravity framework, verifying RESTful APIs via Postman, and managing defect lifecycles and sprint releases in JIRA and GitLab. Background in Flutter mobile development providing deep insight into root-cause bug analysis.",
    leftMargin,
    currentY,
    { width: contentWidth, lineGap: 2.2, align: "justify" }
  );
  currentY += 46;

  // --- 2. CORE SKILLS & TOOLSET ---
  drawSectionHeader("Core Technical Competencies");

  const skillGroups = [
    { title: "Testing Methodologies", items: "Mobile Testing (iOS & Android), Manual & Functional QA, Regression, Exploratory, UI/UX, Test Planning, Defect Lifecycle, IAP Monetization Audits" },
    { title: "API & Backend Testing", items: "REST API Verification, Postman, JSON Schema Validation, Status Codes, SQLite Data Integrity" },
    { title: "Automation & CI/CD", items: "Antigravity Test Automation Framework, Automated Regression Suites, UI Workflow Automation" },
    { title: "Tools & Development", items: "JIRA, GitLab, Git, TestFlight, Xcode, Android Studio, Flutter & Dart, Agile / Scrum Leadership" },
  ];

  skillGroups.forEach((group) => {
    doc.fillColor(cSage).font("Helvetica-Bold").fontSize(8.5).text(`•  ${group.title}: `, leftMargin, currentY, {
      continued: true,
    });
    doc.fillColor(cBody).font("Helvetica").fontSize(8.5).text(group.items, { width: contentWidth, lineGap: 1.5 });
    currentY += 13;
  });
  currentY += 8;

  // --- 3. PROFESSIONAL EXPERIENCE ---
  drawSectionHeader("Work Experience");

  // Job 1
  doc.fillColor(cForest).font("Helvetica-Bold").fontSize(9.5).text("SQA Team Lead | Senior SQA Engineer", leftMargin, currentY);
  doc.fillColor(cMuted).font("Helvetica-Bold").fontSize(8.5).text("10/2024 – Present", leftMargin, currentY, { align: "right", width: contentWidth });
  currentY += 12;

  doc.fillColor(cSage).font("Helvetica-Bold").fontSize(8.5).text("Zeesofttech  —  Islamabad, Pakistan", leftMargin, currentY);
  currentY += 12;

  const job1Bullets = [
    "Lead end-to-end QA operations across iOS, Android, and Web platforms, supervising test planning, sprint releases, and defect triage in JIRA and GitLab.",
    "Engineered automated test suites using the Antigravity framework for multilingual keyboard and UI workflows, significantly reducing regression test execution time.",
    "Spearheaded release sign-offs for 15+ live applications published on the Apple App Store and Google Play Store.",
    "Conducted REST API testing via Postman to validate cloud AI text endpoints, payload schemas, and response integrity.",
  ];

  job1Bullets.forEach((bullet) => {
    doc.fillColor(cSage).font("Helvetica-Bold").fontSize(8).text("▪", leftMargin + 6, currentY);
    doc.fillColor(cBody).font("Helvetica").fontSize(8.3).text(bullet, leftMargin + 16, currentY, {
      width: contentWidth - 16,
      lineGap: 1.2,
    });
    currentY += 19;
  });
  currentY += 4;

  // Job 2
  doc.fillColor(cForest).font("Helvetica-Bold").fontSize(9.5).text("Software Quality Assurance Engineer Intern", leftMargin, currentY);
  doc.fillColor(cMuted).font("Helvetica-Bold").fontSize(8.5).text("05/2024 – 10/2024", leftMargin, currentY, { align: "right", width: contentWidth });
  currentY += 12;

  doc.fillColor(cSage).font("Helvetica-Bold").fontSize(8.5).text("Zeesofttech  —  Islamabad, Pakistan", leftMargin, currentY);
  currentY += 12;

  const job2Bullets = [
    "Authored detailed test plans, test scenarios, and bug reports for native Android and iOS applications.",
    "Executed functional, regression, UI/UX, and Postman API tests across OCR scanning, audio transcribing, and subscription monetization modules.",
    "Collaborated directly with developers to reproduce, track, and verify resolution of high-severity edge-case defects.",
  ];

  job2Bullets.forEach((bullet) => {
    doc.fillColor(cSage).font("Helvetica-Bold").fontSize(8).text("▪", leftMargin + 6, currentY);
    doc.fillColor(cBody).font("Helvetica").fontSize(8.3).text(bullet, leftMargin + 16, currentY, {
      width: contentWidth - 16,
      lineGap: 1.2,
    });
    currentY += 19;
  });
  currentY += 4;

  // Job 3
  doc.fillColor(cForest).font("Helvetica-Bold").fontSize(9.5).text("Cross-Platform Mobile Application Developer", leftMargin, currentY);
  doc.fillColor(cMuted).font("Helvetica-Bold").fontSize(8.5).text("11/2023 – 04/2024", leftMargin, currentY, { align: "right", width: contentWidth });
  currentY += 12;

  doc.fillColor(cSage).font("Helvetica-Bold").fontSize(8.5).text("Terasharp  —  Remote", leftMargin, currentY);
  currentY += 12;

  const job3Bullets = [
    "Developed responsive mobile applications for Android & iOS using Flutter and Dart with RESTful API backend integrations.",
    "Assisted in code debugging, unit testing, and resolving cross-platform UI/state synchronization issues.",
  ];

  job3Bullets.forEach((bullet) => {
    doc.fillColor(cSage).font("Helvetica-Bold").fontSize(8).text("▪", leftMargin + 6, currentY);
    doc.fillColor(cBody).font("Helvetica").fontSize(8.3).text(bullet, leftMargin + 16, currentY, {
      width: contentWidth - 16,
      lineGap: 1.2,
    });
    currentY += 18;
  });
  currentY += 4;

  // --- 4. KEY VERIFIED MOBILE PROJECTS ---
  drawSectionHeader("Key Verified Mobile Applications (Store Published)");

  const projectList = [
    {
      name: "AI Math Solver & Scanner App (iOS & Android)",
      desc: "Validated camera OCR equation parsing accuracy, bounding box precision, Postman APIs, and in-app subscriptions.",
    },
    {
      name: "AI Voice Typing Keyboard (Android)",
      desc: "Built Antigravity automated test scripts for multilingual soft keyboards, speech-to-text latency, and IME services.",
    },
    {
      name: "Pronounce & Spell Checker AI (iOS)",
      desc: "Executed comprehensive QA on phonetic voice STT/TTS engine, OCR text recognition, and iOS consent flows.",
    },
    {
      name: "Advanced English Dictionary & Voice Translator (iOS & Android)",
      desc: "Tested offline SQLite database synchronization, audio pronunciation speeds, and home screen widgets.",
    },
  ];

  projectList.forEach((proj) => {
    doc.fillColor(cForest).font("Helvetica-Bold").fontSize(8.5).text(`•  ${proj.name}: `, leftMargin, currentY, {
      continued: true,
    });
    doc.fillColor(cBody).font("Helvetica").fontSize(8.3).text(proj.desc, { width: contentWidth, lineGap: 1.2 });
    currentY += 15;
  });
  currentY += 4;

  // --- 5. EDUCATION ---
  drawSectionHeader("Education");

  doc.fillColor(cForest).font("Helvetica-Bold").fontSize(9).text("Bachelor of Science in Software Engineering (BS SE)", leftMargin, currentY);
  doc.fillColor(cMuted).font("Helvetica-Bold").fontSize(8.5).text("2018 – 2022", leftMargin, currentY, { align: "right", width: contentWidth });
  currentY += 12;

  doc.fillColor(cSage).font("Helvetica-Bold").fontSize(8.5).text("International Islamic University  —  Islamabad, Pakistan", leftMargin, currentY);

  doc.end();

  writeStream.on("finish", () => {
    console.log("Resume PDF generated at:", pdfPathPublic);
    // Copy to out folder as well
    fs.copyFileSync(pdfPathPublic, pdfPathOut);
    console.log("Copied to out directory:", pdfPathOut);
  });
}

createResumePDF();
