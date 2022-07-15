import Panel from "@sextival/components/Panel";
import { Crowdfunding } from "./Crowdfunding";
import { News } from "./News";

const Text = () => {
  return (
    <Panel order={4}>
      <Crowdfunding />
      <News />
    </Panel>
  );
};

export default Text;
