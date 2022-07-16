import { Button } from "@mantine/core";

import { useDownload } from "./useDownload";

export const GuideDownload = () => {
  const { state, action } = useDownload({
    file: "guida.pdf",
  });

  return (
    <Button radius="xl" onClick={action} loading={state}>
      Scarica
    </Button>
  );
};
