import { Box, Title } from "@mantine/core";

const TaglineText = ({
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

export const HeroTagline = () => {
  return (
    <Box sx={{ marginLeft: "auto", width: "80%" }}>
      <TaglineText text={"Vieni"} first variant />
      <TaglineText text={"al festival"} />
      <TaglineText text={"dell'educazione sessuale"} />
    </Box>
  );
};
