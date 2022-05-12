import Image from "next/image";
import Link from "next/link";
import { up } from "styled-breakpoints";
import styled from "styled-components";

export type CardProps = {
  image: string;
  url: string;
  title: string;
};

export const Card = ({ image, url, title }: CardProps) => {
  return (
    <CardSingle>
      <Background>
        <Image src={`/${image}.png`} alt="" layout="fill" />
      </Background>
      <InfoContainer>
        <Link href={url} passHref>
          <CardTitle>{title}</CardTitle>
        </Link>
      </InfoContainer>
    </CardSingle>
  );
};

const CardSingle = styled.div`
  flex: 1;
  flex-basis: 200px;
  background: ${({ theme }) => theme.palette.red[1]};
  color: ${({ theme }) => theme.palette.white[1]};
  display: flex;
  margin-bottom: 2rem;
  border-radius: 0.5rem;
  position: relative;

  ${up("lg")} {
    margin-left: 2rem;
    height: 250px;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* align-items: flex-end; */
  margin-left: 1rem;
  z-index: 2;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  & img {
    width: 100%;
    height: 100%;

    border-radius: 0.5rem;
  }
`;

const CardTitle = styled.a`
  font-size: ${({ theme }) => theme.typo.size.huge};
  font-weight: ${({ theme }) => theme.typo.weight.bold};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
`;