import { useEffect, useState } from "react";
import { Carousel, Embla } from "@mantine/carousel";

import { ProgramType } from "./data.mock";

import { Item } from "./Item";

import { useMediaQuery } from "@mantine/hooks";
import { useMantineTheme } from "@mantine/core";
import { media } from "@sextival/theme/utils";

type Props = {
  program: ProgramType;
};

export const List = ({ program }: Props) => {
  const [embla, setEmbla] = useState<Embla | undefined>(undefined);

  const { breakpoints } = useMantineTheme();
  const query = useMediaQuery(media(breakpoints.lg, false), false);

  useEffect(() => {
    embla?.scrollTo(0);
  }, [program]);

  return (
    <Carousel
      withControls={false}
      withIndicators
      align="start"
      slideSize={query ? "33%" : "66%"}
      slideGap="md"
      getEmblaApi={setEmbla}
      sx={{ paddingBottom: 50 }}
      styles={{
        container: {},
        indicator: {
          background: "#DF566B",
          width: 12,
          height: 4,
          transition: "width 250ms ease",

          "&[data-active]": {
            width: 40,
            background: "#DC3B49",
          },
        },
      }}
    >
      {program.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </Carousel>
  );
};
