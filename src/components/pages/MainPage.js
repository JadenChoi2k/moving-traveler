import styles from "./pages.css";

function MainPage({ onNext }) {
  return (
    <div className="main-page vertical-center">
      <div>
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo_img" />
        </div>
        <div className="main-phrase">
          <h1>MOVING TRAVELER</h1>
          <hr />
          <h2>방랑인들을 위한 집터 분석 도구</h2>
        </div>
        <div className="main-bottom vertical-center">
          <button className="btn" onClick={onNext}>
            <h2>시작하기</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
