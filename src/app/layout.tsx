import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata } from "next";
import { theme } from '../theme';
import '@mantine/core/styles.css';

export const metadata: Metadata = {
  title: "SVC Digital Safe",
  description: "SVC Digital Safe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
