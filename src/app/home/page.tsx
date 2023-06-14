import React from "react";
import _ from "lodash";
import "./home.css";
import searchedImages from "../lib/api/getImages";
import ImageList from "../components/ImageList";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

const page = async () => {
  const session = await getServerSession(authOptions);
  const imagesdata: Promise<any> = searchedImages("random");
  const images = await imagesdata;

  return (
    <>
      <span>{session?.user?.email}</span>
      <ImageList images={images} />
    </>
  );
};

export default page;
