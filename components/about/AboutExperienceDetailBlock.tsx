import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import AboutExperienceProblemsDetails from "./AboutExperienceProblemsDetails";

type ExperienceProblem = {
  problem: string;
  solution: string;
};

type ExperienceDetail = {
  id: number;
  date: string;
  title: string;
  body?: string;
  portfolioPath?: string;
  problems?: ExperienceProblem[];
};

type Props = {
  careerDetail: ExperienceDetail;
  detailIdx: number;
};

const AboutExperienceDetailBlock = ({ careerDetail, detailIdx }: Props) => {
  return (
    <div
      key={`ExperienceDetail ${detailIdx}`}
      className="border-l-2 border-gray-300 pl-4"
    >
      <div className="text-2xl text-gray-600">{careerDetail.date}</div>
      <div className="text-4xl font-semibold flex items-center gap-3 flex-wrap">
        <span className="my_accent_text">{careerDetail.title}</span>
        {careerDetail.portfolioPath && (
          <Link
            href={`/${careerDetail.portfolioPath}`}
            legacyBehavior
          >
            <a
              className="inline-flex text-3xl relative group"
              aria-label="포트폴리오 상세 보기"
            >
              <FaSearch className="cursor-pointer " />
              <span className="my_tooltip pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-10">
                포트폴리오 상세 보기
              </span>
            </a>
          </Link>
        )}
      </div>

      <div className="text-2xl whitespace-pre-wrap">{careerDetail.body}</div>

      {careerDetail.problems && careerDetail.problems.length > 0 && (
        <AboutExperienceProblemsDetails
          count={careerDetail.problems.length}
          problems={careerDetail.problems}
          problemKeyPrefix={`problem-${careerDetail.id}`}
          renderProblemKey={(pIdx) => `problem-${careerDetail.id}-${pIdx}`}
        />
      )}
    </div>
  );
};

export default AboutExperienceDetailBlock;

