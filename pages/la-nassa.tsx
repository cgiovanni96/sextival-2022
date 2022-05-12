import { up } from "styled-breakpoints";
import styled from "styled-components";
import { Header } from "../src/components/Header";
import { GradientPanel } from "../src/styles/GradientPanel";

const Nassa = () => {
  return (
    <>
      <GradientPanel small>
        <Header />

        <Title>{"La Nassa"}</Title>
      </GradientPanel>
    </>
  );
};

export default Nassa;

const Title = styled.h1`
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
