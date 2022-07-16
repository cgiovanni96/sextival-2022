import { Space } from "@mantine/core";
import Panel from "@sextival/components/Panel";
import { Crowdfunding } from "./Crowdfunding";
import { Discord } from "./Discord";
import { News } from "./News";

const Text = () => {
  return (
    <Panel order={4}>
      <Discord />

      <Space h="xl" />

      <Crowdfunding />

      <Space h="xl" />

      <News />
    </Panel>
  );
};

export default Text;
