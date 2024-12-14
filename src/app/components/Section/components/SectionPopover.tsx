import type { Section as SectionType } from "@/data/sections";
import { Button, Popover, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React from "react";
import Section from "..";

const SectionPopover = (section : SectionType) => {
  const [opened, { close, open }] = useDisclosure(false);

  return (
    <Popover
      position="bottom"
      withArrow
      shadow="md"
      width={500}
      opened={opened}
    >
      <Popover.Target>
        <Text 
          component="a" 
          c="blue.8"
          href={`/#section${section.id}`}
          onMouseEnter={open} 
          onMouseLeave={close}
        >
          {section.id}
        </Text>
      </Popover.Target>
      <Popover.Dropdown style={{ pointerEvents: "none" }}>
        <Section 
          section={section} 
          number={section.id}
          popover={true}
        />
      </Popover.Dropdown>
    </Popover>
  );
};

export default SectionPopover;
