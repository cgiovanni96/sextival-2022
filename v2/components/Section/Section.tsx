import { Box } from "@mantine/core";
import { motion, Variants } from "framer-motion";
import { Children } from "src/types";

type Props = {
  variants: Variants;
  amount?: number;
} & Children;

export const Section = ({ variants, children, amount = 0.8 }: Props) => {
  return (
    <Box
      component={motion.div}
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount }}
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
