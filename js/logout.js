// js/logout.js

document.addEventListener("DOMContentLoaded", () => {
    const token = localStorage.getItem("token");

    const logoutWrapper = document.querySelector("#logout-btn-wrapper");
    const loginLink = document.querySelector("#login-link");
    const signupLink = document.querySelector("#signup-link");
    const guestButtons = document.querySelector("#guest-buttons");
    const userFilters = document.querySelector("#user-filters");
    const adminLink = document.querySelector("#admin-link");

    const isLoggedIn = !!token;

    // Toggle login/logout/signup visibility
    if (logoutWrapper) logoutWrapper.style.display = isLoggedIn ? "list-item" : "none";
    if (loginLink) loginLink.style.display = isLoggedIn ? "none" : "list-item";
    if (signupLink) signupLink.style.display = isLoggedIn ? "none" : "list-item";

    if (guestButtons) guestButtons.style.display = isLoggedIn ? "none" : "flex";
    if (userFilters) userFilters.style.display = isLoggedIn ? "flex" : "none";

    // Hide Admin link if not an admin
    if (adminLink && isLoggedIn) {
        fetch('/api/me', {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(res => res.ok ? res.json() : null)
        .then(user => {
            if (!user || user.role !== "admin") {
                adminLink.remove();
            }
        })
        .catch(() => adminLink.remove());
    } else if (adminLink) {
        adminLink.remove();
    }
});

// Logout function
function logout() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
}