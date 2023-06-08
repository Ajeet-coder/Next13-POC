import React from 'react'
import Image from "next/image";
import _ from "lodash";
import ImageNotFound from './ImageNotFound';

const ImageList = (props:any) => {
    if (null != props.images.results) {
        return (
          <div className="App">
            <div className="mydiv">
              <div className="gallery">
                {_.values(props.images.results).map((item) => {
                  return (
                    <>
                      <Image
                        alt="img"
                        className="image"
                        key={item.id}
                        src={item.urls.regular}
                        width={500}
                        height={500}
                      />
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        );
      } else {
        
        return (
          <ImageNotFound/>
        );
      }
}

export default ImageList
