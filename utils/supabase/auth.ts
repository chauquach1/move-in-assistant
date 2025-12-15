import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { createClient } from './server'

/**
 * Returns the authenticated user or null if not signed in.
 */
export async function getServerUser() {
  const supabase = await createClient(cookies())
  const { data } = await supabase.auth.getUser()
  return data.user
}

/**
 * Require an authenticated user in server code — redirects to /login when missing.
 */
export async function requireServerUser() {
  const user = await getServerUser()
  if (!user) redirect('/login')
  return user
}
