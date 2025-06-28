/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/logout.js":
/*!**************************!*\
  !*** ./src/js/logout.js ***!
  \**************************/
/***/ (() => {

eval("// js/logout.js\r\nconst BASE_URL = 'https://your-backend-api.com';\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    const token = localStorage.getItem(\"token\");\r\n\r\n    const logoutWrapper = document.querySelector(\"#logout-btn-wrapper\");\r\n    const loginLink = document.querySelector(\"#login-link\");\r\n    const signupLink = document.querySelector(\"#signup-link\");\r\n    const guestButtons = document.querySelector(\"#guest-buttons\");\r\n    const userFilters = document.querySelector(\"#user-filters\");\r\n    const adminLink = document.querySelector(\"#admin-link\");\r\n\r\n    const isLoggedIn = !!token;\r\n\r\n    // Toggle login/logout/signup visibility\r\n    if (logoutWrapper) logoutWrapper.style.display = isLoggedIn ? \"list-item\" : \"none\";\r\n    if (loginLink) loginLink.style.display = isLoggedIn ? \"none\" : \"list-item\";\r\n    if (signupLink) signupLink.style.display = isLoggedIn ? \"none\" : \"list-item\";\r\n\r\n    if (guestButtons) guestButtons.style.display = isLoggedIn ? \"none\" : \"flex\";\r\n    if (userFilters) userFilters.style.display = isLoggedIn ? \"flex\" : \"none\";\r\n\r\n    // Hide Admin link if not an admin\r\n    if (adminLink && isLoggedIn) {\r\n        fetch(`${BASE_URL}/api/me`, {\r\n            headers: { Authorization: `Bearer ${token}` }\r\n        })\r\n        .then(res => res.ok ? res.json() : null)\r\n        .then(user => {\r\n            if (!user || user.role !== \"admin\") {\r\n                adminLink.remove();\r\n            }\r\n        })\r\n        .catch(() => adminLink.remove());\r\n    } else if (adminLink) {\r\n        adminLink.remove();\r\n    }\r\n});\r\n\r\nfunction logout() {\r\n    localStorage.removeItem(\"token\");\r\n    window.location.href = \"login.html\";\r\n}\n\n//# sourceURL=webpack://book-recommendation/./src/js/logout.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/logout.js"]();
/******/ 	
/******/ })()
;