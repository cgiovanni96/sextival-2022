import { Carousel } from "@mantine/carousel";
import { Avatar, Box, Text } from "@mantine/core";
import { shadows } from "@sextival/theme/shadows";

type Props = {
  time: string;
  title: string;
  guests: string[];
};

export const Item = ({ time, title, guests }: Props) => {
  return (
    <Carousel.Slide
      onDrag={() => console.log("item")}
      onDragStart={() => console.log("item")}
      onDragEnd={() => console.log("item")}
      onDragStartCapture={() => console.log("item")}
      sx={{
        background: "#FFF",
        minHeight: 230,
        padding: 8,
        display: "flex",
        flexDirection: "column",
        borderRadius: 8,
        boxShadow: shadows.box,
      }}
    >
      <TimeHeader time={time} />

      <Box sx={{ flex: 1, display: "flex", alignItems: "center" }} px={10}>
        <Text color="#550026" weight={500} size={20} sx={{ lineHeight: 1.1 }}>
          {title}
        </Text>
      </Box>

      <GuestsBox guests={guests} />
    </Carousel.Slide>
  );
};

const TimeHeader = ({ time }: { time: string }) => (
  <Box sx={{ display: "flex" }}>
    <Box
      sx={{
        background: "rgba(223, 86, 107, 1)",
        borderRadius: 8,
        color: "#fff",
      }}
      py={8}
      px={16}
    >
      <Text size={14}>{time}</Text>
    </Box>
  </Box>
);

const GuestsBox = ({ guests }: { guests: string[] }) => (
  <Box sx={{ display: "flex", cursor: "pointer" }}>
    <Avatar.Group spacing={"md"}>
      {guests.map((g, i) => (
        <Avatar key={i} radius={"xl"} src={null} color="sexyred" />
      ))}
    </Avatar.Group>

    <Box
      sx={{
        marginLeft: 5,
        display: "flex",
        flexWrap: "wrap",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text size={12} color="#DF566B" sx={{ lineHeight: 1 }}>
        {guests.join(", ")}
      </Text>
    </Box>
  </Box>
);
