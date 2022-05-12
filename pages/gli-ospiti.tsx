import { useEffect, useRef, useState } from "react";
import { up } from "styled-breakpoints";
import styled from "styled-components";

import { Header } from "../src/components/Header";
import { Ospite } from "../src/components/Ospite";
import { OspitiDesktop } from "../src/components/OspitiDesktop";
import { ospiti } from "../src/data/ospiti";
import { GradientPanel } from "../src/styles/GradientPanel";

const Ospiti = () => {
  const [height, setHeight] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    headerRef && headerRef.current && setHeight(headerRef.current.clientHeight);
  }, [headerRef]);

  return (
    <>
      <div ref={headerRef}>
        <GradientPanel small>
          <Header />
          <Title>{"Gli Ospiti"}</Title>
        </GradientPanel>
      </div>

      <OspitiContainerMobile>
        {ospiti.map((o, i) => (
          <Ospite key={i} ospite={o} />
        ))}
      </OspitiContainerMobile>

      <OspitiContainerDesktop>
        <OspitiDesktop ospiti={ospiti} headerHeight={height} />
      </OspitiContainerDesktop>
    </>
  );
};

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
