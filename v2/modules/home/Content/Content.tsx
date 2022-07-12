import { Panel } from "@sextival/components/Panel";
import { DivRef } from "@sextival/types/react";

type Props = {
  scrollRef: DivRef;
  scrollAction: () => void;
};

const Content = ({ scrollRef, scrollAction }: Props) => {
  return (
    <Panel
      scrollRef={scrollRef}
      scrollAction={scrollAction}
      sx={{ marginTop: "5px" }}
    >
      <span>Hello</span>
    </Panel>
  );
};

export default Content;
