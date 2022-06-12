import styled from "styled-components";
import Link from "next/link";

export const Header = () => {
  return (
    <HeaderContainer>
      <Link href={"/"} passHref>
        <Title>Sextival</Title>
      </Link>

      <Link href={"/dona"} passHref>
        <CTA>Sostieni</CTA>
      </Link>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  z-index: 8;
  padding-top: 0.5rem;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

const Title = styled.a`
  font-size: ${({ theme }) => theme.typo.size.big};
  font-weight: ${({ theme }) => theme.typo.weight.black};
  text-transform: uppercase;
  & img {
    width: 100px;
    height: auto;
  }
`;

const CTA = styled.a`
  background: ${({ theme }) => theme.palette.white[0]};
  border-radius: 6px;
  padding: 0.5rem 1rem;
  text-align: center;
  font-weight: ${({ theme }) => theme.typo.weight.bold};
  font-size: ${({ theme }) => theme.typo.size.detail};
  color: ${({ theme }) => theme.palette.red[2]};
  cursor: pointer;
`;
