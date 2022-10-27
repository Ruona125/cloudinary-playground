import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "cloudinary-react";

export default function Home() {
  const [imageIds, setImageIds] = useState();
  const loadImages = async () => {
    try {
      let res = await axios.get("/api/images").then((res) => {
        console.log(res.data);
        setImageIds(res.data);
      });
      //   const data = await res.json();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);
  return (
    <div>
      <p>this is the home page</p>
      {imageIds &&
        imageIds.map((imageId, index) => (
          <Image
            key={index}
            cloudName="dz7pivxws"
            publicId={imageId}
            width="300"
            crop="scale"
          />
        ))}
    </div>
  );
}
