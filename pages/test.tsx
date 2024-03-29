import { useState } from "react";
import { ReactMixitup } from "react-mixitup";
import portfolios from "../data/portfolios";

function Test() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [keys, setKeys] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

  const handleFilterClick = (selectedType: string) => {
    setSelectedFilter(selectedType);
    const selectedIndices = portfolios.reduce((acc: number[], port, idx) => {
      if (port.filter.includes(selectedType)) {
        acc.push(idx);
      }
      return acc;
    }, []);

    // selectedIndices를 keys 배열에서 제거한 후 배열의 맨 앞으로 추가합니다.
    const updatedKeys = selectedIndices.concat(
      keys.filter((key) => !selectedIndices.includes(key))
    );
    setKeys(updatedKeys);
  };

  const TRANSITION_DURATION = 2500;
  var filters = ["all", "react", "nodejs", "nextjs", "spring", "spring boot"];
  return (
    <div style={{ position: "relative" }}>
      {filters.map((filter) => (
        <li
          className={
            "h-14 flex items-center px-4 uppercase font-bold " +
            (selectedFilter === filter
              ? "text-purple-900 shadow-[0_2px_0px_0px_rgba(65,48,124,1)]"
              : "")
          }
          key={filter}
          onClick={() => handleFilterClick(filter)}
        >
          {filter}
        </li>
      ))}
      <ReactMixitup
        keys={keys}
        dynamicDirection="off"
        transitionDuration={TRANSITION_DURATION}
        renderCell={(key, style, ref) => (
          <div
            key={key}
            ref={ref}
            style={{
              width: "30%",
              border: "1px solid black",
              margin: 4,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: `transform ${TRANSITION_DURATION}ms ease`,
              ...style,
            }}
          >
            <img
              src={portfolios[key].imgsrc}
              className={
                portfolios[key].filter.includes(selectedFilter) ? "" : "hidden"
              }
            />
          </div>
        )}
        renderWrapper={(style, ref, children, stage, frame) => {
          const w = (48 + 4 * 2) * 3;
          return (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                // as keys.length changes boxSizing must be border-box
                boxSizing: "border-box",
                width: "100%",
                transition: `height ${TRANSITION_DURATION}ms ease`,
                ...style,
              }}
              ref={ref}
            >
              {children}
            </div>
          );
        }}
      />
    </div>
  );
}

export default Test;
