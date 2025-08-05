import { useState } from 'react';
import Header from '../components/header.jsx';
import Hero from '../components/hero.jsx';
import Dashboard from '../components/dashboard.jsx';
import Footer from '../components/footer.jsx';

export default function Home() {
    const [searchInput, setSearchInput] = useState('');
    const [genreFilter, setGenreFilter] = useState('');
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

    return (
        <>
            <Header />
            <Hero
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                genreFilter={genreFilter}
                setGenreFilter={setGenreFilter}
            />
            <Dashboard
                searchInput={searchInput}
                genreFilter={genreFilter}
                BASE_URL={BASE_URL}
            />
            <Footer />
        </>
    )
}