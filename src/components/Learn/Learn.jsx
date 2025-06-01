import learn from './../../assets/learn.json';
import './learn.css';

import Navbar from '../Navbar/Navbar';

function Learn() {
  return (
    <>
    <Navbar />
    <div className="learn">
      <h1>Learn</h1>
      <div className="learn-content">
        {learn.map((item, index) => (
          <div className="learndata" key={index}>
            <div className="learnheader">
            <div><h2>{item.term}</h2></div>
            <div><h3>{item.category}</h3></div>
            </div>
            <p>{item.definition}</p>

          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Learn;
