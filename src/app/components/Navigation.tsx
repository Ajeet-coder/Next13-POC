import Link from "next/link";
import React from "react";
import Search from "./Search";

const Navigation = () => {
  return (
    
    <nav className="bg-gray-400 p-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl">

      <h1 className="text-2xl text-black grid place-content-center mb-2 md:mb-0">

        <Link href="/">Ny Stories</Link>

      </h1>

      <Search />

    </nav>
    

  );
};

export default Navigation;
