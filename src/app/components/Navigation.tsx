import Link from "next/link";
import React from "react";
import Search from "./Search";

const Navigation = () => {
  return (
    <nav className="bg-gray-400 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">
      <Link href="/home">Home</Link>
      <Link href="/users">users</Link>
      <Link href="/feedback">feedback</Link>

      <Search />
    </nav>
  );
};

export default Navigation;
