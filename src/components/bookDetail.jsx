import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../css/bookDetail.css';

export default function BookDetail() {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        const fetchBook = async () => {
            try {
                const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
                if (!response.ok) throw new Error("Failed to fetch book details");
                const data = await response.json();
                setBook(data);
            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchBook();
    }, [id]);



    if (!book) return <p className='book-detail'>Loading book details...</p>;

    const info = book.volumeInfo;

    return (
        <div className="book-detail">
            <img src={info.imageLinks?.thumbnail} alt={info.title} />
            <div className="book-info">
                <h2>{info.title}</h2>
                <p><strong>Authors:</strong> {info.authors?.join(', ')}</p>
                <p><strong>Description:</strong> {info.description || "No description available."}</p>
                <p><strong>Published Date:</strong> {info.publishedDate || "Unknown"}</p>
                <p><strong>Categories:</strong> {info.categories?.join(', ') || "No categories available."}</p>
                <p><strong>Average Rating:</strong> {info.averageRating || "No ratings yet."}</p>
                <p><strong>Ratings Count:</strong> {info.ratingsCount || "No ratings yet."}</p>
                <p><strong>Language:</strong> {info.language || "Unknown"}</p>
                <p><strong>Publisher:</strong> {info.publisher || "Unknown"}</p>
                {info.previewLink && (
                    <p>
                        <a href={info.previewLink} target="_blank" rel="noopener noreferrer" className="preview-button">
                            🔍 Preview This Book
                        </a>
                    </p>
                )}
                
                <p className='note'>Review function soon to be added!</p>
            </div>
        </div>
    );

}
