export interface NavItem {
  label: string;
  href: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  platform: "Android" | "Web" | "iOS & Android" | "Cross-Platform";
  role: string;
  description: string;
  testingFocus: string[];
  toolsUsed: string[];
  projectLink?: string;
  githubLink?: string;
  image?: string;
}

export interface ExpertiseArea {
  title: string;
  description: string;
  items: string[];
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location: string;
  availability: string;
}

export const personalData = {
  name: "Sabika Latif",
  role: "QA Engineer / Software Quality Assurance Engineer",
  title: "Sabika Latif | Software Quality Assurance (QA) Engineer",
  tagline:
    "Detail-oriented Software Quality Assurance Engineer specializing in manual testing, mobile application testing (Android & iOS), web testing, API validation, and test automation.",
  about: {
    summary:
      "I am a Software Quality Assurance Engineer focused on verifying and validating mobile (Android, iOS) and web applications. My approach centers on early defect identification, comprehensive functional validation, thorough regression testing, and collaborating with cross-functional development teams to deliver reliable software products.",
    highlights: [
      "Extensive experience in manual exploratory, functional, and regression testing across mobile and web platforms.",
      "Proficient in API testing and validation using Postman, inspecting status codes, payloads, and response integrity.",
      "Actively developing test automation capabilities using Python and Appium for mobile test automation.",
      "Dedicated to clear, reproducible defect documentation and agile sprint collaboration in JIRA and GitLab.",
    ],
  },
  resume: {
    viewPath: "/resume/Sabika-Latif-Resume.pdf",
    downloadPath: "/resume/Sabika-Latif-Resume.pdf",
    fileName: "Sabika-Latif-Resume.pdf",
  },
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Expertise", href: "#expertise" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Testing",
    skills: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Exploratory Testing",
      "UI Testing",
      "Cross-browser Testing",
      "Mobile Testing",
      "Test Case Design",
      "Bug Reporting",
    ],
  },
  {
    title: "API & Data",
    skills: ["API Testing", "Postman", "SQL"],
  },
  {
    title: "Automation",
    skills: ["Python", "Appium"],
  },
  {
    title: "Tools & Methodologies",
    skills: ["JIRA", "GitLab", "Git", "Agile/Scrum"],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "QA Engineer",
    company: "[Company Name]",
    location: "[City, Country / Remote]",
    period: "[Month Year - Present]",
    responsibilities: [
      "Authored and executed comprehensive manual test cases based on product requirement specifications and user stories.",
      "Performed thorough functional, regression, UI, and sanity testing for Android, iOS, and Web releases.",
      "Identified, logged, and tracked defects with detailed reproduction steps, screenshots, device logs, and severity triage.",
      "Validated REST APIs using Postman to verify request/response schemas, status codes, and data consistency.",
      "Collaborated with developers in Agile/Scrum sprints to retest bug fixes and verify production release readiness.",
    ],
    skills: ["Manual Testing", "Mobile QA", "Postman", "JIRA", "Regression Testing"],
  },
  {
    id: "exp-2",
    role: "[Previous QA Role / Associate QA Engineer]",
    company: "[Company Name]",
    location: "[City, Country / Remote]",
    period: "[Month Year - Month Year]",
    responsibilities: [
      "Conducted exploratory and boundary value testing across multiple Android real devices and screen resolutions.",
      "Maintained test documentation and traceability matrices to ensure complete requirement test coverage.",
      "Verified database records and backend updates using SQL queries.",
      "Participated in sprint planning, defect triage meetings, and daily stand-ups.",
    ],
    skills: ["Test Case Design", "Bug Reporting", "SQL", "GitLab", "Agile"],
  },
];

