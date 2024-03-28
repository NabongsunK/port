import Image from "next/image";
import Head from "next/head";
import Nav from "./Nav";

const Container = (props: any) => {
  return (
    <div className={`w-full flex flex-col items-center p-3`}>
      <Head>
        <title>내 블로그</title>
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
          <span className={`mx-4 font-extralight`}>내 블로그</span>
        </div>
        <Nav />
      </header>
      <main className={`w-full max-w-screen-lg`}>{props.children}</main>
    </div>
  );
};

export default Container;
