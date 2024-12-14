import type { Liable, LiableName, LiableValue } from '@/data/sections'
import { Card, List, rem, SimpleGrid, ThemeIcon } from '@mantine/core'
import { IconLock, IconReceipt } from '@tabler/icons-react'
import classes from "../style.module.css";
import React from 'react'

interface LiableProps {
  liable: Liable
}

const Locales : Record<string, string> = {
  "imprisonment": "จำคุก",
  "fine": "ปรับ",
  "fineUntil": "ปรับเป็นรายวันจนกว่าจะปฏิบัติถูกต้อง",
  "<=": "ไม่เกิน",
  "-": "ถึง"
}

const parseLiable = (liableValue : LiableValue, key: LiableName) => {
  let [p1, p2, p3] : [any, any, any] = liableValue;
  let result = "";

  if (p3 != undefined) {
    if (key == "imprisonment") {
      p1 = formatDays(p1);
      p3 = formatDays(p3);
    }else{
      p1 = formatMoney(p1);
      p3 = formatMoney(p3);
    }

    result = `${p1} ${Locales[p2]} ${p3}`
  }else{
    if (key == "imprisonment") {
      p2 = formatDays(p2);
    }else{
      p2 = formatMoney(p2);
    }
    result = `${Locales[p1]} ${p2}`;
  }

  if (key == "fineUntil") result += "/วัน";

  return result;
}

function formatDays(days : number) : string {
  const years = Math.floor(days / 365); // Calculate years
  const remainingDaysAfterYears = days % 365; // Remaining days after years
  const months = Math.floor(remainingDaysAfterYears / 30); // Calculate months

  let result = "";
  if (years > 0) result += `${years} ปี`;
  if (months > 0) result += `${result ? " " : ""}${months} เดือน`;

  return (result || "-"); // Default to "0 วัน" if no input days
}

function formatMoney(value: number): string {
  return value.toLocaleString() + " บาท"
}

const Liable = (props: LiableProps) => {
  const [allLiable] = React.useState(Array.isArray(props.liable) ? props.liable: [props.liable])

  return (
    <Card.Section inheritPadding className={classes.liableSection}>
      <SimpleGrid 
        cols={{
          base: 1,
          md: allLiable.length > 3 ? 3 : allLiable.length,
        }}
      >
        {allLiable.map((liableObj, liableIndex) => (
          <List key={liableIndex}>
            {Object.entries(liableObj).map(([key, value], index) => (
              <List.Item 
                key={`${liableIndex}-${index}`}
                icon={
                  <ThemeIcon color="red" size={24} radius="xl">
                    {
                      key == "imprisonment" && (
                        <IconLock style={{ width: rem(16), height: rem(16) }} />
                      ) || (
                        <IconReceipt style={{ width: rem(16), height: rem(16) }} />
                      )
                    }
                  </ThemeIcon>
                }
              >
                {Locales[key]}: {parseLiable(value, key as LiableName)}
              </List.Item>
            ))}
          </List>
        ))}
      </SimpleGrid>
    </Card.Section>
  )
}

export default Liable