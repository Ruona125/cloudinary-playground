import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image } from "cloudinary-react";

const Home = () => {
  const [imageIds, setImageIds] = useState();
  const [imageDetails, setImageDetails] = useState("");
  // const loadImages = async () => {
  //   try {
  //     let res = await axios.get("/api/images").then((res) => {
  //       console.log(res.data);
  //       setDetails(res.data);
  //     });
  //     //   const data = await res.json();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    // loadImages();
    axios.get("http://localhost:8000/api/images").then((response) => {
      // console.log(response.data);
      setImageDetails(response.data);
    });
  }, []);
  // if (!imageDetails) return null;
  return (
    <div>
      {imageDetails ? (
        <div>
          {imageDetails.map((item) => (
            <div>
              <p key={item.id}>{item.details}</p>
              <img
                style={{ width: "20px" }}
                src={item.email}
                alt="cloudinary"
              />
            </div>
          ))}
        </div>
      ) : (
        <p>load</p>
      )}

      {/* {imageIds &&
        imageIds.map((imageId, index) => (
          <div>
            <Image
              key={index}
              cloudName="dz7pivxws"
              publicId={imageId}
              width="300"
              crop="scale"
            />
            <h1>hello</h1>
          </div>
        ))} */}
    </div>
  );
};

export default Home;
