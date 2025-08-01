// js/dashboard.js

const BASE_URL = 'https://your-backend-api.com'; // Replace this with backend URL
let allBooks = [];

function fetchRecommendations() {
    const recommendationsContainer = document.querySelector("#recommendations");

    fetch(`${BASE_URL}/api/recommendations`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
        .then(response => response.json())
        .then(data => {
            if (!data.length) {
                recommendationsContainer.innerHTML = "<p>No recommendations available.</p>";
                return;
            }

            data.forEach(rec => {
                const card = document.createElement("div");
                card.classList.add("book-card");

                card.innerHTML = `
                    <h3>${rec.title}</h3>
                    <p><strong>Author:</strong> ${rec.author}</p>
                    <p><strong>Genre:</strong> ${rec.genre || "N/A"}</p>
                    <p><strong>Score:</strong> ${rec.score.toFixed(2)}</p>
                    <button onclick="reviewBook('${rec.id}')">Write a Review</button>
                `;

                recommendationsContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error("Failed to fetch recommendations:", error);
            recommendationsContainer.innerHTML = "<p>Error loading recommendations.</p>";
        });
};

document.addEventListener("DOMContentLoaded", fetchRecommendations);

// Mock data for demonstration purposes
// function fetchRecommendations() {
//     // Mock book data
//     const allBooks = [
//         {
//             id: "1",
//             title: "Dune",
//             author: "Frank Herbert",
//             genre: "Science Fiction",
//             score: 9.2,
//             coverImage: "https://covers.openlibrary.org/b/id/8101356-L.jpg"
//         },
//         {
//             id: "2",
//             title: "Pride and Prejudice",
//             author: "Jane Austen",
//             genre: "Romance",
//             score: 8.6,
//             coverImage: "https://covers.openlibrary.org/b/id/8228691-L.jpg"
//         },
//         {
//             id: "3",
//             title: "The Hobbit",
//             author: "J.R.R. Tolkien",
//             genre: "Fantasy",
//             score: 9.0,
//             coverImage: "https://covers.openlibrary.org/b/id/6979861-L.jpg"
//         }
//     ];

//     displayBooks(allBooks);
// }

// function displayBooks(books) {
//     const container = document.querySelector("#recommendations");
//     container.innerHTML = ""; // Clear old content

//     books.forEach(book => {
//         const card = document.createElement("div");
//         card.classList.add("book-card");

//         card.innerHTML = `
//             <img src="${book.coverImage}" alt="${book.title}" class="book-cover">
//             <div class="book-info">
//                 <h3>${book.title}</h3>
//                 <p><strong>Author:</strong> ${book.author}</p>
//                 <p><strong>Genre:</strong> ${book.genre}</p>
//                 <p><strong>Score:</strong> ${book.score}</p>
//                 <button onclick="reviewBook('${book.id}')">Write a Review</button>
//             </div>
//         `;

//         container.appendChild(card);
//     });
// }

function reviewBook(bookId) {
    alert("Review feature coming soon!");
}

// Filter logic (search + genre)
function applyFilters() {
    const searchValue = document.querySelector('#searchInput').value.toLowerCase();
    const selectedGenre = document.querySelector('#genreFilter').value;

    const filtered = allBooks.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchValue) ||
            book.author.toLowerCase().includes(searchValue);
        const matchesGenre = selectedGenre === '' || book.genre === selectedGenre;
        return matchesSearch && matchesGenre;
    });

    displayBooks(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    fetchRecommendations();

    // Search and genre filter
    const searchInput = document.querySelector('#searchInput');
    const genreFilter = document.querySelector('#genreFilter');

    if (searchInput && genreFilter) {
        searchInput.addEventListener('input', applyFilters);
        genreFilter.addEventListener('change', applyFilters);
    }
});