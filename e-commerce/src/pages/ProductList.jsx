import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import ProductCard from "../components/ProductCard";

import "../style/home.scss";

Modal.setAppElement("#root");
const API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

const ProductList = ({ addToCart, increaseQuantity, decreaseQuantity }) => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      const initialQuantity = data.reduce((acc, product) => {
        acc[product.id] = 1;
        return acc;
      }, {});
      setQuantity(initialQuantity);
    };
    loadProducts();
  }, []);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    handleCloseModal();
  };

  const handleIncreaseQuantity = (productId, event) => {
    event.stopPropagation();
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: prevQuantity[productId] + 1,
    }));
  };

  const handleDecreaseQuantity = (productId, event) => {
    event.stopPropagation();
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [productId]: Math.max(1, prevQuantity[productId] - 1),
    }));
  };

  return (
    <div className="main-content">
      <h1 className="slogan">
        "Endless Charm: Where Every Click Unveils a New Delight!"
      </h1>

      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-item"
            onClick={() => handleOpenModal(product)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="product-item-image"
            />
            <h2 className="product-item-title">{product.title}</h2>
            <div className="quantity">
              <button onClick={(e) => handleDecreaseQuantity(product.id, e)}>
                -
              </button>
              <span>{quantity[product.id]}</span>
              <button onClick={(e) => handleIncreaseQuantity(product.id, e)}>
                +
              </button>
            </div>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Product Details"
          className="modal"
          overlayClassName="modal-overlay"
        >
          <ProductCard product={selectedProduct} />
          <div className="cart-buttons">
            <div className="modal-quantity-controls">
              <button
                onClick={(e) => handleDecreaseQuantity(selectedProduct.id, e)}
              >
                -
              </button>
              <span>{quantity[selectedProduct.id]}</span>
              <button
                onClick={(e) => handleIncreaseQuantity(selectedProduct.id, e)}
              >
                +
              </button>
            </div>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(selectedProduct)}
            >
              Add to Cart
            </button>
            <Link to="/cart">Go to Cart</Link>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProductList;
