import { Box, Title } from "@mantine/core";
import { useStyles } from "./hero.styles";

const TaglineText = ({
  text,
  first,
  variant,
}: {
  text: string;
  first?: boolean;
  variant?: boolean;
}) => {
  const {
    classes: { tagline },
  } = useStyles({ tagline: { first, variant } });

  return (
    <Title order={2} className={tagline}>
      {text}
    </Title>
  );
};

export const HeroTagline = () => {
  return (
    <Box sx={{ marginLeft: "auto", width: "80%" }}>
      <TaglineText text={"Vieni"} first variant />
      <TaglineText text={"al festival"} />
      <TaglineText text={"dell'educazione sessuale"} />
    </Box>
  );
};
