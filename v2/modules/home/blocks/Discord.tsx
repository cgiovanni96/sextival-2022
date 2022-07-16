import { Button, Paper, Stack, Text } from "@mantine/core";
import { Discord as DiscordIcon } from "@sextival/components/icons";
import { useResponsive } from "@sextival/hooks/useResponsive";
import { shadows } from "@sextival/theme/shadows";
import { motion } from "framer-motion";
import { variants } from "../variants";

export const Discord = () => {
  const isLg = useResponsive({});

  return (
    <Paper
      component={motion.div}
      variants={variants}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.2 }}
      shadow={shadows.box}
      radius="md"
      p="sm"
      mt={!isLg ? 80 : "inherit"}
      sx={{
        minHeight: 120,
        color: "#090346",
        width: "100%",
        background: "#F7F7F7",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Stack
        sx={{
          alignItems: "center",
        }}
      >
        {/* <DiscordIcon size={40} /> */}

        <Text
          size={22}
          color="#090346"
          align="center"
          weight={500}
          sx={{ lineHeight: 1 }}
        >
          Organizza il Sextival insieme a noi, <b>vieni sul server Discord!</b>
        </Text>

        <Button
          sx={{ background: "#090346" }}
          leftIcon={<DiscordIcon size={15} />}
        >
          Unisciti
        </Button>
      </Stack>
    </Paper>
  );
};
