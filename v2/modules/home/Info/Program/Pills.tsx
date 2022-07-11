import { Box } from "@mantine/core";

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
          key={day}
          sx={(theme) => ({
            borderRadius: 12,
            marginBottom: 16,
            background:
              activeDay === i ? theme.colors["sexyred"][4] : "transparent",
            color: activeDay === i ? "#FFF" : "#550026",
            cursor: "pointer",
          })}
          py={6}
          px={14}
          mr={8}
        >
          {day}
        </Box>
      ))}
    </Box>
  );
};
