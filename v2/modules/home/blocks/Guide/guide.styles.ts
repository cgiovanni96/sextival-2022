import { createStyles } from "@mantine/core";
import { media } from "@sextival/theme/utils";

export const useStyles = createStyles((theme) => ({
  guide: {
    height: 200,
    color: "#090346",
    width: "100%",
    background: "#F7F7F7",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",

    [media(theme.breakpoints.lg)]: {
      width: "50%",
      margin: "0 auto",
      marginTop: 80,
    },
  },

  background: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

    "& > div": {
      flex: 1,
      [media(theme.breakpoints.lg)]: {
        flex: "inherit",
      },
    },
  },
}));
