import { Box, Sx } from "@mantine/core";
import { MutableRefObject } from "react";
import { Children } from "src/types";
import { NassaScroll } from "./NassaScroll";

type Props = {
  scrollRef?: MutableRefObject<HTMLDivElement>;
  scrollAction?: () => void;
  variant?: "hero" | "default";
  sx?: Sx;
} & Children;

export const Panel = ({
  scrollRef,
  variant = "default",
  scrollAction,
  sx,
  children,
}: Props) => {
  return (
    <Box
      ref={scrollRef}
      sx={(theme) => ({
        height: "100vh",
        maxWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        padding: "0 20px",
        ...sx,
        [`@media (min-width: ${theme.breakpoints.lg}px)`]: {
          padding: "0 10%",
        },
      })}
    >
      {children}

      {scrollAction && (
        <NassaScroll variant={variant} scrollAction={scrollAction} />
      )}
    </Box>
  );
};
