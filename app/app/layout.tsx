import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHATMAX AI Video Editor",
  description: "Autonomous AI Documentary and Video Editing Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
