// components/Navbar.js
import React from "react";
import logo from "../logo.png";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink, useLocation } from "react-router-dom";
import '../App.css'; // Ensure custom styles

export default function Navbar() {
    const location = useLocation();

    // Route titles to display in the grey bar
    const routeTitles = {
        "/register": "Register",
        "/login": "Login",
        "/about": "About Us",
        "/news": "News",
        "/shop": "Shop",
        "/admin": "Admin",
        "/additem": "Add Item",
        "/adminLogin": "Admin Login",
        "/cart": "Cart",
        "/productdetails": "Product Details",
        "/contactus": "Contact Us",
        "/gallery": "Gallery",
        "/achievements": "Achievements",
        "/EditGallery": "Edit Gallery",
        "/": "Home",
    };

    const currentTitle = routeTitles[location.pathname] || '';

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "white" }}>
                <NavLink className="navbar-brand" to="/" style={{ marginLeft: "40px" }}>
                    <img src={logo} alt="Logo" style={{ width: "20%" }} />
                </NavLink>
                <div className="navbar-collapse justify-content-end">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link btn-gold text-nowrap" to="/register">Register</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link btn-gold text-nowrap" to="/login">Login</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link btn-gold text-nowrap" to="/about">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link btn-gold text-nowrap" to="/news">News</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link btn-gold text-nowrap" to="/shop">Shop</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link btn-gold text-nowrap" to="/admin">Admin</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link btn-gold text-nowrap" to="/contactus">Contact Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link btn-gold text-nowrap" to="/gallery">Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link btn-gold text-nowrap" to="/achievements">Achievements</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className="grey-bar" style={{ height: "40px", backgroundColor: "grey", display: 'flex', alignItems: 'center', paddingLeft: '20px' }}>
                <h5 style={{ margin: 0, color: 'white' }}>{currentTitle}</h5>
            </div>
        </div>
    );
}
