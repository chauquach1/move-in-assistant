/**
 * /api/auth
 *
 * Syncs client-side Supabase auth state changes to the server.
 * This allows server-side rendered pages and API routes to read the authenticated user
 * from HTTP-only session cookies, instead of relying on client-side state.
 *
 * Flow:
 * 1. Client (AuthListener.tsx or NavigationBar) detects an auth state change (sign in, sign out, token refresh)
 * 2. Client sends POST request with the event and session tokens
 * 3. Server calls supabase.auth.setSession() or supabase.auth.signOut() to update the server session
 * 4. Supabase sets HTTP-only cookies so subsequent requests include the session
 */

import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { createClient } from '@/utils/supabase/server'

/**
 * Expected request body from the client
 */
type Body = {
  event: string // Auth event: 'SIGNED_IN', 'SIGNED_OUT', 'TOKEN_REFRESHED', 'INITIAL', etc.
  session: { access_token?: string; refresh_token?: string } | null // Session tokens from Supabase
}

/**
 * POST handler for syncing auth state to the server
 *
 * @param req - The incoming request with auth event and session tokens
 * @returns JSON response with success (200) or error (400/500)
 */
export async function POST(req: Request) {
  // Parse the request body
  const body = (await req.json()) as Body
  const { event, session } = body

  // Create a server-side Supabase client using the current request's cookies
  const supabase = await createClient(cookies())

  try {
    // Handle sign-in or token refresh events
    if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
      // Validate that both tokens are present
      if (!session?.access_token || !session?.refresh_token) {
        return NextResponse.json({ error: 'Missing tokens' }, { status: 400 })
      }

      // Set the session on the server side (updates HTTP-only cookies)
      const { error } = await supabase.auth.setSession({
        access_token: session.access_token,
        refresh_token: session.refresh_token,
      })

      // Return 500 if Supabase had an error setting the session
      if (error) return NextResponse.json({ error }, { status: 500 })
    } else if (event === 'SIGNED_OUT') {
      // Clear the server-side session (removes session cookies)
      await supabase.auth.signOut()
    }
    // Note: Other events like 'INITIAL' are ignored (just syncing for consistency)

    // Success response
    return NextResponse.json({ ok: true })
  } catch (err) {
    // Catch unexpected errors and return 500
    return NextResponse.json({ error: String(err) }, { status: 500 })
  }
}
