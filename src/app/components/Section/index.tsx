"use client";

import React from "react";
import {
  Accordion,
  AspectRatio,
  Badge,
  Card,
  Group,
  Text,
  Title,
} from "@mantine/core";
import type { Section as SectionType } from "@/data/sections";
import classes from "./style.module.css";
import Liable from "./components/Liable";
import { IconGavel } from "@tabler/icons-react";
import Markdown from "./components/Markdown";

interface SectionProps {
  section: SectionType;
  number: number;
  popover?: boolean;
}

const Section = React.memo(({ section, number, popover }: SectionProps) => {
  return (
    <Card 
      {...(!popover && {
        shadow: "md",
        padding: "lg",
        radius: "md",
        id: `section${number}`
      })}
    >
      <Card.Section inheritPadding className={classes.headerSection}>
        <Group align="center" justify="space-between">
          <Group>
            <IconGavel />
            <Title order={3}>มาตราที่ {number}</Title>
          </Group>

          { section.category && (
            <Badge color={section.category.color}>{section.category.label}</Badge>
          )}
        </Group>
      </Card.Section>
      <div className={classes.paragraph} style={{maxHeight: popover ? "200px" : "auto"}}>
        <Markdown children={section.text} />
      </div>
      {(section.cases || section.offense) && !popover &&(
        <Accordion
          variant="filled"
          radius="xs"
          classNames={{
            root: classes.accordion,
            control: classes.accordionControl,
            panel: classes.accordionPanel,
            content: classes.accordionContent,
          }}
        >
          {section.offense && (
            <Accordion.Item value="offense">
              <Accordion.Control>
                <Text fs="italic" c="dimmed">
                  ตัวอย่างการกระทำความผิดเกี่ยวกับพาณิชย์อิเล็กทรอนิกส์
                </Text>
              </Accordion.Control>
              <Accordion.Panel>
                <div>
                  <Markdown children={section.offense} />
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          )}
          {section.cases &&
            section.cases.map((ytId, index) => (
              <Accordion.Item key={ytId} value={ytId}>
                <Accordion.Control>
                  <Text fs="italic" c="dimmed">
                    กรณีศึกษา #{index + 1}
                  </Text>
                </Accordion.Control>
                <Accordion.Panel>
                  <AspectRatio ratio={16 / 9}>
                    <iframe
                      src={`https://www.youtube.com/embed/${ytId}`}
                      className={classes.video}
                      title="กรณีศึกษา"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </AspectRatio>
                </Accordion.Panel>
              </Accordion.Item>
            ))}
        </Accordion>
      )}
      {section.liable && !popover && <Liable liable={section.liable} />}
    </Card>
  );
});

export default Section;
