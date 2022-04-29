import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { Day } from "../src/components/Day";
import { Hero } from "../src/components/Hero";
import { Who } from "../src/components/Who";
import { GradientPanel } from "../src/styles/GradientPanel";

const Home: NextPage = () => {
  const [panelHeight, setPanelHeight] = useState<number>();
  const [heroHeight, setHeroHeight] = useState<number>();

  return (
    <>
      <Head>
        <title>Sextival</title>
        <meta name="description" content="Sextivalettə" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GradientPanel
        setPanelHeight={(panelHeight: number) => setPanelHeight(panelHeight)}
      />
      <Hero setHeroHeight={(heroHeight: number) => setHeroHeight(heroHeight)} />

      {panelHeight && heroHeight && <Who height={panelHeight - heroHeight} />}

      <Day />
      <Day />
    </>
  );
};

export default Home;
