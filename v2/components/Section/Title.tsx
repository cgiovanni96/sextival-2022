import { Text } from "@mantine/core";

type Props = {
  text: string;
};

export const Title = ({ text }: Props) => {
  return (
    <Text size={20} weight={500} color="#550026">
      {text}
    </Text>
  );
};
