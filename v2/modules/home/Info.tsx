import { Box } from "@mantine/core";
import { MutableRefObject } from "react";

type Props = {
  scrollRef: MutableRefObject<HTMLDivElement>;
};

export const Info = ({ scrollRef }: Props) => {
  return (
    <Box
      ref={scrollRef}
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Hello
    </Box>
  );
};
