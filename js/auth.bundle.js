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

/***/ "./src/js/auth.js":
/*!************************!*\
  !*** ./src/js/auth.js ***!
  \************************/
/***/ (() => {

eval("// js/auth.js\r\n\r\n// Replace this with backend URL\r\nconst BASE_URL = 'https://your-backend-api.com';\r\n\r\n// Login Form Submission\r\nconst loginForm = document.querySelector(\"#login-form\");\r\nif (loginForm) {\r\n  loginForm.addEventListener('submit', async (e) => {\r\n    e.preventDefault();\r\n    const email = document.querySelector(\"#email\").value;\r\n    const password = document.querySelector(\"#password\").value;\r\n\r\n    try {\r\n      const res = await fetch(`${BASE_URL}/login`, {\r\n        method: 'POST',\r\n        headers: { 'Content-Type': 'application/json' },\r\n        body: JSON.stringify({ email, password })\r\n      });\r\n      const data = await res.json();\r\n\r\n      if (data.token) {\r\n        localStorage.setItem('token', data.token);\r\n        window.location.href = 'dashboard.html';\r\n      } else {\r\n        alert('Login failed: ' + data.message);\r\n      }\r\n    } catch (err) {\r\n      alert('Error during login');\r\n      console.error(err);\r\n    }\r\n  });\r\n}\r\n\r\n// Signup Form Submission\r\nconst signupForm = document.querySelector(\"#signup-form\");\r\nif (signupForm) {\r\n  signupForm.addEventListener('submit', async (e) => {\r\n    e.preventDefault();\r\n    const username = document.querySelector(\"#username\").value;\r\n    const email = document.querySelector(\"#email\").value;\r\n    const password = document.querySelector(\"#password\").value;\r\n\r\n    try {\r\n      const res = await fetch(`${BASE_URL}/signup`, {\r\n        method: 'POST',\r\n        headers: { 'Content-Type': 'application/json' },\r\n        body: JSON.stringify({ username, email, password })\r\n      });\r\n      const data = await res.json();\r\n\r\n      if (data.success) {\r\n        alert('Signup successful! Please login.');\r\n        window.location.href = 'login.html';\r\n      } else {\r\n        alert('Signup failed: ' + data.message);\r\n      }\r\n    } catch (err) {\r\n      alert('Error during signup');\r\n      console.error(err);\r\n    }\r\n  });\r\n}\n\n//# sourceURL=webpack://book-recommendation/./src/js/auth.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/auth.js"]();
/******/ 	
/******/ })()
;