import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Box from "react-raster";
import styled from "styled-components";

export type HeroProps = {
  setHeroHeight: (heroHeight: number) => void;
  isVisible: boolean;
};

export const Hero = ({ setHeroHeight, isVisible }: HeroProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ref && ref.current) setHeroHeight(ref.current.clientHeight);
  }, [ref]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div ref={ref}>
          <Box cols={[12]} justifyContent="center">
            <div style={{ marginTop: "-3rem" }}>
              <Image src="/Hero.svg" alt="Hero" height={400} width={400} />
            </div>
          </Box>

          <Box cols={[12]} style={{ marginTop: "-2rem" }}>
            <Title>Interventi</Title>
            <Title>Arte</Title>
            <Title>Musica</Title>
          </Box>

          <Punchline cols={[12]}>
            <div>Vieni</div>
            <span>Al festival sulla salute sessuale</span>
          </Punchline>
        </div>
      )}
    </AnimatePresence>
  );
};

const Title = styled.h1`
  color: ${({ theme }) => theme.palette.white[0]};
  font-size: 48px;
  font-weight: ${({ theme }) => theme.typo.weight.black};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
  text-transform: uppercase;
`;
const Punchline = styled(Box)`
  width: 75%;
  margin-left: auto;
  text-align: right;
  font-size: ${({ theme }) => theme.typo.size.big};
  color: ${({ theme }) => theme.palette.red[0]};
  font-weight: ${({ theme }) => theme.typo.weight.black};
  text-transform: uppercase;
  padding-bottom: 2rem;

  & > div {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
    color: white;
  }
`;
