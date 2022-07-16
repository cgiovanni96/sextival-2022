import { client } from "pages/api/client";
import { useCallback, useState } from "react";

type Args = {
  bucket?: "download";
  file: string;
};

export const useDownload = ({ bucket = "download", file }: Args) => {
  const [downloading, setDownloading] = useState<boolean>(false);

  const onClickDownload = useCallback(async () => {
    setDownloading(true);
    const { data, error } = await client.storage.from(bucket).download(file);

    if (!data || error) return;
    const url = window.URL.createObjectURL(data);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "guida-sextival2022.pdf");
    document.body.appendChild(link);
    link.click();
    setDownloading(false);
  }, [bucket, file]);

  return { state: downloading, action: onClickDownload };
};
