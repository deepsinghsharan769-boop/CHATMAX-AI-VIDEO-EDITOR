import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHATMAX AI Video Editor",
  description: "Your Autonomous AI Video Editing Agent",
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
