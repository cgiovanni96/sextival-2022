import { Box, useMantineTheme } from "@mantine/core";
import { motion, Transition, Variants } from "framer-motion";

type PathProps = {
  isOpen: boolean;
  isPastHeroSection: boolean | undefined;
  variants: Variants;
  d?: string;
  transition?: Transition;
};

const Path = ({ isOpen, isPastHeroSection, ...props }: PathProps) => {
  const theme = useMantineTheme();

  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={isOpen && isPastHeroSection ? "#fff" : theme.colors["sexyred"][4]}
      strokeLinecap="round"
      {...props}
    />
  );
};

type Props = {
  isOpen: boolean;
  isPastHeroSection: boolean | undefined;
  toggle: () => void;
};

export const MenuToggle = ({ isOpen, isPastHeroSection, toggle }: Props) => (
  <Box
    sx={{
      position: "fixed",
      top: 0,
      right: 0,
      left: 0,
      zIndex: 10,
      padding: 20,
      background: isPastHeroSection && !isOpen ? "#F9DDE1" : "transparent",
      display: "flex",
      alignItems: "center",
    }}
  >
    <span
      onClick={toggle}
      style={{
        position: "relative",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
      }}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          isOpen={isOpen}
          isPastHeroSection={isPastHeroSection}
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          isOpen={isOpen}
          isPastHeroSection={isPastHeroSection}
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          isOpen={isOpen}
          isPastHeroSection={isPastHeroSection}
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </span>
  </Box>
);
