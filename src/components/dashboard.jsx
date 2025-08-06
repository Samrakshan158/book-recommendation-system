import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../css/dashboard.css';

export default function Dashboard({ searchInput, genreFilter, BASE_URL }) {
    const [books, setBooks] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const maxResults = 10;
    const navigate = useNavigate();

    useEffect(() => {
        const fetchRecommendations = async () => {
            try {
                let query = "";

                // Build query
                if (!searchInput && !genreFilter) {
                    query = "subject:fiction"; // fallback
                } else {
                    if (searchInput) query += `intitle:${encodeURIComponent(searchInput)}`;
                    if (genreFilter) query += `+subject:${encodeURIComponent(genreFilter)}`;
                }

                const url = `${BASE_URL}${query}&startIndex=${startIndex}&maxResults=${maxResults}`;
                const response = await fetch(url);
                if (!response.ok) throw new Error("Network error");

                const data = await response.json();
                setBooks(data.items || []);
            } catch (error) {
                console.error("Error fetching books:", error);
            }
        };

        fetchRecommendations();
    }, [searchInput, genreFilter, BASE_URL, startIndex]);

    return (
        <section className="dashboard-section">
            <h2 className="dashboard-title">Book Recommendations</h2>
            <div id="recommendations">
                {books.length > 0 ? (
                    books.map((book) => {
                        const info = book.volumeInfo;
                        const image = info.imageLinks?.thumbnail || "https://via.placeholder.com/128x198?text=No+Cover";

                        return (
                            <div
                                key={book.id}
                                className="book-card"
                                onClick={() => navigate(`/book/${book.id}`)}
                                style={{ cursor: 'pointer' }}
                            >
                                <img src={image} alt={info.title} className="book-cover" />
                                <h3>{info.title}</h3>
                                <p><strong>Author:</strong> {info.authors?.join(", ") || "Unknown"}</p>
                                <p><strong>Genre:</strong> {info.categories?.[0] || "N/A"}</p>
                                <p><strong>Published:</strong> {info.publishedDate || "N/A"}</p>
                            </div>
                        );
                    })
                ) : (
                    <p>Loading books...</p>
                )}
            </div>

            <div className="pagination-controls">
                <button onClick={() => setStartIndex(Math.max(0, startIndex - maxResults))} disabled={startIndex === 0}>
                    ◀ Previous
                </button>
                <button onClick={() => setStartIndex(startIndex + maxResults)} disabled={books.length < maxResults}>
                    Next ▶
                </button>
            </div>
        </section>
    );
}