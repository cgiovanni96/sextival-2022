import { Space } from "@mantine/core";
import { Panel } from "@sextival/components/Panel";
import { DivRef } from "@sextival/types/react";

import { Crowdfunding } from "./Crowdfunding";
import Guide from "./Guide";

type Props = {
  scrollRef: DivRef;
};

const Info = ({ scrollRef }: Props) => {
  return (
    <Panel scrollRef={scrollRef} sx={{ marginTop: "5px" }}>
      <Guide />

      <Space h="xl" />

      <Crowdfunding />
    </Panel>
  );
};

export default Info;
