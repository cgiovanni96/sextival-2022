import { useRef } from "react";
import { Box } from "@mantine/core";
import { useScrollLock } from "@mantine/hooks";
import { motion, useCycle } from "framer-motion";

import { variants } from "./Header.variants";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import { usePosition } from "./usePosition";

const Header = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [_, setScrollLocked] = useScrollLock();

  const { height, y, isPastHeroSection } = usePosition();

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      ref={containerRef}
      style={{ position: "absolute" }}
    >
      <Box
        component={motion.div}
        variants={variants}
        custom={{ height, scroll: y }}
        sx={{
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

export default Header;
