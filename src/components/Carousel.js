import { useState } from "react";
import styles from "./Carousel.css";
import MainPage from "./pages/MainPage.js";
import MapSelect from "./pages/MapSelect.js";
import OptionSelect from "./pages/OptionSelect";
import Result from "./pages/Result";

function Carousel() {
  const [page, setPage] = useState(0);
  const [location, setLocation] = useState();
  const [houseType, setHouseType] = useState("");
  const [params, setParams] = useState();
  const size = 4;
  const toNext = () => {
    setPage((curPage) => (curPage + 1) % size);
  };
  const onLocationSelect = (location) => {
    setLocation(location);
    toNext();
  };
  const onParamRequest = (params, houseType) => {
    setParams(params);
    setHouseType(houseType);
    toNext();
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
          <Result location={location} houseType={houseType} params={params} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
