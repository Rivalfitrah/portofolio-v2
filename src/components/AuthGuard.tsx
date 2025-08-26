'use client'
import { notFound } from 'next/navigation'
import React, { Children, useEffect } from 'react'
import { useState } from 'react'

// auth guard
function AuthGuard({ children } : { children: React.ReactNode }) {
    const [cektoken, setCekToken] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token")

        if (!token) {
            notFound()
        } else {
            setCekToken(true)
        }
    }, [])

    if (!cektoken) {
        return null
    }
  return (
    <>{children}</>
  )
}

export default AuthGuard