import { useState } from "react";
import styled, { ThemeConsumer } from "styled-components";
import {
  ArrowDownCircle as DownIcon,
  ArrowUpCircle as UpIcon,
} from "styled-icons/feather";
import { up } from "styled-breakpoints";
import Image from "next/image";

import { Ospite as OspiteType } from "../data/ospiti";

export type OspiteProps = {
  ospite: OspiteType;
};

export const Ospite = ({ ospite }: OspiteProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <OspiteContainer>
      <OspiteHeader onClick={() => setVisible(!visible)}>
        <OspiteImgContainer>
          <Image
            src={`/ospiti/${ospite.img}`}
            alt={ospite.name}
            layout="fill"
            loading="lazy"
          />
        </OspiteImgContainer>
        <OspiteName visible={visible}>{ospite.name}</OspiteName>
        {!visible ? <DownIcon size={32} /> : <UpIcon size={32} />}
      </OspiteHeader>
      {visible && <p>{ospite.description}</p>}
    </OspiteContainer>
  );
};

const OspiteContainer = styled.div`
  background: ${({ theme }) => theme.palette.red[1]};
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

const OspiteImgContainer = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 100%;
  background: ${(p) => p.theme.palette.red[2]};
  margin-right: 1rem;
  position: relative;

  & img {
    border-radius: 100%;
    object-fit: cover;
  }
`;

const OspiteName = styled.h2<{ visible: boolean }>`
  flex: 1;
  font-weight: ${({ theme }) => theme.typo.weight.bold};
  font-size: 18px;
  margin-bottom: ${(props) => (props.visible ? "0.5rem" : "0")};
`;
