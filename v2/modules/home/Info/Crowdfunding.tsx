import { Box, Space, Text, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";

import { Go } from "@sextival/components/icons/Go";
import { variants } from "./info.variants";

export const Crowdfunding = () => {
  const { colors } = useMantineTheme();

  return (
    <Box
      component={motion.div}
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ amount: 0.8 }}
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text size={20} weight={500} color="#550026">
          Sostienici
        </Text>

        <Box
          component={motion.div}
          animate={{ x: -5 }}
          transition={{
            repeat: Infinity,
            duration: 0.5,
            repeatType: "mirror",
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            cursos: "ponter",
            "& svg ": { cursor: "pointer" },
          }}
          onClick={() => console.log("hello")}
        >
          <Go color={colors["sexyred"][4]} strokeWidth={1.5} size={28} />
        </Box>
      </Box>

      <Space h="xs" />
      <Text size={14} color="#0C082B">
        Il Sextival vuole prima di tutto essere una fonte di informazioni per
        chiunque, perché i diritti, anche quelli sessuali, <b>non si pagano</b>.
      </Text>

      <Space h="sm" />

      <Text size={14} color="#0C082B">
        Per organizzare tutto questo, ci sono molte spese ad incombere
        minacciose sulle nostre ambizioni.
      </Text>
      <Space h="sm" />

      <Text size={14} color="#0C082B">
        Per questo, abbiamo lanciato una campagna di crowdfunding.{" "}
        <b>Sostieni il Sextival, e scopri i premi!</b>
      </Text>
    </Box>
  );
};
