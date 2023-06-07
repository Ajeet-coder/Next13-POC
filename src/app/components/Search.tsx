"use client";

import { useRouter } from "next/navigation";

import React, { FormEvent, useState } from "react";
import searchedImages from "../lib/api/getImages";




export default function Search() {

  console.log("hello client");

  const [search, setSearch] = useState("");

  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log("EEEEEEEEEEEEEEE",e)

    e.preventDefault();
    searchedImages(search)
    setSearch("");

    //router.push(`/${search}/`);

  };

  return (

    <form

      className="w-50 flex justify-center md:justify-between"

      onSubmit={handleSubmit}

    >

      <input

        className="bg-white p-2 w-80 text-xl rounded-xl"

        type="text"

        value={search}

        onChange={(e) => setSearch(e.target.value)}

      />

      <button className="p-2 text-xl rounded-xl bg-slate-200 ml-2 font-bold">

        🔍

      </button>

    </form>

  );

}