import Head from "next/head";
import { up } from "styled-breakpoints";
import styled from "styled-components";

import { Header } from "../src/components/Header";
import { Ospite } from "../src/components/Ospite";
import { OspitiDesktop } from "../src/components/OspitiDesktop";
import { PageTitle } from "../src/components/PageTitle";
import { GradientPanel } from "../src/styles/GradientPanel";
import { getGuests, Guests } from "./api/getGuests";

type Props = {
  ospiti: Guests;
};

const Ospiti = ({ ospiti }: { ospiti: Guests }) => {
  return (
    <>
      <Head>
        <title>Lə Ospiti</title>
        <link rel="icon" href="/logo-ico.ico" />
      </Head>
      <GradientPanel small>
        <Header />
        <PageTitle>{"Lə Ospiti"}</PageTitle>
      </GradientPanel>

      <OspitiContainerMobile>
        {ospiti.map((o) => (
          <Ospite key={o.id} ospite={o} />
        ))}
      </OspitiContainerMobile>

      <OspitiContainerDesktop>
        <OspitiDesktop ospiti={ospiti} />
      </OspitiContainerDesktop>
    </>
  );
};

export async function getStaticProps() {
  const ospiti = await getGuests();

  return { props: { ospiti } };
}

export default Ospiti;

const OspitiContainerMobile = styled.section`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  padding: 0 5%;

  ${up("lg")} {
    display: none;
    padding: 0 10%;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const OspitiContainerDesktop = styled.section`
  display: none;
  margin-top: 1rem;
  width: 100vw;
  height: 100%;
  padding: 0 5%;

  ${up("lg")} {
    display: flex;
    padding: 0 20%;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
