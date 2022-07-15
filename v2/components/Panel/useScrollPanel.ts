import {
  useIntersection,
  useWindowScroll,
  useViewportSize,
  useTimeout,
} from "@mantine/hooks";
import useScrollStore from "@sextival/stores/ScrollStore";
import { useEffect } from "react";

export const useScrollPanel = ({ order = 1 }) => {
  const { ref, entry } = useIntersection({ threshold: 1 });
  const [_, scrollTo] = useWindowScroll();
  const { height } = useViewportSize();

  const scrollStore = useScrollStore();

  const { start: resetAuto } = useTimeout(() => {
    scrollStore.setStatus("idle");
  }, 1000);

  const getY = (direction: "up" | "down", order: number): number => {
    return direction === "down" ? 3 * order : order !== 1 ? 6 : 0;
  };

  const moveTo = ({
    order = 1,
    direction,
  }: {
    order: number;
    direction: "down" | "up";
  }) => {
    const position = height * (order - 1) + getY(direction, order);
    scrollTo({ y: position });
    resetAuto();
  };

  useEffect(() => {
    if (scrollStore.status !== "idle") return;
    if (entry?.isIntersecting) {
      if (scrollStore.element !== order) {
        const curr = scrollStore.element;

        moveTo({ order, direction: curr < order ? "down" : "up" });

        scrollStore.setElement(order);
        scrollStore.setStatus("scrolling");
      }
    }
  }, [scrollStore.status, order, entry?.isIntersecting]);

  return { ref, moveTo, resetAuto };
};
