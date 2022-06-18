import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "../src/components/Header";
import { Hero } from "../src/components/Hero";
import { WhoSingle } from "../src/components/WhoSingle";
import { GradientPanel } from "../src/styles/GradientPanel";
import { Guide } from "../src/components/Guide";

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

      <GradientPanel radius={true}>
        <Header />
        <Hero />
      </GradientPanel>

      <Guide />

      <WhoSingle />
    </>
  );
};

export default Home;
