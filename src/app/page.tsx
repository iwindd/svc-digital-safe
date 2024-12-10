import { Container, Stack } from "@mantine/core";
import { getSections } from "@/lib/section";
import Section from './components/Section';

export default function Home() {
  const sections = getSections();

  return (
    <Container>
      <Stack>
        {sections.map((section, index) => (
          <Section key={section.id} section={section} number={index+1}/>
        ))}
      </Stack>
    </Container>
  );
}
