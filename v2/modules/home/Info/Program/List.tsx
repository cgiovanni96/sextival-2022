import { Carousel } from "@mantine/carousel";
import { ProgramType } from "./data.mock";
import { Item } from "./Item";

type Props = {
  program: ProgramType;
};

export const List = ({ program }: Props) => {
  return (
    <Carousel
      withControls={false}
      withIndicators
      align="start"
      slideSize="66%"
      slideGap="md"
      sx={{ paddingBottom: 50 }}
      styles={{
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
