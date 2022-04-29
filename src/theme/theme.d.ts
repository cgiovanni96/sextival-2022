// import original module declarations
import "styled-components";

export type Color = string[];

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      red: Color;
      blue: Color;
      white: Color;
    };

    typo: {
      family: {
        main: string;
      };

      size: {
        base: string;
        detail: string;
        big: string;
        huge: string;
      };

      weight: {
        regular: number;
        bold: number;
        black: number;
      };

      color: string;
    };

    gradient: {
      main: string;
    };
  }
}
