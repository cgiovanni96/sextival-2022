import { useState } from "react";
import { Paper, Box, Text } from "@mantine/core";
import { motion } from "framer-motion";

import { File, Nassa } from "@sextival/components/icons";
import { shadows } from "@sextival/theme/shadows";

import { variants } from "../../variants";

import { GuideDownload } from "./GuideDownload";
import { useStyles } from "./guide.styles";
import { useResponsive } from "@sextival/hooks/useResponsive";

const Guide = () => {
  const { classes } = useStyles();
  const isLg = useResponsive({});

  return (
    <Paper
      component={motion.div}
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
      shadow={shadows.box}
      radius="md"
      p="xl"
      mt={80}
      className={classes.guide}
    >
      <Box className={classes.background}>
        <Nassa size={{ height: 160 }} color={"rgba(223, 86, 107, 0.18)"} />
      </Box>

      <Box className={classes.container}>
        <File size={42} color="#DC3B49" />

        <Text
          size={isLg ? 32 : 22}
          color="#DC3B49"
          align="center"
          weight={500}
          ml={20}
          sx={{ lineHeight: 1 }}
        >
          Ecco la guida al
          <Text
            weight={700}
            color="#550026"
            size={isLg ? 32 : 22}
            sx={{ lineHeight: 1.1 }}
          >
            Sextival 2022
          </Text>
        </Text>
      </Box>

      <Box py={8} sx={{ flex: 1, display: "flex", alignItems: "center" }}>
        <Text size={isLg ? 16 : 14} align="center">
          Nel documento troverai il <b>programma</b>, la <b>mappa</b>, gli{" "}
          <b>stand</b> e il <b>regolamento</b>
        </Text>
      </Box>

      <GuideDownload />
    </Paper>
  );
};
export default Guide;
