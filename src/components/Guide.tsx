import { useState } from "react";
import styled from "styled-components";
import { up } from "styled-breakpoints";
import { client } from "../client";
import PuffLoader from "react-spinners/PuffLoader";

export const Guide = () => {
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
    <Container>
      <Content>
        <div>
          Ecco la guida al Sextival 2022: Il <strong>programma</strong>, la{" "}
          <strong>mappa</strong>, gli <strong>stand</strong> e il{" "}
          <strong>regolamento</strong>!{" "}
        </div>
        {!downloading ? (
          <img
            onClick={onClickDownload}
            src="/download/download.svg"
            alt="Scarica"
          />
        ) : (
          <PuffLoader size={36} color={"#FFF"} />
        )}
      </Content>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > * {
    margin: 2rem 5%;

    ${up("lg")} {
      margin: 0 20%;
      margin-top: 2rem;
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(p) => p.theme.palette.red[1]};
  border: 4px solid ${(p) => p.theme.palette.white[1]};
  box-shadow: 0px 4px 6px rgba(80, 10, 10, 0.13);
  padding: 1rem;
  color: white;

  font-size: 20px;
  border-radius: 8px;

  & strong {
    font-weight: bold;
  }

  & img {
    width: 36px;
    height: 36px;
    margin-left: 1rem;

    &:hover {
      cursor: pointer;
    }
  }

  & span {
    margin-right: 1rem;
  }
`;
