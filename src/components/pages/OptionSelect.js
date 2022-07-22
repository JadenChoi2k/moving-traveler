import { useEffect, useState } from "react";
import "./pages.css";

const optionKeys = ["deposit", "rent", "area", "distance"];
const optionNames = {
  deposit: "보증금 (만원)",
  rent: "월세 (만원)",
  area: "면적 (m2)",
  distance: "거리 (km)",
};
const defaultValues = {
  deposit: { weight: 20, bigger: false },
  rent: { weight: 70, bigger: false },
  area: { weight: 50, bigger: true },
  distance: { weight: 50, bigger: false },
};

function OptionSelect({ onNext }) {
  const [params, setParams] = useState();
  const [houseType, setHouseType] = useState();
  const [salesType, setSalesType] = useState();
  useEffect(() => {
    const _params = {};
    for (const key of optionKeys) {
      _params[key] = {
        weight: defaultValues[key].weight,
      };
    }
    setParams(_params);
  }, []);
  return (
    <div className="page option-page">
      <h1>STEP 2 - 가중치 입력</h1>
      <h4 className="description">중요도에 따라서 가중치를 부여합니다.</h4>
      <select
        tabIndex={-1}
        onChange={(event) => {
          if (event.target.value === "apt") {
            alert("아파트는 현재 지원하지 않습니다.");
            event.preventDefault();
            return;
          }
          setHouseType(event.target.value);
        }}
      >
        <option key="house_desc" value={-1}>
          집 종류 선택
        </option>
        <option key="oneroom" value="oneroom">
          원룸
        </option>
        <option key="villa" value="villa">
          빌라, 투룸+
        </option>
        <option key="apt" value="apt" disabled>
          아파트
        </option>
      </select>
      <select
        tabIndex={-1}
        onChange={(event) => {
          setSalesType(event.target.value);
        }}
      >
        <option key="house_desc" value={-1}>
          거래 방식 선택
        </option>
        <option key="월세" value="월세">
          월세
        </option>
        <option key="전세" value="전세">
          전세
        </option>
        <option key="매매" value="매매">
          매매
        </option>
      </select>
      <table className="option-table">
        <tbody>
          <tr>
            <th>항목</th>
            <th>중요도</th>
          </tr>
          {params
            ? optionKeys.map((opt) => {
                if (!params || !params[opt]) {
                  return null;
                }
                return (
                  <tr key={opt} keyname={opt}>
                    <td>{optionNames[opt]}</td>
                    <td>
                      <input
                        type="range"
                        className="slider"
                        min={0}
                        max={100}
                        tabIndex={-1}
                        value={params[opt].weight}
                        onChange={(event) => {
                          setParams((current) => {
                            const keyName =
                              event.target.parentNode.parentElement.getAttribute(
                                "keyname"
                              );
                            const val = event.target.value;
                            current[keyName].weight = val;
                            return { ...current };
                          });
                        }}
                      />
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
      <button
        className="btn"
        onClick={() => {
          if (!houseType || houseType == -1) {
            alert("집의 종류를 선택해주세요");
            return;
          }
          if (!salesType || salesType == -1) {
            alert("거래 방식을 선택해주세요");
            return;
          }
          onNext(
            optionKeys.map((k) => ({
              name: k,
              weight: params[k].weight * (defaultValues[k].bigger ? 1 : -1),
            })),
            houseType,
            salesType
          );
        }}
      >
        <h2>결과 요청</h2>
      </button>
    </div>
  );
}

export default OptionSelect;
