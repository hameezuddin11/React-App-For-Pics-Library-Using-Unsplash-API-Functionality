import "./imageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
  const images = props.image.map(imag => {
    return <ImageCard key={imag.id} image={imag} />;
  });

  return <div className="image-size">{images}</div>;
};

export default ImageList;
