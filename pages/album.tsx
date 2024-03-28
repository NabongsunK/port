import Container from "../components/Container";
import Image from "next/image";
import portfolios from "../data/portfolios";
import { useState } from "react";

const Album = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const handleFilterClick = (selectedType: string) => {
    setSelectedFilter(selectedType);
  };

  var filters = ["all", "react", "nodejs", "nextjs", "spring", "spring boot"];
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
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {portfolios.map((port, idx) => (
            <li
              className={
                "shadow-md " +
                (port.filter.includes(selectedFilter) ? "" : "hidden")
              }
              key={`port ${idx}}`}
            >
              <Image
                src={port.imgsrc}
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
    </Container>
  );
};

export default Album;
