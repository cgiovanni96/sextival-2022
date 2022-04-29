import Box from "react-raster";
import styled from "styled-components";

export const Header = () => {
  const { Title, CTA } = useStyles();

  return (
    <Box as="header" cols={[12]} alignItems="center" marginTop={0.5} controls>
      <Box as={Title} cols={[6]}>
        Sextival
      </Box>
      <Box cols={[3]} marginLeft={3}>
        <CTA>Sostieni</CTA>
      </Box>
    </Box>
  );
};

const useStyles = () => styles;

const styles = {
  Title: styled.h1`
    font-size: ${({ theme }) => theme.typo.size.big};
    font-weight: ${({ theme }) => theme.typo.weight.black};
  `,
  CTA: styled.a`
    background: ${({ theme }) => theme.palette.white[0]};
    border-radius: 6px;
    padding: 0.5rem 1rem;
    text-align: center;
    font-weight: ${({ theme }) => theme.typo.weight.black};
    font-size: ${({ theme }) => theme.typo.size.detail};
    color: ${({ theme }) => theme.palette.red[2]};
  `,
};
