// IMPORT useState
import React from "react";

import { useState } from "react";
import "./styles.css";
import imagesArr from "./imageData";
// import Images from "./Image";
// IMPORT imageData.js AND STORE IT IN A VARIABLE CALLED imagesArr

export default function App() {
  // USE use State TO CREATE  [bigImage, setBigImage]
  // AND SET IT TO THE IMAGE URL OF THE FIRST ELEMENT IN THE ARRAY
  const [bigImage, setBigImage] = useState(imagesArr[0].img);
  console.log(bigImage);

  // CREATE A HANDLE CLICK FUNCTION THAT ACCEPTS AN IMAGE URL
  const handleClick = (image) => {
    setBigImage(image);
  };
  // THE FUNCTION SHOULD CALL setBigImage AND PASS IT THE URL

  // CREATE A VARIABLE CALLED images THAT LOOPs OVER THE imagesArr AND RETURNS AN <IMG> ELEMENT
  // ASSIGN ALL OF THE PROPERTIES THAT IT NEEDS: src, alt, className, key INCLUDING AN onClick EVENT THAT CALLS THE HANDLE EVENT FUNCTION AND PASSES IT THE IMG URL
  const images = imagesArr.map((image, index) => {
    return (
      <img
        src={image.img}
        alt="house"
        className="thumb"
        onClick={() => handleClick(image.img)}
        key={index}
      />
    );
  });

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div className="wrapper">
        <div className="thumbnails">{images}</div>
        <img src={bigImage} id="bigimage" alt="bigImage" />
      </div>
    </div>
  );
}
