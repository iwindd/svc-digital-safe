import React from "react";
import ReactMarkdown from "react-markdown";
import { Card, Title } from "@mantine/core";
import remarkGfm from "remark-gfm";
import { Section } from "@/data/sections";
import classes from "./style.module.css";

interface SectionProps {
  section: Section;
  number: number;
}

const Section = ({ section, number }: SectionProps) => {
  return (
    <Card shadow="md" padding="lg" radius="md">
      <Title order={3}>มาตราที่ {number}</Title>
      <div className={classes.paragraph}>
        <ReactMarkdown children={section.text} remarkPlugins={[remarkGfm]} />
      </div>
    </Card>
  );
};

export default Section;
