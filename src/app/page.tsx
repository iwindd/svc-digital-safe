import { Container } from "@mantine/core";
import { getSections } from "@/lib/section";

export default function Home() {
  const sections = getSections();

  return (
    <Container>
      {
        sections.map((section) => (
          <section key={section.id}>
            <p>{section.text}</p>
          </section>
        ))
      }
    </Container>
  );
}
