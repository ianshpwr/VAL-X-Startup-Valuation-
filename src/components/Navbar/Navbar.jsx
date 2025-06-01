import { Link } from "react-router-dom";

import "./navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-cont">
                <div className="logo">Val X</div>
                <div className="nav">
                    <Link to="/learn">Learn</Link>
                    <Link to="/howitworks">How It Works</Link>
                    <Link to="/browse">Browse</Link>
                    <Link to="/login">Login</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
