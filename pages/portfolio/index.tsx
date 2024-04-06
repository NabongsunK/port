import Image from "next/image";
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

const Portfolio = () => {
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
      <div className="mt-6 flex flex-col relative">
        <ul className="flex flex-row flex-wrap justify-around">
          {filters.map((filter) => (
            <li
              className={
                "px-4 font-bold my_hover_line uppercase mt-4 " +
                (selectedFilter === filter ? "selected" : "")
              }
              key={filter}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </li>
          ))}
        </ul>
        <div className="my_line my_bot max-w-screen-lg" />
      </div>

      <section className="cd-gallery mt-10 pt-10">
        <ReactMixitup
          keys={keys}
          dynamicDirection="vertical"
          transitionDuration={TRANSITION_DURATION}
          renderCell={(key, style, ref) => (
            <div
              key={key}
              ref={ref}
              className={
                "w-full sm:w-1/2 lg:w-1/3 my-4 flex items-center justify-center"
              }
              style={{
                transition: `transform ${TRANSITION_DURATION}ms ease-out`,
                ...style,
              }}
            >
              <a href={portfolios[key].path}>
                <div className="px-6 transition ease-out duration-300 transform hover:scale-95">
                  <Image
                    src={portfolios[key].imgsrc}
                    alt={`Image_${key}`}
                    width={600}
                    height={680}
                  />
                </div>
                <div className="flex px-6 text-bold text-heading justify-center">
                  {portfolios[key].title}
                </div>
              </a>
            </div>
          )}
          renderWrapper={(style, ref, children, stage, frame) => {
            return (
              <div
                className="flex flex-wrap justify-start box-content max-w-screen-lg"
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

export default Portfolio;
