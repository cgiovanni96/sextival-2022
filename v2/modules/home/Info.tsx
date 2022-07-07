import { motion, Variants } from "framer-motion";

import { Panel } from "@sextival/components/Panel";
import { DivRef } from "@sextival/types/react";

type Props = {
  scrollRef: DivRef;
};

export const Info = ({ scrollRef }: Props) => {
  return (
    <Panel scrollRef={scrollRef}>
      <motion.div
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        style={{ height: 200, width: 300, background: "black", color: "white" }}
      >
        hello
      </motion.div>
    </Panel>
  );
};

const variants: Variants = {
  offscreen: {
    y: 200,
    opacity: 0,
  },
  onscreen: {
    y: 50,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};
