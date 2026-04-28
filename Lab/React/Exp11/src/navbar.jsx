import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    
    return (
        <nav className="navbar">
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            <Link to="/students" className={`nav-link ${location.pathname === '/students' ? 'active' : ''}`}>Students</Link>
            <Link to="/add" className={`nav-link ${location.pathname === '/add' ? 'active' : ''}`}>Add Student</Link>
        </nav>
    );
}

export default Navbar;