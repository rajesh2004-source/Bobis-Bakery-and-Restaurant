// import React, { useEffect, useState } from 'react'
// import Layout from '../components/layout/Layout'
// import axios from 'axios'
// import { useParams, useNavigate } from 'react-router-dom'
// import { } from '../styles/ProductDetailsSty.css'
// import toast from 'react-hot-toast';
// import { useCart } from '../context/cart'

// const ProductDetails = () => {

//     const params = useParams();
//     const [product, setProduct] = useState([]);
//     const navigate = useNavigate();
//     const [cart, setCart] = useCart();

//     // const [relatedProduct, setRelatedProduct] = useState([]);


//     useEffect(() => {
//         if (params?.slug) getproduct()
//     }, [params?.slug])

//     //get product
//     const getproduct = async () => {
//         try {
//             const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/product/getsingle-product/${params.slug}`);
//             setProduct(data?.product);
//             // getsimilarpro(data?.product._id, data?.product.category._id);

//         } catch (error) {
//             console.log(error);
//         }
//     }

//     //get similar pro
//     // const getsimilarpro = async (pid, cid) => {
//     //     try {
//     //         const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/product/related-product/${pid}/${cid}`);
//     //         setRelatedProduct(data?.product);

//     //     } catch (error) {
//     //         console.log(error);

//     //     }
//     // }

//     return (
//         <Layout title={'product details'}>
//             <div className='row container product-details' >


//                 <div className='col-md-5 '>
//                     <img src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${product._id}`}
//                         style={{ width: '400px', height: '400px' }}
//                         className="card-img-top" alt={product.name} />

//                 </div>

//                 <div className='col-md-6 product-details-info'>
//                     <h1 className='text-center'>Product Details</h1>
//                     <hr />
//                     <>
//                         <h5>Name : {product.name}</h5>
//                         <h5>Description : {product.description}</h5>
//                         <h5>Price : {product.price}</h5>
//                         {/* <h5>Category : {product.category.name}</h5> */}
//                         <h5>Quantity : {product.quantity}</h5> <br />
//                         <button className="btn btn-secondary ms-1" onClick={() => {
//                             setCart([...cart, product])
//                             localStorage.setItem('cart', JSON.stringify([...cart, product]))
//                             toast.success("Item Added to cart");
//                         }}
//                         >ADD TO CART</button>


//                     </>
//                 </div>

//             </div>
//             <hr />

//             <div className='col-md-3 container similar-products'>
//                 <button className="btn btn-secondary ms-1" onClick={() => navigate(`/`)}
//                 >BACK</button>

//                 {/* <h1> Similar products</h1>
//                 {JSON.stringify(relatedProduct, null, 4)} */}
//             </div>
//         </Layout>
//     )
// }

// export default ProductDetails

import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/Layout';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/cart';
import toast from 'react-hot-toast';
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";

