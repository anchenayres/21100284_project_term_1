import Navigation from "./component/Navigation";
import Dashboard from "./component/Dashboard";
import Comparison from "./component/Comparison";
import Timeline from "./component/Timeline";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
        <Routes>
        <Route path="/" element = {<Dashboard />} />
        <Route path="/Comparison" element = {<Comparison  />} />
        <Route path="/Timeline" element = {<Timeline />} />
        </Routes>
    </div>
  );
}

export default App;
