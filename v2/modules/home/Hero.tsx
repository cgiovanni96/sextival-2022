import { Box, Title, useMantineTheme } from "@mantine/core";
import Image from "next/image";
import { motion } from "framer-motion";

import { gradients } from "@sextival/theme/colors";
import { Menu, Nassa, Down } from "@sextival/components/icons";

type Props = {
  scrollAction: () => void;
};

export const Hero = ({ scrollAction }: Props) => {
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        maxWidth: "100vw",
        height: "100vh",
        backgroundImage: `${gradients.gradient}`,

        display: "flex",
        flexDirection: "column",
        color: "white",
        padding: 20,
      }}
    >
      <Box
        sx={{
          width: "90%",
          height: "100%",
          // height: "40%",
          position: "relative",
        }}
        mx="auto"
      >
        <Image
          src={"/v2/hero-logo.png"}
          alt="hero logo"
          layout="fill"
          objectFit="cover"
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
        <motion.div
          animate={{ opacity: 0.5 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "mirror" }}
        >
          <Nassa width={80} />
        </motion.div>

        <Box
          sx={{
            position: "absolute",
            top: "50%",
            transform: "translate(-5%, -50%)",
            fontSize: 18,
            color: "#550026",
            fontWeight: "bold",
            zIndex: 2,
            display: "flex",
            alignItems: "center",
          }}
        >
          Scopri di più
          <motion.div
            animate={{ y: -5 }}
            transition={{
              repeat: Infinity,
              duration: 0.5,
              repeatType: "mirror",
            }}
            style={{ marginLeft: "8px", display: "flex", alignItems: "center" }}
            onClick={scrollAction}
          >
            <Down />
          </motion.div>
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
