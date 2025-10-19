# HNG13-FE-stage0-profile-card

A responsive, accessible, and testable Profile Card built with **plain HTML, CSS, and vanilla JavaScript**. This project satisfies the **HNG Internship Stage 0 task** requirements and is tailored for Pemily Vianne with a pink, modern, minimalistic design and light/dark theme support.

## Features
- All required `data-testid` attributes are included for automated testing:
  - `test-profile-card`, `test-user-name`, `test-user-bio`, `test-user-time`,
    `test-user-avatar`, `test-user-social-links`, `test-user-social-twitter`,
    `test-user-social-linkedin`, `test-user-social-github`, `test-user-hobbies`,
    `test-user-dislikes`.
- Current time shown in **milliseconds** (value equals `Date.now()` on render; updates every second).
- Avatar accepts either:
  - An **image URL** (paste into the "Avatar image URL" field and press Enter), or
  - **File upload** (select an image file and it will display).
- Social links open in new tabs with `rel="noopener noreferrer"`.
- Light and dark modes:
  - Default follows the user's system preference (`prefers-color-scheme`).
  - Manual toggle available.
- Keyboard-accessible controls and visible focus styles.
- Responsive layout (mobile-first, stacks vertically on small screens; side-by-side on larger screens).
- Built using only vanilla HTML, CSS and JavaScript.
- Semantic HTML structure (`<article>`, `<figure>`, `<nav>`, `<section>`)


## Files
- `index.html` — main page with semantic markup and data-testids.
- `styles.css` — vanilla CSS with CSS variables, responsive rules, and animations.
- `script.js` — small vanilla JS for the clock, avatar handling, and theme toggle.
- `images/` — folder for the default avatar image.



## How to run locally
1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/HNG13-FE-stage0-profile-card.git
   cd HNG13-FE-stage0-profile-card
    ```
2. Open `index.html` in your web browser.
## Customize
- Update the name, bio, social links, hobbies, and dislikes directly in `index.html`.
- Change the default avatar by replacing `images/default-avatar.png`.

## License and Contributions
📜 License

This project is licensed under the MIT License – feel free to modify and personalize it!

💬 Contributions

Want to suggest improvements or pinkify it even more? Open an issue or PR — I’d love that 💅

---
✍️ Author

Providence Oduok

Frontend Developer | Future Full-Stack Engineer 👩‍💻
