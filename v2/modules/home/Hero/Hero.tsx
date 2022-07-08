import { Space } from "@mantine/core";

import { gradients } from "@sextival/theme/colors";
import { NassaScroll } from "@sextival/components/NassaScroll";
import { Panel } from "@sextival/components/Panel";

import { HeroTitle } from "./HeroTitle";
import { HeroLogo } from "./HeroLogo";
import { HeroTagline } from "./HeroTagline";

type Props = {
  scrollAction: () => void;
};

const Hero = ({ scrollAction }: Props) => {
  return (
    <Panel
      scrollAction={scrollAction}
      variant="hero"
      sx={{
        backgroundImage: `${gradients.gradient}`,
        color: "white",
      }}
    >
      <HeroLogo />

      <Space h={"md"} />

      <HeroTitle text="INTERVENTi" />
      <HeroTitle text="ARTE" />
      <HeroTitle text="MUSICA" />

      <Space h={"xl"} />

      <HeroTagline />
    </Panel>
  );
};

export default Hero;
