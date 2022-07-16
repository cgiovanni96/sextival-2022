import { Box, Sx } from "@mantine/core";

import { Children } from "src/types";
import { NassaScroll } from "../NassaScroll";

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

  return (
    <Box
      sx={(theme) => ({
        height: "100vh",
        maxWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        padding: "0 20px",
        position: "relative",
        marginTop: variant === "default" ? 5 : 0,
        ...sx,
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
          padding: "0 10%",
        },
      })}
    >
      <Box
        component="span"
        sx={{
          position: "absolute",
          top: 180,
          bottom: 180,
          zIndex: 4,
        }}
        ref={ref}
      />
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
