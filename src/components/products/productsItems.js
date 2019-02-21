import React from "react";
import { SERVER_URL } from "../../settings";
export default ({ name, type, description, images }) => {
  const productImages = images.map((item, index) => {
    const altName = `ottawa powder coating custom ${index}`;
    const imageSrc = SERVER_URL + item;
    return (
      <img className="product-image" key={index} src={imageSrc} alt={altName} />
    );
  });
  return (
    <div className="products-item">
      <h4>{name}</h4>
      <p>{type}</p>
      <p>{description}</p>
      <div className="product-images">{productImages}</div>
    </div>
  );
};
