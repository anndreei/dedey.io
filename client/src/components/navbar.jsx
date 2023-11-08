import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="sidebar-entry">
                    <img src="../img/Home.png" alt="icon" className="icon" />
                    <h6 className="sidebar-entry-clickable-item-header">Home</h6>
                </div>
                <div className="sidebar-entry">
                    <h6 className="sidebar-entry-item-header">Blog</h6>
                    <Link className="sidebar-entry-item">Entries</Link>
                    <Link className="sidebar-entry-item">Popular</Link>
                    <Link className="sidebar-entry-item">Search</Link>
                </div>
                <div className="sidebar-entry">
                    <h6 className="sidebar-entry-item-header">Games</h6>
                    <Link className="sidebar-entry-item">Releases</Link>
                    <Link className="sidebar-entry-item">Prototypes</Link>
                </div>
                <div className="sidebar-entry">
                    <h6 className="sidebar-entry-item-header">Account</h6>
                    <Link className="sidebar-entry-item">Login</Link>
                    <Link className="sidebar-entry-item">Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;