import Image from "next/image";
import Head from "next/head";
import Nav from "./Nav";
import metadata, { Meta } from "data/metadata";
import Link from "next/link";
import useSWR from "swr";
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import { CiMail } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
const icons = {
  nabongsun: { src: "/logo.jpg", w: 40, h: 40 },
  localt: { src: "/port_logo/localt.jpg", w: 160, h: 40 },
  aloa: { src: "/port_logo/aloa.png", w: 48, h: 50 },
};

const Container = (props: any) => {
  if (props.customMeta) {
    var meta: Meta = props.customMeta;
  } else {
    var meta: Meta = {
      title: metadata.title,
      description: metadata.description,
      author: metadata.author,
    };
  }

  const { data, mutate } = useSWR("isDark");
  return (
    <div
      className={
        `my_container w-full flex flex-col items-center p-12 sm:p-6 ` +
        (props.thema ? props.thema : "")
      }
    >
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>
      <header
        className={`w-full max-w-screen-lg flex flex-col justify-between items-center my-1 sm:flex-row`}
      >
        <div className={`flex flex-row items-center`}>
          <Image
            src={icons[props.thema ? props.thema : "nabongsun"].src}
            alt="로고"
            width={icons[props.thema ? props.thema : "nabongsun"].w}
            height={icons[props.thema ? props.thema : "nabongsun"].h}
            objectFit={`cover`}
            className={`rounded-full`}
          />
          <Link href="./">
            <a className={`my_hover_line mx-6 font-bold uppercase`}>
              {props.thema && props.thema == "aloa" ? "aloa" : metadata.title}
            </a>
          </Link>
        </div>
        <div
          className={`my-heading-bg flex flex-row items-center justify-between z-10 bottom-0
          fixed w-full h-20 p-10
          sm:static sm:w-auto sm:h-auto sm:p-0`}
        >
          <Nav />
          <div
            className={`flex flex-row items-center cursor-pointer`}
            onClick={() => {
              mutate(!data);
            }}
          >
            <div
              className={
                `my_hover_line inline-block mr-2 ` + (data ? "" : "selected")
              }
            >
              낮
            </div>
            <div>/</div>
            <div
              className={
                "my_hover_line inline-block ml-2 " + (data ? "selected" : "")
              }
            >
              밤
            </div>
          </div>
        </div>
      </header>
      <main className={`w-full max-w-screen-lg min-h-[600px]`}>
        {props.children}
      </main>
      <footer className="w-full max-w-screen-lg">
        <div className="flex flex-col items-center py-20 relative sm:py-12">
          <div className="my_line my_bottom max-w-screen-lg" />
          <div className="my-6 text-4xl">Nabongsun.shop @강성수</div>
          <ul className="my_icon flex gap-12 text-4xl">
            <Link href={"https://github.com/NabongsunK"}>
              <a className="text-5xl">
                <FaGithub />
              </a>
            </Link>
            <Link href={"https://velog.io/@nabongsun/posts"}>
              <a className="text-5xl">
                <SiVelog />
              </a>
            </Link>
            <Link href={"kangtu142@gmail.com"}>
              <a className="text-5xl">
                <IoMdMail />
              </a>
            </Link>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Container;
