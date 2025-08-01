import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <nav class="navbar-container">
                <a href="/" class="logo">Library</a>

                <ul class="navbar-nav">
                    <li><Link to="/" class="navbar-item">Home</Link></li>
                    <li><Link to="dashboard">Books</Link></li>
                    <li><Link to="favorites">Favorites</Link></li>
                </ul>
            </nav>
        </header>
    );
}