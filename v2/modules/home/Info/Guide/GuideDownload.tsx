import { useState } from "react";
import { Button } from "@mantine/core";

import { client } from "pages/api/client";

export const GuideDownload = () => {
  const [downloading, setDownloading] = useState<boolean>(false);
  const onClickDownload = async () => {
    setDownloading(true);

    const { data, error } = await client.storage
      .from("download")
      .download("guida.pdf");

    if (!data || error) return;
    const url = window.URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "guida-sextival2022.pdf");
    document.body.appendChild(link);
    link.click();
    setDownloading(false);
  };

  return (
    <Button radius="xl" onClick={onClickDownload} loading={downloading}>
      Scarica
    </Button>
  );
};
