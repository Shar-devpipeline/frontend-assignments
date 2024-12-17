import { Link } from "react-router-dom";
import React from "react";

const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    text: "This is the best store ever! Highly recommend.",
  },
  {
    id: 2,
    name: "Jane Smith",
    rating: 4,
    text: "Great products and fast shipping. Will buy again!",
  },
  {
    id: 3,
    name: "Emily Johnson",
    rating: 5,
    text: "Amazing selection of items. Very happy with my purchase!",
  },
  {
    id: 4,
    name: "Jill Hansen",
    rating: 5,
    text: "What a fun website!",
  },
];

const Home = ({ products }) => {
  const getRandomProducts = (products, count) => {
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomProducts = getRandomProducts(products, 3);

  return (
    <>
      <div className="hero-container"></div>
      <div className="hero-image">
        <img src="src/assets/Endless_charm.png" alt="" />
        <h1 className="hero-image-text"> Welcome to Endless Charm</h1>
      </div>

      <div className="product-list-page">
        <Link to="/product-list">
          "Endless Charm: Where Every Click Unveils a New Delight!"
        </Link>
      </div>

      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="products-grid">
          {randomProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <Link to={`/product-list`}>View Details</Link>
            </div>
          ))}
        </div>
      </div>

      <div className="reviews-section">
        <h2>Check out our Reviews</h2>
        <div className="reviews-list">
          {reviewsData.map((review) => (
            <div className="review-card" key={review.id}>
              <h3>{review.name}</h3>
              <div className="review-rating">
                {Array(review.rating)
                  .fill()
                  .map((_, index) => (
                    <span key={index} className="star">
                      ★
                    </span>
                  ))}
              </div>
              <p>{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
