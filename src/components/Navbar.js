import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="navbar-logo">To-Do App</h1>
            <ul className="navbar-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/reminders">Reminders</Link>
                </li>
                <li>
                    <Link to="/statistics">Statistics</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
