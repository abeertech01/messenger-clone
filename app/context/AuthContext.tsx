"use client"

import { SessionProvider } from "next-auth/react"

interface AuthContextProps {
  children: React.ReactNode
}

export default function AuthContext({ children }: AuthContextProps) {
  return <SessionProvider>{children}</SessionProvider>
}

/**
 * AuthContext gets session from sessionProvider and provides on all over the project.
 */
