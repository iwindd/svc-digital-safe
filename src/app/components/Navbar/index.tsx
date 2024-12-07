"use client";
/* import { IconSearch } from '@tabler/icons-react'; */
import {
  Autocomplete,
  Burger,
  Divider,
  Drawer,
  Group,
  ScrollArea,
  Stack,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import classes from "./style.module.css";
import Image from "next/image";
import iStoreLogo from "../../../assets/logo.png";
import Link from "next/link";

const links = [
  { link: "/", label: "มาตราทั้งหมด" },
  { link: "/about", label: "ข้อมูลผู้พัฒนา" },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      onClick={(event) => event.preventDefault()}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
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
      </div>
    </header>
  );
}