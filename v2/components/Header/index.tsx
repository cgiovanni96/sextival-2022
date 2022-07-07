import {
  useScrollLock,
  useViewportSize,
  useWindowScroll,
} from "@mantine/hooks";
import { motion, useCycle } from "framer-motion";
import { useMemo, useRef } from "react";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";

export const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { height } = useViewportSize();
  const [scroll] = useWindowScroll();
  const [locked, setScrollLocked] = useScrollLock();

  const isPastHeroSection = useMemo(() => {
    if (scroll.y < height) return false;
    return true;
  }, [scroll.y, height]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      style={{ position: "absolute" }}
    >
      <motion.div
        variants={sidebarVariants}
        custom={{ height, scroll: scroll.y }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          bottom: 0,
          width: "100vw",
          zIndex: 9,
        }}
      />

      <MenuToggle
        isPastHeroSection={isPastHeroSection}
        isOpen={isOpen}
        toggle={() => {
          setScrollLocked((c) => !c);
          toggleOpen();
        }}
      />

      {isOpen && <Navigation isPastHeroSection={isPastHeroSection} />}
    </motion.nav>
  );
};

const sidebarVariants = {
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
