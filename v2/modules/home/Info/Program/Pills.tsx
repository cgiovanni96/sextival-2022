import { Box, Text } from "@mantine/core";
import { motion } from "framer-motion";

type Props = {
  days: string[];
  activeDay: number;
  setActiveDay: (day: number) => void;
};

export const Pills = ({ days, activeDay, setActiveDay }: Props) => {
  return (
    <Box sx={{ display: "flex" }}>
      {days.map((day, i) => (
        <Box
          onClick={() => setActiveDay(i)}
          key={i}
          sx={{
            marginBottom: 16,
            cursor: "pointer",
            position: "relative",
          }}
          py={6}
          px={14}
          mr={8}
        >
          <Text
            component={motion.span}
            variants={{
              inactive: {
                color: "#550025",
              },
              active: {
                color: "#FFF",
                transition: { delay: 0.15, duration: 0.1 },
              },
            }}
            animate={activeDay === i ? "active" : "inactive"}
            sx={{
              position: "relative",
              zIndex: 1,
              // color: activeDay === i ? "#FFF" : "#550025",
            }}
          >
            {day}
          </Text>
          {activeDay === i && (
            <Box
              component={motion.div}
              layoutId="pills"
              sx={(theme) => ({
                borderRadius: 12,
                position: "absolute",
                zIndex: 0,
                left: 0,
                right: 0,
                bottom: 0,
                top: 0,

                background: theme.colors["sexyred"][4],
              })}
            />
          )}
        </Box>
      ))}
    </Box>
  );
};
