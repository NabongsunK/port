import Container from "../../components/Container";
import portfolios, { filters } from "../../data/portfolios";
import { useState } from "react";
import { ReactMixitup } from "react-mixitup";

const getFiltered = () => {
  const ret: { [key: string]: any[] } = {};
  let indexes = portfolios.map((_, idx) => idx);

  filters.forEach((filter) => {
    const filteredIndexes = indexes.filter((idx) =>
      portfolios[idx].filter.includes(filter)
    );
    ret[filter] = filteredIndexes;
  });

  return ret;
};

const Album = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [filtered, setFiltered] = useState(getFiltered());
  const [keys, setKeys] = useState(portfolios.map((_, idx) => idx));

  const handleFilterClick = (selectedType: string) => {
    setSelectedFilter(selectedType);
    setKeys(filtered[selectedType]);
  };

  const TRANSITION_DURATION = 600;

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
      <section className="cd-gallery mt-10 md:pt-10 lg:pt-12">
        <ReactMixitup
          keys={keys}
          dynamicDirection="vertical"
          transitionDuration={TRANSITION_DURATION}
          renderCell={(key, style, ref) => (
            <div
              key={key}
              ref={ref}
              className="sm:w-[46%] lg:w-[31%] m-4 flex items-center justify-center 
              shadow-[0_1px_2px_0px_rgba(0,0,0,0.1)]"
              style={{
                transition: `transform ${TRANSITION_DURATION}ms ease-out`,
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
                className="flex flex-wrap box-content max-w-screen-lg"
                style={{
                  transition: `height ${TRANSITION_DURATION}ms ease-out`,
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

export default Album;
