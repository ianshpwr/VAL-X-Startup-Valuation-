import IncentricCircle from "./IncenctricCircle";
import { useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="title-logo">
        <div>
          <h1>Startup Valuation <br />Made Simple</h1>
          <p>
            Understand, explore, and calculate startup valuations with our<br />
            comprehensive suite of tools. From seed stage to Series C and beyond,<br />
            we help founders and investors make sense of the numbers.
          </p>
          <div className="buttons">
            <button onClick={() => navigate('/Calculate')}>Calculate Your Valuation</button>
            <button onClick={() => navigate('/Learn')}>Explore Valuation Concepts</button>
          </div>
        </div>
        <div><IncentricCircle /></div>
      </div>
    </div>
  );
}

export default HeroSection;
