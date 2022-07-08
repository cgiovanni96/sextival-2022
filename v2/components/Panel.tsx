import { Box, Sx } from "@mantine/core";
import { MutableRefObject } from "react";
import { Children } from "src/types";

type Props = {
  scrollRef?: MutableRefObject<HTMLDivElement>;
  sx?: Sx;
} & Children;

export const Panel = ({ scrollRef, sx, children }: Props) => {
  return (
    <Box
      ref={scrollRef ? scrollRef : null}
      sx={{
        height: "100vh",
        maxWidth: "100vw",
        display: "flex",
        flexDirection: "column",
        ...sx,
      }}
      px={20}
    >
      {children}
    </Box>
  );
};
