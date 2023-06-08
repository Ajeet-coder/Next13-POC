import React from "react";
import _ from "lodash";
import "./home.css";
import searchedImages from "../lib/api/getImages";
import ImageList from "../components/ImageList";

const page = async () => {
  const imagesdata: Promise<any> = searchedImages("random");
  const images = await imagesdata;

  return (
    <>
      <ImageList images={images} />
    </>
  );
};

export default page;
