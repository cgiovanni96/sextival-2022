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
    };
  }
}
