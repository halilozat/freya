'use client'

/** dependencies */
import { Inter } from "next/font/google";
import React from "react";
import {store} from "@/store";
import {Provider} from "react-redux";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
            <Provider store={store}>
                {children}
            </Provider>
        </div>
      </body>
    </html>
  );
}
