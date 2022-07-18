import styles from "./pages.css";

function MainPage({ onNext }) {
  return (
    <div className="page main-page vertical-center">
      <div>
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/img/logo.png"} alt="logo_img" />
        </div>
        <div className="main-phrase">
          <h1>MOVING TRAVELER</h1>
          <hr />
          <h2>이사 가기 전 부동산 분석</h2>
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
