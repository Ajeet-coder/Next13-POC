import React from "react";
import _ from "lodash";
import "./images.css";
import searchedImages from "../lib/api/getImages";
import Image from "next/image";

const page = async () => {
  const imagesdata: Promise<any> = searchedImages("flower");
  const images = await imagesdata;
  //console.log(images.results)

  if (null != images.results) {
    return (
      <div className="App">
        <div className="mydiv">
          <div className="gallery">
            {_.values(images.results).map((item) => {
              return (
                <>
                  {/* <button type='button' className='favourite-btn btn btn-outline-info' onClick={() => addfevList(item.id, item.urls.regular)}>fev</button> */}

                  <img
                    alt="img"
                    className="image"
                    key={item.id}
                    src={item.urls.regular}
                  />
                </>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    //dispatch(fetchImages("flower"))
    return <h1>No data found</h1>;
  }
};

export default page;
