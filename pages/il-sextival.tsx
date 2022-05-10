import styled from "styled-components";
import { Header } from "../src/components/Header";
import { GradientPanel } from "../src/styles/GradientPanel";

const Sextival = () => {
  return (
    <GradientPanel>
      <Header />

      <Title>{"Cos'è il Sextival"}</Title>

      <DescriptionContainer></DescriptionContainer>
    </GradientPanel>
  );
};

export default Sextival;

const SextivalContainer = styled.main`
  padding: 0 5%;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.typo.size.huge};
  font-weight: ${({ theme }) => theme.typo.weight.bold};
  width: 100%;
  text-align: center;
  margin-top: 2rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.palette.white[1]};
`;

const DescriptionContainer = styled.div``;
