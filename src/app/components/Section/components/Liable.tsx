import type { Liable, LiableName } from "@/data/sections";
import { Card, List, rem, SimpleGrid, ThemeIcon } from "@mantine/core";
import { IconLock, IconReceipt } from "@tabler/icons-react";
import classes from "../style.module.css";
import React from "react";
import { Locales, parseLiable } from "@/lib/section";

interface LiableProps {
  liable: Liable;
}

const Liable = (props: LiableProps) => {
  const [allLiable] = React.useState(
    Array.isArray(props.liable) ? props.liable : [props.liable]
  );

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
                    {(key == "imprisonment" && (
                      <IconLock style={{ width: rem(16), height: rem(16) }} />
                    )) || (
                      <IconReceipt
                        style={{ width: rem(16), height: rem(16) }}
                      />
                    )}
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
  );
};

export default Liable;
