import { Space } from "@mantine/core";
import { useState } from "react";

import Section, { Title } from "@sextival/components/Section";
import { variants } from "../info.variants";

import { Pills } from "./Pills";
import { Data } from "./data.mock";
import { List } from "./List";

const Program = () => {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <Section variants={variants} amount={0.6}>
      <Title text={"Il programma"} />
      <Space h="xs" />

      <Pills
        days={Data.map((d) => d.day)}
        activeDay={activeDay}
        setActiveDay={(day) => setActiveDay(day)}
      />

      <List program={Data[activeDay].program} />
    </Section>
  );
};

export default Program;
