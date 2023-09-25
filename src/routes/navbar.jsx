import {
    Outlet,
} from "react-router-dom";



const Navbar = () => {
    return (
        <>    <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a href="/" className="navbar-link">Home</a>
                </li>
                <li className="navbar-item">
                    <a href="/about" className="navbar-link">About</a>
                </li>
                <li className="navbar-item">
                    <a href="/login" className="navbar-link">login</a>
                </li>
                <li className="navbar-item">
                    <a href="/register" className="navbar-link">register</a>
                </li>
            </ul>
        </nav>
            <Outlet /></>
    );
};

export default Navbar;
