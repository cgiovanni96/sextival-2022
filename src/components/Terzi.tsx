import { up } from "styled-breakpoints";
import styled from "styled-components";

const terzi = [
  { img: "TOSSINI.png", bigger: false },
  { img: "DANOIPERVOI.jpg", bigger: false },
  { img: "NEREIDI.png", bigger: false },
  { img: "anmar.png", bigger: true },
  { img: "DASSO.png", bigger: false },
  { img: "PCM_1.png", bigger: false },
  { img: "VINERIA.png", bigger: false },
];

export const Terzi = () => {
  return (
    <>
      <Title>Il Sextival è possibile grazie a</Title>
      <TerziContainer>
        {terzi.map((t, i) => (
          <OuterImgContainer key={t.img + i} bigger={t.bigger}>
            <InnerImgContainer>
              <img src={`/terzi/${t.img}`} alt={t.img} />
            </InnerImgContainer>
          </OuterImgContainer>
        ))}
      </TerziContainer>
    </>
  );
};

const Title = styled.div`
  font-weight: bold;
  font-size: ${(s) => s.theme.typo.size.huge};
  margin-bottom: 1rem;
`;

const TerziContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 2rem;
  flex-direction: column;

  ${up("lg")} {
    flex-direction: row;
  }
`;

const OuterImgContainer = styled.div<{ bigger: boolean }>`
  flex: 1;
  position: relative;
  display: flex;
  align-items: center;
  padding: 1rem;

  & img {
    height: ${(p) => (p.bigger ? "200px" : "150px")};
    ${up("lg")} {
      height: 200px;
    }
  }

  ${up("lg")} {
    flex-basis: 33%;
  }
`;

const InnerImgContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;
