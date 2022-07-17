import { useState } from "react";
import styles from "./Carousel.css";
import MainPage from "./pages/MainPage.js";
import MapSelect from "./pages/MapSelect.js";
import OptionSelect from "./pages/OptionSelect";
import Result from "./pages/Result";

function Carousel() {
  const [page, setPage] = useState(0);
  const size = 4;
  const toNext = () => {
    setPage((curPage) => (curPage + 1) % size);
  };

  return (
    <div>
      <div className="carousel" style={{ marginLeft: `-${page * 100}%` }}>
        <div className="carousel-item">
          <MainPage />
        </div>
        <div className="carousel-item">
          <MapSelect />
        </div>
        <div className="carousel-item">
          <OptionSelect />
        </div>
        <div className="carousel-item">
          <Result />
        </div>
      </div>
      <button onClick={toNext} style={{ position: "absolute", left: "0" }}>
        next
      </button>
    </div>
  );
}

export default Carousel;
