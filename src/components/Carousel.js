import { useState } from "react";
import styles from "./Carousel.css";
import MainPage from "./pages/MainPage.js";
import MapSelect from "./pages/MapSelect.js";
import OptionSelect from "./pages/OptionSelect";
import Result from "./pages/Result";

function Carousel() {
  const [page, setPage] = useState(0);
  const [selected, setSelected] = useState();
  const [params, setParams] = useState();
  const size = 4;
  const toNext = () => {
    setPage((curPage) => (curPage + 1) % size);
  };
  const onLocationSelect = (selected) => {
    setSelected(selected);
    toNext();
  };
  const onParamRequest = (params) => {
    setParams(params);
    console.log("요청한다!", params);
  };
  return (
    <div>
      <div className="carousel" style={{ marginLeft: `-${page * 100}%` }}>
        <div className="carousel-item">
          <MainPage onNext={toNext} />
        </div>
        <div className="carousel-item">
          <MapSelect onNext={onLocationSelect} />
        </div>
        <div className="carousel-item">
          <OptionSelect onNext={onParamRequest} />
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
