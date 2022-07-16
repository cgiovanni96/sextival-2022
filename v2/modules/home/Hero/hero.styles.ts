import { createStyles } from "@mantine/core";
import { media } from "@sextival/theme/utils";

type LogoStylesParams = {
  tagline?: {
    variant?: boolean;
    first?: boolean;
  };
};

export const useStyles = createStyles((theme, params: LogoStylesParams) => ({
  logo: {
    width: "90%",
    height: "400px",
    position: "relative",
    marginTop: 60,
    [media(theme.breakpoints.lg)]: {
      height: "60vh",
    },
  },

  title: {
    fontSize: 48,
    lineHeight: 0.8,
    textTransform: "uppercase",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.13)",

    [media(theme.breakpoints.lg)]: {
      fontSize: 62,
    },
  },

  tagline: {
    fontSize: 24,
    textTransform: "uppercase",
    color: params.tagline?.variant ? "#090346" : "inherit",
    lineHeight: "1.4rem",
    marginBottom: params.tagline?.first ? ".3rem" : "none",
    textAlign: "right",
    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.13)",
    [media(theme.breakpoints.lg)]: {
      fontSize: 30,
      lineHeight: 0.9,
    },
  },
}));
