import { Space } from "@mantine/core";

import { gradients } from "@sextival/theme/colors";
import Panel from "@sextival/components/Panel";

import { HeroTitle } from "./HeroTitle";
import { HeroLogo } from "./HeroLogo";
import { HeroTagline } from "./HeroTagline";

const Hero = () => {
  return (
    <Panel
      order={1}
      variant="hero"
      scrollDown
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
