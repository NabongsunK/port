import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaSearch } from "react-icons/fa";
import { personalProjects } from "../../data/maindata";

const AboutProjectsSection = () => {
  return (
    <div>
      <div
        id="projects"
        className="flex flex-col gap-4 text-4xl font-bold mb-8"
      >
        PROJECTS
      </div>
      <div className="space-y-8">
        {personalProjects.map((personalProject, _idx) => (
          <div
            key={`personalProject ${_idx}`}
            className="border-l-2 border-gray-300 pl-4 md:ml-6 mb-4"
          >
            <div className="text-2xl text-gray-600">{personalProject.date}</div>
            <div className="text-4xl font-semibold flex items-center gap-3 flex-wrap">
              <span className="my_accent_text">{personalProject.title}</span>
              {personalProject.portfolioPath && (
                <Link href={`/${personalProject.portfolioPath}`} legacyBehavior>
                  <a
                    className="inline-flex text-3xl text-gray-600 hover:text-gray-900 relative group"
                    aria-label="포트폴리오 상세 보기"
                  >
                    <FaSearch className="cursor-pointer " />
                    <span className="my_tooltip pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-10">
                      포트폴리오 상세 보기
                    </span>
                  </a>
                </Link>
              )}
              {personalProject.link && (
                <a
                  href={personalProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-3xl text-gray-600 hover:text-gray-900 relative group"
                  aria-label="사이트 보기"
                >
                  <FaExternalLinkAlt />
                  <span className="my_tooltip pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-10">
                    사이트 열기
                  </span>
                </a>
              )}
              {personalProject.github && (
                <a
                  href={personalProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-3xl text-gray-600 hover:text-gray-900 relative group"
                  aria-label="GitHub"
                >
                  <FaGithub />
                  <span className="my_tooltip pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-10">
                    GitHub 열기
                  </span>
                </a>
              )}
            </div>
            {personalProject.subTitle && (
              <div className="text-2xl text-gray-500 mt-1">
                {personalProject.subTitle}
              </div>
            )}
            <div className="text-2xl whitespace-pre-wrap">
              {personalProject.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutProjectsSection;
