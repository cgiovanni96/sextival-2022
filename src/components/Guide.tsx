import styled from "styled-components";
import { up } from "styled-breakpoints";

export const Guide = () => {
  return (
    <Container>
      <Content>
        <div>
          Ecco la guida al Sextival 2022: Il <strong>programma</strong>, la{" "}
          <strong>mappa</strong>, gli <strong>stand</strong> e il{" "}
          <strong>regolamento</strong>!{" "}
        </div>
        <a href="/download/guida.pdf" download>
          <img src="/download/download.svg" alt="Scarica" />
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
    margin: 2rem 5%;

    ${up("lg")} {
      margin: 2rem 20%;
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
  }
`;