const ProductDetails = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState({});
  const [activeImage, setActiveImage] = useState('');
  const [cart, setCart] = useCart();
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (slug) fetchProduct();
    getAllProducts();
  }, [slug]);

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/product/getsingle-product/${slug}`);
      if (data?.product) {
        const prod = data.product;
        prod.images = [
          `${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${prod._id}`
        ];
        setProduct(prod);
        setActiveImage(prod.images[0]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/product/get-product`);
      setLoading(false);
      setAllProducts(data.product);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const addToCart = () => {
    const exists = cart.find((item) => item._id === product._id);
    const updatedCart = exists
      ? cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      : [...cart, { ...product, quantity: 1 }];

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.success("Item Added to Cart");
  };

  const handleLike = () => {
    const likedItems = JSON.parse(localStorage.getItem("likedItems")) || [];
    const alreadyLiked = likedItems.some((item) => item._id === product._id);
    if (alreadyLiked) {
      toast("Already in your favorites");
    } else {
      const updatedLiked = [...likedItems, product];
      localStorage.setItem("likedItems", JSON.stringify(updatedLiked));
      toast.success("Added to Favorites");
    }
  };

  return (
    <Layout title={product.name}>
      <div style={{backgroundColor:"#fff9f2"}} className="product-details-container">
        {/* Product Main Section */}
        <div className="product-wrapper">
          <div className="product-left">
            <div className="main-image">
              <img src={activeImage} className='abc' alt={product.name} />
            </div>
            <div className="thumbnail-list">
              {product.images?.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`thumb-${idx}`}
                  className={`thumbnail ${activeImage === img ? "active-thumb" : ""}`}
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
          </div>

          <div className="product-right">
            <h2>{product.name}</h2>
            <h4 className="price">RS.{product.price}</h4>
            <p className="desc">{product.description}</p>
            <div className="icon-row">
              <FaHeart onClick={handleLike} title="Add to Favorites" />
              <FaShoppingCart onClick={addToCart} title="Add to Cart" />
            </div>
            <button className="buy-btn" onClick={addToCart}>Buy Now</button>
          </div>
        </div>

        {/* All Products Slider */}
        <div className="slider-section">
          <h3>All Products</h3>
          <div className="slider-container">
            {allProducts?.map((p) => (
              <div className="slider-card" key={p._id}>
                <img
                  src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${p._id}`}
                  alt={p.name}
                />
                <h5>{p.name}</h5>
                <p>RS.{p.price}</p>
                <div className="pd-product-icons">
                  <FaHeart
                    className="pd-icon"
                    onClick={() => {
                      const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
                      if (!likedItems.some(item => item._id === p._id)) {
                        const updatedLiked = [...likedItems, p];
                        localStorage.setItem('likedItems', JSON.stringify(updatedLiked));
                        toast.success("Added to Favorites");
                      } else {
                        toast("Already in your favorites");
                      }
                    }}
                  />
                  <FaShoppingCart
                    className="pd-icon"
                    onClick={() => {
                      const exists = cart.find((item) => item._id === p._id);
                      const updatedCart = exists
                        ? cart.map((item) =>
                            item._id === p._id
                              ? { ...item, quantity: (item.quantity || 1) + 1 }
                              : item
                          )
                        : [...cart, { ...p, quantity: 1 }];
                      setCart(updatedCart);
                      localStorage.setItem("cart", JSON.stringify(updatedCart));
                      toast.success("Item Added to Cart");
                    }}
                  />
                  <FaEye
                    className="pd-icon"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <br/>
        <br/>
      </div>

      {/* Styles */}
      <style jsx>{`
        .product-details-container {
          padding: 40px;font-family: "Playfair Display", serif; 
        }

        .product-wrapper {
          
          display: flex;
          gap: 40px;font-family: "Playfair Display", serif; 
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
          max-width: 1000px;
          margin: 0 auto 60px;
           border-radius: 100px;
          box-shadow: 0 0 500px rgba(0,0,0,0.1);
        }

       
        .product-left {
          flex: 1;font-family: "Playfair Display", serif; 
          min-width: 300px;margin-top: 26px;
    margin-left: 27px;
        }

        .product-right {
          flex: 1;font-family: "Playfair Display", serif; 
          min-width: 300px;
          margin-top:50px;
margin-right:60px;
       
        }

        .main-image img {
          width: 100%;
          height: 330px;font-family: "Playfair Display", serif; 
          object-fit: contain;
          border-radius: 100px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          
        }

        .thumbnail-list {
          margin-top: 15px;
          display: flex;
          flex-direction: column;
          gap: 10px;font-family: "Playfair Display", serif; 
        }

        .thumbnail {
          width: 80px;
          height: 80px;
          object-fit: cover;
          border-radius: 8px;
          cursor: pointer;
          border: 2px solid transparent;font-family: "Playfair Display", serif; 
        }

        .active-thumb {
           border-color:rgb(13, 13, 13);
        }

        .product-right h2 {
          font-size: 28px;font-family: "Playfair Display", serif; 
          margin-bottom: 10px;
        }

        .price {
          color: #ff5722;
          font-size: 24px;
          margin-bottom: 15px;
        }

        .desc {
          font-size: 16px;
          color: #555;font-family: "Playfair Display", serif; 
          margin-bottom: 20px;
        }

        .icon-row {
          display: flex;
          gap: 20px;
          font-size: 24px;
          margin-bottom: 20px;
          color: #333;font-family: "Playfair Display", serif; 
          cursor: pointer;
        }

        .buy-btn {
          width: 100%;
          padding: 12px;
          background-color: #007bff;
          color: #fff;font-family: "Playfair Display", serif; 
          font-size: 18px;
          border: none;
          border-radius: 6px;
          transition: 0.3s ease;
        }

        .buy-btn:hover {
          background-color: #0056b3;font-family: "Playfair Display", serif; 
        }

        .slider-section {
          margin-top: 40px;
    font-family: "Playfair Display", serif; 
          
        }

        .slider-section h3 {
          font-size: 24px;
          margin-bottom: 20px;font-family: "Playfair Display", serif; 
        }

        .slider-container {
          display: flex;
          gap: 20px;
          overflow-x: auto;font-family: "Playfair Display", serif; 
          padding-bottom: 10px;
        }

        .slider-container::-webkit-scrollbar {
          height: 8px;font-family: "Playfair Display", serif; 
          width: 6px;
        }

        .slider-container::-webkit-scrollbar-thumb {
          background: #ccc;
          border-radius: 4px;font-family: "Playfair Display", serif; 
        }

        .slider-card {
          min-width: 200px;
          max-width: 200px;
          flex-shrink: 0;
          background: #fff;font-family: "Playfair Display", serif; 
          border-radius: 12px;
          padding: 12px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
          text-align: center;
        }

        .slider-card img {
          width: 100%;
          height: 150px;font-family: "Playfair Display", serif; 
          object-fit: contain;
          border-radius: 8px;
        }

        .slider-card h5 {
          margin-top: 10px;
          font-size: 16px;font-family: "Playfair Display", serif; 
        }

        .slider-card p {
          font-size: 14px;
          ;font-family: "Playfair Display", serif; 
          color: #ff5722;

        }

        .pd-product-icons {
          display: flex;
          // justify-content: space-around;
          margin-top: 10px;
          font-size: 18px;
          color: #333;font-family: "Playfair Display", serif; 
          cursor: pointer;
        }

        .pd-icon:hover {
          color:rgb(12, 13, 13);
        }

        @media (max-width: 768px) {
          .product-wrapper {
            flex-direction: column;
          }

          .thumbnail-list {
            flex-direction: row;
            overflow-x: auto;font-family: "Playfair Display", serif; 
          }

          .thumbnail {
            width: 70px;
            height: 70px;font-family: "Playfair Display", serif; 
          }

          .main-image img {
            height: 300px;font-family: "Playfair Display", serif; 
          }
        }
      `}</style>
     
    </Layout>
  );
};

export default ProductDetails;
