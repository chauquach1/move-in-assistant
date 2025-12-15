"use client"

import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import { useEffect, useState } from 'react'
import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'

export default function NavigationBar() {
  const [user, setUser] = useState<any | null>(null)
  const router = useRouter()

  useEffect(() => {
    const supabase = createClient()

    let mounted = true

    ;(async () => {
      const { data } = await supabase.auth.getUser()
      if (mounted) setUser(data.user)
    })()

    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
      // keep server cookies in sync
      fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: _event, session }),
      }).catch((e) => console.error('sync auth', e))
    })

    return () => {
      mounted = false
      sub.subscription.unsubscribe()
    }
  }, [])
  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-inherit">CAL-PROP</p>
      </NavbarBrand>

      <NavbarContent justify="end">
        {!user ? (
          <>
            <NavbarItem className="hidden lg:flex">
              <Link href="/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="/signup" variant="flat">
                Sign Up
              </Button>
            </NavbarItem>
          </>
        ) : (
          <NavbarItem>
            <Button
              color="danger"
              variant="flat"
              onPress={async () => {
                const supabase = createClient()
                await supabase.auth.signOut()
                // notify server to clear cookies
                await fetch('/api/auth', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ event: 'SIGNED_OUT', session: null }) })
                router.push('/login')
              }}
            >
              Logout
            </Button>
          </NavbarItem>
        )}
      </NavbarContent>
    </Navbar>
  );
}
