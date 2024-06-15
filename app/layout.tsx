import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionProvider from "@/providers/SessionProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next auth starter",
  description: "",
};

export default async function RootLayout(props: any) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="icon.png" type="icon" />
      </head>
      <body className={inter.className}>
        <SessionProvider session={session}>{props.children}</SessionProvider>
      </body>
    </html>
  );
}
