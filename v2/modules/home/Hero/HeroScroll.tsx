import { Box } from "@mantine/core";
import { motion } from "framer-motion";

import { Down, Nassa } from "@sextival/components/icons";

type Props = { scrollAction: () => void };

export const HeroScroll = ({ scrollAction }: Props) => {
  return (
    <Box
      mt="auto"
      sx={{
        position: "relative",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <motion.div
        animate={{ opacity: 0.5 }}
        transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }}
      >
        <Nassa width={80} />
      </motion.div>

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          transform: "translate(-5%, -50%)",
          fontSize: 18,
          color: "#550026",
          fontWeight: "bold",
          zIndex: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        Scopri di più
        <motion.div
          animate={{ y: -5 }}
          transition={{
            repeat: Infinity,
            duration: 0.5,
            repeatType: "mirror",
          }}
          style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
          onClick={scrollAction}
        >
          <Down />
        </motion.div>
      </Box>
    </Box>
  );
};
