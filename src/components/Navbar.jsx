import { Link } from "react-router-dom";
import "../App.css";
function Navbar() {
  return (
    <header>
      <div className="header">
        <div className="title">
          <Link to="HomePage">Val-X</Link>
        </div>
        <div className="nav">
          <Link to="/Learn">Learn</Link>
          <Link to="/Explore">Explore</Link>
          <Link to="/Calculate">Calculate</Link>
          <Link to="/Compare">Compare</Link>
          <Link to="/Report">Report</Link>
        </div>
        <div className="auth">
          <Link to="/Login" className="login">
            Login
          </Link>
          <Link to="/Signup" className="signup">
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
}
export default Navbar;
