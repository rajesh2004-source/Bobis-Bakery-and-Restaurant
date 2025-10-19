import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { useCart } from '../context/cart';
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FaHeart, FaShoppingCart, FaTrash, FaArrowRight } from 'react-icons/fa';

const LikedPage = () => {
    const [likedProducts, setLikedProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useCart();
    const { auth } = useAuth();
    const navigate = useNavigate();

    // Fetch liked products from localStorage
    useEffect(() => {
        const fetchLikedProducts = () => {
            try {
                setLoading(true);
                const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
                setLikedProducts(likedItems);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        fetchLikedProducts();
    }, []);

    // Remove from liked list
    const removeFromLiked = (productId) => {
        try {
            const updatedLiked = likedProducts.filter(item => item._id !== productId);
            setLikedProducts(updatedLiked);
            localStorage.setItem('likedItems', JSON.stringify(updatedLiked));
            toast.success("Removed from favorites");
        } catch (error) {
            console.log(error);
            toast.error("Failed to remove from favorites");
        }
    };

    // Add to cart from liked list
    const addToCart = (product) => {
        try {
            setCart([...cart, product]);
            localStorage.setItem('cart', JSON.stringify([...cart, product]));
            toast.success("Item added to cart");
        } catch (error) {
            console.log(error);
            toast.error("Failed to add to cart");
        }
    };

    // Empty wishlist SVG (no image file needed)
    const EmptyWishlistSVG = () => (
        <svg width="200" height="200" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.28 2 8.5C2 5.42 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.09C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.42 22 8.5C22 12.28 18.6 15.36 13.45 20.03L12 21.35Z" fill="#F8D7DA"/>
            <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3Z" stroke="#DC3545" strokeWidth="1.5"/>
            <path d="M12 8V12M12 16H12.01" stroke="#DC3545" strokeWidth="2" strokeLinecap="round"/>
        </svg>
    );

    return (
        <Layout title="Your Favorites - Makhin Bakery" >
            <div className="liked-page-container" 
              >
                <div className="liked-header">
                    <h1>Your Favorite Items</h1>
                    <p>{likedProducts.length} {likedProducts.length === 1 ? 'item' : 'items'} in your wishlist</p>
                </div>

                {loading ? (
                    <div className="loading-spinner">
                        <div className="spinner"></div>
                    </div>
                ) : likedProducts.length > 0 ? (
                    <div className="liked-products-grid">
                        {likedProducts.map((product) => (
                            <div className="liked-product-card" key={product._id}>
                                <div className="product-image-container" onClick={() => navigate(`/product/${product.slug}`)}>
                                    <img
                                        src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${product._id}`}
                                        alt={product.name}
                                        className="product-image"
                                    />
                                    <div className="image-overlay">
                                        <span>View Details</span>
                                    </div>
                                </div>
                                <div className="product-details">
                                    <h3 onClick={() => navigate(`/product/${product.slug}`)}>{product.name}</h3>
                                    <p className="product-description">{product.description.substring(0, 60)}...</p>
                                    <div className="price-action-container">
                                        <span className="price">RS.{product.price}</span>
                                        <div className="action-buttons">
                                            <button 
                                                className="add-to-cart-btn"
                                                onClick={() => addToCart(product)}
                                            >
                                                <FaShoppingCart /> Add to Cart
                                            </button>
                                            <button 
                                                className="remove-btn"
                                                onClick={() => removeFromLiked(product._id)}
                                            >
                                                <FaTrash /> Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="empty-wishlist">
                        <EmptyWishlistSVG />
                        <h2>Your wishlist is empty</h2>
                        <p>You haven't added any items to your wishlist yet.</p>
                        <button 
                            className="shop-now-btn"
                            onClick={() => navigate('/')}
                        >
                            Continue Shopping <FaArrowRight />
                        </button>
                    </div>
                )}
            </div>

            <style jsx>{`
                .liked-page-container {
                    padding: 2rem;
                    min-height: 70vh;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .liked-header {
                    text-align: center;
                    margin-bottom: 2rem;
                }

                .liked-header h1 {
                    font-family: 'Playfair Display', serif;
                    font-size: 2.5rem;
                    color: #333;
                    margin-bottom: 0.5rem;
                }

                .liked-header p {
                    color: #666;
                    font-size: 1rem;
                }

                .liked-products-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                    gap: 2rem;
                    margin-top: 2rem;
                }

                .liked-product-card {
                    background: white;
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    
                }

                .liked-product-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
                }

                .product-image-container {
                    position: relative;
                    height: 200px;
                    overflow: hidden;
                    cursor: pointer; 
                }

                .product-image {
                margin-left:60px;
                    width: 65%;
                    height: 100%;
                    object-fit: cover;
                    margin-lleft:20px;
                    transition: transform 0.5s ease;
                   
                }

                .product-image-container:hover .product-image {
                    transform: scale(1.05);
                }

                .image-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.4);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .image-overlay span {
                    color: white;
                    font-weight: bold;
                    padding: 8px 16px;
                    background: rgba(204, 91, 95, 0.8);
                    border-radius: 20px;
                }

                .product-image-container:hover .image-overlay {
                    opacity: 1;
                }

                .product-details {
                    padding: 1.5rem;
                }

                .product-details h3 {
                    font-size: 1.2rem;
                    margin-bottom: 0.5rem;
                    color: #333;
                    cursor: pointer;
                    transition: color 0.2s ease;
                }

                .product-details h3:hover {
                    color: rgb(204, 91, 95);
                }

                .product-description {
                    color: #666;
                    font-size: 0.9rem;
                    margin-bottom: 1rem;
                    line-height: 1.4;
                }

                .price-action-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 1rem;
                }

                .price {
                    font-weight: bold;
                    font-size: 1.2rem;
                    color: rgb(204, 91, 95);
                }

                .action-buttons {
                    display: flex;
                    gap: 0.5rem;
                }

                .add-to-cart-btn, .remove-btn {
                    display: flex;
                    align-items: center;
                    gap: 5px;
                    padding: 8px 12px;
                    border: none;
                    border-radius: 5px;
                    font-size: 0.8rem;
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .add-to-cart-btn {
                    background-color: rgb(204, 91, 95);
                    color: white;
                }

                .add-to-cart-btn:hover {
                    background-color: #e63946;
                    transform: translateY(-2px);
                }

                .remove-btn {
                    background-color: #f5f5f5;
                    color: #666;
                }

                .remove-btn:hover {
                    background-color: #e0e0e0;
                    transform: translateY(-2px);
                }

                .empty-wishlist {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 3rem 0;
                }

                .empty-wishlist h2 {
                    font-size: 1.8rem;
                    color: #333;
                    margin-bottom: 0.5rem;
                }

                .empty-wishlist p {
                    color: #666;
                    margin-bottom: 1.5rem;
                    max-width: 400px;
                }

                .shop-now-btn {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 12px 24px;
                    background-color: rgb(204, 91, 95);
                    color: white;
                    border: none;
                    border-radius: 5px;
                    font-size: 1rem;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .shop-now-btn:hover {
                    background-color: #e63946;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }

                .loading-spinner {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 200px;
                }

                .spinner {
                    width: 50px;
                    height: 50px;
                    border: 5px solid #f3f3f3;
                    border-top: 5px solid rgb(204, 91, 95);
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                }

                @keyframes spin {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }

                @media (max-width: 768px) {
                    .liked-products-grid {
                        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    }

                    .action-buttons {
                        flex-direction: column;
                        width: 100%;
                    }

                    .price-action-container {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 1rem;
                    }
                }
            `}</style>
        </Layout>
    );
};

export default LikedPage;