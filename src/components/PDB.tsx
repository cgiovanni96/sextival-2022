import { up } from "styled-breakpoints";
import styled from "styled-components";

export const PDB = () => {
  return (
    <PDBContainer>
      <Container>
        <Info>
          <div>Sostienici</div>
          <p>
            Il Sextival vuole prima di tutto essere una fonte di informazioni
            per chiunque, perché i diritti, anche quelli sessuali, non si
            pagano. Questo significa che chi verrà a seguire l’evento dovrà
            poterlo fare gratuitamente e che lo spazio disponibile, un classico
            spazio da sagra, sia privo di barriere architettoniche. Per
            organizzare tutto questo, ci sono molte spese ad incombere
            minacciose sulle nostre ambizioni. E ogni giorno spunta nella nostra
            lista della spesa una voce nuova, che noi mica lo sapevamo, noi mica
            lo abbiamo mai organizzato un evento del genere.
          </p>
        </Info>
        <Frame src="https://www.produzionidalbasso.com/projects/31464/widget"></Frame>
      </Container>
    </PDBContainer>
  );
};

const PDBContainer = styled.div`
  width: 100vw;
  background: #f5c7cf;
`;

const Container = styled.section`
  width: 100vw;
  height: 100%;
  padding: 5%;
  display: flex;
  flex-direction: column;

  ${up("lg")} {
    flex-direction: row;
    flex-wrap: wrap;

    justify-content: space-around;
    padding: 2rem 10%;
  }
`;

const Info = styled.div`
  margin-bottom: 1rem;
  ${up("lg")} {
    flex-basis: 25%;
    margin-bottom: none;
  }

  & > div {
    font-weight: bold;
    font-size: ${(s) => s.theme.typo.size.huge};
  }

  & > p {
    color: ${(s) => s.theme.palette.blue[0]};
  }
`;

const Frame = styled.iframe`
  /* flex: 1; */
  width: 100%;
  height: 550px;
  border: none;

  ${up("lg")} {
    width: 600px;
    height: 750px;
  }
`;
