import React from 'react'
import ReactMarkdown from 'react-markdown'
import { Section } from '@/type'
import { Stack, Title } from '@mantine/core'

interface SectionProps{
  section: Section,
  number: number
}

const Section = ({ section, number } : SectionProps) => {
  return (
    <>
      <Title order={3}>มาตราที่ {number}</Title>
      <Stack>
        <ReactMarkdown 
          children={section.text}
        />
      </Stack> 
    </>
  )
}

export default Section