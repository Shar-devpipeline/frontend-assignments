import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Modal from "react-modal";

import ProductList from "./pages/ProductList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

Modal.setAppElement("#root");
const API_URL = "https://fakestoreapi.com/products";

export const fetchProducts = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const fetchProductById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
};

export const formatPrice = (price) => `$${price.toFixed(2)}`;

const App = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const currentProduct = prevCart.find((item) => item.id === product.id);
      if (currentProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="home-page-container">
      <Router>
        <Header />

        <div className="main-content">
          <Switch>
            <Route exact path="/" render={() => <Home products={products} />} />
            <Route exact path="/" render={() => <Home cart={cart} />} />
            <Route
              path="/cart"
              render={() => (
                <Cart
                  cart={cart}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                  removeFromCart={removeFromCart}
                  clearCart={clearCart}
                />
              )}
            />
            <Route
              path="/product-list"
              render={() => (
                <ProductList
                  products={cart}
                  addToCart={addToCart}
                  increaseQuantity={increaseQuantity}
                  decreaseQuantity={decreaseQuantity}
                />
              )}
            />
            <Route path="/contact" render={() => <Contact />} />
            <Route path="/about" render={() => <About />} />
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
};

export default App;
