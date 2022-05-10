import styled from "styled-components";
import { StaticImageData } from "next/image";

import { Children } from "../types";

import gradient from "/public/gradient.png";
import { up } from "styled-breakpoints";

export type GradientPanelProps = {
  radius?: boolean;
} & Children;

export const GradientPanel = ({ children, radius }: GradientPanelProps) => {
  return (
    <Panel image={gradient} radius={radius}>
      <Internal>{children}</Internal>
    </Panel>
  );
};

const Panel = styled.div<{ image: StaticImageData; radius?: boolean }>`
  width: 100vw;
  color: white;
  z-index: -100;
  background-image: url(${(props) => props.image.src});
  background-size: cover;
  border-radius: ${(p) => (p.radius ? "0 0 24px 24px" : "")};

  ${up("lg")} {
    border-radius: none;
  }
`;

const Internal = styled.div`
  padding: 0 5%;

  ${up("lg")} {
    padding: 0 20%;
  }
`;
