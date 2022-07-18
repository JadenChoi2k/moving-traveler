import { useEffect, useState } from "react";
import { Loader } from "react-kakao-maps-sdk";
import "./pages.css";
import call from "../../request/caller.js";

const houseTypeName = { oneroom: "원룸", villa: "빌라/투룸+" };

function Result({ location, houseType, params, onNext }) {
  const [ready, setReady] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState();
  const onLoad = (data) => {
    setData(data.data);
    setLoaded(true);
  };
  useEffect(() => {
    if (location && params) {
      setReady(true);
    }
  }, [location, params]);
  useEffect(() => {
    if (ready) {
      call(
        {
          houseType: houseType,
          params: params,
          location: [location.position.lat * 1, location.position.lng * 1],
        },
        onLoad
      );
    }
  }, [ready]);
  return (
    <div className="page result-page">
      <a href="/moving-traveler">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + "/img/logo.png"}
          alt="logo_img"
        />
      </a>
      <h1 style={{ margin: "0 0 10px 0" }}>결과</h1>
      <hr />
      {ready ? (
        <h3>
          [{houseTypeName[houseType]}] {location.content}
        </h3>
      ) : null}
      {loaded ? (
        <table>
          <tbody>
            {data.items.map((item, index) => {
              return (
                <tr
                  key={item["item_id"]}
                  itemProp={item["item_id"]}
                  onClick={(event) => {
                    let target = event.target;
                    while (target.tagName !== "TR") {
                      target = target.parentNode;
                    }
                    const itemId = target.getAttribute("itemprop");
                    window.open(
                      `https://www.zigbang.com/home/oneroom/items/${itemId}`
                    );
                  }}
                >
                  <td className="img-cell">
                    <img src={`${item.thumbnail_url}?w=600`} />
                  </td>
                  <td>
                    [{index + 1}등] ({item.deposit}/{item.rent}) {item.title} (
                    {item.area}m<sub>2</sub>/
                    {window.Math.round(item.distance * 10) / 10}
                    km)
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : ready ? (
        <div>
          <div className="loader">Loading...</div>
          <h3>불러오는 중입니다...</h3>
        </div>
      ) : (
        <h2>단계를 건너뛰셨습니다. 다시 시도해주십시오</h2>
      )}
    </div>
  );
}

export default Result;
