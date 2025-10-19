import React from "react";
import { Link } from "react-router-dom";
import "./HeroBanner.css"; // Import the CSS file

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="banner-content">
        <h3>
          <span className="discount">70%</span> Sale Off
        </h3>
        <h1>Quality Products <br /> Bakery Items</h1>
        <Link to="/products" className="shop-button">SHOP NOW</Link>
      </div>

      {/* Background and moving products */}
      <div className="banner-images">
        <img src="./hero-banner-shape.webp" alt="Main Banner" className="main-image" />
        <img src="./hero-mini-shape1.webp" alt="Product 1" className="floating product1" />
        <img src="./hero-mini-shape2.webp" alt="Product 2" className="floating product2" />
        <img src="./hero-mini-shape3.webp" alt="Product 3" className="floating product3" />
        <img src="./hero-mini-shape4.webp" alt="Product 4" className="floating product4" />
        <img src="./hero-mini-shape5.webp" alt="Product 5" className="floating product5" />
      </div>
    </section>
  );
};

export default HeroBanner;
