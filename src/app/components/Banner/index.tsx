import React from "react";
import classes from "./style.module.css";
import { Paper } from "@mantine/core";
import Image from "next/image";

const Banner = () => {
  return (
    <Paper className={classes.wrapper}>
      <Image
        src="/banner.svg"
        width={0}
        height={0}
        alt="Banner"
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }} // optional
      />
    </Paper>
  );
};

export default Banner;
