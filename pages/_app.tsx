import type { AppProps } from "next/app";
import "../styles/globals.css";
import { useState } from "react";
import useSWR from "swr";

// import "../styles/mystyle.css";
// import "../styles/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [thema, setIsThema] = useState(0);

  const { data, mutate } = useSWR("isDark", {
    fallbackData: false,
  });

  return (
    <div className={(data ? "App dark a" : "App light a") + thema}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
