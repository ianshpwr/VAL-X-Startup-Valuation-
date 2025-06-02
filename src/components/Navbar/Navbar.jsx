import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "./../Supabase/SupabaseClient";

import "./navbar.css";

function Navbar() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };

        getUser();
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
                    {
                    user
                            ? <>
                            <Link to="/profile">{getUsername(user.email)}</Link>
                            <button onClick={handleLogout} className="logout">Logout</button>
                            </>
                            : <Link to="/login">Login</Link>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
