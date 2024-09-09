import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TTRPG Tools",
  description: "An application for tabletop role-playing game tools.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
