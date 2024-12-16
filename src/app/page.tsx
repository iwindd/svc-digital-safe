"use client";

import {
  Box,
  Container,
  Divider,
  Group,
  Paper,
  Select,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { getSections } from "@/lib/section";
import Section from "./components/Section";
import Banner from "./components/Banner";
import { useState } from "react";
import classes from "./style.module.css";
import type { Section as TSection } from "@/data/sections";

const filers = [
  { value: "0", label: "มาตรา" },
  { value: "1", label: "โทษสูงสุด" },
  { value: "2", label: "โทษต่ำสุด" },
];

export default function Home() {
  const [sections] = useState<TSection[]>(getSections());
  const [filter, setFilter] = useState<string | null>("0");
  const [search, setSearch] = useState<string>("");

  const isFound = (section: TSection) => {
    return (
      section.text.includes(search) ||
      section.id.toString().includes(search) ||
      (section.offense && section.offense.toString().includes(search))
    );
  };

  const reOrder = (a: TSection, b: TSection) => {
    if (filter === "0") {
      return a.id - b.id;
    } else if (filter === "1") {
      return b.liablePoint - a.liablePoint;
    } else if (filter === "2") {
      return a.liablePoint - b.liablePoint;
    }
    return 0;
  };

  return (
    <Container>
      <Banner />
      <Paper>
        <Group justify="space-between" align="end">
          <Title>มาตราทั้งหมด:</Title>

          <Group>
            <Select
              label="เรียงลำดับตาม"
              data={filers}
              value={filter}
              onChange={setFilter}
              className={classes.controller}
            />

            <TextInput
              label="ค้นหา"
              placeholder="มาตรา..."
              value={search}
              onChange={(e) => setSearch(e.currentTarget.value)}
            />
          </Group>
        </Group>
      </Paper>
      <Divider className={classes.divider} />
      <Stack gap="xs">
        {sections.sort(reOrder).map(
          (
            section // use hide section if not found cause performance issue
          ) => (
            <Box
              key={section.id}
              style={{ display: isFound(section) ? "block" : "none" }}
            >
              <Section section={section} number={section.id} />
            </Box>
          )
        )}

        {!sections.find(isFound) && <Text ta={"center"} >ไม่พบข้อมูล</Text>}
      </Stack>
    </Container>
  );
}
