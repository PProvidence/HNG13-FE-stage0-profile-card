const timeEl = document.getElementById('timeMillis');
const avatarImage = document.getElementById('avatarImage');
const avatarUrlInput = document.getElementById('avatarUrl');
const avatarUploadInput = document.getElementById('avatarUpload');
const themeSwitch = document.getElementById('themeSwitch');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

function renderNow() {
    timeEl.textContent = Date.now();
}

renderNow();
setInterval(renderNow, 1000);

avatarUrlInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const url = avatarUrlInput.value.trim();
        if (url) {
            avatarImage.src = url;
            avatarImage.alt = 'Profile picture of Pemily Vianne';
            avatarUrlInput.value = '';
        }
    }
});

avatarUploadInput.addEventListener('change', (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    if (!/^image\//.test(file.type)) {
        alert('Please select an image file.');
        return;
    }
    const objectUrl = URL.createObjectURL(file);
    avatarImage.src = objectUrl;
    avatarImage.alt = 'Uploaded avatar for Pemily Vianne';
});

function applyTheme(isDark) {
    if (isDark) {
        document.body.classList.add('theme-dark');
        document.body.classList.remove('theme-light');
    } else {
        document.body.classList.remove('theme-dark');
        document.body.classList.add('theme-light');
    }
    themeSwitch.checked = isDark;
}

applyTheme(prefersDark);

themeSwitch.addEventListener('change', (e) => {
    applyTheme(e.target.checked);
});

if (window.matchMedia) {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener && mq.addEventListener('change', (e) => {
        applyTheme(e.matches);
    });
}