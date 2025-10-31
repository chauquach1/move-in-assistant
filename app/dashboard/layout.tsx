import type { Metadata } from "next";
import "../globals.css";


export const metadata: Metadata = {
  title: "Dashboard",
  description: "Move In Assistant Dashboard",
};

export default function DashboardLayout({
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
