import { Box } from "@mantine/core";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { Children } from "src/types";

type Props = {
  variants: Variants;
  amount?: number;
} & Children;

const Section = ({ variants, children, amount = 0.8 }: Props) => {
  return (
    <Box
      component={motion.div}
      variants={variants}
      initial={"offscreen"}
      whileInView={"onscreen"}
      viewport={{ once: true, amount }}
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      {children}
    </Box>
  );
};

export default Section;
