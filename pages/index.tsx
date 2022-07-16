import type { NextPage } from "next";
import Head from "next/head";

import Hero from "@sextival/modules/home/Hero";
import Panel from "@sextival/components/Panel";
import Guide from "@sextival/modules/home/blocks/Guide";
import Program from "@sextival/modules/home/blocks/Program";
import { Discord } from "@sextival/modules/home/blocks/Discord";
import { useResponsive } from "@sextival/hooks/useResponsive";
import { Space } from "@mantine/core";
import { Pages } from "@sextival/modules/home/blocks/Pages";
import { Crowdfunding } from "@sextival/modules/home/blocks/Crowdfunding";
import { News } from "@sextival/modules/home/blocks/News";

const Home: NextPage = () => {
  const isLg = useResponsive({});

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

      <Hero />

      <Panel order={2} scrollDown>
        <Guide />
        <Space h="xl" />
        <Program />
        <Space h="xl" />
        {isLg && <Discord />}
      </Panel>

      <Panel order={3} scrollDown={!isLg}>
        <Pages />

        {isLg && (
          <>
            <Space h="xl" />
            <Crowdfunding />
            <Space h="xl" />
            <News />
          </>
        )}
      </Panel>

      {!isLg && (
        <Panel order={4}>
          <Discord />
          <Space h="xl" />
          <Crowdfunding />
          <Space h="xl" />
          <News />
        </Panel>
      )}
    </>
  );
};

export default Home;
