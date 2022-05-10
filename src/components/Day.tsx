import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Day1 } from "../data/day";

export const Day = () => {
  const listRef = useRef<HTMLDivElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [momentWidth, setMomentWidth] = useState(0);

  useEffect(() => {
    if (cardRef && cardRef.current)
      setMomentWidth(-cardRef.current.clientWidth);
  }, [listRef, cardRef]);

  return (
    <div style={{ overflow: "hidden" }}>
      <Title>Giorno1</Title>
      <CardList
        drag="x"
        dragConstraints={{
          left: momentWidth * (Day1.length - 1),
          right: -momentWidth / 2,
        }}
      >
        {Day1.map((day) => (
          <Card ref={cardRef} key={day.id} whileTap={{ scale: 0.9 }}>
            <Container>
              <Time>{day.time}</Time>
              <CardTitle>
                <Link href={`/talk/${day.id}`}>{day.title}</Link>
              </CardTitle>
              <Speaker>{day.author}</Speaker>
            </Container>
          </Card>
        ))}
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
const Card = styled(motion.div)`
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
