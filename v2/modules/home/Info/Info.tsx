import { Panel } from "@sextival/components/Panel";
import { DivRef } from "@sextival/types/react";
import Guide from "./Guide";

type Props = {
  scrollRef: DivRef;
};

const Info = ({ scrollRef }: Props) => {
  return (
    <Panel scrollRef={scrollRef} sx={{ marginTop: "5px" }}>
      <Guide />
    </Panel>
  );
};

export default Info;
