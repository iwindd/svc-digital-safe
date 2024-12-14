import { List, Text } from "@mantine/core";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Markdown = (props: { children: string }) => {
  return (
    <ReactMarkdown 
      remarkPlugins={[remarkGfm]} 
      children={props.children}
      components={{
        p({ children }){
          return <Text>{children as string}</Text>
        },
        strong({ children }){
          return <Text component="strong" fw={700}>{children as string}</Text>
        },
        a({ children, href }){
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
    />
  );
};

export default Markdown;
