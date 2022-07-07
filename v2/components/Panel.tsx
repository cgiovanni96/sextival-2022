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
        marginTop: "1rem",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </Box>
  );
};
