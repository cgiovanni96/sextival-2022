import { AnimatePresence, useViewportScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import gradient from "/public/gradient.png";
import { Children } from "../types";
import { StaticImageData } from "next/image";

export type GradientPanelProps = {
  setPanelHeight?: (panelHeight: number) => void;
  isVisible: boolean;
} & Children;

export const GradientPanel = ({
  setPanelHeight,
  children,
}: GradientPanelProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useViewportScroll();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    if (!ref) return;
    setPanelHeight && setPanelHeight(ref.current?.clientHeight || 0);
  }, [ref]);

  useEffect(() => {
    return scrollYProgress.onChange((v) => setScroll(v));
  });

  return (
    <AnimatePresence>
      {true && (
        <Panel ref={ref} image={gradient}>
          {children}
        </Panel>
      )}
    </AnimatePresence>
  );
};

const Panel = styled.div<{ image: StaticImageData }>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  color: white;
  z-index: -100;
  background-image: url(${(props) => props.image.src});
  background-size: cover;
  border-radius: 0 0 24px 24px;
  padding: 0 5%;
`;
