import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

function MapSelect({ onNext }) {
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const updateMapByQuery = () => {
    if (!map || !query) return;
    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(query, (data, status, _pagination) => {
      if (status === window.kakao.maps.services.Status.OK) {
        const bounds = new window.kakao.maps.LatLngBounds();
        let markers = [];

        for (let i = 0; i < data.length; i++) {
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);
        map.setBounds(bounds);
      }
    });
  };

  useEffect(() => {
    updateMapByQuery();
  }, [map]);
  return (
    <div className="page map-select">
      <h1>STEP 1 - 이사 지점 선택</h1>
      <div className="search-bar">
        <input
          className="search-input"
          placeholder="키워드 입력"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              updateMapByQuery();
            } else if (event.key === "Tab") {
              event.preventDefault();
              event.target.focus();
            }
          }}
        />
        <button className="btn search-btn" onClick={updateMapByQuery}>
          <h2>검색</h2>
        </button>
      </div>
      <Map
        center={{ lat: 37.496791485145096, lng: 127.04567494254165 }}
        style={{ width: "100%", height: "70%" }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => {
              setInfo(marker);
              setSelected(marker);
            }}
          >
            {info && info.content === marker.content && (
              <div style={{ color: "#000" }}>{marker.content}</div>
            )}
          </MapMarker>
        ))}
      </Map>
      {selected != null ? (
        <h3>선택: {selected.content}</h3>
      ) : (
        <h3>위 지도에서 검색 후 선택해주세요</h3>
      )}
      <button
        className="btn"
        onClick={() => {
          if (selected) onNext(selected);
          else alert("검색 후 지도에서 위치를 선택해주세요");
        }}
      >
        <h2>결정</h2>
      </button>
    </div>
  );
}

export default MapSelect;
