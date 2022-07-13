import type { NextPage } from "next";
import Head from "next/head";
import { useScrollIntoView } from "@mantine/hooks";

import Hero from "@sextival/modules/home/Hero";
import Info from "@sextival/modules/home/Info";
import Content from "@sextival/modules/home/Content";
import { Children } from "src/types";
import { Box } from "@mantine/core";

const ScrollContainer = ({ children }: Children) => {
  return <Box sx={{ scrollSnapType: "y mandatory" }}>{children}</Box>;
};

const Home: NextPage = () => {
  const { scrollIntoView: scrollToInfo, targetRef: infoRef } =
    useScrollIntoView<HTMLDivElement>();

  const { scrollIntoView: scrollToContent, targetRef: contentRef } =
    useScrollIntoView<HTMLDivElement>();

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

      <ScrollContainer>
        <Hero scrollAction={() => scrollToInfo()} />
        <Info scrollAction={() => scrollToContent()} scrollRef={infoRef} />
        <Content
          scrollAction={() => {
            console.log("hello");
          }}
          scrollRef={contentRef}
        />
      </ScrollContainer>
    </>
  );
};

export default Home;
