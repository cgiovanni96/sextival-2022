import { Space } from "@mantine/core";
import { Panel } from "@sextival/components/Panel";
import { DivRef } from "@sextival/types/react";

import { Crowdfunding } from "./Crowdfunding";
import Guide from "./Guide";
import { News } from "./News";

type Props = {
  scrollRef: DivRef;
  scrollAction: () => void;
};

const Info = ({ scrollRef, scrollAction }: Props) => {
  return (
    <Panel
      scrollAction={scrollAction}
      scrollRef={scrollRef}
      sx={{ marginTop: "5px" }}
    >
      <Guide />

      <Space h="xl" />

      <Crowdfunding />

      <Space h="xl" />

      <News />
    </Panel>
  );
};

export default Info;
