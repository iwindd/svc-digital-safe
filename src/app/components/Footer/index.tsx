'use client';

import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { ActionIcon, Container, Group, Text } from "@mantine/core";
import classes from "./style.module.css";
import iStoreLogo from "../../../assets/logo.png";
import Image from "next/image";

const data = [
  {
    title: "มาตรา",
    links: [
      { label: "-", link: "#" },
      { label: "-", link: "#" },
      { label: "-", link: "#" },
      { label: "-", link: "#" },
    ],
  },
  {
    title: "เกี่ยวกับ",
    links: [
      { label: "-", link: "#" },
      { label: "-", link: "#" },
      { label: "-", link: "#" },
      { label: "-", link: "#" },
    ],
  },
  {
    title: "ติดต่อ",
    links: [
      { label: "-", link: "#" },
      { label: "-", link: "#" },
      { label: "-", link: "#" },
      { label: "-", link: "#" },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<"a">
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Group>
            <Image src={iStoreLogo} width={30} height={30} alt="Home" />
            <Text>SVC Digital Safe</Text>
          </Group>
          <Text size="xs" c="dimmed" className={classes.description}>
            พรบ. ว่าด้วยการกระทำความผิดทางคอมพิวเตอร์ พ.ศ. 2550
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2024 SVC Digital Safe
        </Text>

        <Group
          gap={0}
          className={classes.social}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandFacebook size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
