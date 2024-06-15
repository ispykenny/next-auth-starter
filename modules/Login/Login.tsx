"use client";
import { signIn } from "next-auth/react";
export const Login = () => {
  return (
    <div>
      <button
        onClick={() => {
          signIn("google", { callbackUrl: process.env.NEXT_PUBLIC_URL });
        }}
      >
        Login with google
      </button>
    </div>
  );
};
