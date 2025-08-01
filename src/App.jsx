import { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [searchInput, setSearchInput] = useState('');
  const [genreFilter, setGenreFilter] = useState('');
  const BASE_URL = 'https://api.example.com/books';

  return (
    <>
      <Outlet />
    </>
  );
}

export default App
