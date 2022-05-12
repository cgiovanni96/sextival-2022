import { motion } from "framer-motion";
import { up } from "styled-breakpoints";
import styled from "styled-components";
import { Children } from "../types";

export const PageTitle = ({ children }: Children) => {
  return (
    <Title
      initial={{ scale: 0.2, y: -20 }}
      animate={{ scale: 1, y: 0 }}
      transition={{ duration: "0.3" }}
    >
      {children}
    </Title>
  );
};

const Title = styled(motion.h1)`
  font-size: 32px;
  font-weight: ${({ theme }) => theme.typo.weight.bold};
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.white[1]};
  margin-top: 4rem;
  padding-bottom: 1rem;

  ${up("lg")} {
    font-size: 48px;
  }
`;
