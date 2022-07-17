import { useEffect, useState } from "react";
import { Loader } from "react-kakao-maps-sdk";
import "./pages.css";
import call from "../../request/caller.js";

function Result({ location, params, onNext }) {
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
          params: params,
          location: [location.position.lat * 1, location.position.lng * 1],
        },
        onLoad
      );
    }
  }, [ready]);
  return (
    <div className="page result-page">
      <a href="/">
        <img
          className="logo"
          src={process.env.PUBLIC_URL + "/img/logo.png"}
          alt="logo_img"
        />
      </a>
      <h1 style={{ margin: "0 0 10px 0" }}>결과</h1>
      <hr />
      {ready ? <h3>{location.content}</h3> : null}
      {loaded ? (
        <table>
          <tbody>
            {/* <tr>
              <th>등수</th>
              <th>제목</th>
              <th>이미지</th>
              <th>보증금 (만원)</th>
              <th>월세</th>
              <th>
                면적 (m<sub>2</sub>)
              </th>
              <th>거리 (km)</th>
              <th>점수</th>
            </tr> */}
            {data.items.map((item, index) => {
              return (
                <tr
                  key={item["item_id"]}
                  itemid={item["item_id"]}
                  onClick={(event) => {
                    let target = event.target;
                    while (target.tagName !== "TR") {
                      target = target.parentNode;
                    }
                    console.log(target);
                    const itemId = target.getAttribute("itemid");
                    console.log("itemId", itemId);
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
                  {/* <td>{item.deposit}</td>
                  <td>{item.rent}</td>
                  <td>{item.area}</td>
                  <td>{item.distance}</td>
                  <td>{window.Math.round(item.point)}</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <h2>로딩 중...</h2>
      )}
    </div>
  );
}

export default Result;
