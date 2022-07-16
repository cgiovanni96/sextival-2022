import { createStyles } from "@mantine/core";
import { media } from "@sextival/theme/utils";

type PanelStylesParam = {
  panel?: {
    variant: "hero" | "default";
  };
};

export const useStyles = createStyles((theme, param: PanelStylesParam) => ({
  panel: {
    height: "100vh",
    maxWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    padding: "0 20px",
    position: "relative",
    marginTop: param.panel?.variant === "default" ? 5 : 0,
    [media(theme.breakpoints.lg)]: {
      padding: "0 10%",
    },
  },

  indicator: {
    position: "absolute",
    top: 180,
    bottom: 180,
    zIndex: 4,
    pointerEvents: "none",
  },
}));
