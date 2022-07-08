import { Variants } from "framer-motion";

export const variants: Variants = {
  open: ({ height = 1000, scroll = 0 }) => ({
    clipPath: `circle(${height * 2 + 200}px at 20px 20px)`,
    background: scroll < height ? "rgba(255,255,255,1)" : "#dc3e4c",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
      // restDelta: 1,
      // duration: 1,
    },
  }),
  closed: (width: number) => {
    return {
      clipPath: `circle(30px at 20px 20px )`,
      background: "rgba(255,255,255,0)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    };
  },
};
