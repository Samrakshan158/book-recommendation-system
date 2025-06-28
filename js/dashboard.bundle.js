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

/***/ "./src/js/dashboard.js":
/*!*****************************!*\
  !*** ./src/js/dashboard.js ***!
  \*****************************/
/***/ (() => {

eval("// js/dashboard.js\r\n\r\nconst BASE_URL = 'https://your-backend-api.com'; // Replace this with backend URL\r\nlet allBooks = [];\r\n\r\nfunction fetchRecommendations() {\r\n    const recommendationsContainer = document.querySelector(\"#recommendations\");\r\n\r\n    fetch(`${BASE_URL}/api/recommendations`, {\r\n        headers: { Authorization: `Bearer ${localStorage.getItem(\"token\")}` }\r\n    })\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            if (!data.length) {\r\n                recommendationsContainer.innerHTML = \"<p>No recommendations available.</p>\";\r\n                return;\r\n            }\r\n\r\n            data.forEach(rec => {\r\n                const card = document.createElement(\"div\");\r\n                card.classList.add(\"book-card\");\r\n\r\n                card.innerHTML = `\r\n                    <h3>${rec.title}</h3>\r\n                    <p><strong>Author:</strong> ${rec.author}</p>\r\n                    <p><strong>Genre:</strong> ${rec.genre || \"N/A\"}</p>\r\n                    <p><strong>Score:</strong> ${rec.score.toFixed(2)}</p>\r\n                    <button onclick=\"reviewBook('${rec.id}')\">Write a Review</button>\r\n                `;\r\n\r\n                recommendationsContainer.appendChild(card);\r\n            });\r\n        })\r\n        .catch(error => {\r\n            console.error(\"Failed to fetch recommendations:\", error);\r\n            recommendationsContainer.innerHTML = \"<p>Error loading recommendations.</p>\";\r\n        });\r\n};\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", fetchRecommendations);\r\n\r\n// Mock data for demonstration purposes\r\n// function fetchRecommendations() {\r\n//     // Mock book data\r\n//     const allBooks = [\r\n//         {\r\n//             id: \"1\",\r\n//             title: \"Dune\",\r\n//             author: \"Frank Herbert\",\r\n//             genre: \"Science Fiction\",\r\n//             score: 9.2,\r\n//             coverImage: \"https://covers.openlibrary.org/b/id/8101356-L.jpg\"\r\n//         },\r\n//         {\r\n//             id: \"2\",\r\n//             title: \"Pride and Prejudice\",\r\n//             author: \"Jane Austen\",\r\n//             genre: \"Romance\",\r\n//             score: 8.6,\r\n//             coverImage: \"https://covers.openlibrary.org/b/id/8228691-L.jpg\"\r\n//         },\r\n//         {\r\n//             id: \"3\",\r\n//             title: \"The Hobbit\",\r\n//             author: \"J.R.R. Tolkien\",\r\n//             genre: \"Fantasy\",\r\n//             score: 9.0,\r\n//             coverImage: \"https://covers.openlibrary.org/b/id/6979861-L.jpg\"\r\n//         }\r\n//     ];\r\n\r\n//     displayBooks(allBooks);\r\n// }\r\n\r\n// function displayBooks(books) {\r\n//     const container = document.querySelector(\"#recommendations\");\r\n//     container.innerHTML = \"\"; // Clear old content\r\n\r\n//     books.forEach(book => {\r\n//         const card = document.createElement(\"div\");\r\n//         card.classList.add(\"book-card\");\r\n\r\n//         card.innerHTML = `\r\n//             <img src=\"${book.coverImage}\" alt=\"${book.title}\" class=\"book-cover\">\r\n//             <div class=\"book-info\">\r\n//                 <h3>${book.title}</h3>\r\n//                 <p><strong>Author:</strong> ${book.author}</p>\r\n//                 <p><strong>Genre:</strong> ${book.genre}</p>\r\n//                 <p><strong>Score:</strong> ${book.score}</p>\r\n//                 <button onclick=\"reviewBook('${book.id}')\">Write a Review</button>\r\n//             </div>\r\n//         `;\r\n\r\n//         container.appendChild(card);\r\n//     });\r\n// }\r\n\r\nfunction reviewBook(bookId) {\r\n    alert(\"Review feature coming soon!\");\r\n}\r\n\r\n// Filter logic (search + genre)\r\nfunction applyFilters() {\r\n    const searchValue = document.querySelector('#searchInput').value.toLowerCase();\r\n    const selectedGenre = document.querySelector('#genreFilter').value;\r\n\r\n    const filtered = allBooks.filter(book => {\r\n        const matchesSearch = book.title.toLowerCase().includes(searchValue) ||\r\n            book.author.toLowerCase().includes(searchValue);\r\n        const matchesGenre = selectedGenre === '' || book.genre === selectedGenre;\r\n        return matchesSearch && matchesGenre;\r\n    });\r\n\r\n    displayBooks(filtered);\r\n}\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    fetchRecommendations();\r\n\r\n    // Search and genre filter\r\n    const searchInput = document.querySelector('#searchInput');\r\n    const genreFilter = document.querySelector('#genreFilter');\r\n\r\n    if (searchInput && genreFilter) {\r\n        searchInput.addEventListener('input', applyFilters);\r\n        genreFilter.addEventListener('change', applyFilters);\r\n    }\r\n});\n\n//# sourceURL=webpack://book-recommendation/./src/js/dashboard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/dashboard.js"]();
/******/ 	
/******/ })()
;