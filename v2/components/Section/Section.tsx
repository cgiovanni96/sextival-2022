import { Box, Sx } from "@mantine/core";
import { motion, Variants } from "framer-motion";
import { Children } from "src/types";

type Props = {
  variants: Variants;
  amount?: number;
  sx?: Sx;
} & Children;

const Section = ({ variants, children, amount = 0.8, sx }: Props) => {
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
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default Section;
