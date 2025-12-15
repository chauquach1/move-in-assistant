/**
 * /api/protected
 *
 * Example of a protected API route that requires authentication.
 * Any request to this endpoint will redirect to /login if the user is not signed in.
 *
 * Usage:
 * - Use this as a template for other protected API routes
 * - Call `requireServerUser()` or `getServerUser()` at the start of your route handler
 */

import { NextResponse } from 'next/server'
import { requireServerUser } from '@/utils/supabase/auth'

/**
 * GET handler for a protected route
 *
 * @returns JSON response with { ok: true, user } if authenticated
 *         Redirects to /login if not authenticated
 */
export async function GET() {
  // Require authentication: throws a redirect to /login if no user is found
  // This is a server-side protection — runs before the response is sent
  const user = await requireServerUser()

  // If we get here, the user is authenticated
  return NextResponse.json({ ok: true, user })
}
