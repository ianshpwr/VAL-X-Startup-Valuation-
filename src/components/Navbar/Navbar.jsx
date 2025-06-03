import { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "./../Supabase/SupabaseClient";

import "./navbar.css";

function Navbar() {
    const [user, setUser] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const dropdownRef = useRef();

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };
        getUser();
    }, []);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const getUsername = (email) => {
        return email.split('@')[0];
    };

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (!error) {
            setUser(null);
            navigate("/login");
        } else {
            console.error("Logout error:", error.message);
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-cont">
                <div className="logo"><Link to="/">Val X</Link></div>
                <div className="nav">
                    <Link to="/learn">Learn</Link>
                    <Link to="/browse">Browse</Link>
                    <Link to="/howitworks">How It Works</Link>
                    <Link to="/calculate">Calculate</Link>
                </div>
                <div className="nav" ref={dropdownRef}>
                    {user ? (
                        <div className="dropdown">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="dropdown-toggle"
                            >
                                {getUsername(user.email)}
                            </button>
                            {dropdownOpen && (
                                <div className="dropdown-menu">
                                    <button onClick={handleLogout} className="logout">Logout</button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
