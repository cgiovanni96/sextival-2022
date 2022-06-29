import { up } from "styled-breakpoints";
import styled from "styled-components";

export const Brite = () => {
  return (
    <>
      <Title>Iscriviti ai laboratori della mattina!</Title>

      <Container>
        <Content>
          <a href="https://www.eventbrite.it/e/biglietti-edusex-questioni-di-genere-per-bambin-da-8-a-15-anni-368818625437">
            <strong>Questioni di Genere</strong>
          </a>
        </Content>

        <Content>
          <a href="https://www.eventbrite.it/e/biglietti-edusex-no-no-il-tema-del-consenso-per-ragazz-da-9-a-13-anni-368826007517">
            <strong>NO = NO. Il tema del consenso</strong>
          </a>
        </Content>
      </Container>
    </>
  );
};

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  ${up("lg")} {
    flex-direction: row;
    width: 60%;
    margin: 1rem auto;
  }

  & > * {
    margin: 1rem 5%;
    ${up("lg")} {
      margin: 0;
    }
  }

  & :first-child {
    margin-right: 1rem;
  }
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

const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.theme.palette.white[1]};
  box-shadow: 0px 4px 6px rgba(80, 10, 10, 0.13);
  padding: 1rem;
  color: ${(p) => p.theme.palette.red[1]};

  font-size: 20px;
  border-radius: 8px;

  & strong {
    font-weight: bold;
  }

  & img {
    width: 36px;
    height: 36px;
    margin-left: 1rem;

    &:hover {
      cursor: pointer;
    }
  }

  & span {
    margin-right: 1rem;
  }
`;
