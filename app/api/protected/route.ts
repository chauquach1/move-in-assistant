import { NextResponse } from 'next/server'
import { requireServerUser } from '@/utils/supabase/auth'

export async function GET() {
  // This will redirect to /login if there is no authenticated user
  const user = await requireServerUser()

  return NextResponse.json({ ok: true, user })
}
