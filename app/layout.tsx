import type { Metadata } from "next";

import "@/styles/globals.css";
import { gilroy } from "@/libs/fonts";

export const metadata: Metadata = {
  title: "GL",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gilroy.variable} ${gilroy.className}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
