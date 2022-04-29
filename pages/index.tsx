import { useViewportScroll } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";

import { Day } from "../src/components/Day";
import { Header } from "../src/components/Header";
import { Hero } from "../src/components/Hero";
import { Who } from "../src/components/Who";
import { GradientPanel } from "../src/styles/GradientPanel";

const Home: NextPage = () => {
  const [panelHeight, setPanelHeight] = useState<number>();
  const [heroHeight, setHeroHeight] = useState<number>();

  const { scrollY } = useViewportScroll();
  const [position, setPosition] = useState<number>(0);

  useEffect(() => {
    return scrollY.onChange((y) => setPosition(y));
  }, [scrollY]);

  const isVisible = useCallback(() => {
    return position < 200;
  }, [position]);

  return (
    <>
      <Head>
        <title>Sextival</title>
        <meta name="description" content="Sextivalettə" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <GradientPanel
        setPanelHeight={(panelHeight: number) => setPanelHeight(panelHeight)}
        isVisible={isVisible()}
      >
        <Header />
        <Hero
          setHeroHeight={(heroHeight: number) => setHeroHeight(heroHeight)}
          isVisible={isVisible()}
        />
      </GradientPanel>

      {panelHeight && heroHeight && <Who height={panelHeight} />}

      <Day />
      <Day />
    </>
  );
};

export default Home;
