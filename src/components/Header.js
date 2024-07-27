import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/project">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {/* Add more links as needed */}
                
                </ul>
            </nav>
        </header>
    )
}

export default Header;