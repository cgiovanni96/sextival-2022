import { Box, Text } from "@mantine/core";
import { useResponsive } from "@sextival/hooks/useResponsive";
import { ReactNode } from "react";

type Props = {
  text: string;
  right?: ReactNode;
};

export const Title = ({ text, right }: Props) => {
  const isLg = useResponsive({});

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text size={isLg ? 32 : 20} weight={500} color="#550026">
        {text}
      </Text>

      {right && right}
    </Box>
  );
};
