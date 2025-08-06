import { Link } from 'react-router-dom';
import '../css/header.css';

export default function Header() {
    return (
        <header>
            <nav className="navbar-container">
                <Link to="/" className="logo">Library</Link>

                <ul className="navbar-nav">
                    <li><Link to="/" className="navbar-item">Home</Link></li>
                    {/* <li><Link to="favorites" className="navbar-item">Bookmarks</Link></li> */}
                </ul>
            </nav>
        </header>
    );
}