import Panel from "@sextival/components/Panel";
import { DivRef } from "@sextival/types/react";

type Props = {
  order: number;
};

const Content = ({ order = 3 }: Props) => {
  return (
    <Panel order={order} scrollDown sx={{ marginTop: "5px" }}>
      <span>Hello</span>
    </Panel>
  );
};

export default Content;
