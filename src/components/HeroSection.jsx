import IncentricCircle from "./IncenctricCircle";
function HeroSection() {
  return (
    <div className="container">
      <div className="title-logo">
      <div>
        <h1 style={{fontSize:'4vw',color: 'rgb(64, 64, 153)'}}>Startup Valuation <br/>Made Simple</h1>
        <p style={{fontSize:'1.5vw',color: 'rgb(64, 64, 153)'}}>
          Understand, explore, and calculate startup valuations with our<br />
          comprehensive suite of tools. From seed stage to Series C and beyond,<br />
          we help founders and investors make sense of the numbers.
        </p>
        <div className="buttons">
        <button>Calculate Your Valuation</button>
        <button>Explore Valuation Concepts</button>
        </div>
      </div>
      
      <div><IncentricCircle/></div>

      </div>

    
    </div>
  );
}
export default HeroSection