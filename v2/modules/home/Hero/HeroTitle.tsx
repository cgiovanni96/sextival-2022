import { Title } from "@mantine/core";

export const HeroTitle = ({ text }: { text: string }) => {
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
