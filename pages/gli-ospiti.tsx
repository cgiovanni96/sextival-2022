import { up } from "styled-breakpoints";
import styled from "styled-components";

import { Header } from "../src/components/Header";
import { Ospite } from "../src/components/Ospite";
import { OspitiDesktop } from "../src/components/OspitiDesktop";
import { PageTitle } from "../src/components/PageTitle";
import { Ospiti, ospiti as ospitiData } from "../src/data/ospiti";
import { GradientPanel } from "../src/styles/GradientPanel";

const Ospiti = ({ ospiti }: { ospiti: Ospiti }) => {
  return (
    <>
      <GradientPanel small>
        <Header />
        <PageTitle>{"Lə Ospiti"}</PageTitle>
      </GradientPanel>

      <OspitiContainerMobile>
        {ospiti.map((o) => (
          <Ospite key={o.img} ospite={o} />
        ))}
      </OspitiContainerMobile>

      <OspitiContainerDesktop>
        <OspitiDesktop ospiti={ospiti} />
      </OspitiContainerDesktop>
    </>
  );
};

export function getStaticProps() {
  return { props: { ospiti: ospitiData } };
}

export default Ospiti;

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

const i = styled.main`
  margin-top: 2rem;
  padding: 0 5%;
`;

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
