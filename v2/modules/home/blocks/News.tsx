import { Fragment } from "react";
import { Box, Button, Space, Text, useMantineTheme } from "@mantine/core";

import { Go } from "@sextival/components/icons/Go";
import Section from "@sextival/components/Section";
import { Title } from "@sextival/components/Section/Title";

import { variants } from "../variants";

const Data = [
  { date: "16/05", title: "Rossella Bianca non partecipara' al Sextival" },
  { date: "16/05", title: "Rossella Bianca non partecipara' al Sextival" },
  { date: "16/05", title: "Rossella Bianca non partecipara' al Sextival" },
];

export const News = () => {
  return (
    <Section variants={variants} amount={0.4}>
      <Title
        text={"Notizie dal Sexystaff"}
        right={
          <Button variant="light" onClick={() => console.log("more")}>
            ...
          </Button>
        }
      />

      {Data.map((news, i) => (
        <Fragment key={i}>
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
        </Fragment>
      ))}
    </Section>
  );
};