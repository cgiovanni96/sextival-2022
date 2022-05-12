import styled from "styled-components";
import Image, { StaticImageData } from "next/image";

import { Children } from "../types";

import gradient from "/public/gradient.png";
import { up } from "styled-breakpoints";

export type GradientPanelProps = {
  radius?: boolean;
  small?: boolean;
} & Children;

export const GradientPanel = ({
  children,
  radius,
  small,
}: GradientPanelProps) => {
  return (
    <Panel image={gradient} radius={radius} small={small}>
      <Background>
        <Image src={"/gradient.png"} alt="" layout="fill" />
      </Background>
      <Internal>{children}</Internal>
    </Panel>
  );
};

const Panel = styled.div<{
  image: StaticImageData;
  radius?: boolean;
  small?: boolean;
}>`
  position: relative;
  width: 100vw;
  color: white;

  background: ${(props) =>
    props.small ? props.theme.gradient.main : "inherit"};

  background-size: cover;
  border-radius: ${(p) => (p.radius ? "0 0 24px 24px" : "0")};

  ${up("lg")} {
    border-radius: 0;
  }
`;

const Background = styled.div`
  position: absolute;
  z-index: -99;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: none;

  & img {
    width: 100%;
    height: 100%;
  }

  & > * {
    pointer-events: none;
    border-radius: 0 0 24px 24px;
  }
`;

const Internal = styled.div`
  padding: 0 5%;
  z-index: 1000;

  ${up("lg")} {
    padding: 0 20%;
  }
`;
