# Software Quality Assurance (QA) Engineer Portfolio

A clean, modern, fully responsive, one-page static portfolio website crafted specifically for Software Quality Assurance (QA / SQA) Engineers and SDETs.

Built with **vanilla HTML5, CSS3, and JavaScript** — zero frameworks, no backend required, 100% offline and browser ready.

---

## 🚀 Live Preview / Local Testing

To view the portfolio locally:
1. Open the project folder (`Portfolio/`).
2. Double-click **`index.html`** or right-click and choose **Open with > Chrome / Firefox / Edge / Safari**.

Alternatively, if you use VS Code / Live Server:
- Right-click `index.html` and click **"Open with Live Server"**.

---

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main semantic HTML5 markup containing all 8 sections
├── assets/
│   └── favicon.svg     # QA Quality shield checkmark favicon (SVG)
├── css/
│   └── style.css       # Responsive styling, Dark/Light themes, animations
├── js/
│   └── main.js         # Theme toggle, mobile drawer, project filters, contact form
└── README.md           # Documentation & customization guide
```

---

## 🛠️ How to Customize Your Portfolio

All personal information and unprovided data are clearly marked with `[Square Brackets]` (e.g. `[Your Name]`) and styled with the `.ph` class for quick identification.

### 1. Update Personal Information (`index.html`)
Search for `ph` or `[` in `index.html` to quickly find and replace:
- **`[Your Name]`**: Replace with your full name.
- **`[your.email@example.com]`**: Replace with your email (remember to also update the `data-email` attribute on the copy button in `#contact`).
- **`[linkedin.com/in/yourprofile]`**: Replace with your LinkedIn profile URL.
- **`[github.com/yourusername]`**: Replace with your GitHub profile URL.
- **`[City, State / Country]`**: Replace with your current location and availability (e.g., Remote / On-site).

### 2. Update Experience & Projects (`index.html`)
- **Experience**: Replace `[Company Name]`, `[Month Year - Present]`, and metrics (`[X0%]`, `[X00+]`) with your real work history.
- **Projects**: Replace project titles, descriptions, and update links (`[GitHub Repo]` and `[Test Report]`).
- **Certifications & Education**: Add your real certificates (e.g., ISTQB CTFL, AWS Certified, Postman Certified) and university degree.

### 3. Add Your Resume PDF
1. Save your resume as `assets/resume.pdf`.
2. In `index.html` (around the Resume section), change the download link:
   ```html
   <a href="assets/resume.pdf" download class="btn btn-primary">
     Download Resume (PDF)
   </a>
   ```

---

## 🎨 Features & Highlights

- **8 Dedicated Sections**:
  1. **Hero**: Headline, QA value statement, quick statistics badges, and a simulated QA test runner terminal.
  2. **About Me**: Professional summary, 4 QA pillars (Shift-Left, Automation, Performance, Exploratory), Education & Certifications.
  3. **Skills**: Categorized competencies (Test Automation, API & Performance, Methodologies, Test Management, CI/CD, Languages & DBs).
  4. **Experience**: Career timeline with QA-specific bullet points and tech tags.
  5. **Projects**: Filterable project gallery (`All`, `Automation Frameworks`, `API Testing`, `Performance & Mobile`).
  6. **QA Testing Expertise**: Detailed breakdown of Test Strategy, Defect Lifecycle, CI/CD Quality Gates, and Non-Functional Testing.
  7. **Resume**: Preview highlights and direct download action.
  8. **Contact**: Quick-copy email button with feedback toast, direct social links, and an interactive contact form.
- **Dark / Light Theme**: One-click theme toggle with automatic preference saving (`localStorage`).
- **Fully Responsive**: Optimized for Desktop, Laptop, Tablet, and Mobile.
- **Accessible & Clean**: Semantic HTML5 elements, ARIA labels, keyboard focus rings, and high-contrast styling.

---

## 🌐 Free Deployment Options

- **GitHub Pages**: Push this repo to GitHub, go to **Settings > Pages**, and select `main` branch root.
- **Netlify / Vercel**: Drag and drop the `Portfolio` folder into [Netlify Drop](https://app.netlify.com/drop).
