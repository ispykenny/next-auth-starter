"use client";

import { signOut } from "next-auth/react";

export const Logout = () => {
  return (
    <button
      onClick={() => {
        console.log("hi");
        signOut({ callbackUrl: process.env.NEXT_PUBLIC_URL });
      }}
    >
      sign out
    </button>
  );
};
