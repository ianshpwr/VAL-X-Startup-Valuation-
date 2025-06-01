import worksdata from './../../assets/howitworks.json';
import './howitworks.css';
import Navbar from '../Navbar/Navbar';
import React, { useState } from 'react';

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
  return (
    <div className="howitworks">
        <Navbar />
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
    </div>
  );
}
export default Howitworks;