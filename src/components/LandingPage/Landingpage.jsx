import Navbar from "../Navbar/Navbar";
import "./landingpage.css";


function Landingpage() {
  return (
    <>
    <Navbar />
    <section className="section1">
    <div className="lpcontainer">
    <div className="landingpage">
    <h1>Startup Valuation Made Simple.</h1>
    <h1>Understand, explore, and calculate startup valuations with our comprehensive suite of tools. From seed to Series C, we help founders and investors make sense of the numbers.</h1>
    </div>
    <div className="landingpage-buttons">
    <button>Calculate Your Valuation</button>
    <button>Explore Valuation Concepts</button>
    </div>
    </div>
    </section>

    <section className="section2">
        <div className="features">
        <h2>Features</h2>
        </div>
    </section>
    </>
  );
}
export default Landingpage;