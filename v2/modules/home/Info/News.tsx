import { Box, Button, Space, Text, useMantineTheme } from "@mantine/core";
import { Go } from "@sextival/components/icons/Go";
import { motion } from "framer-motion";

import { variants } from "./info.variants";

const Data = [
  { date: "16/05", title: "Rossella Bianca non partecipara' al Sextival" },
  { date: "16/05", title: "Rossella Bianca non partecipara' al Sextival" },
  { date: "16/05", title: "Rossella Bianca non partecipara' al Sextival" },
];

export const News = () => {
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
          Notizie dal Sexystaff
        </Text>

        <Button variant="light" onClick={() => console.log("more")}>
          ...
        </Button>
      </Box>

      {Data.map((news) => (
        <>
          <Space h="sm" />

          <Box sx={{ display: "flex", color: "#550026", alignItems: "center" }}>
            <Text size={14}>{news.date}</Text>
            <Box sx={{ flex: 1, display: "flex", flexWrap: "wrap" }} mx={20}>
              <Text size={14} sx={{ lineHeight: 1.1 }}>
                {news.title}
              </Text>
            </Box>
            <Go color="#550026" strokeWidth={1.5} />
          </Box>
        </>
      ))}
    </Box>
  );
};
