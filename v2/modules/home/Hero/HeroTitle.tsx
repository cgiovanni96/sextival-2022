import { Title } from "@mantine/core";
import { useStyles } from "./hero.styles";

export const HeroTitle = ({ text }: { text: string }) => {
  const {
    classes: { title },
  } = useStyles({});
  return (
    <Title order={1} className={title}>
      {text}
    </Title>
  );
};
