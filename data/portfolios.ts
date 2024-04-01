type Port = {
  imgsrc: string;
  filter: string[];
  css: string[];
  path: string;
};

const portfolios: Port[] = [
  {
    imgsrc: "/portfolios/img-1.jpg",
    filter: ["all", "python"],
    css: ["all"],
    path: "portfolio/invencrawler",
  },
  {
    imgsrc: "/portfolios/img-2.jpg",
    filter: ["all", "react", "nodejs", "python"],
    css: ["all", "bootstrap"],
    path: "portfolio/localt",
  },
  {
    imgsrc: "/portfolios/img-3.jpg",
    filter: ["all", "react", "nodejs", "python"],
    css: ["all", "bootstrap"],
    path: "portfolio/aloa",
  },
  {
    imgsrc: "/portfolios/img-4.jpg",
    filter: ["all"],
    css: ["all"],
    path: "portfolio/3rdp",
  },
  {
    imgsrc: "/portfolios/img-5.jpg",
    filter: ["all", "nextjs"],
    css: ["all", "tailwind"],
    path: "portfolio/nabongsun",
  },
];

export var filters = ["all", "react", "nodejs", "nextjs", "python"];

export var css = ["all", "bootstrap", "tailwind"];

export default portfolios;
