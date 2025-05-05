import IncentricCircle from "./IncenctricCircle";
import { useNavigate } from "react-router-dom";
import data from "../assets/data/homepagedata";

function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="container">
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
      <h3 style={{display:"flex",alignItems:"center",justifyContent:"center",fontSize:"3vw",color:"rgb(64, 64, 153)"}}>Our Features</h3>
      <div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
    gap: '24px',
    padding: '20px',
    maxWidth: '1200px',
    margin: '0 auto',
  }}
>
  {data.map((i) => (
    <div
      key={i.id}
      className="data"
      style={{
        backgroundColor: 'rgba(165, 165, 249, 0.623)',
        color: 'rgb(64, 64, 153)',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 0 10px rgba(0,0,0,0.2)',
        border: '1px solid #2c2c2c',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minHeight: '200px',
      }}
    >
      <div>
        <h4 style={{fontSize:'20px',marginBottom:'10px'}}>{i.title}</h4>
        <p style={{fontSize:'14px',color:'rgb(64, 64, 153)'}}>{i.description}</p>
      </div>
      <div style={{marginTop: '20px',fontWeight: 'bold'}}>
        Explore &rarr;
      </div>
    </div>
  ))}
</div>
</section>

  );
}

export default HeroSection;
