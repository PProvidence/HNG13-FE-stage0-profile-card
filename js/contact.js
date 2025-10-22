// Contact Form Validation
const contactForm = document.getElementById('contactForm');
const fullNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const successMessage = document.getElementById('successMessage');

// Error message elements
const errorName = document.getElementById('error-name');
const errorEmail = document.getElementById('error-email');
const errorSubject = document.getElementById('error-subject');
const errorMessage = document.getElementById('error-message');

// Validation functions
function validateFullName() {
    const value = fullNameInput.value.trim();
    if (value === '') {
        showError(fullNameInput, errorName, 'Full name is required');
        return false;
    }
    clearError(fullNameInput, errorName);
    return true;
}

function validateEmail() {
    const value = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (value === '') {
        showError(emailInput, errorEmail, 'Email address is required');
        return false;
    }
    
    if (!emailRegex.test(value)) {
        showError(emailInput, errorEmail, 'Please enter a valid email address (e.g., name@example.com)');
        return false;
    }
    
    clearError(emailInput, errorEmail);
    return true;
}

function validateSubject() {
    const value = subjectInput.value.trim();
    if (value === '') {
        showError(subjectInput, errorSubject, 'Subject is required');
        return false;
    }
    clearError(subjectInput, errorSubject);
    return true;
}

function validateMessage() {
    const value = messageInput.value.trim();
    
    if (value === '') {
        showError(messageInput, errorMessage, 'Message is required');
        return false;
    }
    
    if (value.length < 10) {
        showError(messageInput, errorMessage, 'Message must be at least 10 characters long');
        return false;
    }
    
    clearError(messageInput, errorMessage);
    return true;
}

function showError(input, errorElement, message) {
    errorElement.textContent = message;
    input.classList.add('error');
    input.setAttribute('aria-invalid', 'true');
}

function clearError(input, errorElement) {
    errorElement.textContent = '';
    input.classList.remove('error');
    input.removeAttribute('aria-invalid');
}

// Real-time validation
fullNameInput.addEventListener('blur', validateFullName);
emailInput.addEventListener('blur', validateEmail);
subjectInput.addEventListener('blur', validateSubject);
messageInput.addEventListener('blur', validateMessage);

// Clear error on input
fullNameInput.addEventListener('input', () => {
    if (fullNameInput.value.trim() !== '') {
        clearError(fullNameInput, errorName);
    }
});

emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '') {
        clearError(emailInput, errorEmail);
    }
});

subjectInput.addEventListener('input', () => {
    if (subjectInput.value.trim() !== '') {
        clearError(subjectInput, errorSubject);
    }
});

messageInput.addEventListener('input', () => {
    if (messageInput.value.trim() !== '') {
        clearError(messageInput, errorMessage);
    }
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Hide success message if visible
    successMessage.classList.add('hidden');
    
    // Validate all fields
    const isNameValid = validateFullName();
    const isEmailValid = validateEmail();
    const isSubjectValid = validateSubject();
    const isMessageValid = validateMessage();
    
    // If all fields are valid, show success message
    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
        // Show success message
        successMessage.classList.remove('hidden');
        
        // Reset form
        contactForm.reset();
        
        // Clear all errors
        clearError(fullNameInput, errorName);
        clearError(emailInput, errorEmail);
        clearError(subjectInput, errorSubject);
        clearError(messageInput, errorMessage);
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Focus on success message for screen readers
        successMessage.focus();
    } else {
        // Focus on first invalid field
        if (!isNameValid) {
            fullNameInput.focus();
        } else if (!isEmailValid) {
            emailInput.focus();
        } else if (!isSubjectValid) {
            subjectInput.focus();
        } else if (!isMessageValid) {
            messageInput.focus();
        }
    }
});


// Theme toggle (if needed for contact page)
const themeSwitch = document.getElementById('themeSwitch');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

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