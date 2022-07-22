import { useEffect, useState } from "react";
import { Loader } from "react-kakao-maps-sdk";
import "./pages.css";
import call from "../../request/caller.js";

const houseTypeName = { oneroom: "원룸", villa: "빌라/투룸+" };

function Result({ location, houseType, salesType, params, onNext }) {
  const [ready, setReady] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState();
  const onLoad = (data) => {
    setData(data.data);
    setLoaded(true);
  };
  const getPriceText = (item) => {
    const overMillion = (price) => price >= 10000;
    const priceText = (price) =>
      overMillion(price) ? `${price / 10000}억원` : `${price}만원`;
    const deposit = item.deposit;
    const rent = item.rent;
    if (salesType === "매매" || salesType === "전세") {
      return priceText(deposit);
    }
    return `보증금: ${priceText(deposit)}/월세: ${priceText(rent)}`;
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
          salesType: salesType,
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
      {ready && (
        <h3>
          [{houseTypeName[houseType]}][{salesType}] {location.content} 주변
          {data && (
            <div>
              {data.adj_size}개 매물 중 TOP {data.items.length}
            </div>
          )}
        </h3>
      )}
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
                    <div>
                      <div className="item-result-row">
                        <h3>
                          [{index + 1}위] {item.title}
                        </h3>
                        <h4>{getPriceText(item)}</h4>
                      </div>
                      <div className="item-result-row">
                        <h4>
                          면적: {item.area}m<sub>2</sub>
                        </h4>
                        <h4>
                          거리: {window.Math.round(item.distance * 10) / 10}km
                        </h4>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : ready ? (
        <div>
          <div className="loader">Loading...</div>
          <h3>
            불러오는 중입니다...
            <br />
            <br />
            매물이 많으면 오래 걸릴 수 있습니다
          </h3>
        </div>
      ) : (
        <h2>단계를 건너뛰셨습니다. 다시 시도해주십시오</h2>
      )}
    </div>
  );
}

export default Result;
