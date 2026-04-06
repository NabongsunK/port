import { FaBirthdayCake, FaGithub, FaHome } from "react-icons/fa";
import { IoShieldSharp } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

const getBirthdayWithAge = (birth: string) => {
  const [year, month, day] = birth.split(".").map(Number);
  const today = new Date();
  let age = today.getFullYear() - year;
  const currentMonth = today.getMonth() + 1;
  const currentDay = today.getDate();

  if (currentMonth < month || (currentMonth === month && currentDay < day)) {
    age -= 1;
  }

  return `${birth}(${age} 세)`;
};

type Info = {
  logo: JSX.Element;
  title: string;
  body: string;
  src?: string;
  className?: string;
};

type Introduce = {
  main: string;
  updateDate: string;
};

type Experience = {
  id: number;
  date: string;
  title: string;
  body?: string;
};

type CarrerDetail = {
  parentId: number;
  id: number;
  date: string;
  title: string;
  body?: string;
  portfolioPath?: string;
  problems?: {
    problem: string;
    solution: string;
  }[];
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
    body: getBirthdayWithAge("1997.10.19"),
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

const Introduce: Introduce = {
  main: `
웹/서버 개발 2년차로서, 레거시 시스템 웹 전환 및 대용량 데이터 처리 API 구축 경험을 보유하고 있습니다.  
동료 개발자뿐 아니라 고객사 실무자와 직접 소통하며 요구사항을 조율한 경험이 있으며,
다양한 기술 스택과 협업 경험을 바탕으로 효율적인 서비스 개발에 기여할 자신이 있습니다.

· 레거시 시스템 분석을 통한 서버 중심 아키텍처 재구성 경험
· T-SQL 기반 Stored Procedure 설계 및 쿼리 성능 최적화
· 트랜잭션 관리 및 데이터 무결성을 고려한 서버 로직 구현
· Golang 기반 백엔드 서버 개발
  - REST API 설계 및 구현
  - context, goroutine, channel 등을 활용한 동시성 처리 및 비동기 작업 처리
· Python(FastAPI) 기반 API 서비스 구축 및 컨테이너 환경 운영 경험
· Docker·PM2·Nginx 등을 활용한 배포·운영 환경 구성 및 모니터링 경험
`,
  updateDate: "2026.03.19",
};

const carrers: Experience[] = [
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
    title: "레거시 VB 시스템 웹 전환",
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
- 고객사·내부 실무자와의 정기 미팅을 통해 요구사항 우선순위를 조정하고, 변경 사항을 개발 일정 내에 반영

■ 주요 성과
- 레거시 WinForms 시스템을 Web + API 기반 구조로 전환
- 업무 로직을 REST API 구조로 재설계하여 유지보수성 개선
- 화면·로직 분리를 통해 장애 발생 시 원인 파악 및 수정 시간을 평균 1일 → 반나절 수준으로 단축

■ Skill
  React / Vue.js / Golang / MSSQL / MongoDB`,
    problems: [
      {
        problem:
          "폼/이벤트 안에 비즈니스 로직·화면 제어·데이터 접근이 섞여 있어, 그대로 옮기면 새 프로젝트도 빠르게 레거시화될 위험이 있었음",
        solution:
          "화면 요구사항을 입·출력 관점(입력 필드/검증/저장 대상)으로 먼저 정리하고, 비즈니스 규칙은 Service 계층으로 분리, DB 접근은 Repository 계층으로만 처리하도록 책임을 분리",
      },
      {
        problem:
          "프로젝트 팀원이 자주 바뀌어 업무 맥락과 기술 결정 이유가 유실되고, 인수인계 비용이 반복적으로 발생했음",
        solution:
          "레거시 분석 결과·API 명세·배포/실행 방법을 온보딩 문서/Runbook으로 정리하고, Controller/Service/Repository 계층 구조와 네이밍 규칙을 통일해, 새로 합류한 팀원도 같은 패턴으로 바로 기여할 수 있게 함",
      },
      {
        problem:
          "초기 일정 산정 시 레거시 분석·테스트·사용자 검증에 필요한 시간을 과소평가해, 마이그레이션 막바지에 일정 압박이 집중되는 상황이 발생함",
        solution:
          "필수 기능/부가 기능을 나눠, 마감이 촉박할 때는 필수 기능 안정화에 집중하고 부가 기능은 후속 릴리스로 조정",
      },
    ],
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
- 주 50건의 사용자 요청사항을 월 5건 이하로 감소

■ Skill
MSSQL / Stored Procedure / Golang / Vue.js`,
    problems: [
      {
        problem:
          "전자결재/MD 산정 규칙이 여러 부서·담당자에 걸쳐 있어, 개발 중에도 정책 변경·예외 케이스가 계속 추가되며 요구사항이 흔들렸음",
        solution:
          "요구사항·규칙·예외 사항을 먼저 문서로 정리해 합의한 뒤 구현하고, 변경 가능성이 높은 항목은 분리해 코드 수정 없이 조정 가능한 구조(설정/코드테이블 등)로 설계",
      },
      {
        problem:
          "보안 점검 지적사항 중 일부가 기존 공통 모듈(입력 검증/권한/로그) 설계 한계에서 비롯되어, 단순 패치만으로는 재발 방지가 어려웠음",
        solution:
          "입력 검증·권한 체크·감사 로그를 담당하는 공통 미들웨어를 재검토/개선하고, 전자결재·MD에서 발견된 케이스를 반영해 다른 기능에도 동일하게 적용. 점검 결과를 보안 체크리스트로 문서화해 재사용",
      },
    ],
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
- 데이터 분석 담당자와 처리 주기·지표를 협의하여 배치 스케줄과 예외 처리 규칙 정의

■ 주요 성과
- 데이터 처리 로직을 독립 서비스로 분리하여 시스템 확장성 확보
- 자동화된 데이터 처리 프로세스를 구축하여 운영 효율 개선, 일별 데이터 집계 작업을 무중단·자동화하여 수동 개입 빈도 축소

■ Skill
Python / FastAPI / Docker / MSSQL / Golang`,
    problems: [
      {
        problem:
          "기존 Python 로직이 ‘한 번 실행하고 끝’인 스크립트 가정이라, 서비스 운영에 필요한 재시도·부분 실패 처리·로깅 체계가 부족했음",
        solution:
          "처리 단계별 try/except·로깅·재시도 정책을 설계하고 실패 구간만 재실행 가능하도록 단계(구간) 단위로 분해. 스케줄러/응답에 실행 결과·에러 코드를 남겨 모니터링·알림 연동 기반을 마련",
      },
      {
        problem:
          "정기 배치 실행 시간과 기존 서비스의 피크 타임이 겹치거나, 처리량이 많을 때 리소스·DB 부하가 예상보다 커지는 경우가 있었음",
        solution:
          "배치 실행 시각을 피크 타임 외로 조정하고, 청크 단위 처리와 ticker 기반 레이트 리밋을 적용해 순간 부하 스파이크를 방지. 피크·비피크별 처리량을 조절해 API와 배치가 서로 방해하지 않도록 운영 기준을 정리",
      },
      {
        problem:
          "기존 서비스와 연동 시 스키마/버전 차이로 필드 변경이 양쪽 동시 수정으로 이어질 수 있어, 호환성 리스크가 있었음",
        solution:
          "요청/응답 스키마를 문서화하고 API 경로 또는 헤더에 버전을 포함해 단계적 변경이 가능하도록 관리. 연동 테스트 시나리오와 계약(contract) 검증을 자동화해 스키마 변경 영향 범위를 빠르게 확인",
      },
    ],
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
- 미들웨어에서 lang 쿠키 검증 후 x-lang 헤더로 주입하는 방식으로 다국어(ko/en/ja/zh)를 인프라 수준으로 중앙화
- UID 발급 API와 로그를 활용해, 로그인 없이도 사용자의 활동 이력을 추적·관리할 수 있는 운영 관점의 식별 체계 확보
- git pull → install → build → restart 를 자동화한 배포 스크립트로, 수동 배포 작업을 최소화하고 롤아웃 시간을 단축
- 맥미니 + PM2 + Nginx + Cloudflare Tunnel 기반으로, 고정 IP 없이도 외부에서 안정적으로 접속 가능한 운영 환경 구성

■ Skill
Next.js / MySQL / Docker / Cloudflare Tunnel`,
    link: "https://wwmw.shop",
    github: "https://github.com/NabongsunK/wwmw",
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
    link: "https://wwmw.shop/port",
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
- 로스트아크 전적 정보를 이미지로 변환해, 텍스트 위주 조회보다 직관적인 확인·공유 경험 제공
- 반응형 UI와 테마/상호작용 기능을 적용해 사용성 높은 전적 검색 페이지 구현
- AWS EC2 + Route53 기반으로 실제 서비스 배포를 경험하고, 운영 중 발생한 성능·용량 이슈를 개선
- 주간 방문자 300명 이상을 기록하며 실사용자 피드백 기반으로 기능을 보완

■ Skill
React / Node.js / AWS EC2`,
    github: "https://github.com/NabongsunK/aloa",
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
- 첫번째 프로젝트로써 기획부터 개발까지 경험을 쌓을 수 있었음
- 분업 및 협업 경험을 쌓을 수 있었음

■ Skill
React / Node.js / REST API`,
    github: "https://github.com/NabongsunK/localT",
    portfolioPath: "portfolio/localt",
  },
];

export {
  infos,
  carrers,
  carrerDetails,
  personalProjects,
  educations,
  Introduce,
};
