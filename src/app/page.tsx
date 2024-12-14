"use client";

import {
  Container,
  Divider,
  Group,
  Paper,
  Select,
  Stack,
  Title,
} from "@mantine/core";
import { getSections } from "@/lib/section";
import Section from "./components/Section";
import Banner from "./components/Banner";
import { useState } from "react";
import classes from "./style.module.css";

const filers = [
  { value: "0", label: "มาตรา" },
  { value: "1", label: "โทษสูงสุด" },
  { value: "2", label: "โทษต่ำสุด" },
];

export default function Home() {
  const sections = getSections();
  const [filter, setFilter] = useState<string | null>("0");

  return (
    <Container>
      <Banner />
      <Paper>
        <Group justify="space-between" align="end">
          <Title>มาตราทั้งหมด:</Title>

          <Select
            label="เรียงลำดับตาม"
            data={filers}
            value={filter}
            onChange={setFilter}
          />
        </Group>
      </Paper>
      <Divider className={classes.divider} />
      <Stack gap="xs">
        {sections
          .sort((a, b) => {
            if (filter === "0") {
              return a.id - b.id;
            } else if (filter === "1") {
              return b.liablePoint - a.liablePoint;
            } else if (filter === "2") {
              return a.liablePoint - b.liablePoint;
            }
            return 0;
          })
          .map((section) => (
            <Section key={section.id} section={section} number={section.id} />
          ))}
      </Stack>
    </Container>
  );
}
