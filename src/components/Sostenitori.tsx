import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import styled from "styled-components";
import { SheetDatas } from "../../pages/dona";
import { up } from "styled-breakpoints";

type Props = {
  sostenitori: SheetDatas;
};

export const Sostenitori = ({ sostenitori }: Props) => {
  return (
    <>
      <Title>E grazie a tutti voi!</Title>
      <SostenitoriContainer>
        {sostenitori.map((s, i) => {
          const surname = s.Surname ? " " + s.Surname : "";
          const name = s.Name + surname;
          return (
            <Sostenitore key={i}>
              <Name>{name}</Name>
            </Sostenitore>
          );
        })}
      </SostenitoriContainer>
    </>
  );
};

const SostenitoriContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Title = styled.div`
  margin-top: 1rem;
  font-weight: bold;
  font-size: ${(s) => s.theme.typo.size.huge};
  margin-bottom: 1rem;
`;

const Sostenitore = styled.div`
  flex-basis: 50%;
  text-align: center;

  ${up("lg")} {
    flex-basis: 33%;
  }
`;

const Name = styled.span`
  font-size: 16px;
  padding: 10px 0;
  color: ${(p) => p.theme.palette.blue[0]};
  text-transform: capitalize;
  text-align: center;
`;
