import xlsx from "xlsx";
import path from "path";
import Head from "next/head";
import { GradientPanel } from "../src/styles/GradientPanel";
import { Header } from "../src/components/Header";
import { PageTitle } from "../src/components/PageTitle";
import styled from "styled-components";
import { up } from "styled-breakpoints";
import { Sostenitori } from "../src/components/Sostenitori";
import { PDB } from "../src/components/PDB";
import { Terzi } from "../src/components/Terzi";

type SheetData = {
  Date: string;
  User: string;
  Name: string;
  Surname: string;
  Email: string;
  Reward: string;
  Donation: number;
};

export type SheetDatas = Array<SheetData>;
export type DonatorInfo = {
  data: SheetData;
};

const Dona = ({ data }: { data: SheetDatas }) => {
  return (
    <>
      <Head>
        <title>Chi ci sostiene</title>
        <link rel="icon" href="/logo-ico.ico" />
      </Head>

      <GradientPanel small>
        <Header />
        <PageTitle>{"Chi ci sostiene"}</PageTitle>
      </GradientPanel>

      <PDB />
      <Container>
        <Terzi />
      </Container>
      <Container lighter>
        <Sostenitori sostenitori={data} />
      </Container>
    </>
  );
};

export default Dona;

export function getStaticProps() {
  const filePath = path.join(__dirname, "../../../public/crowd/crowd.xlsx");
  const file = xlsx.readFile(filePath);
  const sheetList = file.SheetNames;
  const sheet = file.Sheets[sheetList[0]];

  const sheetData: Array<SheetData> = xlsx.utils.sheet_to_json(sheet);
  const data = sheetData.filter(
    (v) => v.Donation > 14 && v.Reward && v.Reward !== ""
  );

  return { props: { data } };
}

type ContainerProps = {
  lighter?: boolean;
};

const Container = styled.section<ContainerProps>`
  background-color: ${(p) => (p.lighter ? "#f5c7cf" : "inherit")};
  margin-top: 1rem;
  width: 100vw;
  height: 100%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;

  ${up("lg")} {
    flex-wrap: wrap;
    padding: 0 10%;
  }
`;
