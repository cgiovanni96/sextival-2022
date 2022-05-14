import { up } from "styled-breakpoints";
import styled from "styled-components";
import { Card } from "./Card";

const section = [
  {
    image: "home-sextival",
    url: "/il-sextival",
    title: "Il Sextival",
  },
  {
    image: "home-nassa",
    url: "/la-nassa",
    title: "La Nassa",
  },
  {
    image: "home-ospiti",
    url: "gli-ospiti",
    title: "Lə Ospiti",
  },
];

export const WhoSingle = () => {
  return (
    <Container>
      <Title>Chi siamo</Title>

      <CardListSingle>
        {section.map((s, i) => (
          <Card key={i} {...s} />
        ))}
      </CardListSingle>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typo.size.big};
  font-weight: ${({ theme }) => theme.typo.weight.bold};
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.red[1]};

  padding: 0 5%;
  margin-top: 1rem;

  ${up("lg")} {
    padding: 0 20%;
  }
`;

const CardListSingle = styled.section`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100%;
  padding: 0 5%;

  ${up("xl")} {
    padding: 0 10%;
    flex-direction: row;
  }

  & > :nth-child(2) {
    ${up("xl")} {
      margin: 0 1.5rem;
    }
  }
`;
