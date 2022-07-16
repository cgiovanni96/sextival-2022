import React from "react";
import { Box } from "@mantine/core";
import { DivRef } from "@sextival/types/react";
import { useStyles } from "./panel.styles";

type Props = {
  ref: (element: any) => void;
};

export const ScrollingIndicator = React.forwardRef<HTMLSpanElement>(
  function ScrollingIndicator(_, ref) {
    const { classes } = useStyles({});
    return <Box component="span" className={classes.indicator} ref={ref} />;
  }
);
