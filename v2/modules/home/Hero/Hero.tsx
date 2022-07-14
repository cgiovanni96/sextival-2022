import { Space } from "@mantine/core";

import { gradients } from "@sextival/theme/colors";
import Panel from "@sextival/components/Panel";

import { HeroTitle } from "./HeroTitle";
import { HeroLogo } from "./HeroLogo";
import { HeroTagline } from "./HeroTagline";

type Props = {
  order: number;
};

const Hero = ({ order = 1 }: Props) => {
  return (
    <Panel
      order={order}
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
