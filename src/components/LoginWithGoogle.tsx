"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db, googleProvider } from "@/lib/firebase";
import { useRouter } from "next/navigation";
import { setDoc } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import Swal from "sweetalert2";

function LoginWithGoogle() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      // Ambil token Firebase
      const token = await user.getIdToken();

      // Simpan token ke localStorage
      localStorage.setItem("token", token);

      // Logika cek Firestore user
      const userRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(userRef);

      if (!docSnap.exists()) {
        // Kalau user tidak ditemukan, jangan buat akun baru
       Swal.fire({
          title: "Login Failed",
          text: "akun tidak ditemukan, silakan hubungi atmin.",
        });
        return;
      }

      router.push("/dashboard");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Terjadi kesalahan saat login.");
      }
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div>
      <Button
        className="w-full flex items-center justify-center gap-2"
        variant="outline"
        onClick={handleGoogleLogin}
      >
        Login with Google
      </Button>
    </div>
  );
}

export default LoginWithGoogle;
