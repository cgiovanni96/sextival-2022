import { createStyles } from "@mantine/core";
import { media } from "@sextival/theme/utils";

type HeaderStylesParams = {
  toggle?: {
    bg?: boolean;
  };
};

export const useStyles = createStyles((theme, params: HeaderStylesParams) => ({
  drawer: {
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    width: "100vw",
    zIndex: 9,

    [media(theme.breakpoints.lg)]: {
      width: "50vw",
    },
  },

  navigation: {
    zIndex: 20,
    position: "fixed",
    top: 0,
    left: 0,
    bottom: 0,
    width: "100vw",
    marginTop: "60px",
    display: "flex",
    flexDirection: "column",

    [media(theme.breakpoints.lg)]: {
      width: "50vw",
    },
  },

  toggle: {
    position: "fixed",
    top: 0,
    right: 0,
    left: 0,
    zIndex: 10,
    padding: 20,
    background: params.toggle?.bg ? "#F9DDE1" : "transparent",
    display: "flex",
    alignItems: "center",
  },
}));
