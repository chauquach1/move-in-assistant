"use client"

import { useEffect } from 'react'
import { createClient } from '@/utils/supabase/client'

/**
 * Listens for client-side Supabase auth events and forwards them to the
 * server so the server can set/clear HTTP-only session cookies for SSR.
 *
 * This component is intentionally tiny — it doesn't render any UI.
 */
export default function AuthListener() {
  useEffect(() => {
    const supabase = createClient()
    let mounted = true

    // On mount, notify server of the current session (if any).
    ;(async () => {
      try {
        const { data } = await supabase.auth.getSession()
        if (!mounted) return

        await fetch('/api/auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ event: data?.session ? 'SIGNED_IN' : 'INITIAL', session: data?.session ?? null }),
        })
      } catch (err) {
        // non-fatal — we just want server and client to stay in sync
        console.error('AuthListener initial sync failed', err)
      }
    })()

    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      try {
        await fetch('/api/auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ event, session }),
        })
      } catch (err) {
        console.error('AuthListener sync failed', err)
      }
    })

    return () => {
      mounted = false
      try {
        data.subscription.unsubscribe()
      } catch {}
    }
  }, [])

  return null
}
