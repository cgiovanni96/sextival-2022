import { useViewportSize, useWindowScroll } from "@mantine/hooks";
import { useEffect, useState } from "react";

export const usePosition = () => {
  const { height } = useViewportSize();
  const [scroll] = useWindowScroll();
  const [isPastHeroSection, setIsPastHeroSection] = useState(false);

  useEffect(() => {
    const position = scroll.y >= height;
    setIsPastHeroSection(position);
  }, [scroll.y, height]);

  return { height, y: scroll.y, isPastHeroSection };
};
