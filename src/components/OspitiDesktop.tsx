import React from "react";
import styled from "styled-components";
import { Ospiti } from "../data/ospiti";
import { Flex, Item } from "react-flex-ready";

export type OspitiDesktopProps = { ospiti: Ospiti };

export const OspitiDesktop = ({ ospiti }: OspitiDesktopProps) => {
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
  border: 4px solid ${(p) => p.theme.palette.red[1]};
  color: ${(p) => p.theme.palette.blue[1]};
  padding: 5%;
  min-height: 200px;
  border-radius: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const OspiteName = styled.h2`
  font-size: 22px;
  text-align: center;
  font-weight: bold;
`;

const OspiteDescription = styled.div`
  font-size: ${(p) => p.theme.typo.size.detail};
  flex: 1;
  display: flex;
  align-items: center;
`;
