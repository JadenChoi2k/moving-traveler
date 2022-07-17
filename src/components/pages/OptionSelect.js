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
  deposit: { std: 500, weight: -0.1 },
  rent: { std: 50, weight: -10 },
  area: { std: 50, weight: 5 },
  distance: { std: 5, weight: -5 },
};

function OptionSelect({ onNext }) {
  const [params, setParams] = useState();
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
        중요도에 따라서 가중치를 부여합니다. 양수이면 값이 클수록 우선순위를
        갖고, 음수이면 값이 작을수록 우선순위를 갖습니다. 가중치의 절대값이
        클수록 해당 인수가 더 큰 중요도를 차지합니다.
      </h4>
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
                        value={params[opt].std}
                        onChange={(event) => {
                          setParams((current) => {
                            const keyName =
                              event.target.parentNode.parentElement.getAttribute(
                                "keyname"
                              );
                            const val = event.target.value * 1;
                            current[keyName].std = val;
                            return { ...current };
                          });
                        }}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={params[opt].weight}
                        onChange={(event) => {
                          // params[obj.key].std = event.target.value * 1;
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
        onClick={() =>
          onNext(
            optionKeys.map((k) => ({
              key: k,
              std: params[k].std,
              weight: params[k].weight,
            }))
          )
        }
      >
        <h2>결과 요청</h2>
      </button>
    </div>
  );
}

export default OptionSelect;