export const projects: ProjectItem[] = [
  {
    id: "ai-maths-solver",
    name: "AI Maths Solver",
    platform: "Android",
    role: "QA Engineer (Mobile Testing)",
    description:
      "An AI-powered Android mobile application that scans, recognizes, and solves complex mathematical equations step-by-step.",
    testingFocus: [
      "Camera OCR & handwriting recognition accuracy validation",
      "Step-by-step solution rendering and UI layout integrity",
      "Network interruption and offline state testing",
      "Device fragmentation across various Android versions and screen densities",
    ],
    toolsUsed: ["Android Studio", "Postman", "JIRA", "Real Devices", "GitLab"],
    projectLink: "[Project Link / Play Store]",
    githubLink: "[GitHub Repository]",
    image: "/images/projects/ai-maths-solver.svg",
  },
  {
    id: "ai-voice-keyboard",
    name: "AI Voice Keyboard",
    platform: "Android",
    role: "QA Engineer (Mobile Testing)",
    description:
      "A smart keyboard utility application featuring real-time AI speech-to-text input, predictive typing, custom themes, and multilingual support.",
    testingFocus: [
      "Microphone permission handling and speech recognition latency",
      "Keyboard responsiveness, IME switching, and memory usage",
      "Multilingual character rendering and special symbol typing",
      "Boundary testing with rapid input, voice pauses, and background noise",
    ],
    toolsUsed: ["Android SDK", "JIRA", "Device Profiler", "Manual Testing"],
    projectLink: "[Project Link / Play Store]",
    githubLink: "[GitHub Repository]",
    image: "/images/projects/ai-voice-keyboard.svg",
  },
  {
    id: "speak-translate",
    name: "Speak & Translate",
    platform: "Android",
    role: "QA Engineer (Mobile Testing)",
    description:
      "A real-time voice and text translation application supporting multi-language conversation mode and text-to-speech playback.",
    testingFocus: [
      "Audio recording quality and translation API payload verification",
      "Voice playback synchronization and UI orientation changes",
      "Handling low connectivity, airplane mode, and API timeout scenarios",
      "Functional validation across multiple international locales",
    ],
    toolsUsed: ["Postman", "Android Devices", "JIRA", "Git"],
    projectLink: "[Project Link / Play Store]",
    githubLink: "[GitHub Repository]",
    image: "/images/projects/speak-translate.svg",
  },
  {
    id: "compliance-web-app",
    name: "Compliance Web Application",
    platform: "Web",
    role: "QA Engineer (Web & API Testing)",
    description:
      "A compliance management web platform for auditing policy workflows, tracking regulatory requirements, and generating audit reports.",
    testingFocus: [
      "End-to-end user role permission testing (RBAC) and data confidentiality",
      "Form validation, file upload security checks, and data export accuracy",
      "Cross-browser testing on Chrome, Firefox, Safari, and Microsoft Edge",
      "Backend REST API request/response validation and status code verification",
    ],
    toolsUsed: ["Postman", "Chrome DevTools", "SQL", "JIRA", "GitLab"],
    projectLink: "[Live Application Link]",
    githubLink: "[GitHub Repository]",
    image: "/images/projects/compliance-web-app.svg",
  },
];

export const expertiseAreas: ExpertiseArea[] = [
  {
    title: "Mobile Testing",
    description:
      "End-to-end testing of mobile applications across diverse Android and iOS devices, ensuring flawless usability and performance.",
    items: [
      "Android application testing",
      "UI validation & layout verification",
      "Functional & workflow testing",
      "Real device & OS fragmentation testing",
      "Regression testing across app updates",
    ],
  },
  {
    title: "Web Testing",
    description:
      "Comprehensive verification of web platforms for functional precision, cross-browser compatibility, and user interface responsiveness.",
    items: [
      "Functional workflow testing",
      "Cross-browser testing (Chrome, Safari, Firefox, Edge)",
      "UI/UX validation & responsive layout checks",
      "Form validation & boundary condition testing",
      "Regression testing on web builds",
    ],
  },
  {
    title: "API Testing",
    description:
      "Validation of backend RESTful web services to ensure contract correctness, data integrity, and error handling resilience.",
    items: [
      "Request/response payload validation",
      "HTTP status code & header verification",
      "Authentication & token validation",
      "Data consistency verification via Postman",
      "Error handling & negative test scenarios",
    ],
  },
  {
    title: "Quality Practices",
    description:
      "Structured QA methodologies ensuring systematic defect prevention, transparent reporting, and continuous product reliability.",
    items: [
      "Test case design & test scenario authoring",
      "Defect reporting with logs & reproduction steps",
      "Retesting bug fixes & regression cycles",
      "Exploratory & edge-case testing",
      "Agile/Scrum team collaboration in JIRA & GitLab",
    ],
  },
];

export const contactInfo: ContactInfo = {
  email: "[your.email@example.com]",
  linkedin: "https://linkedin.com/in/[your-profile]",
  github: "https://github.com/[your-username]",
  location: "[City, Country / Open to Remote]",
  availability: "Open to QA & SDET Opportunities",
};
