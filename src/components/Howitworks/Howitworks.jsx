import worksdata from './../../assets/howitworks.json';
import './howitworks.css';
import Navbar from '../Navbar/Navbar';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DropdownDescription({ step, title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown-description">
      <div onClick={() => setIsOpen(!isOpen)} className="dropdown-toggle">
        <span>{step}</span> <span>{title}</span>
      </div>
      {isOpen && <div className="dropdown-content">{description}</div>}
    </div>
  );
}

function Howitworks() {
    const navigate = useNavigate();
  return (
    <div className="howitworks">
        <Navbar />
        <section className='section1'>
          <h1>Startup Valuation Guide</h1>
          <h1>Learn how to value your startup, step by step.</h1>
          <button onClick={()=> navigate('/')}>Back to Dashboard</button>
        </section>
        <section className='section2'>
          <div>
            <h1>What is Startup Valuation?</h1>
            <p>
              Startup valuation is the process of determining the worth of a startup at a particular moment. Unlike mature companies, it often relies less on revenue and more on potential, team, and technology.
            </p>
            <p>
              Each stage (early or growth) requires a different approach. Early startups might use the Berkus or Scorecard Method, while later stages rely on metrics like revenue multiples and DCF.
            </p>
            <p>
              Market size, traction, team strength, financial ratios (LTV/CAC), and ownership structure all play key roles. The right method fits your business stage and industry context.
            </p>
          </div>
        <div className="howitworks-content">
            <h1>How It Works</h1>
            <div className="worksdata">
            {worksdata.map((item, index) => (
                <div className="workitem" key={index}>
                <DropdownDescription step={item.step} title={item.title} description={item.content} />
                </div>
            ))}
            </div>
        </div>
        </section>
        <div className='footer'>
          <h2>Choose your valuation method</h2>
          <p>Common methods: Comparables, DCF, Berkus Method, Risk Factor Summation. For example, if similar startups are valued at 5x revenue and you project $1M, you might be valued at $5M.</p>
          <p>The right approach depends on your business model, stage, and available data. Tools like SAFE notes help defer exact valuation until more information is available.</p>
        </div>
    </div>
  );
}
export default Howitworks;