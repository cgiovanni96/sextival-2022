import { Box, Sx } from "@mantine/core";

import { Children } from "src/types";
import { NassaScroll } from "../NassaScroll";
import { useStyles } from "./panel.styles";
import { ScrollingIndicator } from "./ScrollingIndicator";

import { useScrollPanel } from "./useScrollPanel";

type Props = {
  order: number;
  scrollDown?: boolean;
  variant?: "hero" | "default";
  sx?: Sx;
} & Children;

const Panel = ({
  variant = "default",
  sx,
  scrollDown,
  order,
  children,
}: Props) => {
  const { ref, moveTo } = useScrollPanel({ order });

  const { classes } = useStyles({ panel: { variant } });

  return (
    <Box className={classes.panel} sx={sx}>
      <ScrollingIndicator ref={ref} />

      {children}

      {scrollDown && (
        <NassaScroll
          variant={variant}
          scrollAction={() => {
            moveTo({ order: order + 1, direction: "down" });
          }}
        />
      )}
    </Box>
  );
};

export default Panel;
