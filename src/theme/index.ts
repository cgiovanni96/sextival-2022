import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  palette: {
    red: ["#F3BEC7", "#DF566B", "#DC3B49", "#92353A"],
    blue: ["#090346", "#0C082B"],
    white: ["#FFF", "#F7F7F7"],
  },

  typo: {
    family: {
      main: "'Poppins', sans-serif",
    },
    weight: {
      regular: 400,
      bold: 700,
      black: 900,
    },
    size: {
      base: "16px",
      detail: "12px",
      big: "24px",
      huge: "32px",
    },
    color: "#DC3B49",
  },

  gradient: {
    // main: "linear-gradient(20deg,hsl(245deg 92% 14%) 0%,hsl(335deg 55% 45%) 43%,hsl(353deg 69% 58%) 77%,hsl(355deg 57% 51%) 93%,hsl(357deg 47% 39%) 100%)",
    // main: "linear-gradient(30deg,hsl(245deg 92% 14%) 0%,hsl(342deg 46% 49%) 29%,hsl(354deg 69% 57%) 43%,hsl(354deg 69% 57%) 57%,hsl(353deg 65% 62%) 71%,hsl(0deg 50% 66%) 100%) ",
    main: "linear-gradient(-43deg,hsl(246deg 51% 8%) 0%,hsl(349deg 43% 49%) 29%,hsl(354deg 69% 57%) 43%,hsl(354deg 69% 57%) 57%,hsl(353deg 65% 62%) 71%,hsl(0deg 50% 66%) 100%)",
  },
};
