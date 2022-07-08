import { Box, Space, Title, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import { motion } from "framer-motion";

import { gradients } from "@sextival/theme/colors";
import { Menu, Nassa, Down } from "@sextival/components/icons";
import { HeroTitle } from "./HeroTitle";
import { HeroLogo } from "./HeroLogo";
import { HeroScroll } from "./HeroScroll";
import { Panel } from "@sextival/components/Panel";
import { HeroTagline } from "./HeroTagline";

type Props = {
  scrollAction: () => void;
};

const Hero = ({ scrollAction }: Props) => {
  const theme = useMantineTheme();

  return (
    <Panel
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

      <HeroScroll scrollAction={scrollAction} />
    </Panel>
  );
};

export default Hero;
