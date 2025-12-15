import React from "react";
import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "CPMI Login",
  description: "Move In Assistant Login",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>
          {children}
      </body>
    </html>
  );
}
