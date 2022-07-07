import { Box } from "@mantine/core";
import { MutableRefObject } from "react";
import { Children } from "src/types";

type Props = {
  scrollRef?: MutableRefObject<HTMLDivElement>;
} & Children;

export const Panel = ({ scrollRef, children }: Props) => {
  return (
    <Box
      ref={scrollRef ? scrollRef : null}
      sx={{
        marginTop: "calc(1rem + 60px)",
        height: "100vh",
        maxWidth: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
};
