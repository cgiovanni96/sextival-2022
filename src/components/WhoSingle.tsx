import { up } from "styled-breakpoints";
import styled from "styled-components";
import Link from "next/link";

export const WhoSingle = () => {
  return (
    <Container>
      <Title>Chi siamo</Title>

      <CardListSingle>
        <CardSingle>
          <InfoContainer>
            <Link href={"/il-sextival"} passHref>
              <CardTitle>Il Sextival</CardTitle>
            </Link>
          </InfoContainer>
        </CardSingle>

        <CardSingle>
          <InfoContainer>
            <Link href={"/la-nassa"} passHref>
              <CardTitle>La Nassa</CardTitle>
            </Link>
          </InfoContainer>
        </CardSingle>

        <CardSingle>
          <InfoContainer>
            <Link href={"/gli-ospiti"} passHref>
              <CardTitle>Gli Ospiti</CardTitle>
            </Link>
          </InfoContainer>
        </CardSingle>
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

  ${up("lg")} {
    padding: 0 10%;
    flex-direction: row;
  }
`;

const CardSingle = styled.div`
  flex: 1;
  flex-basis: 200px;
  background: ${({ theme }) => theme.palette.red[1]};
  color: ${({ theme }) => theme.palette.white[1]};
  display: flex;
  margin-bottom: 1rem;
  border-radius: 0.5rem;

  ${up("lg")} {
    margin-left: 2rem;
    height: 200px;
  }
`;

const InfoContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;
  margin-left: 1rem;
`;

const CardTitle = styled.a`
  font-size: ${({ theme }) => theme.typo.size.big};
  font-weight: ${({ theme }) => theme.typo.weight.bold};
  margin-bottom: 1rem;
`;
