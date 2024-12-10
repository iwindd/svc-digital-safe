import React from "react";
import ReactMarkdown from "react-markdown";
import { Card, Text, Title, Transition } from "@mantine/core";
import remarkGfm from "remark-gfm";
import { Section } from "@/data/sections";

interface SectionProps {
  section: Section;
  number: number;
}

const Section = ({ section, number }: SectionProps) => {
  return (
    <Card shadow="md" padding="lg" radius="md">
      <Title order={3}>มาตราที่ {number}</Title>
      <div>
        <ReactMarkdown children={section.text} remarkPlugins={[remarkGfm]} />
      </div>
    </Card>
  );
};

export default Section;
