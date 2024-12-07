'use client';

import { createTheme } from '@mantine/core';
import { Sarabun } from "next/font/google";

const sarabun = Sarabun({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const theme = createTheme({
  fontFamily: sarabun.style.fontFamily,
  breakpoints: {
    xs: '36em',
    sm: '47em',
    md: '62em',
    lg: '75em',
    xl: '88em',
  },
});