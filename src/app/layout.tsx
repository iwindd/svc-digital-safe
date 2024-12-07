import type { Metadata } from "next";

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
    <html lang="th">
      <body>
        {children}
      </body>
    </html>
  );
}
