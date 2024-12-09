import React, { useState } from "react";
import Modal from "react-modal";
import { formatPrice } from "../App";

Modal.setAppElement("#root");

const Cart = ({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAction, setModalAction] = useState("");

  const calculateTotal = () => {
    const subtotal = cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    const shipping = 10;
    const total = subtotal + shipping;
    return { subtotal, shipping, total };
  };

  const { subtotal, shipping, total } = calculateTotal();

  const openModal = (action) => {
    setModalAction(action);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalAction("");
  };

  const handleCheckout = () => {
    cart.forEach((product) => removeFromCart(product.id));
    closeModal();
  };

  const handleRemoveProduct = (productId) => {
    removeFromCart(productId);
    closeModal();
  };

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
            <div className="cart-item" key={product.id}>
              <img src={product.image} alt={product.title} />
              <div className="cart-item-details">
                <h3>{product.title}</h3>
                <p>{formatPrice(product.price)}</p>
                <div className="quantity-controls">
                  <button onClick={() => decreaseQuantity(product.id)}>
                    -
                  </button>
                  <span>{product.quantity}</span>
                  <button onClick={() => increaseQuantity(product.id)}>
                    +
                  </button>
                </div>
                <button
                  className="remove-button"
                  onClick={() => openModal("remove")}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="cart-summary">
        <p>Subtotal: {formatPrice(subtotal)}</p>
        <p>Shipping: {formatPrice(shipping)}</p>
        <p>Total: {formatPrice(total)}</p>
        <button className="clear-button" onClick={handleClearCart}>
          Clear Cart
        </button>
        <button
          className="checkout-button"
          onClick={() => openModal("checkout")}
        >
          Checkout
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <h2>{modalAction === "remove" ? "Remove Product" : "Checkout"}</h2>
          <p>
            {modalAction === "remove"
              ? "Are you sure you want to remove this product from the cart?"
              : "Are you sure you want to proceed with the checkout?"}
          </p>
          <div className="modal-buttons">
            {modalAction === "remove" && (
              <button onClick={() => handleRemoveProduct(cart[0]?.id)}>
                Confirm Remove
              </button>
            )}
            {modalAction === "checkout" && (
              <button onClick={handleCheckout}>Confirm Checkout</button>
            )}
            <button onClick={closeModal}>Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Cart;
