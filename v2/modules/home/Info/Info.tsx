import { Space } from "@mantine/core";
import { Panel } from "@sextival/components/Panel";
import { DivRef } from "@sextival/types/react";

import Guide from "./Guide";
import Program from "./Program";

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

      <Program />

      {/* <Crowdfunding /> */}

      <Space h="xl" />

      {/* <News /> */}
    </Panel>
  );
};

export default Info;
