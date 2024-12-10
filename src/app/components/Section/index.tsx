import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Stack, Title } from '@mantine/core'
import remarkGfm from 'remark-gfm'
import { Section } from '@/data/sections'

interface SectionProps{
  section: Section,
  number: number
}

const Section = ({ section, number } : SectionProps) => {
  return (
    <>
      <Title order={3}>มาตราที่ {number}</Title>
      <div>
        <ReactMarkdown 
          children={section.text}
          remarkPlugins={[remarkGfm]}
        />
      </div> 
    </>
  )
}

export default Section