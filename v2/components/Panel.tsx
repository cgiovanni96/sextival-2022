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
        marginTop: "5px",
        height: "100vh",
        maxWidth: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
      mx={20}
    >
      {children}
    </Box>
  );
};
