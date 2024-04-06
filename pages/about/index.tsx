import React from "react";
import Image from "next/image";
import Container from "../../components/Container";
import { infos, timelines } from "../../data/maindata";

const About = () => {
  return (
    <Container>
      <div className="flex flex-row justify-center py-10 lg:justify-start">
        <div className="container flex flex-col items-start md:flex-row mb-48">
          <div className="flex sticky flex-col w-full md:top-36 md:flex-col md:w-[240px]">
            <div className="flex flex-row md:flex-col gap-12 md:gap-0">
              <div className="justify-center hidden sm:flex">
                <Image
                  src={"/logo_big.jpg"}
                  alt="로고"
                  width={160}
                  height={160}
                  objectFit={`cover`}
                  className={`rounded-full`}
                />
              </div>
              <div className="flex flex-col m-4 gap-4">
                <div className="bold text-6xl">강성수</div>
                <div className="bold text-3xl">신입 프론트엔드 개발자</div>
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
                        <div>{info.title}</div>
                      </div>

                      <div className="text-2xl">{info.body}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="container mx-auto w-full h-full">
            <div className="block md:hidden">
              <div className="my_line -my-8"></div>
            </div>

            <div className="relative wrap overflow-hidden h-full">
              <div>
                <div className="my_main_line absolute h-full md:border-2"></div>
              </div>

              {timelines.map((timeline, _idx) => (
                <div
                  key={`timeline ${_idx}`}
                  className={
                    `mb-8 flex justify-between items-center w-full ` +
                    (!(_idx % 2) ? "md:flex-row-reverse" : "")
                  }
                >
                  <div className={`order-1 w-5/12 hidden md:block`}></div>
                  <a
                    className={
                      `my_main_item order-1 px-1 py-4 w-full md:w-5/12 ` +
                      (_idx % 2 ? "" : "md:text-right")
                    }
                    href={timeline.src}
                  >
                    <p className="text-2xl">{timeline.date}</p>
                    <div
                      className={
                        `flex font-bold text-4xl mb-2 md:text-5xl ` +
                        (timeline.title ? "" : "hidden") +
                        (_idx % 2 ? "" : "md:flex-row-reverse")
                      }
                    >
                      <div
                        className={
                          `pb-2 ` + (timeline.src ? "my_hover_line " : "")
                        }
                      >
                        {timeline.title}
                      </div>
                    </div>
                    <p className="text-2xl leading-snug">
                      {timeline.body.split("\n").map((line, index) => (
                        <span key={index}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </p>
                  </a>
                </div>
              ))}
            </div>
            <img
              className="mx-auto -mt-56 md:-mt-36"
              src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
