type Port = {
  id: number;
  title: string;
  imgsrc: string;
  filter: string[];
  path?: string;
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const portfolios: Port[] = [
  {
    id: 1,
    title: "InvenCrawler",
    imgsrc: `${basePath}/portfolios/invencrawler.jpg`,
    filter: ["all", "python"],
    path: "portfolio/invencrawler",
  },
  {
    id: 2,
    title: "Loca!T 프로젝트",
    imgsrc: `${basePath}/portfolios/localt.jpg`,
    filter: ["all", "react", "python"],
    path: "portfolio/localt",
  },
  {
    id: 3,
    title: "ALOA 프로젝트",
    imgsrc: `${basePath}/portfolios/aloa.jpg`,
    filter: ["all", "react", "python"],
    path: "portfolio/aloa",
  },
  {
    id: 4,
    title: "Nabongsun.shop",
    imgsrc: `${basePath}/portfolios/nabongsun.jpg`,
    filter: ["all", "nextjs"],
    path: "portfolio/nabongsun",
  },
  {
    id: 5,
    title: "WWMW",
    imgsrc: `${basePath}/portfolios/wwmw.png`,
    filter: ["all", "nextjs", "server"],
    path: "portfolio/wwmw",
  },
  {
    id: 6,
    title: "Nabongsun.shop v2",
    imgsrc: `${basePath}/portfolios/nabongsun2.png`,
    filter: ["all", "nextjs"],
    path: "portfolio/nabongsun2",
  },
  {
    id: 9,
    title: "레거시 VB 시스템 웹 전환",
    imgsrc: `${basePath}/portfolios/carrer1.png`,
    filter: ["all", "react", "db"],
    path: "portfolio/carrer1",
  },
  {
    id: 8,
    title: "추가 시스템 개발 프로젝트",
    imgsrc: `${basePath}/portfolios/carrer2.png`,
    filter: ["all", "server", "db"],
    path: "portfolio/carrer2",
  },
  {
    id: 7,
    title: "데이터 처리 API 서비스 구축 프로젝트",
    imgsrc: `${basePath}/portfolios/carrer3.png`,
    filter: ["all", "python", "server", "db"],
    path: "portfolio/carrer3",
  },
].sort((a, b) => -a.id + b.id);

export var filters = ["all", "react", "nextjs", "python", "server", "db"];

export default portfolios;
