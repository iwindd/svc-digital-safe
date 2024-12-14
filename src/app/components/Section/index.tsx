"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import {
  Accordion,
  AspectRatio,
  Card,
  Group,
  rem,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import remarkGfm from "remark-gfm";
import { Section } from "@/data/sections";
import classes from "./style.module.css";
import Liable from "./components/Liable";
import { IconBrandYoutube, IconGavel } from "@tabler/icons-react";

interface SectionProps {
  section: Section;
  number: number;
}

const Section = ({ section, number }: SectionProps) => {
  return (
    <Card shadow="md" padding="lg" radius="md" id={`section${number}`}>
      <Card.Section inheritPadding className={classes.headerSection}>
        <Group>
          <IconGavel />
          <Title order={3}>มาตราที่ {number}</Title>
        </Group>
      </Card.Section>
      <div className={classes.paragraph}>
        <ReactMarkdown children={section.text} remarkPlugins={[remarkGfm]} />
      </div>
      {(section.cases || section.offense) && (
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
                <Text fs="italic" c="dimmed">ตัวอย่างการกระทำความผิดเกี่ยวกับพาณิชย์อิเล็กทรอนิกส์</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <div>
                  <ReactMarkdown children={section.offense} remarkPlugins={[remarkGfm]} />
                </div>
              </Accordion.Panel>
            </Accordion.Item>
          )}
          {section.cases && section.cases.map((ytId, index) => (
            <Accordion.Item key={ytId} value={ytId}>
              <Accordion.Control>
                <Text fs="italic" c="dimmed">กรณีศึกษา #{index + 1}</Text>
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
      {section.liable && <Liable liable={section.liable} />}
    </Card>
  );
};

export default Section;
