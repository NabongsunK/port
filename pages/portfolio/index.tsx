import Container from "../../components/Container";
import Image from "next/image";
import { useState } from "react";
import portfolios from "../../data/portfolios";

const Portfolio = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const handleFilterClick = (selectedType: string) => {
    setSelectedFilter(selectedType);
  };
  var filters = ["all", "react", "nodejs", "nextjs"];

  return (
    <Container>
      <div className="mt-10 flex flex-col">
        <div className="cd-tab-filter-wrapper">
          <div className="cd-tab-filter">
            <ul>
              {filters.map((filter) => (
                <li
                  key={filter}
                  onClick={() => handleFilterClick(filter)}
                  className={selectedFilter === filter ? "selected" : ""}
                >
                  {filter}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <section className="cd-gallery">
          <ul>
            {portfolios.map((port, idx) => (
              <li
                className={`mix color-1 ${
                  port.filter.includes(selectedFilter) ? "" : "hide"
                }`}
                key={`port ${idx + 1}}`}
              >
                <Image
                  src={`/ports/img-${idx + 1}.jpg`}
                  alt={`Image ${idx + 1}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Container>
  );
};

export default Portfolio;
