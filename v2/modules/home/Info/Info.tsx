import { Space } from "@mantine/core";
import Panel from "@sextival/components/Panel";
import { DivRef } from "@sextival/types/react";

import Guide from "./Guide";
import Program from "./Program";

type Props = {
  order: number;
};

const Info = ({ order = 2 }: Props) => {
  return (
    <Panel order={order} scrollDown sx={{ marginTop: "5px" }}>
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
