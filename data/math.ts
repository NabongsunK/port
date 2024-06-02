type Port = {
  title: string;
  imgsrc: string;
  filter: string[];
  css: string[];
  path?: string;
};

const portfolios: Port[] = [
  {
    title: "커뮤니티 제목 시각화",
    imgsrc: "/portfolios/invencrawler.jpg",
    filter: ["all", "python"],
    css: ["all"],
    path: "portfolio/invencrawler",
  },
  {
    title: "Loca!T 프로젝트",
    imgsrc: "/portfolios/localt.jpg",
    filter: ["all", "react", "nodejs", "python"],
    css: ["all", "bootstrap"],
    path: "portfolio/localt",
  },
  {
    title: "ALOA 프로젝트",
    imgsrc: "/portfolios/aloa.jpg",
    filter: ["all", "react", "nodejs", "python"],
    css: ["all", "bootstrap"],
    path: "portfolio/aloa",
  },
  {
    title: "3rd project(가칭)",
    imgsrc: "/portfolios/3rdp.jpg",
    filter: ["all", "vuejs"],
    css: ["all", "tailwind"],
  },
  {
    title: "Nabongsun.shop",
    imgsrc: "/portfolios/nabongsun.jpg",
    filter: ["all", "nextjs"],
    css: ["all", "tailwind"],
    path: "portfolio/nabongsun",
  },
];

export var filters = ["all", "react", "nodejs", "nextjs", "python", "vuejs"];

export var css = ["all", "bootstrap", "tailwind"];

export default portfolios;
