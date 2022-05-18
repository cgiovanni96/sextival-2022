import { useEffect } from "react";
import { up } from "styled-breakpoints";
import styled from "styled-components";
import * as path from "path";
import fs from "fs";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import { Header } from "../src/components/Header";
import { GradientPanel } from "../src/styles/GradientPanel";
import { PageTitle } from "../src/components/PageTitle";
import Head from "next/head";

const Nassa = ({ data }: { data: string }) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Head>
        <title>La Nassa</title>
      </Head>
      <GradientPanel small>
        <Header />

        <PageTitle>{"La Nassa"}</PageTitle>
      </GradientPanel>

      <SextivalContainer>
        <ReactMarkdown remarkPlugins={[gfm]}>{data}</ReactMarkdown>
      </SextivalContainer>
    </>
  );
};

export default Nassa;

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "_info");
  const files: string[] = fs.readdirSync(postsDirectory);
  const file = files.find((f) => f.startsWith("nassa"));
  if (!file) return {};
  const fullPath = path.join(postsDirectory, file);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return { props: { data: fileContents } };
}

const SextivalContainer = styled.section`
  max-width: 100vw;
  padding: 0 5%;
  color: ${(p) => p.theme.palette.blue[1]};
  margin-bottom: 4rem;
  ${up("lg")} {
    padding: 0 20%;
  }

  & > * {
    margin-top: 1rem;
  }

  & h1 {
    font-size: 18px;
    font-weight: bold;
    margin: 1rem 0;
  }

  & em {
    font-style: italic;
  }

  & ul {
    list-style: circle;
    margin-left: 2rem;
  }

  & ol {
    list-style: number;
    margin-left: 2rem;
  }

  & li {
    margin-top: 0.3rem;
  }

  & strong {
    font-weight: bold;
  }
`;
