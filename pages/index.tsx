import type { NextPage } from "next";
import Head from "next/head";

import Hero from "@sextival/modules/home/Hero";
import Info from "@sextival/modules/home/Info";
import Content from "@sextival/modules/home/Content";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sextival V2</title>
        <meta
          name="description"
          content="Il Festival della Salute Sessuale, 25 e 26 Giugno!"
        />
        <link rel="icon" href="/logo-ico.ico" />
      </Head>

      <Hero order={1} />
      <Info order={2} />
      <Content order={3} />
    </>
  );
};

export default Home;
