import { Box } from "@mantine/core";
import { motion } from "framer-motion";

import { Down, Nassa } from "@sextival/components/icons";

type Props = { variant?: "hero" | "default"; scrollAction: () => void };

export const NassaScroll = ({ variant = "default", scrollAction }: Props) => {
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
        <Nassa
          width={80}
          color={variant !== "hero" ? "rgba(85, 0, 38, 0.2)" : undefined}
        />
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
