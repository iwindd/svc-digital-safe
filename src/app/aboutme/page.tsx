"use client";
import { Container, Divider, Group, Stack, Table, Title } from "@mantine/core";
import React from "react";
import Image from "next/image";
import Me from "../../assets/me.jpg";
import Logo from "../../assets/logo.png";
import Teacher from "../../assets/teacher.jpg";
import { randomId } from "@mantine/hooks";

const Data = [
  {
    title: "ผู้จัดทำ:",
    image: Me,
    alt: "รูปผู้สร้าง",
    data: [
      {
        question: "ชื่อ นามสกุล",
        answer: "นายอชิรวิชฌ์ แก้วคง",
      },
      {
        question: "ชื่อ นามสกุล(ภาษาอังกฤษ)",
        answer: "Mr.Achirawit Kaewkhong",
      },
      {
        question: "ชื่อเล่น",
        answer: "	วิน",
      },
      {
        question: "อีเมล์",
        answer: "achirawitkaewkhong@outlook.com",
      },
    ],
  },
  {
    title: "ครูที่ปรึกษา:",
    image: Teacher,
    alt: "รูปครูที่ปรึกษา",
    data: [
      {
        question: "ชื่อ นามสกุล",
        answer: "นายกฤษฎา อำนาจเจริญ",
      },
      {
        question: "ชื่อ นามสกุล(ภาษาอังกฤษ)",
        answer: "Mr.Krissada Amnajaroen",
      },
      {
        question: "อีเมล์",
        answer: "krissada@svc.ac.th",
      },
    ],
  },
  {
    title: "งานรายวิชา:",
    image: Logo,
    alt: "รูปผู้สร้าง",
    data: [
      {
        question: "วิชา",
        answer: "คอมพิวเตอร์กราฟิกเบื้องต้น",
      },
      {
        question: "รหัสวิชา",
        answer: "20901-1004",
      },
      {
        question: "เรื่อง",
        answer: "พัฒนาสื่อด้วยโปรแกรมกราฟิก เรื่อง พรบ คอมพิวเตอร์",
      },
      {
        question: "ชื่อครูผู้สอน",
        answer: "นายกฤษฎา อำนาจเจริญ",
      },
    ],
  },
];

const AboutMePage = () => {
  return (
    <Container mt={"lg"}>
      <Stack>
        {Data.map((element) => (
          <Stack gap={"md"} key={randomId()}>
            <Title order={2}>{element.title}</Title>
            <Group justify="space-between" gap={"lg"}>
              <Group align="start" justify="start">
                <Image
                  src={element.image}
                  alt={element.alt}
                  width={100}
                  height={0}
                />
              </Group>
              <Group grow style={{ flexGrow: 1 }}>
                <Table>
                  <Table.Tbody>
                    {element.data.map((data) => (
                      <Table.Tr key={randomId()}>
                        <Table.Th >{data.question}</Table.Th>
                        <Table.Td width={"70%"}>{data.answer}</Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Group>
            </Group>
            <Divider/>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};

export default AboutMePage;
