import { Route,Routes } from "react-router-dom";
import Learn from "./components/Learn/Learn";

import Landingpage from "./components/LandingPage/Landingpage";
import Howitworks from "./components/Howitworks/Howitworks";
import Calculate from "./components/Calculate/Calculate";
import Auth from "./components/Auth/Auth";
import Browse from "./components/Browse/Browse";

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/howitworks" element={<Howitworks />} />
        <Route path="/calculate" element={<Calculate />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/browse" element={<Browse />} />
        {/* Add more routes as needed */}
    </Routes>
    </div>
  );
}

export default App;