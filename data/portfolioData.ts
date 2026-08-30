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
  category: "AI & Vision" | "Language & Translation" | "Voice & Input" | "Health & Utilities";
  platform: "iOS & Android" | "iOS" | "Android";
  role: string;
  description: string;
  testingFocus: string[];
  toolsUsed: string[];
  appStoreUrl?: string;
  playStoreUrl?: string;
  image?: string;
  screenshots?: string[];
}

export interface ExpertiseArea {
  title: string;
  description: string;
  items: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
  availability: string;
}

export const personalData = {
  name: "Sabika Latif",
  role: "Software Quality Assurance Engineer | SQA Team Lead",
  title: "Sabika Latif | SQA Team Lead & QA Engineer",
  tagline:
    "Results-driven SQA Team Lead and Quality Assurance Engineer with 2+ years of experience spearheading end-to-end testing across Android, iOS, and web platforms.",
  about: {
    summary:
      "Results-driven SQA Team Lead and Quality Assurance Engineer with 2+ years of experience spearheading end-to-end testing across Android, iOS, and web platforms. Skilled in building test automation frameworks using Antigravity and executing comprehensive manual, API, and UI testing with tools like JIRA, GitLab, and Postman. Proven track record of leading QA initiatives, streamlining CI/CD testing workflows, mentoring teams, and ensuring high-standard product releases in fast-paced Agile environments.",
    highlights: [
      "Tested & verified 15+ live mobile applications published on the Apple App Store & Google Play Store.",
      "2+ years of experience in manual, functional, exploratory, and regression testing across Android & iOS.",
      "Hands-on test automation expertise developing test suites with the Antigravity framework.",
      "In-depth REST API verification, token auth, and synchronization testing using Postman.",
      "Proven leadership managing end-to-end defect lifecycles, test planning, and sprint releases in JIRA & GitLab.",
      "Background in cross-platform mobile development (Flutter/Dart), providing unique architectural insight into bug root-causes.",
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
    title: "Testing Methodologies",
    skills: [
      "Manual Testing",
      "Functional Testing",
      "Regression Testing",
      "Exploratory Testing",
      "UI/UX Testing",
      "Mobile Testing (Android & iOS)",
      "Cross-Platform Testing",
      "Test Case Design & Planning",
      "Defect Lifecycle Management",
      "App Store & Play Store IAP Audits",
      "Privacy & ATT / GDPR Compliance",
    ],
  },
  {
    title: "API & Data Validation",
    skills: [
      "REST API Testing",
      "Postman",
      "Payload Schema Validation",
      "Status Code Verification",
      "SQLite",
      "SQL Data Validation",
    ],
  },
  {
    title: "Automation & Frameworks",
    skills: [
      "Antigravity Framework",
      "Test Automation Scripts",
      "UI Workflow Automation",
      "CI/CD Testing Workflows",
    ],
  },
  {
    title: "Tools, Languages & Development",
    skills: [
      "JIRA",
      "GitLab",
      "Git",
      "Flutter & Dart",
      "Android Studio",
      "Xcode & iOS Simulator",
      "TestFlight",
      "Agile / Scrum",
      "Team Leadership & Mentorship",
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "SQA Team Lead | Senior SQA Engineer",
    company: "Zeesofttech",
    location: "Islamabad, Pakistan",
    period: "10/2024 – Present",
    responsibilities: [
      "Lead end-to-end QA operations across Android, iOS, and web platforms, managing test planning, defect lifecycles via JIRA/GitLab, and team mentorship to ensure reliable releases.",
      "Developed automated test suites using the Antigravity framework to streamline application workflows and significantly reduce manual regression time.",
      "Spearheaded QA releases for 15+ live applications on the Apple App Store and Google Play Store.",
      "Conducted sprint test reviews, defect triage, and cross-functional syncs with product and engineering teams.",
    ],
    skills: ["Antigravity Automation", "Android & iOS QA", "JIRA", "GitLab", "Team Leadership", "CI/CD"],
  },
  {
    id: "exp-2",
    role: "Software Quality Assurance Engineer Intern",
    company: "Zeesofttech",
    location: "Islamabad, Pakistan",
    period: "05/2024 – 10/2024",
    responsibilities: [
      "Authored and executed structured test plans, scenarios, and bug reports across native Android and iOS apps, performing functional, regression, UI/UX, and Postman API testing.",
      "Tracked and prioritized defect lifecycles via JIRA and GitLab, analyzing quality metrics and collaborating with cross-functional teams to streamline sprint releases.",
      "Conducted edge-case exploratory testing and validated in-app subscription and monetization flows.",
    ],
    skills: ["Test Plans & Scenarios", "Postman", "Mobile Testing", "JIRA", "GitLab", "Regression Testing"],
  },
  {
    id: "exp-3",
    role: "Cross-Platform Mobile Application Developer",
    company: "Terasharp",
    location: "Remote",
    period: "11/2023 – 04/2024",
    responsibilities: [
      "Developed and maintained responsive cross-platform mobile applications for Android and iOS using Flutter and Dart, integrating RESTful APIs for seamless backend synchronization.",
      "Collaborated with UI/UX designers and backend engineers to optimize app performance, resolve critical bugs, and deliver stable, high-quality releases.",
    ],
    skills: ["Flutter", "Dart", "RESTful APIs", "Mobile Architecture", "Bug Resolution"],
  },
  {
    id: "exp-4",
    role: "Software Design & Engineering Intern",
    company: "Terasharp",
    location: "Remote",
    period: "08/2023 – 10/2023",
    responsibilities: [
      "Participated in architectural discussions, requirements gathering, and rapid prototyping for multi-tier client software solutions.",
      "Contributed to core feature implementation, routine debugging, and baseline functional testing to guarantee code stability prior to staging deployments.",
    ],
    skills: ["Prototyping", "Functional Testing", "Debugging", "Software Architecture"],
  },
  {
    id: "exp-5",
    role: "Teaching Assistant",
    company: "International Islamic University",
    location: "Islamabad, Pakistan",
    period: "02/2023 – 07/2023",
    responsibilities: [
      "Supported instructors for Social Media Marketing and Technical Writing courses during on-site classes.",
      "Reviewed and graded student projects, quizzes, and writing tasks with clear feedback.",
      "Helped students understand core marketing strategies and professional writing concepts during office hours.",
    ],
    skills: ["Technical Writing", "Academic Mentorship", "Communication"],
  },
];

export const educationData: EducationItem[] = [
  {
    degree: "Bachelor's of Science in Software Engineering",
    institution: "International Islamic University",
    location: "Islamabad, Pakistan",
    period: "2018 – 2022",
  },
];

export const projects: ProjectItem[] = [
  {
    id: "ai-math-solver",
    name: "AI Math Solver & Scanner App",
    category: "AI & Vision",
    platform: "iOS & Android",
    role: "SQA Engineer (Mobile QA & API Testing)",
    description:
      "An AI-driven educational application that scans and solves complex printed and handwritten math problems with step-by-step breakdowns, graphing tools, and formula modules.",
    testingFocus: [
      "Validated camera OCR recognition accuracy, bounding box positioning, and AI equation solving precision across complex mathematical notations.",
      "Verified RESTful APIs via Postman, audited in-app purchase/subscription flows on App Store & Google Play, and tracked defect lifecycles in GitLab.",
      "Performed performance and regression testing to optimize camera memory usage and ensure cross-device UI stability on iOS and Android.",
    ],
    toolsUsed: ["Postman", "GitLab", "iOS & Android Real Devices", "OCR Vision", "In-App Purchases (IAP)"],
    appStoreUrl: "https://apps.apple.com/us/app/ai-math-solver-scanner-app/id6774058690",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.aistudy.math.scan.problemsolver&hl=en",
    image: "/images/projects/ai-maths-solver/math-collage-1.webp",
    screenshots: [
      "/images/projects/ai-maths-solver/math-collage-1.webp",
      "/images/projects/ai-maths-solver/math-collage-2.webp",
      "/images/projects/ai-maths-solver/math-collage-3.webp",
    ],
  },
  {
    id: "ai-voice-keyboard",
    name: "AI Voice Typing Keyboard",
    category: "Voice & Input",
    platform: "Android",
    role: "SQA Engineer (Test Automation & Mobile QA)",
    description:
      "An AI-driven input method application featuring real-time speech-to-text voice typing, integrated AI writing assistance, live text translation, smart grammar checking, and tone rewriting.",
    testingFocus: [
      "Developed automation test scripts using the Antigravity framework to validate multilingual keyboard layouts, character mappings, and automated UI workflows across Android devices.",
      "Executed end-to-end QA for voice recognition accuracy across accents, real-time speech-to-text latency, and cloud-based AI text generation/rewriting APIs via Postman.",
      "Validated background service stability, memory consumption during prolonged audio streaming, and defect lifecycles using JIRA and GitLab.",
    ],
    toolsUsed: ["Antigravity Framework", "Postman", "JIRA", "GitLab", "Android SDK", "Audio & IME Testing"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.aivoice.keyboard.voicetyping&hl=en",
    image: "/images/projects/ai-voice-keyboard/voice-1.jpg",
    screenshots: [
      "/images/projects/ai-voice-keyboard/voice-1.jpg",
      "/images/projects/ai-voice-keyboard/voice-2.jpg",
      "/images/projects/ai-voice-keyboard/voice-3.webp",
    ],
  },
  {
    id: "pronounce-spell-checker",
    name: "Pronounce and Spell Checker AI",
    category: "Language & Translation",
    platform: "iOS",
    role: "SQA Engineer (AI Speech & Privacy QA)",
    description:
      "An AI-powered language assistant offering smart spell-checking, phonetic breakdowns, accent training (US, UK, AUS), camera-based OCR text extraction, live voice translation, and interactive flashcards.",
    testingFocus: [
      "Validated core speech recognition (STT) and text-to-speech (TTS) playback quality, ensuring accurate pronunciation rendering and latency across diverse accents.",
      "Executed end-to-end testing for OCR camera scanning, offline/online dictionary queries, and live two-way voice translation APIs using Postman.",
      "Performed compatibility and compliance testing across iOS versions (including iOS 15+ retrofitting), validating App Tracking Transparency (ATT), GDPR consent flows, and in-app purchase subscriptions.",
    ],
    toolsUsed: ["Speech Recognition STT/TTS", "Postman APIs", "App Tracking Transparency (ATT)", "GDPR Consent", "JIRA", "GitLab"],
    appStoreUrl: "https://apps.apple.com/us/app/pronounce-spell-checker-ai/id6739133471",
    image: "/images/projects/pronounce-spell-checker.svg",
  },
  {
    id: "english-dictionary",
    name: "English Dictionary & Voice Translator",
    category: "Language & Translation",
    platform: "iOS & Android",
    role: "SQA Engineer (iOS App & Data Validation)",
    description:
      "A comprehensive language learning and reference app featuring offline word definitions, synonyms/antonyms, voice/text search, camera-based OCR translation, and interactive TTS audio pronunciations.",
    testingFocus: [
      "Executed functional and regression testing across core modules including offline local SQLite/database lookups, camera text extraction, and multilingual translation workflows.",
      "Validated audio playback speed controls, home screen widget synchronization (Word of the Day), and bookmarking/search history data persistence.",
      "Tested monetization flows including in-app purchases (monthly/yearly subscriptions, ad removal) and handled cross-device layout validation on iPhone and iPad.",
    ],
    toolsUsed: ["iOS & Android", "SQLite Database", "TestFlight", "TTS / Audio Validation", "Postman"],
    appStoreUrl: "https://apps.apple.com/us/app/english-dictionary/id1214637073",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.advanced.englishdictionary.voicetranslator&hl=en",
    image: "/images/projects/english-dictionary.svg",
  },
  {
    id: "speech-to-text-voice-notes",
    name: "Speech to Text Voice Notes",
    category: "Voice & Input",
    platform: "iOS & Android",
    role: "SQA Engineer (Audio & Speech QA)",
    description:
      "A productivity application for real-time speech-to-text note taking, audio recording transcription, audio playback, and multi-format document exporting.",
    testingFocus: [
      "Tested real-time voice-to-text transcription accuracy, continuous audio recording in background state, and noise resilience.",
      "Verified note categorization, offline text persistence, export functionality (PDF/TXT), and cloud backup synchronization.",
      "Conducted regression and performance profiling to prevent audio clipping and memory leaks during lengthy recordings.",
    ],
    toolsUsed: ["Audio Testing", "Postman", "Android SDK", "iOS TestFlight", "JIRA"],
    appStoreUrl: "https://apps.apple.com/us/app/speech-to-text-voice-notes/id1458253978",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.ai.voicenotes.speechtotext.audiowriter&hl=en",
    image: "/images/projects/speak-translate.svg",
  },
  {
    id: "personal-diary-with-lock",
    name: "Personal Diary with Lock & Secret",
    category: "Health & Utilities",
    platform: "iOS & Android",
    role: "SQA Engineer (Security & Storage QA)",
    description:
      "A daily journal and mood tracker application featuring biometric/PIN security lock, cloud backup, photo attachments, and customizable journal themes.",
    testingFocus: [
      "Tested biometric (FaceID/Fingerprint) and PIN authentication security, ensuring zero unauthorized access vulnerabilities.",
      "Validated local SQLite encryption, database migration integrity across app updates, and cloud sync reliability.",
      "Audited premium theme unlock mechanisms and in-app purchase subscriptions on App Store & Google Play.",
    ],
    toolsUsed: ["Security Testing", "Biometric Validation", "SQLite Encryption", "IAP Audit", "JIRA"],
    appStoreUrl: "https://apps.apple.com/us/app/personal-diary-with-lock/id6504294747",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.personal.diary.mydiary.secret",
    image: "/images/projects/compliance-web-app.svg",
  },
  {
    id: "english-urdu-voice-translator",
    name: "English to Urdu Voice Translator",
    category: "Language & Translation",
    platform: "iOS & Android",
    role: "SQA Engineer (Translation & Localization QA)",
    description:
      "A dedicated two-way English and Urdu conversation translator with offline phrasebook, Nastaliq Urdu font rendering, and voice output.",
    testingFocus: [
      "Validated bilingual bidirectional speech recognition and Nastaliq script font rendering accuracy.",
      "Tested conversation mode latency, offline phrasebook lookups, and API error handling under slow network conditions.",
    ],
    toolsUsed: ["Localization Testing", "Nastaliq Rendering", "Postman", "Mobile QA"],
    appStoreUrl: "https://apps.apple.com/us/app/english-urdu-voice-translator/id1453315547",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.learn.englishinurdu.translatordictionary&hl=en",
    image: "/images/projects/english-dictionary.svg",
  },
  {
    id: "blood-pressure-tracker",
    name: "Blood Pressure Tracker & Heart Rate",
    category: "Health & Utilities",
    platform: "Android",
    role: "SQA Engineer (Health Data & Analytics QA)",
    description:
      "A health monitoring tool tracking systolic/diastolic blood pressure trends, heart rate pulse logging, interactive health charts, and PDF medical report export.",
    testingFocus: [
      "Verified calculation accuracy for blood pressure classifications (AHA guidelines) and graphical chart trend rendering.",
      "Tested data boundary values, reminder notification triggers, and medical PDF report export integrity.",
    ],
    toolsUsed: ["Data Accuracy Testing", "Boundary Analysis", "Android Real Devices", "JIRA"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.bloodpressure.tracker.heart.rate&hl=en",
    image: "/images/projects/ai-maths-solver.svg",
  },
  {
    id: "weight-loss-calorie-tracker",
    name: "Weight Loss Smart Calorie Calculator",
    category: "Health & Utilities",
    platform: "Android",
    role: "SQA Engineer (Formula & Nutrition QA)",
    description:
      "A smart calorie and BMI tracking utility offering daily macro calculators, weight progress tracking, and personalized diet goal forecasting.",
    testingFocus: [
      "Tested BMR/TDEE formula calculation precision against various user demographic inputs (age, weight, height, activity).",
      "Verified local data persistence, streak tracking algorithms, and localized metric/imperial unit conversions.",
    ],
    toolsUsed: ["Formula Validation", "Unit Conversion Testing", "SQLite", "GitLab"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.weightloss.smartcalorie.tracker&hl=en",
    image: "/images/projects/ai-voice-keyboard.svg",
  },
  {
    id: "write-sms-by-voice",
    name: "Write SMS by Voice & Voice Typing",
    category: "Voice & Input",
    platform: "Android",
    role: "SQA Engineer (SMS & Voice Messaging QA)",
    description:
      "A hands-free voice-to-text messaging utility enabling users to dictate SMS, copy to messaging platforms, and speak in multiple regional languages.",
    testingFocus: [
      "Validated SMS telephony integration, microphone hardware access permissions, and clipboard data transfer.",
      "Tested multi-language speech recognition engine switching and special punctuation voice command recognition.",
    ],
    toolsUsed: ["Telephony Testing", "Speech Recognition", "Android Permissions", "JIRA"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.voicesms.message.voicetyping.keyboard&hl=en",
    image: "/images/projects/speak-translate.svg",
  },
  {
    id: "speech-to-text-converter",
    name: "Speech to Text Converter",
    category: "Voice & Input",
    platform: "Android",
    role: "SQA Engineer (Audio Conversion QA)",
    description:
      "Fast audio-to-text transcribing utility with multi-lingual audio recognition and instant text sharing across social platforms.",
    testingFocus: [
      "Tested continuous speech dictation, background noise filtering, and audio stream buffer management.",
      "Verified quick sharing intents to WhatsApp, Email, and Notes without text truncations.",
    ],
    toolsUsed: ["Audio Stream QA", "Intent Testing", "Android OS Fragmentation"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.speechtotext.converter.app&hl=en",
    image: "/images/projects/ai-voice-keyboard.svg",
  },
  {
    id: "all-languages-voice-keyboard",
    name: "All Languages Voice Typing Keyboard",
    category: "Voice & Input",
    platform: "Android",
    role: "SQA Engineer (IME & Layout QA)",
    description:
      "Multilingual soft keyboard supporting speech input across 100+ languages, custom keyboard themes, and emoji integrations.",
    testingFocus: [
      "Validated Android InputMethodService lifecycle, keyboard pop-up latency, and keypress haptic feedback.",
      "Tested RTL (Right-to-Left) language layouts for Arabic/Urdu and special character keyboards.",
    ],
    toolsUsed: ["IME Testing", "RTL Localization", "Memory Profiling", "JIRA"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.all.languages.voicetyping.keyboard&hl=en",
    image: "/images/projects/ai-voice-keyboard.svg",
  },
  {
    id: "calcbook-notepad-calculator",
    name: "CalcBook - Smart Notepad & Calculator",
    category: "Health & Utilities",
    platform: "Android",
    role: "SQA Engineer (Math Engine & Note QA)",
    description:
      "An innovative hybrid notebook calculator that computes inline calculations dynamically as you type notes and budgets.",
    testingFocus: [
      "Tested real-time arithmetic parser validation, inline syntax error handling, and multi-currency formatting.",
      "Verified automatic calculation updates when preceding numbers or variables in notes were modified.",
    ],
    toolsUsed: ["Parser Validation", "Boundary Value Analysis", "Regression Testing"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.smart.notepad.calculator&hl=en",
    image: "/images/projects/ai-maths-solver.svg",
  },
  {
    id: "duplicate-contacts-remover",
    name: "Duplicate Contacts Remover & Backup",
    category: "Health & Utilities",
    platform: "Android",
    role: "SQA Engineer (Contact Provider & Sync QA)",
    description:
      "A contact cleaner utility that scans, merges duplicate phone numbers/emails, removes empty contacts, and creates VCF cloud backups.",
    testingFocus: [
      "Tested Android ContactProvider read/write safety, ensuring zero accidental loss of legitimate contact records.",
      "Validated duplicate matching algorithms across exact and partial name/phone duplicates and VCF backup restoration.",
    ],
    toolsUsed: ["ContactProvider QA", "VCF Format Testing", "Data Safety Verification"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.duplicatecontacts.remover.backup.recovery&hl=en",
    image: "/images/projects/compliance-web-app.svg",
  },
  {
    id: "numbers-to-words-converter",
    name: "Numbers to Words Converter",
    category: "Health & Utilities",
    platform: "Android",
    role: "SQA Engineer (Algorithmic Logic QA)",
    description:
      "A financial number spell-out tool converting large currency figures into words in International and South Asian (Lakh/Crore) systems.",
    testingFocus: [
      "Tested large integer boundaries (up to Billions/Trillions & Arab/Kharab) and decimal currency representations.",
      "Verified copy-to-clipboard formatting and TTS pronunciation clarity.",
    ],
    toolsUsed: ["Boundary Testing", "Number System Algorithms", "Android Devices"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.numberstowords.converter&hl=en",
    image: "/images/projects/ai-maths-solver.svg",
  },
  {
    id: "true-mirror-makeup-zoom",
    name: "True Mirror - Makeup & Zoom Camera",
    category: "Health & Utilities",
    platform: "Android",
    role: "SQA Engineer (Camera Hardware & UI QA)",
    description:
      "A high-definition pocket mirror utility offering front camera zoom controls, freeze frame, exposure brightness boost, and selfie lighting.",
    testingFocus: [
      "Tested Camera2 API hardware integration, pinch-to-zoom smoothness, and screen brightness boost functionality.",
      "Verified freeze-frame image rendering, low-light image quality, and orientation changes.",
    ],
    toolsUsed: ["Camera2 API Testing", "Hardware Sensor QA", "UI Responsiveness"],
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.truemirror.makeup.zoom.camera&hl=en",
    image: "/images/projects/compliance-web-app.svg",
  },
];

export const expertiseAreas: ExpertiseArea[] = [
  {
    title: "Mobile QA (Android & iOS)",
    description:
      "End-to-end testing of 15+ live mobile apps on App Store & Google Play, verifying OCR camera scanning, audio streaming, voice typing, IAP monetization, and OS retrofitting.",
    items: [
      "Native Android & iOS application testing",
      "OCR camera scanning & UI layout precision",
      "Audio playback, STT speech recognition & TTS testing",
      "In-App Purchases & monetization audit (App Store / Play Store)",
      "App Tracking Transparency (ATT) & GDPR compliance",
    ],
  },
  {
    title: "API & Backend Validation",
    description:
      "Rigorous REST API verification validating payload schemas, token authorization, response times, and offline database synchronization.",
    items: [
      "RESTful API validation via Postman",
      "Payload schemas, headers & status code checks",
      "Cloud AI text generation/rewriting endpoint checks",
      "Local SQLite database lookups & data persistence",
      "Network interruption, low-connectivity & timeout handling",
    ],
  },
  {
    title: "Test Automation",
    description:
      "Building robust automated testing workflows with Antigravity to accelerate regression test cycles and ensure continuous release stability.",
    items: [
      "Automated test suites with Antigravity framework",
      "Multilingual UI workflow automation",
      "CI/CD testing pipeline integration",
      "Defect prevention via automated regression gates",
      "Performance & memory consumption profiling",
    ],
  },
  {
    title: "QA Leadership & Sprints",
    description:
      "Leading end-to-end QA initiatives, test planning, defect triage, team mentorship, and agile collaboration in JIRA and GitLab.",
    items: [
      "Test strategy, test plans & scenario design",
      "Comprehensive defect tracking in JIRA & GitLab",
      "Sprint planning & cross-functional developer collaboration",
      "Team mentorship & QA workflow optimization",
      "Production release verification & sign-offs",
    ],
  },
];

export const contactInfo: ContactInfo = {
  phone: "+923095945909",
  email: "sabikalatif2@gmail.com",
  linkedin: "https://www.linkedin.com/in/sabika-latif",
  github: "https://github.com/sabeeqalatif-byte",
  location: "Rawalpindi / Islamabad, Pakistan",
  availability: "Open to Remote Opportunities (Worldwide)",
};
