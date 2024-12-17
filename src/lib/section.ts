import sections, { LiableName, LiableValue, Section } from "@/data/sections";

export const Locales: Record<string, string> = {
  imprisonment: "จำคุก",
  fine: "ปรับ",
  fineUntil: "ปรับเป็นรายวันจนกว่าจะปฏิบัติถูกต้อง",
  "<=": "ไม่เกิน",
  "-": "ถึง",
};

export const getSections = (): Section[] => sections;
export const getSectionById = (id: number): Section | undefined =>
  sections.find((section) => section.id === id);

export const formatMoney = (value: number): string => value.toLocaleString() + " บาท";
export const formatDays = (days: number): string => {
  const years = Math.floor(days / 365); // Calculate years
  const remainingDaysAfterYears = days % 365; // Remaining days after years
  const months = Math.floor(remainingDaysAfterYears / 30); // Calculate months

  let result = "";
  if (years > 0) result += `${years} ปี`;
  if (months > 0) result += `${result ? " " : ""}${months} เดือน`;

  return result || "-"; // Default to "0 วัน" if no input days
};

export const parseLiable = (
  liableValue: LiableValue,
  key: LiableName
): string => {
  const [p1, p2, p3] = liableValue;
  let result = "";

  const formatValue = (value: number, key: LiableName) => {
    return key === "imprisonment" ? formatDays(value) : formatMoney(value);
  };

  if (p3 !== undefined) {
    result = `${formatValue(p1 as number, key)} ${Locales[p2]} ${formatValue(
      p3 as number,
      key
    )}`;
  } else {
    result = `${Locales[p1]} ${formatValue(p2 as unknown as number, key)}`;
  }

  if (key === "fineUntil") result += "/วัน";

  return result;
};
