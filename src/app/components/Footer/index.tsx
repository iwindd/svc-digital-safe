'use client';

import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { ActionIcon, Container, Group, Text } from "@mantine/core";
import classes from "./style.module.css";
import iStoreLogo from "../../../assets/logo.png";
import Image from "next/image";
import Link from "next/link";

interface FooterData{
  title: string;
  external?: boolean;
  links: { label: string; link: string; }[];
}

const data : FooterData[] = [
  {
    title: "อ้างอิง",
    external: true,
    links: [
      { label: "mdes.go.th", link: "https://www.mdes.go.th/law/detail/3516-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8D%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%B3%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%9C%E0%B8%B4%E0%B8%94%E0%B9%80%E0%B8%81%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B8%9E-%E0%B8%A8--%E0%B9%92%E0%B9%95%E0%B9%95%E0%B9%90" },
      { label: "chayo555.com", link: "https://www.chayo555.com/th/newsroom/articles/44/%E0%B8%9E%E0%B8%A3%E0%B8%9A-%E0%B8%A7%E0%B9%88%E0%B8%B2%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%97%E0%B8%B3%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%9C%E0%B8%B4%E0%B8%94%E0%B8%97%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B4%E0%B8%A7%E0%B9%80%E0%B8%95%E0%B8%AD%E0%B8%A3%E0%B9%8C-%E0%B8%9E%E0%B8%A8-2550" },
      { label: "dga.or.th", link: "https://www.dga.or.th/wp-content/uploads/2016/12/file_ce8c32197b28a5d438136a3bd8252b7c.pdf" },
      { label: "blog.wu.ac.th", link: "https://blog.wu.ac.th/archives/10462" },
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
      (
        group.external ? (
          <Text<"a">
            key={index}
            className={classes.link}
            component="a"
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.label}
          </Text>
        ):(
          <Text
            key={index}
            className={classes.link}
            component={Link}
            href={link.link}
          >
            {link.label}
          </Text>
        )
      )
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
