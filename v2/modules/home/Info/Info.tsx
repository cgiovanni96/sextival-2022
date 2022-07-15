import { Space } from "@mantine/core";
import Panel from "@sextival/components/Panel";
import { DivRef } from "@sextival/types/react";

import Guide from "./Guide";
import Program from "./Program";

const Info = () => {
  return (
    <Panel order={2} scrollDown>
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
