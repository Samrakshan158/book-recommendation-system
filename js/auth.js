// js/auth.js

// Replace this with your actual backend URL
const BASE_URL = 'https://your-backend-api.com';

// Login Form Submission
const loginForm = document.querySelector("#login-form");
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    try {
      const res = await fetch(`${BASE_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();

      if (data.token) {
        localStorage.setItem('token', data.token);
        window.location.href = 'dashboard.html';
      } else {
        alert('Login failed: ' + data.message);
      }
    } catch (err) {
      alert('Error during login');
      console.error(err);
    }
  });
}

// Signup Form Submission
const signupForm = document.querySelector("#signup-form");
if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    try {
      const res = await fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });
      const data = await res.json();

      if (data.success) {
        alert('Signup successful! Please login.');
        window.location.href = 'login.html';
      } else {
        alert('Signup failed: ' + data.message);
      }
    } catch (err) {
      alert('Error during signup');
      console.error(err);
    }
  });
}