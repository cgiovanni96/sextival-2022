import React from "react";
import Box from "react-raster";
import { gridGap } from "../constants/grid";
import { Children } from "../types";

export type LayoutProps = Children;

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Box colspan={12} gridColumnGap={gridGap} gridRowGap={gridGap} control>
      {children}
    </Box>
  );
};
