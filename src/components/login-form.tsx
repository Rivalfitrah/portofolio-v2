'use client'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { auth } from "@/lib/firebase"
import { sign } from "crypto"
import { signInWithEmailAndPassword } from "firebase/auth"
import swal from "sweetalert2"
import { useRouter } from "next/navigation"
import LoginWithGoogle from "./LoginWithGoogle"

export function LoginForm({ className,...props }: React.ComponentProps<"div">) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      const user= userCredential.user

      const token = await user.getIdToken()
      localStorage.setItem("token", token)
      localStorage.setItem("UID", user.uid)
      setEmail("")
      setPassword("")

      swal.fire({
        title: "Login Successful",
        text: "You have successfully logged in.",
        icon: "success",
        confirmButtonText: "OK",
      })
      router.push("/dashboard")
    } catch (error) {
      swal.fire({
        title: "Login Failed",
        text: "Please check your email and password.",
        icon: "error",
        confirmButtonText: "OK",
      })
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  placeholder="m@example.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
          </form>
      <div className="flex justify-center mt-5">
        <LoginWithGoogle />
      </div>
        </CardContent>
      </Card>
    </div>
  )
}
