import { useEffect, useRef } from "react";
import styled from "styled-components";

export type GradientPanelProps = {
  setPanelHeight?: (panelHeight: number) => void;
};

export const GradientPanel = ({ setPanelHeight }: GradientPanelProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    console.log("client height", ref.current?.clientHeight);
    setPanelHeight && setPanelHeight(ref.current?.clientHeight || 0);
  }, [ref]);

  return (
    <Panel ref={ref}>
      <img src="/gradient.png" alt="gradient" />
    </Panel>
  );
};

const Panel = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 70%;
  color: white;
  z-index: -100;

  & > img {
    height: 100%;
    width: 100vw;
    border-radius: 0 0 24px 24px;
  }
`;
