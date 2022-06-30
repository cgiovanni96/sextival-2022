import type { NextPage } from "next";
import Head from "next/head";

import { Hero } from "@sextival/components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sextival</title>
        <meta
          name="description"
          content="Il Festival sulla Salute Sessuale, 25 e 26 Giugno!"
        />
        <link rel="icon" href="/logo-ico.ico" />
      </Head>

      <Hero />
    </>
  );
};

export default Home;
