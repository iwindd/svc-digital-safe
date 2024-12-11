'use client';

import React from "react";
import ReactMarkdown from "react-markdown";
import { Card, Group, rem, ThemeIcon, Title } from "@mantine/core";
import remarkGfm from "remark-gfm";
import { Section } from "@/data/sections";
import classes from "./style.module.css";
import Liable from "./components/Liable";
import { IconGavel } from "@tabler/icons-react";

interface SectionProps {
  section: Section;
  number: number;
}

const Section = ({ section, number }: SectionProps) => {
  return (
    <Card shadow="md" padding="lg" radius="md">
      <Card.Section inheritPadding className={classes.headerSection}>
        <Group>
          <IconGavel />
          <Title order={3}>มาตราที่ {number}</Title>
        </Group>
      </Card.Section>
      <div className={classes.paragraph}>
        <ReactMarkdown children={section.text} remarkPlugins={[remarkGfm]} />
      </div>

      {section.liable && <Liable liable={section.liable}/>}
    </Card>
  );
};

export default Section;
