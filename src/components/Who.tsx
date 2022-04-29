import Box from "react-raster";
import styled from "styled-components";
import { motion } from "framer-motion";

export type WhoProps = { height: number };

export const Who = ({ height }: WhoProps) => {
  return (
    <div style={{ marginTop: height, overflowX: "hidden" }}>
      <Box cols={[12]}>
        <Title>Chi siamo</Title>
      </Box>

      <CardList drag="x" dragConstraints={{ left: -400, right: 200 }}>
        <Card>
          <span>Il sextival</span>
        </Card>

        <Card>
          <span>Il sextival</span>
        </Card>

        <Card>
          <span>Il sextival</span>
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
  background: ${({ theme }) => theme.palette.red[1]};
  padding: 6px;
  flex-basis: 140px;
  flex-shrink: 0;
  width: 200px;
  height: 120px;
  border-radius: 6px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-right: 1rem;
  & > span {
    color: white;
    text-transform: uppercase;
    font-weight: ${({ theme }) => theme.typo.weight.bold};
    margin-bottom: 6px;
  }
`;
