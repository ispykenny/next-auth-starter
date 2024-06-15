"use client";
import { signOut } from "next-auth/react";

export const Logout = () => {
  return (
    <button
      onClick={() => {
        signOut({ callbackUrl: process.env.NEXT_PUBLIC_URL });
      }}
    >
      sign out
    </button>
  );
};
