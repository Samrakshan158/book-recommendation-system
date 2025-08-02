import { useEffect } from "react";

export default function Book({ book, onClick }) {
    useEffect(() => {
        // This effect could be used for logging or analytics
        console.log(`Book component mounted for: ${book.title}`);
    }, [book]);

    return (
        <div className="book" onClick={() => onClick(book)}>
            <img src={book.coverImage} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.genre}</p>
        </div>
    );
}