import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'

type Body = {
  event: string
  session: { access_token?: string; refresh_token?: string } | null
}

export async function POST(req: Request) {
  const body = (await req.json()) as Body
  const { event, session } = body

  const supabase = await createClient(cookies())

  try {
    if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
      if (!session?.access_token || !session?.refresh_token) {
        return NextResponse.json({ error: 'Missing tokens' }, { status: 400 })
      }

      const { error } = await supabase.auth.setSession({
        access_token: session.access_token,
        refresh_token: session.refresh_token,
      })

      if (error) return NextResponse.json({ error }, { status: 500 })
    } else if (event === 'SIGNED_OUT') {
      // Clear server-side session
      await supabase.auth.signOut()
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
