import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Search from "./Search";

export async function Navigation() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="bg-gray-400 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
      <span>{session?.user?.email}</span>
      <Link href="/home">Home</Link>
      <Link href="/users">users</Link>
      <Link href="/feedback">feedback</Link>
      <Search />
    </nav>
  );
}

export default Navigation;
