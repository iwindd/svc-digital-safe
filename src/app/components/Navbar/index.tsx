"use client";
import {
  Burger,
  Container,
  Divider,
  Drawer,
  Group,
  ScrollArea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./style.module.css";
import Image from "next/image";
import iStoreLogo from "../../../assets/logo.png";
import Link from "next/link";

const links = [
  { link: "/", label: "มาตรา" },
  { link: "/effect", label: "ผลกระทบ" },
  { link: "/report", label: "การแจ้งความ" },
  { link: "/aboutme", label: "ผู้สร้าง" },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container className={classes.inner}>
        <Group 
          justify="space-between" 
          align="center" 
          className={classes.logoContainer}
        >
          <Link href={"/"} className={classes.logoLink}>
            <Image src={iStoreLogo} width={28} height={28} alt="Home" />
          </Link>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="sm">
            {items}
          </Group>
        </Group>

        <Drawer
          opened={opened}
          onClose={toggle}
          size="100%"
          padding="md"
          title="SVC Digital Safe"
          hiddenFrom="sm"
          zIndex={1000000}
        >
          <ScrollArea h="calc(100vh - 80px" mx="-md">
            <Divider my="sm" />
            {items}
          </ScrollArea>
        </Drawer>
      </Container>
    </header>
  );
}
