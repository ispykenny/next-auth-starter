import { Login, Logout } from "@/modules";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const user = await getServerSession(authOptions);
  return <main>{user ? <Logout /> : <Login />}</main>;
}
