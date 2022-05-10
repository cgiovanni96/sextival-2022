import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Day1, Talk } from "../../src/data/day";

const Talk = () => {
  const { query } = useRouter();
  const [talk, setTalk] = useState<Talk>();

  useEffect(() => {
    const t = Day1.find((d) => `${d.id}` === query.id);
    if (t) setTalk(t);
  }, [query]);

  return (
    <>
      {talk && (
        <>
          <TalkContainer>
            <TalkInfo>
              <TalkTitle>{talk.title}</TalkTitle>
            </TalkInfo>
          </TalkContainer>

          <TalkText>
            Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
            amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
            amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip
            Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit
            amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip
          </TalkText>
        </>
      )}
    </>
  );
};

export default Talk;

const TalkContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  padding: 0.5rem;
  border-radius: 1rem;

  height: 100%;

  background: ${({ theme }) => theme.palette.red[1]};
`;

const TalkInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TalkTime = styled.span`
  font-size: ${({ theme }) => theme.typo.size.detail};
  color: ${({ theme }) => theme.palette.red[3]};
`;

const TalkTitle = styled.h1`
  margin: 1rem 0;
  color: ${({ theme }) => theme.palette.white[1]};
  font-size: ${({ theme }) => theme.typo.size.huge};
  font-weight: ${({ theme }) => theme.typo.weight.bold};
  text-align: center;
  line-height: 1.6rem;
  text-transform: uppercase;
`;

const TalkAuthor = styled.div`
  color: ${({ theme }) => theme.palette.red[3]};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TalkText = styled.p`
  color: ${({ theme }) => theme.palette.blue[1]};
  font-size: ${({ theme }) => theme.typo.size.base};
  line-height: 1.4rem;
`;
