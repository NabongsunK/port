import { FaBirthdayCake, FaGithub, FaHome } from "react-icons/fa";
import { IoShieldSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

type Info = {
  logo: JSX.Element;
  title: string;
  body: string;
  src?: string;
};
type Timeline = {
  date: string;
  title: string;
  body: string;
  body2?: string;
  src?: string;
};

const infos: Info[] = [
  {
    logo: <FaBirthdayCake />,
    title: "생년월일",
    body: "1997.10.19(26 세)",
  },
  {
    logo: <FaHome />,
    title: "주소",
    body: "경기 김포시",
  },
  {
    logo: <IoShieldSharp />,
    title: "병역사항",
    body: "육군 병장 만기전역",
  },
  {
    logo: <IoMdMail />,
    title: "E-Mail",
    body: "kangtu142@gmail.com",
  },
  {
    logo: <FaPhone />,
    title: "Mobile",
    body: "010-2059-7105",
  },
  {
    logo: <SiVelog />,
    title: "blog",
    body: "velog.io/@nabongsun",
    src: "https:/velog.io/@nabongsun",
  },
  {
    logo: <FaGithub />,
    title: "git",
    body: "github.com/NabongsunK",
    src: "https:/github.com/NabongsunK",
  },
];

const timelines: Timeline[] = [
  {
    date: "2016.02",
    title: "",
    body: "인하대학교 부속 고등학교 졸업",
  },
  {
    date: "2022.08",
    title: "",
    body: "건국대학교 수학과 졸업",
  },
  {
    date: "2023.05 ~ 2023.11",
    title: "",
    body: "[멀티캠퍼스] 프론트엔드 개발자 교육과정(React)",
    body2: "수료 (최우수상)",
  },
  {
    date: "2023.07",
    title: "",
    body: "워드클라우드를 이용한 커뮤니티 제목 시각화",
    src: "/portfolio/invencrawler",
  },
  {
    date: "2023.9 ~ 2023.10",
    title: "Loca!T 프로젝트",
    body: "한국관광공사가 제공한 Tour-api를 이용한, 전국의 축제 리스트를 지역별 지도로 확인",
    body2: "React, NodeJS로 개발하여, 반응형 SPA 개발",
    src: "/portfolio/localt",
  },
  {
    date: "2023.12 ~",
    title: "ALOA 프로젝트",
    body: "로스트아크 api를 이용한, 전적검색기능을 이미지화 시키는 사이트 개발",
    body2: "aws-ec2를 이용하여 https 웹페이지 배포",
    src: "/portfolio/aloa",
  },
  {
    date: "2024.03 ~",
    title: "3rd project(가칭)",
    body: "vueJS를 활용한 새로운 프로젝트 기획",
  },
  {
    date: "2024.03 ~ 2024.04",
    title: "Nabongsun.shop",
    body: "nextJS를 활용한 SSR 반응형 페이지",
  },
];

export { infos, timelines };
