import React from 'react'
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav>
                <ul className="menu">
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/About">About</Link>
                    </li>
                    <li>
                        <Link to="/Services">Services</Link>
                    </li>
                    <li>
                        <Link to="/Products">Products</Link>
                    </li>
                    <li>
                        <Link to="/Carousell">Carousell</Link>
                    </li>
                    <li>
                        <Link to="/Register">Register</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;