import React, { useState } from "react";
import styled from "styled-components";
import { Ospiti } from "../data/ospiti";
import { Flex, Item } from "react-flex-ready";

export type OspitiDesktopProps = { ospiti: Ospiti; headerHeight: number };

export const OspitiDesktop = ({ ospiti, headerHeight }: OspitiDesktopProps) => {
  const [selected, setSelected] = useState(0);
  const [content, setContent] = useState<string>(ospiti[0].description);

  console.log("HEIHGT", headerHeight);

  return (
    <Container>
      {ospiti.map((o, i) => (
        <Item key={i} col={4} gap={1} marginBottom={30} stretch>
          <Content>
            <OspiteName>{o.name}</OspiteName>
            <OspiteDescription>{o.description}</OspiteDescription>
          </Content>
        </Item>
      ))}
    </Container>
  );
};

const Container = styled(Flex)`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  flex: 1;
  height: 100%;
  background: ${(p) => p.theme.palette.red[1]};
  color: white;
  padding: 5%;
  min-height: 200px;
  border-radius: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const OspiteName = styled.h2`
  font-size: 18px;
  text-align: center;
  font-weight: bold;
`;

const OspiteDescription = styled.div`
  font-size: ${(p) => p.theme.typo.size.detail};
  flex: 1;
  display: flex;
  align-items: center;
`;
