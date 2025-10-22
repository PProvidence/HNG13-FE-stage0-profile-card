# HNG13-FE-Stage-0-1-Profile-Application

A responsive, accessible, and testable multi-page web application built with **plain HTML, CSS, and vanilla JavaScript**. This project satisfies the **HNG Internship Stage 0 & Stage 1 task** requirements and features a pink, modern, minimalistic design with light/dark theme support.

## 🎯 Features

### Stage 0 - Profile Card
- All required `data-testid` attributes are included for automated testing:
  - `test-profile-card`, `test-user-name`, `test-user-bio`, `test-user-time`,
    `test-user-avatar`, `test-user-social-links`, `test-user-social-twitter`,
    `test-user-social-linkedin`, `test-user-social-github`, `test-user-hobbies`,
    `test-user-dislikes`.
- Current time shown in **milliseconds** (value equals `Date.now()` on render; updates every second).
- Avatar customization via URL or file upload:
  - An **image URL** (paste into the "Avatar image URL" field and press Enter), or
  - **File upload** (select an image file and it will display).
- Social links with proper security attributes,  open in new tabs with `rel="noopener noreferrer"`.
- Light and dark theme support with system preference detection:
  - Default follows the user's system preference (`prefers-color-scheme`).
  - Manual toggle available.
- Fully Keyboard-accessible controls and visible focus styles.
- Responsive layout (mobile-first, stacks vertically on small screens; side-by-side on larger screens).
- Built using only vanilla HTML, CSS and JavaScript.
- Semantic HTML structure (`<article>`, `<figure>`, `<nav>`, `<section>`)

### ✨ Stage 1 - New Pages

#### Contact Us Page
- **Form with validation** including:
  - Full name field (required)
  - Email field (required, must be valid format)
  - Subject field (required)
  - Message field (required, minimum 10 characters)
  - Submit button
- **Real-time validation** with error messages
- **Success message** displayed after valid submission
- All inputs properly labeled with `for` attributes
- Error messages linked via `aria-describedby`
- Fully keyboard accessible

#### About Me Page
- **Five reflective sections**:
  - Bio (my story and journey)
  - Goals in this program
  - Areas of low confidence
  - Note to future self
  - Extra thoughts
- Semantic HTML structure with `<main>`, `<section>`, and proper headings
- All sections have required `data-testid` attributes
- Responsive and accessible design

## Files
- `index.html` — main page with semantic markup and data-testids.
- `styles.css` — vanilla CSS with CSS variables, responsive rules, and animations.
- `script.js` — small vanilla JS for the clock, avatar handling, and theme toggle.
- `images/` — folder for the default avatar image.



## 🚀 How to run locally
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/HNG13-FE-stage0-profile-card.git
   cd HNG13-FE-stage-0-1-profile
    ```

2. **Open in browser:**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     ```

3. **View the application:**
    - Navigate to `http://localhost:8000` (or the port your server is running on)

4. **Navigate between pages:**
   - Use the navigation menu at the top
   - All pages are interconnected


## ✅ Acceptance Criteria Met

### Contact Us Page
- ✅ All required fields with correct `data-testid` attributes
- ✅ Client-side validation prevents invalid submissions
- ✅ Email validation (name@example.com format)
- ✅ Message minimum length validation (10 characters)
- ✅ Success message shows only after valid submission
- ✅ All inputs have linked labels (`for` attribute)
- ✅ Error messages use `aria-describedby`
- ✅ Keyboard accessible and focusable

### About Me Page
- ✅ All five required sections present
- ✅ Correct `data-testid` attributes on all sections
- ✅ Wrapped in `<main data-testid="test-about-page">`
- ✅ Semantic HTML (`<section>`, `<ul>`, `<p>`, `<h2>`, `<h3>`)
- ✅ Proper heading hierarchy

### General Requirements
- ✅ Semantic HTML throughout all pages
- ✅ Accessible (labels, ARIA attributes, alt text)
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Keyboard navigable
- ✅ Modular, readable, and consistent code
- ✅ Light/dark theme support

## 🎨 Customization

### Update Personal Information
- **Profile Card**: Edit `index.html` directly (name, bio, social links, hobbies and dislikes)
- **About Page**: Edit `about.html` (bio, goals, reflections)
- **Contact Page**: Form submissions can be integrated with a backend

### Change Avatar
- Replace `images/Providence Oduok - Frontend Web Specialist.jpg`
- Or use the avatar controls on the home page

### Modify Styles
- Main theme: `styles.css` (CSS variables at `:root`)
- Page-specific: `contact.css`, `about.css`
- Navigation: `navigation.css`


## 🧪 Testing

All pages include proper `data-testid` attributes for automated testing:

**Contact Page:**
- `test-contact-name`
- `test-contact-email`
- `test-contact-subject`
- `test-contact-message`
- `test-contact-submit`
- `test-contact-error-name`
- `test-contact-error-email`
- `test-contact-error-subject`
- `test-contact-error-message`
- `test-contact-success`

**About Page:**
- `test-about-page`
- `test-about-bio`
- `test-about-goals`
- `test-about-confidence`
- `test-about-future-note`
- `test-about-extra`

## 🌐 Deployment

Deploy to any static hosting service:

- **GitHub Pages**: Enable in repo settings
- **Netlify**: Drag and drop your folder
- **Vercel**: Connect your GitHub repo
- **Cloudflare Pages**: Connect via Git

## License and Contributions

📜 License

This project is licensed under the MIT License – feel free to modify and personalize it!

💬 Contributions

Want to suggest improvements or pinkify it even more? Open an issue or PR — I’d love that 💖

---
✍️ Author

**Providence Oduok (Pemily Vianne)**

Frontend Developer | Future Full-Stack Engineer 💻👩‍💻

- 🐦 Twitter: [@Pemily_Vianne](https://x.com/Pemily_Vianne)
- 💼 LinkedIn: [Providence Oduok](https://www.linkedin.com/in/providence-oduok/)
- 🐙 GitHub: [@PProvidence](https://github.com/PProvidence)

---

*Built with ❤️ for HNG Internship Stage 0 & 1*