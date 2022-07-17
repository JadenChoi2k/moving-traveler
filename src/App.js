import { useState } from "react";
import "./App.css";
import Carousel from "./components/Carousel.js";

function App() {
  const [page, setPage] = useState(0);
  const [location, setLocation] = useState([0, 0]);
  const [params, setParams] = useState([
    { name: "면적(m2)", std: 50, weight: 5 },
    { name: "보증금", std: 500, weight: -0.1 },
    { name: "월세", std: 50, weight: -10 },
    { name: "거리", std: 5000, weight: -5 },
  ]);

  function to(page) {}

  return (
    <div className="App">
      <Carousel />
    </div>
  );
}

export default App;
