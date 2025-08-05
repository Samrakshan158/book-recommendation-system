import Header from '../components/header.jsx';
import BookDetail from '../components/bookDetail.jsx';
import Footer from '../components/footer.jsx';

export default function BookDetailPage() {
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

    return (
        <>
            <Header />
            <BookDetail BASE_URL={BASE_URL}/>
            <Footer />
        </>
    );
}