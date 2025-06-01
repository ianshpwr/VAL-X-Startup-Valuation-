import { Route,Routes } from "react-router-dom";
import Learn from "./components/Learn/Learn";

import Landingpage from "./components/LandingPage/Landingpage";
import Howitworks from "./components/Howitworks/Howitworks";

function App() {
  return (
    <div className="App">
    <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/howitworks" element={<Howitworks />} />
        {/* Add more routes as needed */}
    </Routes>
    </div>
  );
}

export default App;