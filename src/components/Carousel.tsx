import React, { useState, useEffect, useCallback } from "react";
// import { PrevButton, NextButton } from "./EmblaCarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
// import { mediaByIndex } from "../media";

export const Carousel = () => {
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 2,
    skipSnaps: false,
    containScroll: "trimSnaps",
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    onSelect();
  }, [embla, onSelect]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <div className="embla__slide__inner">
              <img src="/terzi/anmar.png" alt="anmar" />
            </div>
          </div>

          <div className="embla__slide">
            <div className="embla__slide__inner">
              <img src="/terzi/anmar.png" alt="anmar" />
            </div>
          </div>

          <div className="embla__slide">
            <div className="embla__slide__inner">
              <img src="/terzi/anmar.png" alt="anmar" />
            </div>
          </div>
        </div>
      </div>
      {/* <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} /> */}
      {/* <NextButton onClick={scrollNext} enabled={nextBtnEnabled} /> */}
    </div>
  );
};
