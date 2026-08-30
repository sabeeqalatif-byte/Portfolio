# Sabika Latif - QA Engineer Portfolio Website

A production-ready, highly polished, one-page personal portfolio for **Sabika Latif**, Software Quality Assurance (QA) Engineer.

Built with **Next.js (App Router), TypeScript, and Tailwind CSS** featuring an **aesthetic Sea Green Glass dark theme**, optimized for seamless deployment on **Netlify**.

---

## 🌊 Aesthetic & Design System

- **Palette**: Atmospheric oceanic dark base (`#081216`, `#0c1b20`) with sea green, aquamarine, and emerald accents (`#14b8a6`, `#2dd4bf`, `#5eead4`, `#10b981`).
- **Glassmorphism**: Translucent frosted glass cards, subtle luminous borders, and backdrops (`backdrop-blur-md` / `backdrop-blur-lg`).
- **UX & Accessibility**: Accessible contrast, visible focus rings, reduced-motion compliance, semantic HTML5, and responsive layouts across mobile, tablet, laptop, and desktop.

---

## 📁 Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx         # Metadata, OpenGraph, SEO, and Root Layout
│   ├── page.tsx           # Assembles all one-page portfolio sections
│   └── globals.css        # Tailwind directives, Sea Green Glass styling tokens
├── components/
│   ├── Navbar.tsx         # Frosted glass sticky navbar with mobile drawer
│   ├── Hero.tsx           # Headline, QA intro, CTAs, test runner console
│   ├── About.tsx          # Recruiter-friendly bio and 4 QA pillars
│   ├── Skills.tsx         # Grouped skill badges (Testing, API, Automation, Tools)
│   ├── Experience.tsx     # Career timeline with realistic QA activities
│   ├── Projects.tsx       # 4 Showcase case study cards with SVG previews
│   ├── Expertise.tsx      # Mobile, Web, API, and Quality Practices domains
│   ├── Resume.tsx         # Direct View and Download Resume CTAs
│   ├── Contact.tsx        # Email copy button, LinkedIn, GitHub, Location
│   └── Footer.tsx         # Brand, copyright, and navigation
├── data/
│   └── portfolioData.ts   # Centralized data file (edit all content here!)
├── public/
│   ├── favicon.svg        # Sea green QA checkmark shield favicon
│   ├── images/projects/   # Project SVG illustrations & screenshots
│   └── resume/            # Place Sabika-Latif-Resume.pdf here
├── netlify.toml           # Netlify build configuration & security headers
├── next.config.js         # Next.js static export configuration (`output: 'export'`)
├── tailwind.config.ts     # Theme color tokens & glass utilities
└── tsconfig.json          # Strict TypeScript configuration
```

---

## 🛠️ How to Customize Your Portfolio

All content is cleanly separated in **`data/portfolioData.ts`**. You do not need to modify JSX code to update your info!

### 1. Update Personal & Contact Info
Open `data/portfolioData.ts`:
- **Email**: Update `contactInfo.email` (e.g. `yourname@gmail.com`).
- **LinkedIn**: Update `contactInfo.linkedin` with your profile URL.
- **GitHub**: Update `contactInfo.github` with your GitHub URL.
- **Location**: Update `contactInfo.location` (e.g. `New York, NY / Remote`).

### 2. Update Experience & Projects
- **Experience**: Edit `experiences` in `data/portfolioData.ts` to replace placeholder company names and dates with your real employment history.
- **Projects**: The 4 projects (**AI Maths Solver**, **AI Voice Keyboard**, **Speak & Translate**, and **Compliance Web Application**) are pre-configured. You can update links or descriptions anytime in `projects`.
- **Project Screenshots**: Drop your real screenshots into `public/images/projects/` and update the `image` path in `portfolioData.ts`.

### 3. Add Your Real Resume PDF
1. Save your resume PDF as:
   ```
   public/resume/Sabika-Latif-Resume.pdf
   ```
2. The "View Resume" and "Download Resume" buttons will automatically link to it.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start local dev server (http://localhost:3000)
npm run dev

# Build production static export (output to out/ directory)
npm run build
```

---

## 🌐 Deploying to Netlify

This project is configured with `output: 'export'` in `next.config.js` and includes a `netlify.toml` file.

### Option A: Connect via GitHub (Recommended)
1. Push this repository to GitHub.
2. Go to [Netlify](https://app.netlify.com/) and click **"Add new site" > "Import an existing project"**.
3. Select your GitHub repository. Netlify will auto-detect settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out`
4. Click **Deploy Site**.

### Option B: Netlify Drop (Instant Drag & Drop)
1. Run `npm run build` locally.
2. Drag and drop the generated **`out`** folder directly into [Netlify Drop](https://app.netlify.com/drop).
