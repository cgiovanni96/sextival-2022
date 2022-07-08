import { motion, Variants } from "framer-motion";
import { Box } from "@mantine/core";
import Image from "next/image";

const variants: Variants = {
  offscreen: {
    y: -100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};

export const HeroLogo = () => {
  return (
    <Box
      component={motion.div}
      variants={variants}
      initial="offscreen"
      animate="onscreen"
      sx={{
        width: "90%",
        height: "400px",
        position: "relative",
      }}
      mx="auto"
    >
      <Image
        src={"/v2/hero-logo.png"}
        alt="hero logo"
        layout="fill"
        objectFit="contain"
      />
    </Box>
  );
};
