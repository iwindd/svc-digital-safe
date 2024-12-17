"use client"
import { getSectionById } from "@/lib/section";
import { List, Text } from "@mantine/core";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SectionPopover from "./SectionPopover";

const Markdown = (props: { markdown: string }) => {
  return (
    <ReactMarkdown 
      remarkPlugins={[remarkGfm]} 
      components={{
        p({ children }){
          return <Text>{children as string}</Text>
        },
        strong({ children }){
          return <Text component="strong" fw={700}>{children as string}</Text>
        },
        a({ children, href }){
          const isSectionPortal = href?.startsWith("/#section") ? parseInt(href?.substring(9) ?? "", 10) : null;
          const sectionData = isSectionPortal ? getSectionById(isSectionPortal) : null;

          if (sectionData) return <SectionPopover {...sectionData} />;

          return <Text component="a" c="blue.8" href={href as string} rel="noreferrer">{children as string}</Text> 
        },
        ul({ children} ){
          return <List type={"unordered"} withPadding >{children as string}</List>
        },
        ol({ children}){
          return <List type={"ordered"} withPadding >{children as string}</List>
        },
        li({ children }){
          return <List.Item>{children as string}</List.Item>
        }
      }}
    >
      {
        props.markdown
      }
    </ReactMarkdown>
  );
};

export default Markdown;
