import { Box, Text } from "@mantine/core";
import { ReactNode } from "react";

type Props = {
  text: string;
  right?: ReactNode;
};

export const Title = ({ text, right }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text size={20} weight={500} color="#550026">
        {text}
      </Text>

      {right && right}
    </Box>
  );
};
