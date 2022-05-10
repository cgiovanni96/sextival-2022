import Image from "next/image";
import { up } from "styled-breakpoints";
import styled from "styled-components";

export const Hero = () => {
  return (
    <HeroContainer>
      <ImageContainer>
        <HeroImage src="/Hero.svg" alt="Hero" />
      </ImageContainer>

      <Text>
        <TitleContainer>
          <Title>Interventi</Title>
          <Title>Arte</Title>
          <Title>Musica</Title>
        </TitleContainer>

        <Punchline>
          <PunchlineTitle>Vieni</PunchlineTitle>
          <PunchlineText>Al festival sulla salute sessuale</PunchlineText>
        </Punchline>
      </Text>
    </HeroContainer>
  );
};

const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${up("lg")} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${up("lg")} {
    margin: 5% 0;
  }
`;

const TitleContainer = styled.div`
  margin-top: 2rem;
`;

const Text = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.palette.white[0]};
  font-size: 48px;
  font-weight: ${({ theme }) => theme.typo.weight.black};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
  text-transform: uppercase;
  margin-top: -1rem;
`;

const Punchline = styled.div`
  width: 100%;
  margin-left: auto;
  text-align: right;
  font-size: ${({ theme }) => theme.typo.size.big};
  color: ${({ theme }) => theme.palette.red[0]};
  font-weight: ${({ theme }) => theme.typo.weight.black};
  text-transform: uppercase;
  padding-bottom: 2rem;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

const PunchlineTitle = styled.span`
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
  color: white;
`;

const PunchlineText = styled.div`
  ${up("lg")} {
    width: 50%;
    line-height: 1.5rem;
  }
`;
