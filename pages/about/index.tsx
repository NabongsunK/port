import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaSearch } from "react-icons/fa";
import Container from "../../components/Container";
import {
  infos,
  carrers,
  carrerDetails,
  educations,
  personalProjects,
} from "../../data/maindata";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const About = () => {
  return (
    <Container>
      <div className="flex flex-row justify-center py-10 lg:justify-start">
        <div className="container flex flex-col items-start md:flex-row mb-48">
          <div className="flex sticky flex-col w-full md:top-36 md:flex-col md:w-[240px]">
            <div className="flex flex-row md:flex-col gap-12 md:gap-0">
              <div className="justify-center hidden sm:flex">
                <Image
                  src={`${basePath}/logo_big.jpg`}
                  alt="로고"
                  width={160}
                  height={160}
                  objectFit={`cover`}
                  className={`rounded-full`}
                />
              </div>
              <div className="flex flex-col m-4 gap-4">
                <div className="bold text-6xl">강성수</div>
                <div className="bold text-3xl">2년차 풀스택 개발자</div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap my-10 md:my-0 md:flex-col">
              {" "}
              {infos.map((info, _idx) => (
                <a
                  key={`info ${_idx}`}
                  className={`w-1/2 my-4 sm:w-1/3 md:w-full flex justify-start`}
                  href={info.src}
                >
                  <div
                    className={
                      `flex flex-row pb-1 ` + (info.src ? "my_hover_line" : "")
                    }
                  >
                    <div className="text-5xl justify-center items-center mx-6 hidden sm:flex">
                      {info.logo}
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row items-center">
                        <div className="flex sm:hidden mr-3">{info.logo}</div>
                        <div className="select-none">{info.title}</div>
                      </div>

                      <div className={`text-2xl ${info.className}`}>
                        {info.body}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="hidden md:flex flex-col gap-3 mt-8 text-xl">
              <a href="#career" className="my_hover_line right cursor-pointer">
                경력사항으로 이동
              </a>
              <a
                href="#education"
                className="my_hover_line right cursor-pointer"
              >
                학력사항으로 이동
              </a>
              <a
                href="#projects"
                className="my_hover_line right cursor-pointer"
              >
                개인 프로젝트로 이동
              </a>
            </div>
          </div>

          <div className="container mx-auto w-full h-full">
            <div
              id="career"
              className="flex flex-col gap-4 text-6xl font-bold mb-12"
            >
              경력사항
            </div>
            {carrers.map((career, _idx) => (
              <div key={`career ${_idx}`} className="mb-8">
                <div className="flex flex-row items-center gap-4">
                  <div className="text-5xl font-semibold my_accent_text">
                    {career.title}
                  </div>
                  <div className="text-4xl text-gray-600">{career.date}</div>
                </div>

                {/* 여기서부터는 메인 캐리어 '아래'에 위치 */}
                <div className="mt-3 ml-6 space-y-8">
                  {carrerDetails
                    .filter(
                      (careerDetail) => careerDetail.parentId === career.id,
                    )
                    .map((careerDetail, detailIdx) => (
                      <div
                        key={`careerDetail ${detailIdx}`}
                        className="border-l-2 border-gray-300 pl-4"
                      >
                        <div className="text-2xl text-gray-600">
                          {careerDetail.date}
                        </div>
                        <div className="text-4xl font-semibold flex items-center gap-3 flex-wrap">
                          <span className="my_accent_text">
                            {careerDetail.title}
                          </span>
                          {careerDetail.portfolioPath && (
                            <Link
                              href={`/${careerDetail.portfolioPath}`}
                              className="inline-flex text-3xl my_accent_text my_accent_text_hover my_hover_line"
                              aria-label="포트폴리오 상세 보기"
                            >
                              <FaSearch className="cursor-pointer text-[0.8em]" />
                            </Link>
                          )}
                        </div>
                        <div className="text-2xl whitespace-pre-wrap">
                          {careerDetail.body}
                        </div>

                        {careerDetail.problems &&
                          careerDetail.problems.length > 0 && (
                            <details className="mt-6 rounded-xl my_accent_border my_accent_surface">
                              <summary className="cursor-pointer select-none list-none p-4 my_accent_surface_hover rounded-xl transition-colors">
                                <div className="flex items-center justify-between gap-4">
                                  <div className="text-3xl font-semibold my_accent_text">
                                    문제 해결 사례{" "}
                                    {careerDetail.problems.length}건 보기
                                  </div>
                                  <div className="text-2xl my_accent_text">
                                    펼치기/접기
                                  </div>
                                </div>
                              </summary>
                              <div className="px-4 pb-4 space-y-4">
                                {careerDetail.problems.map((p, pIdx) => (
                                  <div
                                    key={`problem-${careerDetail.id}-${pIdx}`}
                                    className="bg-white rounded-xl p-4 my_accent_border shadow-sm"
                                  >
                                    <div className="text-2xl whitespace-pre-wrap">
                                      {`■ 문제점\n${p.problem}\n\n■ 해결책\n${p.solution}`}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </details>
                          )}
                      </div>
                    ))}
                </div>
              </div>
            ))}

            <div
              id="education"
              className="flex flex-col gap-4 text-6xl font-bold mb-12"
            >
              학력사항
            </div>
            <div className="border-l-2 border-gray-300 pl-4 ml-6 mb-8 space-y-8 ">
              {educations.map((education, detailIdx) => (
                <div key={`education ${detailIdx}`}>
                  <div className="text-2xl text-gray-600">{education.date}</div>
                  <div className="text-4xl font-semibold">
                    {education.title}
                  </div>
                  <div className="text-2xl whitespace-pre-wrap">
                    {education.body}
                  </div>
                </div>
              ))}
            </div>

            <div
              id="projects"
              className="flex flex-col gap-4 text-6xl font-bold mb-12"
            >
              개인 프로젝트
            </div>

            <div className="space-y-8">
              {personalProjects.map((personalProject, _idx) => (
                <div
                  key={`personalProject ${_idx}`}
                  className="border-l-2 border-gray-300 pl-4 ml-6 mb-4"
                >
                  <div className="text-2xl text-gray-600">
                    {personalProject.date}
                  </div>
                  <div className="text-4xl font-semibold flex items-center gap-3 flex-wrap">
                    <span className="my_accent_text">
                      {personalProject.title}
                    </span>
                    {personalProject.portfolioPath && (
                      <Link
                        href={`/${personalProject.portfolioPath}`}
                        className="inline-flex text-3xl text-gray-600 hover:text-gray-900 "
                        aria-label="포트폴리오 상세 보기"
                      >
                        <FaSearch className="cursor-pointer text-[0.8em]" />
                      </Link>
                    )}
                    {personalProject.link && (
                      <a
                        href={personalProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex text-3xl text-gray-600 hover:text-gray-900"
                        aria-label="사이트 보기"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {personalProject.github && (
                      <a
                        href={personalProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex text-3xl text-gray-600 hover:text-gray-900"
                        aria-label="GitHub"
                      >
                        <FaGithub />
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
        </div>
      </div>
    </Container>
  );
};
export default About;
