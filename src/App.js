import './App.css';

import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import Navigation from "./component/Navigation";
import ComponentTwo from './component/ComponentTwo';
import ComponentThree from "./component/ComponentThree";
import Dashboard from './component/Dashboard';

function App() {
  return (
    <div className="App">
      <Navigation />

        <Routes>
        <Route path="/" element = {<Dashboard />} />
        <Route path="/ComponentTwo" element = {<ComponentTwo  />} />
        <Route path="/ComponentThree" element = {<ComponentThree />} />
        </Routes>
    </div>
  );
}

export default App;
