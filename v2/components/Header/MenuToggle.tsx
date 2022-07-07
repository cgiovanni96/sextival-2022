import { useMantineTheme } from "@mantine/core";
import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import { motion } from "framer-motion";

const Path = (props: any) => {
  const theme = useMantineTheme();
  const { height } = useViewportSize();
  const [scroll] = useWindowScroll();

  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke={
        props.isOpen && scroll.y >= height ? "#fff" : theme.colors["sexyred"][4]
      }
      strokeLinecap="round"
      {...props}
    />
  );
};

type Props = { isOpen: boolean; toggle: () => void };

export const MenuToggle = ({ isOpen, toggle }: Props) => (
  <span
    onClick={toggle}
    style={{
      position: "fixed",
      top: 20,
      left: 20,
      zIndex: 10,
      cursor: "pointer",
    }}
  >
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        isOpen={isOpen}
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        isOpen={isOpen}
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        isOpen={isOpen}
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </span>
);
