"use client"

import {HeroUIProvider} from '@heroui/react'
import AuthListener from '@/components/AuthListener'

export function Providers({children}: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <AuthListener />
      {children}
    </HeroUIProvider>
  )
}