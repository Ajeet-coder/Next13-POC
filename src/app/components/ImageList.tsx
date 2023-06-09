import React from 'react'
import Image from "next/image";
import _ from "lodash";
import ImageNotFound from './ImageNotFound';

const ImageList = (props:any) => {
    if (null != props.images.results) {
        return (
          
          <main className="container mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
                {_.values(props.images.results).map((item) => {
                  return (
                    <>
                      <Image
                        alt="img"
                        className="w-full object-cover aspect-square"
                        key={item.id}
                        src={item.urls.regular}
                        width={500}
                        height={500}
                      />
                    </>
                  );
                })}
              </div>
            </main>
          
        );
      } else {
        
        return (
          <ImageNotFound/>
        );
      }
}

export default ImageList
