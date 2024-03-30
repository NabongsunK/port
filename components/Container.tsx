import Image from "next/image";
import Head from "next/head";
import Nav from "./Nav";
import metadata, { Meta } from "data/metadata";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { SiGmail, SiVelog } from "react-icons/si";
import useSWR from "swr";

const Container = (props: any) => {
  const meta: Meta = {
    title: metadata.title,
    description: metadata.description,
    author: metadata.author,
  };
  const { data, mutate } = useSWR("isDark");
  return (
    <div className={`w-full flex flex-col items-center p-6`}>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
        <meta property="og:site_name" content={meta.author} />
      </Head>
      <header
        className={`w-full max-w-screen-lg flex flex-row justify-between items-center my-1`}
      >
        <div className={`flex flex-row items-center`}>
          <Image
            src={`/logo.jpg`}
            alt="로고"
            width={40}
            height={40}
            objectFit={`cover`}
            className={`rounded-full`}
          />
          <Link href="./">
            <a className={`my_hover_line mx-6 font-bold uppercase`}>
              {metadata.title}
            </a>
          </Link>
        </div>
        <div className={`flex flex-row items-center`}>
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
      <main className={`w-full max-w-screen-lg min-h-[80vh]`}>
        {props.children}
      </main>
      <footer className="w-full max-w-screen-lg">
        <div className="flex flex-col items-center py-12 relative">
          <div className="my_line my_bottom max-w-screen-lg" />
          <div className="my-6 text-4xl">Nabongsun.shop @강성수</div>
          <ul className="my_icon flex gap-12 text-4xl">
            <Link href={"https://github.com/NabongsunK"}>
              <a className="text-5xl">
                <FaGithub />
              </a>
            </Link>
            <Link href={"kangtu142@gmail.com"}>
              <a className="text-5xl">
                <SiGmail />
              </a>
            </Link>
            <Link href={"https://velog.io/@nabongsun/posts"}>
              <a className="text-5xl">
                <SiVelog />
              </a>
            </Link>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Container;
