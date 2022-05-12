import { useState } from "react";
import styled, { ThemeConsumer } from "styled-components";
import { Ospite as OspiteType } from "../data/ospiti";
import { ArrowDownCircle as DownIcon } from "styled-icons/feather";
import { up } from "styled-breakpoints";

export type OspiteProps = {
  ospite: OspiteType;
};

export const Ospite = ({ ospite }: OspiteProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <OspiteContainer>
      <OspiteHeader>
        <OspiteName visible={visible}>{ospite.name}</OspiteName>
        <DownIcon size={32} onClick={() => setVisible(!visible)} />
      </OspiteHeader>
      {visible && <p>{ospite.description}</p>}
    </OspiteContainer>
  );
};

const OspiteContainer = styled.div`
  background: ${({ theme }) => theme.palette.red[2]};
  color: white;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 6px;

  & svg {
    cursor: pointer;
  }

  ${up("lg")} {
    margin-left: 2rem;
    margin-bottom: 3rem;
  }
`;

const OspiteHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const OspiteName = styled.h2<{ visible: boolean }>`
  font-weight: ${({ theme }) => theme.typo.weight.bold};
  font-size: 18px;
  margin-bottom: ${(props) => (props.visible ? "0.5rem" : "0")};
`;
