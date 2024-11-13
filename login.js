const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const loginToggle = document.getElementById('login-toggle');
const signupToggle = document.getElementById('signup-toggle');

loginToggle.addEventListener('click', () => {
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

signupToggle.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
});

// Show the login form by default
document.addEventListener("DOMContentLoaded", function() {
    loginForm.classList.remove('hidden');
});