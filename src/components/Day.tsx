import { motion } from "framer-motion";
import styled from "styled-components";

export const Day = () => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Title>Giorno1</Title>
      <CardList drag="x" dragConstraints={{ left: -400, right: 200 }}>
        <Card>
          <Container>
            <Time>10:00 AM - 11:00 AM</Time>
            <CardTitle>Sessualita Socialista</CardTitle>
            <Speaker>Mario Rossi</Speaker>
          </Container>
        </Card>

        <Card>
          <Container>
            <Time>10:00 AM - 11:00 AM</Time>
            <CardTitle>Sessualita Socialista</CardTitle>
            <Speaker>Mario Rossi</Speaker>
          </Container>
        </Card>

        <Card>
          <Container>
            <Time>10:00 AM - 11:00 AM</Time>
            <CardTitle>Sessualita Socialista</CardTitle>
            <Speaker>Mario Rossi</Speaker>
          </Container>
        </Card>
      </CardList>
    </div>
  );
};

const Title = styled.h2`
  font-size: ${({ theme }) => theme.typo.size.big};
  font-weight: ${({ theme }) => theme.typo.weight.bold};
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.red[1]};
  margin-top: 2rem;
`;
const CardList = styled(motion.section)`
  margin-top: 1rem;
  display: flex;
`;
const Card = styled.div`
  background: rgba(255, 255, 255, 0.4);
  flex-basis: 250px;
  flex-shrink: 0;
  height: 180px;
  border-radius: 6px;
  margin-right: 1rem;
  box-shadow: inset 0px 0px 0px 2px rgba(255, 255, 255, 0.3);
  & > span {
    color: white;
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.typo.weight.bold};
    margin-bottom: 6px;
  }
`;

const Container = styled.div`
  box-sizing: border-box;
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Time = styled.div`
  color: ${({ theme }) => theme.palette.red[3]};
  font-size: ${({ theme }) => theme.typo.size.detail};
  /* word-break: break-all; */
`;

const CardTitle = styled.div`
  flex: 1;
  color: ${({ theme }) => theme.palette.red[1]};
  font-size: ${({ theme }) => theme.typo.size.huge};
  font-weight: ${({ theme }) => theme.typo.weight.bold};
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;
const Speaker = styled.div`
  color: ${({ theme }) => theme.palette.red[3]};
  font-weight: ${({ theme }) => theme.typo.weight.bold};
`;
