import { AspectRatio, Box, Title, useMantineTheme } from "@mantine/core";
import Image from "next/image";

import { gradients } from "src/theme/colors";

import { Menu } from "./icons/Menu";
import { Nassa } from "./icons/Nassa";

export const Hero = () => {
  const theme = useMantineTheme();
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `${gradients.gradient}`,

        display: "flex",
        flexDirection: "column",
        color: "white",
        padding: 20,
      }}
    >
      <Box sx={{ marginLeft: "auto" }}>
        <Menu color={theme.colors["sexyred"][4]} />
      </Box>

      <Box
        sx={{
          width: "90%",
          height: "40%",
          position: "relative",
        }}
        mx="auto"
      >
        <Image
          src={"/v2/hero-logo.png"}
          alt="hero logo"
          layout="fill"
          objectFit="contain"
          style={{ filter: "drop-shadow(0px 2px 2px rgba(0,0,0,0.2)" }}
        />
      </Box>

      <Box sx={{ marginTop: "1rem" }}>
        <HeroTitle text="INTERVENTi" />
        <HeroTitle text="ARTE" />
        <HeroTitle text="MUSICA" />
      </Box>

      <Box sx={{ marginTop: "1rem", marginLeft: "auto", width: "80%" }}>
        <HeroTagline text={"Vieni"} first variant />
        <HeroTagline text={"al festival"} />
        <HeroTagline text={"dell'educazione sessuale"} />
      </Box>

      <Box
        mt="auto"
        sx={{
          position: "relative",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Nassa />

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translate(-5%, -50%)",
            fontSize: 18,
            color: "#550026",
            fontWeight: "bold",
            zIndex: 2,
          }}
        >
          Scopri di più
        </Box>
      </Box>
    </Box>
  );
};

const HeroTitle = ({ text }: { text: string }) => {
  return (
    <Title
      order={1}
      sx={{
        fontSize: "48px",
        lineHeight: "40px",
        textTransform: "uppercase",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.13)",
      }}
    >
      {text}
    </Title>
  );
};

const HeroTagline = ({
  text,
  first,
  variant,
}: {
  text: string;
  first?: boolean;
  variant?: boolean;
}) => {
  return (
    <Title
      order={2}
      sx={{
        fontSize: "24px",
        textTransform: "uppercase",
        color: variant ? "#090346" : "inherit",
        lineHeight: "1.4rem",
        marginBottom: first ? ".3rem" : "none",
        textAlign: "right",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.13)",
      }}
    >
      {text}
    </Title>
  );
};
