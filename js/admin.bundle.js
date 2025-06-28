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

/***/ "./src/js/admin.js":
/*!*************************!*\
  !*** ./src/js/admin.js ***!
  \*************************/
/***/ (() => {

eval("const token = localStorage.getItem('token');\r\nconst BASE_URL = 'https://your-backend-api.com'; // Replace this with backend URL\r\n\r\nasync function getUserRole() {\r\n  const res = await fetch(`${BASE_URL}/api/me`, {\r\n    headers: { Authorization: `Bearer ${token}` }\r\n  });\r\n  if (!res.ok) return null;\r\n\r\n  const user = await res.json();\r\n  return user.role;\r\n}\r\n\r\nasync function initAdmin() {\r\n  const role = await getUserRole();\r\n\r\n  if (role === 'admin') {\r\n    document.querySelector('#admin-content').style.display = 'block';\r\n    loadUsers();\r\n    loadBooks();\r\n  } else {\r\n    document.querySelector('#unauthorized').style.display = 'block';\r\n  }\r\n}\r\n\r\nfunction loadUsers() {\r\n  fetch(`${BASE_URL}/api/users`, {\r\n    headers: { Authorization: `Bearer ${token}` }\r\n  })\r\n  .then(res => res.json())\r\n  .then(users => {\r\n    const tbody = document.querySelector('#users-table tbody');\r\n    tbody.innerHTML = '';\r\n    users.forEach(u => {\r\n      const tr = document.createElement('tr');\r\n      tr.innerHTML = `\r\n        <td>${u.username}</td>\r\n        <td>${u.role}</td>\r\n        <td>\r\n          ${u.role !== 'admin' ? `<button onclick=\"promote('${u._id}')\">Promote</button>` : ''}\r\n        </td>\r\n      `;\r\n      tbody.appendChild(tr);\r\n    });\r\n  });\r\n}\r\n\r\nfunction loadBooks() {\r\n  fetch(`${BASE_URL}/api/books`, {\r\n    headers: { Authorization: `Bearer ${token}` }\r\n  })\r\n  .then(res => res.json())\r\n  .then(books => {\r\n    const tbody = document.querySelector('#books-table tbody');\r\n    tbody.innerHTML = '';\r\n    books.forEach(b => {\r\n      const tr = document.createElement('tr');\r\n      tr.innerHTML = `\r\n        <td>${b.title}</td>\r\n        <td>${b.author}</td>\r\n        <td>\r\n          <button onclick=\"editBook('${b._id}')\">Edit</button>\r\n          <button onclick=\"deleteBook('${b._id}')\">Delete</button>\r\n        </td>\r\n      `;\r\n      tbody.appendChild(tr);\r\n    });\r\n  });\r\n}\r\n\r\nfunction promote(userId) {\r\n  fetch(`${BASE_URL}/api/users/${userId}/promote`, {\r\n    method: 'PATCH',\r\n    headers: { Authorization: `Bearer ${token}` }\r\n  }).then(loadUsers);\r\n}\r\n\r\nfunction editBook(bookId) {\r\n  alert(`Edit Book ${bookId} functionality pending.`);\r\n}\r\n\r\nfunction deleteBook(bookId) {\r\n  if (!confirm('Delete this book?')) return;\r\n  fetch(`${BASE_URL}/api/books/${bookId}`, {\r\n    method: 'DELETE',\r\n    headers: { Authorization: `Bearer ${token}` }\r\n  }).then(loadBooks);\r\n}\r\n\r\ninitAdmin();\r\n\n\n//# sourceURL=webpack://book-recommendation/./src/js/admin.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/admin.js"]();
/******/ 	
/******/ })()
;