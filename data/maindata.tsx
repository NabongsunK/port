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
  className?: string;
};
type Career = {
  id: number;
  date: string;
  title: string;
  body?: string;
};

type Timeline = {
  id: number;
  date: string;
  title: string;
  body?: string;
  src?: string;
};

type CarrerDetail = {
  parentId: number;
  id: number;
  date: string;
  title: string;
  body?: string;
  portfolioPath?: string;
};

type PersonalProject = {
  id: number;
  date: string;
  title: string;
  subTitle?: string;
  body?: string;
  link?: string;
  github?: string;
  portfolioPath?: string;
};

type Education = {
  id: number;
  date: string;
  title: string;
  body?: string;
};

const infos: Info[] = [
  {
    logo: <FaBirthdayCake />,
    className: "select-none",
    title: "생년월일",
    body: "1997.10.19(26 세)",
  },
  {
    logo: <FaHome />,
    className: "select-none",
    title: "주소",
    body: "경기 김포시",
  },
  {
    logo: <IoShieldSharp />,
    className: "select-none",
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
    src: "https://velog.io/@nabongsun",
  },
  {
    logo: <FaGithub />,
    title: "git",
    body: "github.com/NabongsunK",
    src: "https://github.com/NabongsunK",
  },
];

const carrers: Career[] = [
  {
    id: 1,
    date: "2024.04 ~ 2025.12",
    title: "가이랩(주)",
  },
];

const carrerDetails: CarrerDetail[] = [
  {
    parentId: 1,
    id: 1,
    date: "2024.04 ~ 2025.04",
    title: "레거시 VB 시스템 웹 전환 (마이그레이션)",
    portfolioPath: "portfolio/carrer1",
    body: `
    ■ 수행 업무
    - 사전 분석 및 시스템 구조 파악
      - 기존 VB.NET WinForms 기반 내부 업무 시스템 분석
      - 기존 이벤트 기반 로직 및 DB 구조 분석
    - 웹 시스템 설계 및 구현
      - 기존 WinForms UI를 Web UI로 재구현
      - UI/이벤트 구조를 SPA 기반 아키텍처로 재설계
    - 백엔드 로직 구현
      - REST API 기반 서버 로직 설계 및 구현
      - DB 연동 구조 개선 및 데이터 처리 로직 최적화

    ■ 주요 성과
    - 레거시 WinForms 시스템을 Web + API 기반 구조로 전환
    - 업무 로직을 REST API 구조로 재설계하여 유지보수성 개선
    
    ■ Skill
      React / Vue / Golang / MSSQL / MongoDB`,
  },
  {
    parentId: 1,
    id: 2,
    date: "2025.06 ~ 2025.09",
    title: "추가 시스템 개발 프로젝트",
    portfolioPath: "portfolio/carrer2",
    body: `
    ■ 수행 업무
    - 전자결재 시스템 구축
      - 사내 전자결재 시스템 설계 및 구현
      - 결재 단계 기반 Workflow 모델 및 상태 관리 로직 설계
      - 결재 권한 검증 및 접근 제어 로직 구현
      - Stored Procedure 기반 결재 처리 트랜잭션 구현
      - 결재 이력 관리 및 문서 상태 관리 기능 개발
    - 사내 프로젝트 MD 산정 시스템 구축
      - 사내 프로젝트 MD 산정 기준 분석, 기존 수작업 기반 산정 프로세스를 시스템 로직으로 정형화
      - T-SQL Stored Procedure 기반 MD 산정 계산 로직 구현
      - MD 집계 및 실적 조회 프로시저 설계, 다중 테이블 Join 기반 데이터 집계 및 조회 로직 구현
      - 실적 관리 및 조회를 위한 웹 화면 개발
    
      ■ 주요 성과
    
    - 전자결재 Workflow 시스템 구축을 통해 내부 업무 자동화 지원
    - MD 산정 기준을 시스템화하여 업무 자동화 및 데이터 일관성 확보
    - 복잡한 계산 로직을 DB 레이어에 구현하여 처리 성능 개선

    ■ Skill
    MSSQL / Stored Procedure / Golang / Vue`,
  },

  {
    parentId: 1,
    id: 3,
    date: "2025.10 ~ 2025.12",
    title: "데이터 처리 API 서비스 구축 프로젝트",
    portfolioPath: "portfolio/carrer3",
    body: `
    ■ 수행 업무
    - Python 기반 데이터 처리 로직 분석 및 API 서비스 설계
    - 스케줄러 기반 정기 데이터 처리 자동화 구현
    - 분석 결과 DB 저장 및 데이터 처리 파이프라인 구축
    - 기존 서비스와 API 연계를 통한 기능 통합
    - Docker 기반 컨테이너 환경 구성 및 서비스 배포

    ■ 주요 성과
    - 데이터 처리 로직을 독립 서비스로 분리하여 시스템 확장성 확보
    - 자동화된 데이터 처리 프로세스를 구축하여 운영 효율 개선

    ■ Skill
    Python / FastAPI / Docker / MSSQL / Golang`,
  },
];

