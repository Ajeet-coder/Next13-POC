import searchedImages from "@/app/lib/api/getImages";
import "../home.css";
import _ from "lodash";
import ImageList from "@/app/components/ImageList";

type params = {
  params: {
    searchedImage: string;
  };
};

const page = async ({ params: { searchedImage } }: params) => {
  const imagesdata: Promise<any> = searchedImages(searchedImage);
  const images = await imagesdata;

  return (
    <>
      <ImageList images={images} />
    </>
  );
};

export default page;
