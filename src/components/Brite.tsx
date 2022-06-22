import { up } from "styled-breakpoints";
import styled from "styled-components";

export const Brite = () => {
  return (
    <Container>
      <Content>
        <a href="https://www.eventbrite.it/e/biglietti-edusex-questioni-di-genere-per-bambin-da-8-a-15-anni-368818625437">
          <div>
            Iscriviti al laboratorio <strong>Questioni di Genere</strong>
          </div>
        </a>
      </Content>

      <Content>
        <a href="https://www.eventbrite.it/e/biglietti-edusex-no-no-il-tema-del-consenso-per-ragazz-da-9-a-13-anni-368826007517">
          <div>
            Iscriviti al laboratorio{" "}
            <strong>NO = NO. Il tema del consenso</strong>
          </div>
        </a>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > * {
    margin: 1rem 5%;

    ${up("lg")} {
      margin: 1rem 20%;
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(p) => p.theme.palette.red[1]};
  border: 4px solid ${(p) => p.theme.palette.white[1]};
  box-shadow: 0px 4px 6px rgba(80, 10, 10, 0.13);
  padding: 1rem;
  color: white;

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