const educations: Education[] = [
  {
    id: 1,
    date: "2013.03 ~ 2016.02",
    title: "인하대학교 부속 고등학교 졸업",
  },
  {
    id: 2,
    date: "2016.03 ~ 2022.08",
    title: "건국대학교 수학과 졸업",
  },
  {
    id: 3,
    date: "2023.05~2023.11",
    title: "[멀티캠퍼스] 프론트엔드 개발자 교육과정(React)수료(최우수상)",
  },
];

const personalProjects: PersonalProject[] = [
  {
    id: 1,
    date: "2026.02 ~ 2026.03",
    title: "WWMW",
    subTitle: "PC에 서버를 띄운 게임 빌더 사이트",
    body: `
    ■ 수행 업무
    - Next.js(App Router) 기반 게임 연동 웹 도구
    - Swagger 연동 api-doc 페이지 구성 및 API 문서 자동화
    - PM2·Nginx·쉘 스크립트를 활용한 서버 배포 및 자동 동기화 스크립트 작성

    ■ 주요 성과
    - 다국어·권한(UID)·데이터 관리가 분리된 구조로, 새 기능을 빠르게 추가·확장할 수 있는 아키텍처 확보

    ■ Skill
    Next.js / MySQL / Docker / Cloudflare Tunnel`,
    link: "https://wwmw.shop",
    github: "https://github.com/NabongsunK/sideProject",
    portfolioPath: "portfolio/wwmw",
  },
  {
    id: 2,
    date: "2026.02",
    title: "Nabongsun.shop",
    subTitle: "nextJS와 tailwind로 만든 개인블로그",
    body: `
    ■ 수행 업무
    - Next.js 기반 SSR 블로그 구조 설계
    - Tailwind CSS를 활용한 반응형 레이아웃 및 컴포넌트 구현
    - 포트폴리오·게시글 목록 및 상세 페이지 구성

    ■ 주요 성과
    - 개인 포트폴리오와 개발 기록을 한 곳에서 관리할 수 있는 블로그 구축

    ■ Skill
    Next.js / Tailwind CSS / TypeScript`,
    link: "https://nabongsun.shop",
    github: "https://github.com/NabongsunK/port",
    portfolioPath: "portfolio/nabongsun",
  },
  {
    id: 3,
    date: "2023.10 ~ 2024.04",
    title: "ALOA 프로젝트",
    subTitle: "로스트아크 api를 이용한, 전적검색기능을 이미지화 시키는 사이트",
    body: `
    ■ 수행 업무
    - 로스트아크 Open API 연동 및 캐릭터 전적 데이터 조회 로직 구현
    - 전적 정보를 카드·이미지 형태로 시각화하는 화면 설계 및 개발
    - 결과 공유를 위한 캡처용 레이아웃·템플릿 구성

    ■ 주요 성과
    - 텍스트 중심 전적 정보를 시각적으로 확인·공유 가능한 서비스 구현

    ■ Skill
    React / Node.js / AWS EC2`,
    github: "https://github.com/jongak/aloa",
    portfolioPath: "portfolio/aloa",
  },
  {
    id: 4,
    date: "2023.09 ~ 2023.10",
    title: "Loca!T 프로젝트",
    subTitle:
      "한국관광공사가 제공한 Tour-api를 이용한, 전국의 축제 리스트를 지역별 지도로 확인",
    body: `
    ■ 수행 업무
    - 한국관광공사 Tour API 연동 및 전국 축제 데이터 수집
    - 지역·기간 기준 필터링과 지도 기반 축제 위치 표시 UI 구현
    - React, Node.js 기반 반응형 SPA 구조 설계 및 개발

    ■ 주요 성과
    - 전국 축제 정보를 한눈에 비교·검색할 수 있는 서비스 제공

    ■ Skill
    React / Node.js / REST API`,
    github: "https://github.com/NabongsunK/localT",
    portfolioPath: "portfolio/localt",
  },
];

export { infos, carrers, carrerDetails, personalProjects, educations };
