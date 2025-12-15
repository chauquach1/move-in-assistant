import type { Metadata } from "next";
import "../globals.css";
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'


export const metadata: Metadata = {
  title: "Dashboard",
  description: "Move In Assistant Dashboard",
};

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = await createClient(cookies())
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) redirect('/login')

  return (
      <body>
          {children}
      </body>
  );
}
