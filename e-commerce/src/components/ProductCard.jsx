import React from "react";
import "../style/product-card.scss";

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img
      src={product.image}
      alt={product.title}
      className="product-card-image"
    />
    <h2 className="product-card-title">{product.title}</h2>
    <p className="product-card-price">${product.price}</p>
    <p className="product-card-description">{product.description}</p>
  </div>
);

export default ProductCard;
