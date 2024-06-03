/** dependencies */
import { Inter } from "next/font/google";
import React from "react";
import {Providers} from "@/store/provider";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers children={children} />
      </body>
    </html>
  );
}
