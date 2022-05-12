import fs from "fs";
import styled from "styled-components";
import { Header } from "../src/components/Header";
import { GradientPanel } from "../src/styles/GradientPanel";
import * as path from "path";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { up } from "styled-breakpoints";

const Sextival = ({ data }: { data: string }) => {
  console.log("hello", data);
  return (
    <>
      <GradientPanel small>
        <Header />

        <Title>{"Cos'è il Sextival"}</Title>
      </GradientPanel>

      <SextivalContainer>
        <ReactMarkdown remarkPlugins={[gfm]}>{data}</ReactMarkdown>
      </SextivalContainer>
    </>
  );
};

export default Sextival;

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "_info");
  const files: string[] = fs.readdirSync(postsDirectory);
  const file = files.find((f) => f.startsWith("sextival"));
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

  & ul {
    list-style: circle;
    margin-left: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: ${({ theme }) => theme.typo.weight.bold};
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.white[1]};
  margin-top: 4rem;
  padding-bottom: 1rem;
`;
