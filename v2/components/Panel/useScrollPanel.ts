import {
  useIntersection,
  useWindowScroll,
  useViewportSize,
  useTimeout,
} from "@mantine/hooks";
import useScrollStore from "@sextival/stores/ScrollStore";
import { useEffect } from "react";

export const useScrollPanel = ({ order = 1 }) => {
  const { ref, entry } = useIntersection({ threshold: 0.5 });
  const [_, scrollTo] = useWindowScroll();
  const { height } = useViewportSize();

  const scrollStore = useScrollStore();

  const { start: resetAuto } = useTimeout(() => {
    scrollStore.setStatus("idle");
  }, 800);

  const moveTo = ({ order = 1, direction = "down" }) => {
    const yAdd = direction === "down" ? 3 * order - 1 : order !== 1 ? 2 : 0;
    const position = height * (order - 1) + yAdd;
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
