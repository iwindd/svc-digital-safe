import sections, { Section } from "@/data/sections";

export const getSections = () : Section[] => sections
export const getSectionById = (id: number) : Section | undefined => sections.find(section => section.id === id)