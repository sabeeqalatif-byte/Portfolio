const puppeteer = require("puppeteer-core");
const path = require("path");
const fs = require("fs");

async function buildResumePDF() {
  const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
  const edgePath = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";

  const executablePath = fs.existsSync(chromePath) ? chromePath : edgePath;

  const browser = await puppeteer.launch({
    executablePath,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  const filePath = "file:///" + path.resolve("resume.html").replace(/\\/g, "/");

  await page.goto(filePath, { waitUntil: "networkidle0" });

  const destPublic = path.resolve("public/resume/Sabika-Latif-Resume.pdf");
  const destOut = path.resolve("out/resume/Sabika-Latif-Resume.pdf");

  // Ensure directories exist
  fs.mkdirSync(path.dirname(destPublic), { recursive: true });
  fs.mkdirSync(path.dirname(destOut), { recursive: true });

  await page.pdf({
    path: destPublic,
    format: "A4",
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
  });

  fs.copyFileSync(destPublic, destOut);

  await browser.close();
  console.log("Enhancv 2-page Resume PDF built successfully at:", destPublic);
}

buildResumePDF();
