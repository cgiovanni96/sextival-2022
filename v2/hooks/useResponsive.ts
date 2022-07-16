import { MantineSize, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { media } from "@sextival/theme/utils";

export const useResponsive = ({ size = "lg" }: { size?: MantineSize }) => {
  const theme = useMantineTheme();
  const matches = useMediaQuery(media(theme.breakpoints[size], false), false);

  return matches;
};
