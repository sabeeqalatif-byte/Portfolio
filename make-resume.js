const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

function generateOnePageResume() {
  // Standard A4 page is 595.28 x 841.89 points
  const doc = new PDFDocument({
    size: "A4",
    margins: { top: 28, bottom: 24, left: 34, right: 34 },
    info: {
      Title: "Sabika Latif - SQA Engineer Resume",
      Author: "Sabika Latif",
      Subject: "Software Quality Assurance Engineer | SQA Team Lead",
    },
  });

  const destPublic = path.join(__dirname, "public", "resume", "Sabika-Latif-Resume.pdf");
  const destOut = path.join(__dirname, "out", "resume", "Sabika-Latif-Resume.pdf");

  const writeStream = fs.createWriteStream(destPublic);
  doc.pipe(writeStream);

  // Exact Pine Green Palette & Clean Typography Colors
  const cPineDark = "#2c3c2f";   // Headings, Name, Key Positions (Pine Green)
  const cPineMedium = "#3d5341"; // Section Subheaders, Bullets, Accents
  const cSage = "#58795e";       // Subtle Lines & Dates
  const cBody = "#222222";       // Crisp high-legibility dark charcoal for body text
  const cMuted = "#555555";      // Metadata & Dates
  const cLink = "#2c3c2f";       // Links in Pine Green

  const left = 34;
  const contentWidth = 595.28 - 68; // 527.28 points

  // --- 1. HEADER (Clean, Professional, No bulky boxes) ---
  doc.fillColor(cPineDark).font("Helvetica-Bold").fontSize(20).text("SABIKA LATIF", left, 28, {
    characterSpacing: 0.8,
  });

  doc.fillColor(cPineMedium).font("Helvetica-Bold").fontSize(10.5).text(
    "Software Quality Assurance Engineer | SQA Team Lead",
    left,
    52
  );

  // Contact line 1
  const contactLine =
    "Email: Sabikalatif2@gmail.com   |   Phone: +923095945909   |   Location: Rawalpindi / Islamabad, Pakistan";
  doc.fillColor(cMuted).font("Helvetica").fontSize(8.5).text(contactLine, left, 67);

  // Contact line 2 with links
  doc.fillColor(cMuted).font("Helvetica").fontSize(8.5).text("LinkedIn: ", left, 79, { continued: true });
  doc.fillColor(cLink).font("Helvetica-Bold").text("linkedin.com/in/sabika-latif", {
    link: "https://www.linkedin.com/in/sabika-latif",
    underline: true,
    continued: true,
  });
  doc.fillColor(cMuted).font("Helvetica").text("   |   Portfolio: ", { continued: true });
  doc.fillColor(cLink).font("Helvetica-Bold").text("sabeeqalatif-byte.github.io/Portfolio", {
    link: "https://www.linkedin.com/in/sabika-latif",
    underline: true,
  });

  // Divider line
  doc.strokeColor(cSage).lineWidth(1.2).moveTo(left, 96).lineTo(left + contentWidth, 96).stroke();

  let y = 104;

  // Helper for Section Headers
  function sectionHeader(title) {
    doc.fillColor(cPineDark).font("Helvetica-Bold").fontSize(10).text(title.toUpperCase(), left, y, {
      characterSpacing: 0.6,
    });
    const lineY = y + 12;
    doc.strokeColor(cSage).lineWidth(0.8).moveTo(left, lineY).lineTo(left + contentWidth, lineY).stroke();
    y += 18;
  }

  // --- 2. SUMMARY ---
  sectionHeader("Summary");
  const summaryText =
    "Results-driven SQA Team Lead and Quality Assurance Engineer with 2+ years of experience spearheading end-to-end testing across Android, iOS, and web platforms. Skilled in building test automation frameworks using Antigravity and executing comprehensive manual, API, and UI testing with tools like JIRA, GitLab, and Postman. Proven track record of leading QA initiatives, streamlining CI/CD testing workflows, mentoring teams, and ensuring high-standard product releases in fast-paced Agile environments.";

  doc.fillColor(cBody).font("Helvetica").fontSize(8.5).text(summaryText, left, y, {
    width: contentWidth,
    lineGap: 2,
    align: "justify",
  });
  y += 44;

  // --- 3. EXPERIENCE ---
  sectionHeader("Experience");

  // Job 1: SQA Team Lead
  doc.fillColor(cPineDark).font("Helvetica-Bold").fontSize(9.5).text("SQA Team Lead | Senior SQA Engineer", left, y);
  doc.fillColor(cMuted).font("Helvetica-Bold").fontSize(8.5).text("09/2024 – Present", left, y, {
    align: "right",
    width: contentWidth,
  });
  y += 11;

  doc.fillColor(cPineMedium).font("Helvetica-Bold").fontSize(8.5).text("Zeesofttech", left, y, { continued: true });
  doc.fillColor(cMuted).font("Helvetica").text("  —  Islamabad, Pakistan");
  y += 11;

  const job1Bullets = [
    "Lead end-to-end QA operations across Android, iOS, and web platforms, managing test planning, defect lifecycles via JIRA/GitLab, and team mentorship to ensure reliable releases.",
    "Developed automated test suites using the Antigravity framework to streamline application workflows and significantly reduce manual regression time.",
  ];

  job1Bullets.forEach((bullet) => {
    doc.fillColor(cPineMedium).font("Helvetica-Bold").fontSize(8).text("•", left + 4, y);
    doc.fillColor(cBody).font("Helvetica").fontSize(8.5).text(bullet, left + 14, y, {
      width: contentWidth - 14,
      lineGap: 1.5,
    });
    y += 22;
  });
  y += 3;

  // Job 2: SQA Intern
  doc.fillColor(cPineDark).font("Helvetica-Bold").fontSize(9.5).text("Software Quality Assurance Engineer Intern", left, y);
  doc.fillColor(cMuted).font("Helvetica-Bold").fontSize(8.5).text("05/2024 – 09/2024", left, y, {
    align: "right",
    width: contentWidth,
  });
  y += 11;

  doc.fillColor(cPineMedium).font("Helvetica-Bold").fontSize(8.5).text("Zeesofttech", left, y, { continued: true });
  doc.fillColor(cMuted).font("Helvetica").text("  —  Islamabad, Pakistan");
  y += 11;

  const job2Bullets = [
    "Authored and executed structured test plans, scenarios, and bug reports across native Android and iOS apps, performing functional, regression, UI/UX, and Postman API testing.",
    "Tracked and prioritized defect lifecycles via JIRA and GitLab, analyzing quality metrics and collaborating with cross-functional teams to streamline sprint releases.",
  ];

  job2Bullets.forEach((bullet) => {
    doc.fillColor(cPineMedium).font("Helvetica-Bold").fontSize(8).text("•", left + 4, y);
    doc.fillColor(cBody).font("Helvetica").fontSize(8.5).text(bullet, left + 14, y, {
      width: contentWidth - 14,
      lineGap: 1.5,
    });
    y += 22;
  });
  y += 3;

  // Job 3: Mobile Developer
  doc.fillColor(cPineDark).font("Helvetica-Bold").fontSize(9.5).text("Cross-Platform Mobile Application Developer", left, y);
  doc.fillColor(cMuted).font("Helvetica-Bold").fontSize(8.5).text("10/2023 – 03/2024", left, y, {
    align: "right",
    width: contentWidth,
  });
  y += 11;

  doc.fillColor(cPineMedium).font("Helvetica-Bold").fontSize(8.5).text("Terasharp", left, y, { continued: true });
  doc.fillColor(cMuted).font("Helvetica").text("  —  Remote");
  y += 11;

  const job3Bullets = [
    "Developed and maintained responsive cross-platform mobile applications for Android and iOS using Flutter and Dart, integrating RESTful APIs for seamless backend synchronization.",
    "Collaborated with UI/UX designers and backend engineers to optimize app performance, resolve critical bugs, and deliver stable, high-quality releases.",
  ];

  job3Bullets.forEach((bullet) => {
    doc.fillColor(cPineMedium).font("Helvetica-Bold").fontSize(8).text("•", left + 4, y);
    doc.fillColor(cBody).font("Helvetica").fontSize(8.5).text(bullet, left + 14, y, {
      width: contentWidth - 14,
      lineGap: 1.5,
    });
    y += 22;
  });
  y += 3;

  // Job 4: Software Design Intern
  doc.fillColor(cPineDark).font("Helvetica-Bold").fontSize(9.5).text("Software Design & Engineering Intern", left, y);
  doc.fillColor(cMuted).font("Helvetica-Bold").fontSize(8.5).text("07/2023 – 09/2023", left, y, {
    align: "right",
    width: contentWidth,
  });
  y += 11;

  doc.fillColor(cPineMedium).font("Helvetica-Bold").fontSize(8.5).text("Terasharp", left, y, { continued: true });
  doc.fillColor(cMuted).font("Helvetica").text("  —  Remote");
  y += 11;

  const job4Bullets = [
    "Participated in architectural discussions, requirements gathering, and rapid prototyping for multi-tier client software solutions.",
    "Contributed to core feature implementation, routine debugging, and baseline functional testing to guarantee code stability prior to staging deployments.",
  ];

  job4Bullets.forEach((bullet) => {
    doc.fillColor(cPineMedium).font("Helvetica-Bold").fontSize(8).text("•", left + 4, y);
    doc.fillColor(cBody).font("Helvetica").fontSize(8.5).text(bullet, left + 14, y, {
      width: contentWidth - 14,
      lineGap: 1.5,
    });
    y += 22;
  });
  y += 4;

  // --- 4. PROJECTS & LIVE PORTFOLIO ---
  sectionHeader("Live Mobile Projects & QA Portfolio");
  doc.fillColor(cBody).font("Helvetica").fontSize(8.5).text(
    "Tested and verified 15+ live mobile applications published on the Apple App Store & Google Play Store, covering camera OCR vision, real-time speech STT/TTS synthesis, Antigravity automation, and in-app purchase audits.",
    left,
    y,
    { width: contentWidth, lineGap: 1.5 }
  );
  y += 24;

  doc.fillColor(cPineMedium).font("Helvetica-Bold").fontSize(8.5).text("🔗 Interactive Portfolio & Live Store Links: ", left, y, { continued: true });
  doc.fillColor(cLink).font("Helvetica-Bold").text("https://sabeeqalatif-byte.github.io/Portfolio", {
    link: "https://www.linkedin.com/in/sabika-latif",
    underline: true,
  });
  y += 16;

  // --- 5. SKILLS & COMPETENCIES ---
  sectionHeader("Skills & Tools");
  const skillsList = [
    { label: "Testing", items: "Manual QA, Functional Testing, Regression, Exploratory, UI/UX, Mobile QA (Android & iOS), Test Plans, Defect Lifecycle" },
    { label: "Automation & APIs", items: "Antigravity Test Automation, Postman, REST API Verification, JSON Schema Validation, SQLite" },
    { label: "Tools & Leadership", items: "JIRA, GitLab, Git, TestFlight, Android Studio, Xcode, Flutter & Dart, Agile/Scrum Sprint Leadership" },
  ];

  skillsList.forEach((s) => {
    doc.fillColor(cPineMedium).font("Helvetica-Bold").fontSize(8.5).text(`•  ${s.label}: `, left, y, { continued: true });
    doc.fillColor(cBody).font("Helvetica").fontSize(8.5).text(s.items, { width: contentWidth, lineGap: 1.2 });
    y += 13;
  });
  y += 4;

  // --- 6. EDUCATION ---
  sectionHeader("Education");
  doc.fillColor(cPineDark).font("Helvetica-Bold").fontSize(9).text("Bachelor's of Science in Software Engineering (BS SE)", left, y);
  doc.fillColor(cMuted).font("Helvetica-Bold").fontSize(8.5).text("2018 – 2022", left, y, {
    align: "right",
    width: contentWidth,
  });
  y += 11;

  doc.fillColor(cPineMedium).font("Helvetica-Bold").fontSize(8.5).text("International Islamic University", left, y, { continued: true });
  doc.fillColor(cMuted).font("Helvetica").text("  —  Islamabad, Pakistan");

  doc.end();

  writeStream.on("finish", () => {
    console.log("One-page Pine Green Resume generated at:", destPublic);
    fs.copyFileSync(destPublic, destOut);
    console.log("Copied to out folder:", destOut);
  });
}

generateOnePageResume();
