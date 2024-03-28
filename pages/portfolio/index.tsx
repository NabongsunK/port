import Container from "../../components/Container";
import portfolios, { filters } from "../../data/portfolios";
import { useState, useRef } from "react";
import { ReactMixitup } from "react-mixitup";

const getFiltered = () => {
  const ret: { [key: string]: number[] } = {};

  filters.forEach((filter) => {
    let indexes = portfolios.map((_, idx) => idx);
    indexes.sort((a, b) => {
      let a_inc = portfolios[a].filter.includes(filter);
      let b_inc = portfolios[b].filter.includes(filter);
      if (a_inc && !b_inc) {
        return -1;
      } else if (!a_inc && b_inc) {
        return 1;
      } else {
        return a - b;
      }
    });
    ret[filter] = indexes;
  });

  return ret;
};

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [filtered, setFiltered] = useState(getFiltered());
  const [keys, setKeys] = useState(portfolios.map((_, idx) => idx));

  const handleFilterClick = (selectedType: string) => {
    setSelectedFilter(selectedType);
    setKeys(filtered[selectedType]);
  };

  const TRANSITION_DURATION = 200;

  return (
    <Container>
      <div className="mt-10 flex flex-col shadow-[0_1px_1px_0px_rgba(0,0,0,0.08)]">
        <ul className="flex justify-around">
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
        </ul>
      </div>
      <section className="cd-gallery mt-10 px-8 md:pt-10 lg:pt-12">
        <ReactMixitup
          keys={keys}
          dynamicDirection="vertical"
          transitionDuration={TRANSITION_DURATION}
          renderCell={(key, style, ref) => (
            <div
              key={key}
              ref={ref}
              style={{
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                display: portfolios[key].filter.includes(selectedFilter)
                  ? "flex"
                  : "none",
                transition: `transform ${TRANSITION_DURATION}ms ease`,
                ...style,
              }}
            >
              <img
                src={portfolios[key].imgsrc}
                alt={`${key}`}
                className="w-full h-auto"
              />
            </div>
          )}
          renderWrapper={(style, ref, children, stage, frame) => {
            return (
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                  gap: "1rem",
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
      </section>
    </Container>
  );
};

export default Portfolio;
