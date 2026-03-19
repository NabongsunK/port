import Image from "next/image";
import { infos } from "../../data/maindata";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const AboutSidebar = () => {
  return (
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

                <div className={`text-2xl ${info.className}`}>{info.body}</div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="hidden md:flex flex-col gap-3 ml-4 mt-8 text-xl">
        <a href="#introduce" className="my_hover_line right cursor-pointer">
          INTRODUCE
        </a>
        <a href="#experience" className="my_hover_line right cursor-pointer">
          EXPERIENCE
        </a>
        <a href="#education" className="my_hover_line right cursor-pointer">
          EDUCATION
        </a>
        <a href="#projects" className="my_hover_line right cursor-pointer">
          PROJECTS
        </a>
      </div>
    </div>
  );
};

export default AboutSidebar;
