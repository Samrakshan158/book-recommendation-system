import { useState } from "react";

export default function Hero({  searchInput, setSearchInput, genreFilter, setGenreFilter }) {
  // Handle Enter key press in input
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      searchBooks();
    }
  };

  return (
    <div className="hero-container">
      <div className="hero-text">
        <h2 className="hero-title">Welcome to the Book Recommender</h2>
        <p className="hero-description">Your personalized book recommendations await!</p>
        <p className="hero-description">
          Discover new genres, find your next favorite book, and explore a world of
          literature tailored just for you.
        </p>
      </div>

      <div className="filter-bar" id="user-filters">
        <input
          type="text"
          placeholder="Search books..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <select value={genreFilter} onChange={(e) => setGenreFilter(e.target.value)}>
          <option value="">All Genres</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Romance">Romance</option>
          <option value="Thriller">Thriller</option>
        </select>
      </div>

      {/* Optional: render search results */}
      <div className="results-container">
        {results.length > 0 && (
          <ul>
            {results.map((book) => (
              <li key={book.id}>
                {book.volumeInfo.title} by {book.volumeInfo.authors?.join(', ') ?? "Unknown"}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
