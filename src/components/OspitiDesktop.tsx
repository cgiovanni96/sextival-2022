import React from "react";
import styled from "styled-components";
import { Flex, Item } from "react-flex-ready";
import Image from "next/image";
import { motion } from "framer-motion";

import { Ospiti } from "../data/ospiti";

export type OspitiDesktopProps = { ospiti: Ospiti };

export const OspitiDesktop = ({ ospiti }: OspitiDesktopProps) => {
  return (
    <Container>
      {ospiti.map((o, i) => (
        <Item key={i} col={4} gap={1} marginBottom={30} stretch>
          <Content>
            <Header>
              <OspiteImgContainer>
                <Image
                  src={`/ospiti/${o.img}`}
                  alt={o.name}
                  layout="fill"
                  loading="lazy"
                />
              </OspiteImgContainer>
              <OspiteName>{o.name}</OspiteName>
            </Header>
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

const Content = styled(motion.div)`
  flex: 1;
  height: 100%;
  background-color: ${(p) => p.theme.palette.white[1]};
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  color: ${(p) => p.theme.palette.blue[1]};
  padding: 5% 10%;
  min-height: 200px;
  border-radius: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;

  transition: all 0.5s ease-in-out;

  &:hover {
    background: white;
    transform: translateY(-5px);
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const OspiteImgContainer = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 100%;
  background: white;

  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  margin-right: 1rem;
  position: relative;

  & img {
    border-radius: 100%;
    object-fit: cover;
  }
`;

const OspiteName = styled.h2`
  flex: 1;
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
