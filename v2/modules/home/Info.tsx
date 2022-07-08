import { motion, Variants } from "framer-motion";

import { Panel } from "@sextival/components/Panel";
import { DivRef } from "@sextival/types/react";
import { Box, Paper, Text, Button } from "@mantine/core";
import { File, Nassa } from "@sextival/components/icons";
import { useState } from "react";
import { client } from "pages/api/client";

type Props = {
  scrollRef: DivRef;
};

const infoBoxShadow =
  "0px 17.9644px 33.4221px rgba(159, 57, 57, 0.0503198), 0px 9.60461px 17.869px rgba(159, 57, 57, 0.0417275), 0px 5.38427px 10.0172px rgba(159, 57, 57, 0.035), 0px 2.85954px 5.32008px rgba(159, 57, 57, 0.0282725), 0px 1.18992px 2.21381px rgba(159, 57, 57, 0.0196802)";

const Download = () => {
  const [downloading, setDownloading] = useState<boolean>(false);
  const onClickDownload = async () => {
    setDownloading(true);

    const { data, error } = await client.storage
      .from("download")
      .download("guida.pdf");

    if (!data || error) return;
    const url = window.URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "guida-sextival2022.pdf");
    document.body.appendChild(link);
    link.click();
    setDownloading(false);
  };

  return (
    <Button radius="xl" onClick={onClickDownload} loading={downloading}>
      Scarica
    </Button>
  );
};

export const Info = ({ scrollRef }: Props) => {
  return (
    <Panel scrollRef={scrollRef}>
      <Paper
        component={motion.div}
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ amount: 0.8 }}
        shadow={infoBoxShadow}
        radius="md"
        p="xl"
        sx={{
          height: 200,
          color: "#090346",
          width: "100%",
          background: "#F7F7F7",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Nassa height={160} color={"rgba(223, 86, 107, 0.18)"} />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <File size={42} color="#DC3B49" />

          <Text
            size={22}
            color="#DC3B49"
            align="center"
            weight={500}
            sx={{ flex: 1, lineHeight: 1 }}
          >
            Scarica la guida al
            <Text
              weight={700}
              color="#550026"
              size={22}
              sx={{ lineHeight: 1.1 }}
            >
              Sextival 2022
            </Text>
          </Text>
        </Box>

        <Box py={8} sx={{ flex: 1, display: "flex", alignItems: "center" }}>
          <Text size={14} align="center">
            Nel documento troverai il <b>programma</b>, la <b>mappa</b>, gli{" "}
            <b>stand</b> e il <b>regolamento</b>
          </Text>
        </Box>

        <Download />
      </Paper>
    </Panel>
  );
};

const variants: Variants = {
  offscreen: {
    y: 200,
    opacity: 0,
  },
  onscreen: {
    y: 80,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};
