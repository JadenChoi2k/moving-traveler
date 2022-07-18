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
  deposit: { std: 500, weight: -0.1, bigger: false },
  rent: { std: 50, weight: -10, bigger: false },
  area: { std: 50, weight: 5, bigger: true },
  distance: { std: 5, weight: -5, bigger: false },
};

function OptionSelect({ onNext }) {
  const [params, setParams] = useState();
  const [houseType, setHouseType] = useState();
  useEffect(() => {
    const _params = {};
    for (const key of optionKeys) {
      _params[key] = {
        std: defaultValues[key].std,
        weight: defaultValues[key].weight,
      };
    }
    setParams(_params);
  }, []);
  return (
    <div className="page option-page">
      <h1>STEP 2 - 가중치 입력</h1>
      <h4 className="description">
        중요도에 따라서 가중치를 부여합니다. 양수이면 항목의 값이 클수록
        우선순위를 갖고, 음수이면 항목의 값이 작을수록 우선순위를 갖습니다.
        가중치의 절대값이 클수록 해당 인수가 더 큰 중요도를 차지합니다.
      </h4>
      <select
        tabIndex={-1}
        onChange={(event) => {
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
      </select>
      <table className="option-table">
        <tbody>
          <tr>
            <th>항목</th>
            <th>기준값</th>
            <th>가중치</th>
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
                        type="number"
                        tabIndex={-1}
                        value={params[opt].std}
                        onChange={(event) => {
                          setParams((current) => {
                            const keyName =
                              event.target.parentNode.parentElement.getAttribute(
                                "keyname"
                              );
                            const val =
                              event.target.value === ""
                                ? ""
                                : parseInt(event.target.value);
                            current[keyName].std = val;
                            return { ...current };
                          });
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        tabIndex={-1}
                        value={params[opt].weight}
                        onChange={(event) => {
                          setParams((current) => {
                            const keyName =
                              event.target.parentNode.parentElement.getAttribute(
                                "keyname"
                              );
                            const bigger = defaultValues[keyName].bigger;
                            const val =
                              event.target.value === ""
                                ? ""
                                : window.Math.abs(
                                    parseInt(event.target.value)
                                  ) * (bigger ? 1 : -1);
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
          onNext(
            optionKeys.map((k) => ({
              name: k,
              std: params[k].std,
              weight: params[k].weight,
            })),
            houseType
          );
        }}
      >
        <h2>결과 요청</h2>
      </button>
    </div>
  );
}

export default OptionSelect;