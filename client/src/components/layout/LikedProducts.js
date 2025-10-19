import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './LikedProducts.css';

const LikedProducts = () => {
    const [likedProducts, setLikedProducts] = useState([]);

    useEffect(() => {
        const storedLikes = JSON.parse(localStorage.getItem('likedProducts')) || [];
        setLikedProducts(storedLikes);
    }, []);

    return (
        <div className="liked-products-container">
            <h2>Liked Products</h2>
            {likedProducts.length === 0 ? (
                <p>No liked products yet.</p>
            ) : (
                <div className="products-grid">
                    {likedProducts.map((product, index) => (
                        <div key={index} className="product-card">
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.price}</p>
                            <Link to={`/product/${product.id}`} className="view-btn">View</Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LikedProducts;
