import "./App.css";
import Analysis from "./Components/Analysis";
import Card from "./Components/Card";
import Experience from "./Components/Experience";
import Image from "./Components/Image";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Strategy from "./Components/Strategy";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Image />
      <Analysis />
      <Experience />
      <Card />
      <Services />
      <Strategy />
    </div>
  );
}

export default App;
