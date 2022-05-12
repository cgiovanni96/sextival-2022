import styled from "styled-components";
import { StaticImageData } from "next/image";

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
      <Internal>{children}</Internal>
    </Panel>
  );
};

const Panel = styled.div<{
  image: StaticImageData;
  radius?: boolean;
  small?: boolean;
}>`
  width: 100vw;
  color: white;
  z-index: -100;

  background: ${(props) =>
    props.small ? props.theme.gradient.main : "inherit"};
  background-image: ${(props) =>
    !props.small ? `url(${props.image.src})` : props.theme.gradient.main};

  background-size: cover;
  border-radius: ${(p) => (p.radius ? "0 0 24px 24px" : "0")};

  ${up("lg")} {
    border-radius: 0;
    background-image: none;
    background: ${({ theme }) => theme.gradient.main};
  }
`;

const Internal = styled.div`
  padding: 0 5%;

  ${up("lg")} {
    padding: 0 20%;
  }
`;
