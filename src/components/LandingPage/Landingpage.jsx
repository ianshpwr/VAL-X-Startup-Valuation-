import Navbar from "../Navbar/Navbar";
import "./landingpage.css";
import TypewriterEffect from './TypeLanding';
import { BackgroundBeams } from "../ui/BackgroundBeams";

function Landingpage() {
  return (
    <>
    <Navbar />
    <BackgroundBeams/>
    <section className="section1">
    <div className="lpcontainer">
    <div className="landingpage">
      <TypewriterEffect />
    {/* <h1>Understand, explore, and calculate startup valuations with our comprehensive suite of tools. From seed to Series C, we help founders and investors make sense of the numbers.</h1> */}
    </div>
    </div>
    </section>

    <section className="section2">
        <div className="features">
        <h2>Features</h2>
        <div className="learnn">
          <div>
            <h1>Learn</h1>
            <h3>Learn How Startup Valuation Works</h3> 
          </div>
          <div>
            <h4>Access a comprehensive library of startup valuation concepts, methods, and best practices.</h4>
          </div>
        </div>
          <div className="browse">
          <div>
            <h1>Browse</h1>
            <h3>Explore Real Startup Data</h3> 
          </div>
          <div>
             <h4>View valuation examples from startups across industries and countries. Compare metrics like funding, growth rate, and investor count to benchmark your own.</h4>
          </div>
        </div>

          <div className="calculate">
          <div>
            <h1>Calculate</h1>
            <h3>Calculate Your Startup's Valuation</h3> 
          </div>
          <div>
          <h4>Enter your startup's key data and instantly receive a valuation estimate using proven financial models. No signup required.</h4>
          </div>
        </div>
        </div>
    </section>
    </>
  );
}
export default Landingpage;