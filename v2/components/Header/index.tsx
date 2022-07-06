import { Box, useMantineTheme } from "@mantine/core";
import { Menu } from "@sextival/components/icons";

export const Header = () => {
  const theme = useMantineTheme();

  return (
    <Box sx={{ position: "fixed", top: 20, right: 20 }}>
      <Menu color={theme.colors["sexyred"][4]} />
    </Box>
  );
};
