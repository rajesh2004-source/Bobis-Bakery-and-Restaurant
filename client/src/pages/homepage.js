// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import Layout from '../components/layout/Layout';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import { Link } from 'react-router-dom';
// import { AiOutlineReload } from "react-icons/ai";
// import { Checkbox, Radio } from 'antd';
// import { prices } from '../components/price';
// import { useNavigate } from 'react-router-dom';
// import { useCart } from '../context/cart';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import "../styles/Homepage.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
// import "./HeroBanner.css"; 
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Homepage = () => {
//     const [products, setProduct] = useState([]);
//     const [categories, setCategories] = useState([]);
//     const [checked, setChecked] = useState([]);
//     const [radio, setRadio] = useState([]);
//     const [total, setTotal] = useState(0);
//     const [page, setPage] = useState(1);
//     const [loading, setLoading] = useState(false);
//     const [cart, setCart] = useCart();
    
//     const navigate = useNavigate();

//     const getAllCategory = async () => {
//         try {
//             const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/category/get-category`);
//             if (data?.success) {
//                 setCategories(data?.getcat);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         getAllCategory();
//         getTotal();
//     }, []);

//     const getAllProducts = async () => {
//         try {
//             setLoading(true);
//             const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/product/get-product`);
//             setLoading(false);
//             setProduct(data.product);
//         } catch (error) {
//             setLoading(false);
//             console.log(error);
//         }
//     };

//     const getTotal = async () => {
//         try {
//             const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/product/product-count`);
//             setTotal(data?.total);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         if (page === 1) return;
//         LoadMore();
//     }, [page]);

//     const LoadMore = async () => {
//         try {
//             setLoading(true);
//             const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/product/product-list/${page}`);
//             setLoading(false);
//             setProduct([...products, ...data.products]);
//         } catch (error) {
//             console.log(error);
//             setLoading(false);
//         }
//     };

//     const handleFilter = (value, id) => {
//         let all = [...checked];
//         if (value) {
//             all.push(id);
//         } else {
//             all = all.filter(c => c !== id);
//         }
//         setChecked(all);
//     };

//     useEffect(() => {
//         if (!checked.length && !radio.length) getAllProducts();
//     }, [checked.length, radio.length]);

//     useEffect(() => {
//         if (checked.length || radio.length) filterProduct();
//     }, [checked, radio]);

//     const filterProduct = async () => {
//         try {
//             const { data } = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/product/product-filters`, { checked, radio });
//             setProduct(data?.products);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     // Slider settings
//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//     };

//       const catt = [
//         {
//           image: "/images/services1.webp", 
//           title: "PASTRY",
//           description: "Lorem ipsum dolor sit ametgol consectetur adipiscing elit.",
//           link: "/pastry"
//         },
//         {
//           image: "/images/services2.webp",
//           title: "BREAKFAST",
//           description: "Lorem ipsum dolor sit ametgol consectetur adipiscing elit.",
//           link: "/breakfast"
//         },
//         {
//           image: "/images/services3.webp",
//           title: "COFFEE CAKE",
//           description: "Lorem ipsum dolor sit ametgol consectetur adipiscing elit.",
//           link: "/coffee-cake"
//         },
//         {
//           image: "/images/services4.webp",
//           title: "BAKE TOAST",
//           description: "Lorem ipsum dolor sit ametgol consectetur adipiscing elit.",
//           link: "/bake-toast"
//         }
//       ];


//       const promotions = [
//         {
//           discount: "70%",
//           title: "Best Quality Products",
//           image: "/images/banner1.webp", // Replace with actual image path
//           buttonText: "SHOP NOW",
//           link: "/best-quality-products",
//         },
//         {
//           discount: "25%",
//           title: "Hot & Spicy Pastry",
//           image: "/images/banner2.webp", // Replace with actual image path
//           buttonText: "SHOP NOW",
//           link: "/hot-spicy-pastry",
//         }
//       ];


//       const bestSellerSettings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 3000,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//             },
//           },
//           {
//             breakpoint: 768,
//             settings: {
//               slidesToShow: 2,
//             },
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//             },
//           },
//         ],
//       };

//     return (
//         <Layout title="All Products - Best Offers">
//             {/* Image Slider */}

//             <section className="hero-banner">
//       <div className="banner-content">
//         <h3  style={{marginLeft:"100px"}}>
//           <span className="discount">70%</span> Sale Off
//         </h3>
//         <h1>Quality Products <br /> Bakery Items</h1>
//         <Link to="/products" className="shop-button">SHOP NOW</Link>
//       </div>

//       {/* Banner Images */}
//       <div className="banner-images">
//         <img src="/images/hero-banner-shape.webp" alt="Main Product" className="main-image" />
//         <img src="/images/hero-mini-shape1.webp" alt="Donut" className="floating product1" />
//         <img src="/images/hero-mini-shape2.webp" alt="Pretzel" className="floating product2" />
//         <img src="/images/hero-mini-shape3.webp" alt="Croissant" className="floating product3" />
//         <img src="/images/hero-mini-shape4.webp" alt="Macaron" className="floating product4" />
//         <img src="/images/hero-mini-shape5.webp" alt="Macaron" className="floating product5" />
//       </div>
//     </section>

// <br/>
// <br/>
// <br/>
// <br/>
// <div className="catt-grid">
//       {catt.map((item, index) => (
//         <Link to={item.link} key={index} className="catt-item">
//           <img src={item.image} alt={item.title} className="catt-image" />
//           <h3 className="catt-title">{item.title}</h3>
//           <p className="catt-description">{item.description}</p>
//         </Link>
//       ))}
//     </div>
//     <br/>
//     <br/>
//     <br/>


//     <div className="promotion-container">
//       {promotions.map((promo, index) => (
//         <div key={index} className="promotion-card">
//           <div className="promotion-content">
//             <h3 className="discount">
//               <span className="discount-text">{promo.discount} </span>
//               <span className="sale-text">Sale Off</span>
//             </h3>
//             <h2 className="promo-title">{promo.title}</h2>
//             {/* <button className="shop-button "  onClick={() => navigate(promo.link)}>
//               {promo.buttonText}
//             </button> */}
//           </div>
//           <div className="image-container">
//             <img src={promo.image} alt={promo.title} className="promo-image" />
//           </div>
//         </div>
//       ))}
//     </div>

// <br/>
// <br/>
// <br/>
// <center>
//       <div className="col-md-10">
//         <h1 className="text-center mb-4 pd-section-title" id="abc">New Products</h1>

//         {/* Product Grid */}
//         <div className="row pd-product-grid">
//           {products?.map((p) => (
//             <div className="col-md-2.5 pd-product-card-wrapper" key={p._id}>
//               <div className="card pd-product-card">
//                 {/* Product Image */}
//                 <div className="pd-product-img-wrapper">
//                   <img
//                     src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${p._id}`}
//                     className="card-img-top pd-product-image"
//                     alt={p.name}
//                   />
//                 </div>

//                 {/* Product Details */}
//                 <div className="card-body pd-card-body">
//                   <h5 className="card-title pd-product-title">{p.name}</h5>
//                   <p className="card-text pd-product-price">RS. {p.price}</p>

//                   {/* Icons (Like, Add to Cart, More Details) */}
//                   <div className="pd-product-icons">
//                   <FaHeart
//     className="pd-icon"
//     onClick={() => {
//         const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
//         if (!likedItems.some(item => item._id === p._id)) {
//             const updatedLiked = [...likedItems, p];
//             localStorage.setItem('likedItems', JSON.stringify(updatedLiked));
//             toast.success("Added to Favorites");
//         } else {
//             toast("Already in your favorites");
//         }
//     }}
// />
//                     <FaShoppingCart
//                       className="pd-icon"
//                       onClick={() => {
//                         setCart([...cart, p]); // Add to cart
//                         localStorage.setItem("cart", JSON.stringify([...cart, p])); // Save to localStorage
//                         toast.success("Item Added to Cart"); // Show toast on add to cart
//                       }}
//                     />
//                     <FaEye
//                       className="pd-icon"
//                       onClick={() => navigate(`/product/${p.slug}`)} // Navigate to product details
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </center>
// <br/>
//     <div className="special-offer-banner">
//       <div className="special-offer-content">
//         <h3 className="special-offer-discount">
//           <span className="discount-text">45% </span>
//           <span className="sale-text">Sale Off</span>
//         </h3>
//         <h1 className="special-offer-title">Best Quality Bakery Products</h1>
//         <p className="special-offer-description">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
//           tempor incididunt ut labore et dolore magna.
//         </p>
       
//         <Link to="/categories"> <button className="special-offer-button" >
//           SHOP NOW
//         </button></Link>
        
//       </div>
//     </div>
            
//     <div className="best-seller-slider">
//         <h1 className="best-seller-title">Best Seller</h1>
//         <p className="best-seller-description">
//           Here we have Best Selling Products in My Bakery...
//         </p>
//         {loading ? (
//           <p>Loading...</p>
//         ) : (
//           <Slider {...bestSellerSettings}>
//             {products.map((product) => (
//               <div className="best-seller-card" key={product._id}>
//                 <div className="best-seller-img-wrapper">
//                   <img
//                     src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${product._id}`}
//                     className="card-img-top pd-product-image" style={{width:"150px"}}
//                     alt={product.name}
//                   />  
//                 </div>
//                 <div className="best-seller-details">
//                   <h3 className="best-seller-product-title">{product.name}</h3>
//                   <p className="best-seller-product-price">RS. {product.price}</p>
//                   <div className="best-seller-icons">
//                       <FaHeart
//                           className="pd-icon"
//                           onClick={() => {
//                               const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
//                               if (!likedItems.some(item => item._id === product._id)) {
//                                   const updatedLiked = [...likedItems, product];
//                                   localStorage.setItem('likedItems', JSON.stringify(updatedLiked));
//                                   toast.success("Added to Favorites");
//                               } else {
//                                   toast("Already in your favorites");
//                               }
//                           }}
//                       />
//                     <FaShoppingCart
//                       className="pd-icon"
//                       onClick={() => {
//                         setCart([...cart, product]); // Add to cart
//                         localStorage.setItem("cart", JSON.stringify([...cart,product])); // Save to localStorage
//                         toast.success("Item Added to Cart"); // Show toast on add to cart
//                       }}
//                     />
//                     <FaEye
//                       className="pd-icon"
//                       onClick={() => navigate(`/product/${product.slug}`)} // Navigate to product details
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         )}
//       </div>

//             <div className="container-fluid py-5 homepage-container">
//                 <div className="row">
//                     {/* <div className="col-md-3 filter-section">
//                         <h4 className='text-center mb-3'>Filter By Category</h4>
//                         <div className='d-flex flex-column'>
//                             {categories?.map((c) => (
//                                 <Checkbox key={c._id} onChange={(e) => handleFilter(e.target.checked, c._id)} style={{color:"black" }}>
//                                     {c.name}
//                                 </Checkbox>
//                             ))}
//                         </div>
//                         <h4 className='text-center mt-4 mb-3'>Filter By Price</h4>
//                         <div className='d-flex flex-column'>
//                             <Radio.Group onChange={e => setRadio(e.target.value)}>
//                                 {prices?.map(p => (
//                                     <div key={p._id}>
//                                         <Radio value={p.array} style={{color:"black"}}>{p.name}</Radio>
//                                     </div>
//                                 ))}
//                             </Radio.Group>
//                         </div>
//                         <button className='btn btn-warning mt-3 w-100' onClick={() => window.location.reload()}>RESET FILTERS</button>
//                     </div> */}

//                     {/* Products Section */}
//                     {/* <div className='col-md-9'>
//                         <h1 className='text-center mb-4' style={{color:"lightgray"}}>All Products</h1>
//                         <div className='row justify-content-center'>
//                             {products?.map((p) => (
//                                 <div className="col-md-4 mb-4 product-card-wrapper" key={p._id}>
//                                     <div className="card product-card">
//                                         <img 
//                                             src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${p._id}`} 
//                                             className="card-img-top product-image" 
//                                             alt={p.name} 
//                                         />
//                                         <div className="card-body text-center">
//                                             <h5 className="card-title">{p.name}</h5>
//                                             <p className="card-text price">RS.{p.price}</p>
//                                             <p className="card-text description">{p.description.substring(0, 50)}...</p>
//                                             <button className="btn btn-outline-dark me-2" onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>
//                                             <button className="btn btn-dark" onClick={() => {
//                                                 setCart([...cart, p]);
//                                                 localStorage.setItem('cart', JSON.stringify([...cart, p]));
//                                                 toast.success("Item Added to Cart");
//                                             }}>Add to Cart</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div> */}



// {/* <div className="col-md-9">
//       <h1 className="text-center mb-4 section-title">New Products</h1>

//       <div className="nav-links">
//         <span className="active">New Items</span>
//         <span>Best Sellers</span>
//         <span>Our Features</span>
//       </div>

//       <div className="row product-grid">
//         {products?.map((p) => (
//           <div className="col-md-4 product-card-wrapper" key={p._id}>
//             <div className="card product-card">
//               <div className="product-img-wrapper">
//                 <img
//                   src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${p._id}`}
//                   className="card-img-top product-image"
//                   alt={p.name}
//                 />
//                 <div className="product-hover-icons">
//                   <FaEye onClick={() => navigate(`/product/${p.slug}`)} />
//                   <FaHeart onClick={() => alert("Added to Favorites")} />
//                   <FaShoppingCart
//                     onClick={() => {
//                       setCart([...cart, p]);
//                       localStorage.setItem("cart", JSON.stringify([...cart, p]));
//                       alert("Item Added to Cart");
//                     }}
//                   />
//                 </div>
//               </div>
//               <div className="card-body text-center">
//                 <h5 className="card-title">{p.name}</h5>
//                 <p className="card-text price">RS. {p.price}</p>
//                 <button
//                   className="btn btn-outline-dark me-2"
//                   onClick={() => navigate(`/product/${p.slug}`)}
//                 >
//                   More Details
//                 </button>
//                 <button
//                   className="btn btn-dark"
//                   onClick={() => {
//                     setCart([...cart, p]);
//                     localStorage.setItem("cart", JSON.stringify([...cart, p]));
//                     alert("Item Added to Cart");
//                   }}
//                 >
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div> */}





//                 </div>
//             </div>

//             <style>{`
//                 .slider-container {
//                     width: 100%;
//                     max-width: 1650px;
//                     margin: auto;
//                     padding-top: 20px;
//                 }
//                 .slider-img {
//                     width: 100%;
//                     height: 400px;
//                     object-fit: cover;
//                 }

//              .catt-grid {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   gap: 2px;
//   text-align: center;
//   padding: 32px;
// }

// .catt-item {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-decoration: none;
//   transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
//   padding: 15px;
//   border-radius: 10px;
// }

// .catt-item:hover {
//   transform: translateY(-5px);
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
// }

// .catt-image {
//   width: 128px;
//   height: 128px;
//   object-fit: contain;
//   border-radius: 50%;
// }

// .catt-title {
//   font-family: "Playfair Display", serif; /* Elegant serif font */
//   font-size: 22px; /* Adjusted font size */
//   font-weight: 700; /* Bold text */
//   color: #2c2c2c; /* Dark gray color */
//   text-transform: uppercase; /* Uppercase text */
//   letter-spacing: 1px; /* Slight spacing */
// }

// .catt-description {
//   font-family: "Playfair Display", serif; /* Matching font */
//   font-size: 14px;
//   color: #666;
//   text-align: center;
//   max-width: 200px;
//   margin-top: 5px;
// }
// .promotion-container {
//   display: flex;
//   justify-content: center;
//   gap: 20px;
//   padding: 20px;
// }

// .promotion-card {
//   display: flex;
//   align-items: center;
//   background: #f8f8f8;
//   border-radius: 15px;
//   padding: 25px;
//   width: 500px;
//   height: 250px;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
//   transition: transform 0.3s ease-in-out;
// }

// .promotion-card:hover {
//   transform: translateY(-5px);
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
// }

// /* ✅ Ensures all text and button align to the left */
// .promotion-content {
//   flex: 1;
//   display: flex;
//   flex-direction: column;
//   justify-content: flex-start; /* Aligns content to the top */
//   align-items: flex-start; /* Aligns text and button to the left */
//   text-align: left; /* Ensures text is aligned left */
// }

// .discount {
//   margin: 0;
//   font-size: 32px;
//   font-weight: bold;
// }

// .discount-text {
//   color: #e63946;
//   font-weight: bold;
//   font-size: 28px;
// }

// .sale-text {
//   color: #1d3557;
//   font-size: 28px;
// }

// .promo-title {
//   font-size: 26px;
//   font-weight: bold;
//   color: #333;
//   margin: 10px 0;
//   font-family: "Playfair Display", serif;
// }

// /* ✅ Ensures the button is at the left side */
// .shop-button {
//   background: rgb(204, 91, 95);
//   color: white;
//   border: none;
//   padding: 10px 15px;
//   font-size: 14px;
//   font-weight: bold;
//   cursor: pointer;
//   font-family: "Playfair Display", serif;
//   border-radius: 5px;
//   transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
//   align-self: flex-start; /* ✅ Forces the button to align left */
// }

// .shop-button:hover {
//   background: #e63946;
//   transform: scale(1.05);
// }

// .image-container {
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// .promo-image {
//   width: 285px;
//   height: 200px;
//   border-radius: 10px;
//   object-fit: cover;
// }





// .special-offer-banner {
//   position: relative;
//   width: 100%;
//   height: 400px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   padding: 20px;
// background: linear-gradient(90deg, #D9D6D2 20%, #F8F1E4 100%);

// //  background-color: #F8F1E4;
//   overflow: hidden;
// }

// /* Left abstract shape */
// .special-offer-banner::before {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 800px;
//   height: 100%;
//   background: #ff5f66;
//   clip-path: circle(160px at 10% 20%);
// }

// /* Right abstract shape */
// .special-offer-banner::after {
//   content: "";
//   position: absolute;
//   bottom: 0;
//   right: 0;
//   width: 270px;
//   height: 100%;
//   background: #42d9a1;
//   clip-path: circle(160px at 60% 70%);
// }

// .special-offer-content {
//   max-width: 600px;
//   color: #333;
//   z-index: 2;
// }

// .special-offer-discount {
//   margin: 0;
//   font-size: 20px;
//   font-weight: bold;
// }

// .discount-text {
//   color: #e63946;
//   font-weight: bold;
//   font-size: 28px;
// }

// .sale-text {
//   color: #1d3557;
//   font-size: 28px;
// }

// .special-offer-title {
//   font-size: 36px;
//   font-weight: bold;
//   color: Black;
//   margin: 10px 0;
//   font-family: "Playfair Display", serif;
// }

// .special-offer-description {
//   font-size: 16px;
//   color: Black;
//   margin-bottom: 20px;
// }

// .special-offer-button {
//   background: rgb(204, 91, 95);
//   color: white;
//   border: none;
//   padding: 12px 18px;
//   font-size: 16px;
//   font-weight: bold;
//   cursor: pointer;
//   font-family: "Playfair Display", serif;
//   border-radius: 5px;
//   transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
// }

// .special-offer-button:hover {
//   background: #e63946;
//   transform: scale(1.05);
// }


//             `}</style>
//         </Layout>
//     );
// };

// export default Homepage;




import React, { useState, useEffect } from "react";
import $ from 'jquery';
import Slider from "react-slick";
import Layout from '../components/layout/Layout';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AiOutlineReload } from "react-icons/ai";
import { Checkbox, Radio } from 'antd';
import { prices } from '../components/price';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cart';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../styles/Homepage.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import "./HeroBanner.css"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Homepage = () => {
    const [products, setProduct] = useState([]);
    const [categories, setCategories] = useState([]);
    const [checked, setChecked] = useState([]);
    const [radio, setRadio] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useCart();
    
    const navigate = useNavigate();

    // Add jQuery effects on component mount
    useEffect(() => {
        // Floating animation for mini products in hero banner
        $(".floating").each(function() {
            $(this).hover(
                function() {
                    $(this).css("transform", "translateY(-10px)");
                },
                function() {
                    $(this).css("transform", "translateY(0)");
                }
            );
        });

        // Pulse effect for discount badges
        $(".discount-text").hover(
            function() {
                $(this).css("animation", "pulse 0.5s infinite");
            },
            function() {
                $(this).css("animation", "none");
            }
        );

        // Smooth scroll for navigation links
        $('a[href^="#"]').on('click', function(event) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 800);
        });

        // Parallax effect for special offer banner
        $(window).scroll(function() {
            const scroll = $(window).scrollTop();
            $('.special-offer-banner').css('background-position', 'center ' + (scroll / 8) + 'px');
        });

        // Product card hover effect
        $('.pd-product-card').hover(
            function() {
                $(this).find('.pd-product-img-wrapper').css('transform', 'scale(1.05)');
                $(this).find('.pd-product-icons').css('opacity', '1');
            },
            function() {
                $(this).find('.pd-product-img-wrapper').css('transform', 'scale(1)');
                $(this).find('.pd-product-icons').css('opacity', '0.8');
            }
        );

        // Category item hover effect
        $('.catt-item').hover(
            function() {
                $(this).find('.catt-image').css('transform', 'rotate(15deg) scale(1.1)');
            },
            function() {
                $(this).find('.catt-image').css('transform', 'rotate(0) scale(1)');
            }
        );

        // Button hover effects
        $('.shop-button, .special-offer-button').hover(
            function() {
                $(this).css('box-shadow', '0 5px 15px rgba(0,0,0,0.3)');
            },
            function() {
                $(this).css('box-shadow', 'none');
            }
        );

        // Best seller card effect
        $('.best-seller-card').hover(
            function() {
                $(this).css('transform', 'translateY(-10px)');
                $(this).find('.best-seller-img-wrapper img').css('transform', 'scale(1.1)');
            },
            function() {
                $(this).css('transform', 'translateY(0)');
                $(this).find('.best-seller-img-wrapper img').css('transform', 'scale(1)');
            }
        );

        // Load more products animation
        $('.load-more-container').click(function() {
            $('html, body').animate({
                scrollTop: $(document).height()
            }, 1000);
        });

    }, []);

    const getAllCategory = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/category/get-category`);
            if (data?.success) {
                setCategories(data?.getcat);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllCategory();
        getTotal();
    }, []);

    const getAllProducts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/product/get-product`);
            setLoading(false);
            setProduct(data.product);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const getTotal = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/product/product-count`);
            setTotal(data?.total);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (page === 1) return;
        LoadMore();
    }, [page]);

    const LoadMore = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/product/product-list/${page}`);
            setLoading(false);
            setProduct([...products, ...data.products]);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const handleFilter = (value, id) => {
        let all = [...checked];
        if (value) {
            all.push(id);
        } else {
            all = all.filter(c => c !== id);
        }
        setChecked(all);
    };

    useEffect(() => {
        if (!checked.length && !radio.length) getAllProducts();
    }, [checked.length, radio.length]);

    useEffect(() => {
        if (checked.length || radio.length) filterProduct();
    }, [checked, radio]);

    const filterProduct = async () => {
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/product/product-filters`, { checked, radio });
            setProduct(data?.products);
        } catch (error) {
            console.log(error);
        }
    };

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const catt = [
        {
          image: "/images/services1.webp", 
          title: "PASTRY",
          description: "Rise & Shine with Delight!",
          link: ""
        },
        {
          image: "/images/services2.webp",
          title: "BREAKFAST",
          description: "A Match Made in Heaven!",
          link: ""
        },
        {
          image: "/images/services3.webp",
          title: "COFFEE CAKE",
          description: "Crispy, Warm & Irresistible!",
          link: ""
        },
        {
          image: "/images/services4.webp",
          title: "BAKE TOAST",
          description: "Indulge in Flaky Perfection!",
          link: ""
        }
    ];

    const promotions = [
        {
          discount: "70%",
          title: "Best Quality Products",
          image: "/images/banner1.webp",
          buttonText: "SHOP NOW",
          link: "/best-quality-products",
        },
        {
          discount: "25%",
          title: "Hot & Spicy Pastry",
          image: "/images/banner2.webp",
          buttonText: "SHOP NOW",
          link: "/hot-spicy-pastry",
        }
    ];

    const bestSellerSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
    };

    return (
        <Layout title="All Products - Best Offers">
            {/* Hero Banner Section */}
            <section className="hero-banner">
                <div className="banner-content">
                    <h3 style={{marginLeft:"100px"}}>
                        <span className="discount-text">70%</span> Sale Off
                    </h3>
                    <h1>Quality Products <br /> Bakery Items</h1>
                    <Link to="/categories" className="shop-button">SHOP NOW</Link>
                </div>

                {/* Banner Images */}
                <div className="banner-images">
                    <img src="/images/hero-banner-shape.webp" alt="Main Product" className="main-image" />
                    <img src="/images/hero-mini-shape1.webp" alt="Donut" className="floating product1" />
                    <img src="/images/hero-mini-shape2.webp" alt="Pretzel" className="floating product2" />
                    <img src="/images/hero-mini-shape3.webp" alt="Croissant" className="floating product3" />
                    <img src="/images/hero-mini-shape4.webp" alt="Macaron" className="floating product4" />
                    <img src="/images/hero-mini-shape5.webp" alt="Macaron" className="floating product5" />
                </div>
            </section>

            <br/><br/><br/><br/>

            {/* Categories Grid */}
            <div className="catt-grid">
                {catt.map((item, index) => (
                    <Link to={item.link} key={index} className="catt-item">
                        <img src={item.image} alt={item.title} className="catt-image" />
                        <h3 className="catt-title">{item.title}</h3>
                        <p className="catt-description">{item.description}</p>
                    </Link>
                ))}
            </div>
            <br/><br/><br/>

            {/* Promotions Section */}
            <div className="promotion-container">
                {promotions.map((promo, index) => (
                    <div key={index} className="promotion-card">
                        <div className="promotion-content">
                            <h3 className="discount">
                                <span className="discount-text">{promo.discount} </span>
                                <span className="sale-text">Sale Off</span>
                                
                            </h3>
                            <h2 className="promo-title">{promo.title}</h2>
                            <div>
                               <Link to="/categories" className="shop-button">
                                {promo.buttonText}
                            </Link> 
                                </div>
                        </div>
                        <div className="image-container">
                            <img src={promo.image} alt={promo.title} className="promo-image" />
                        </div>
                    </div>
                ))}
            </div>

            <br/><br/><br/>

            {/* New Products Section */}
            <center>
                <div className="col-md-10">
                    <h1 className="text-center mb-4 pd-section-title" id="abc">All Products</h1>

                    {/* Product Grid */}
                    <div className="row pd-product-grid">
                        {products?.map((p) => (
                            <div className="col-md-2.5 pd-product-card-wrapper" key={p._id}>
                                <div className="card pd-product-card">
                                    {/* Product Image */}
                                    <div className="pd-product-img-wrapper">
                                        <img
                                            src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${p._id}`}
                                            className="card-img-top pd-product-image"
                                            alt={p.name}
                                        />
                                    </div>

                                    {/* Product Details */}
                                    <div className="card-body pd-card-body">
                                        <h5 className="card-title pd-product-title">{p.name}</h5>
                                        <p className="card-text pd-product-price">RS. {p.price}</p>

                                        {/* Icons (Like, Add to Cart, More Details) */}
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
                                                    setCart([...cart, p]);
                                                    localStorage.setItem("cart", JSON.stringify([...cart, p]));
                                                    toast.success("Item Added to Cart");
                                                }}
                                            />
                                            <FaEye
                                                className="pd-icon"
                                                onClick={() => navigate(`/product/${p.slug}`)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </center>
            <br/>

            {/* Special Offer Banner */}
            <div className="special-offer-banner">
                <div className="special-offer-content">
                    <h3 className="special-offer-discount">
                        <span className="discount-text">45% </span>
                        <span className="sale-text">Sale Off</span>
                    </h3>
                    <h1 className="special-offer-title">Best Quality Bakery Products</h1>
                    <p className="special-offer-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna.
                    </p>
                    <Link to="/categories"> 
                        <button className="special-offer-button">
                            SHOP NOW
                        </button>
                    </Link>
                </div>
            </div>
            
            {/* Best Seller Section */}
            <div className="best-seller-slider">
                <h1 className="best-seller-title">Best Seller</h1>
                <p className="best-seller-description">
                    Here we have Best Selling Products in My Bakery...
                </p>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <Slider {...bestSellerSettings}>
                        {products.map((product) => (
                            <div className="best-seller-card" key={product._id}>
                                <div className="best-seller-img-wrapper">
                                    <img
                                        src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${product._id}`}
                                        className="card-img-top pd-product-image" style={{width:"150px"}}
                                        alt={product.name}
                                    />  
                                </div>
                                <div className="best-seller-details">
                                    <h3 className="best-seller-product-title">{product.name}</h3>
                                    <p className="best-seller-product-price">RS. {product.price}</p>
                                    <div className="best-seller-icons">
                                        <FaHeart
                                            className="pd-icon"
                                            onClick={() => {
                                                const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
                                                if (!likedItems.some(item => item._id === product._id)) {
                                                    const updatedLiked = [...likedItems, product];
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
                                                setCart([...cart, product]);
                                                localStorage.setItem("cart", JSON.stringify([...cart,product]));
                                                toast.success("Item Added to Cart");
                                            }}
                                        />
                                        <FaEye
                                            className="pd-icon"
                                            onClick={() => navigate(`/product/${product.slug}`)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                )}
            </div>

            <style>{`
                @keyframes pulse {
                    0% { transform: scale(1); }
                    50% { transform: scale(1.1); }
                    100% { transform: scale(1); }
                }
                
                .pd-product-icons {
                    transition: opacity 0.3s ease;
                    opacity: 0.8;
                }
                
                .pd-product-img-wrapper {
                    transition: transform 0.3s ease;
                     width: 100%;
          height: 230px;
          object-fit: cover;
                }
                
                .floating {
                    transition: transform 0.5s ease;
                }
                
                .catt-image {
                    transition: transform 0.5s ease;
                }
                
                .shop-button, .special-offer-button {
                    transition: all 0.3s ease;
                }
                
                .best-seller-card {
                    transition: transform 0.3s ease;
                }
                
                .best-seller-img-wrapper img {
                    transition: transform 0.3s ease;
                }
                
                .slider-container {
                    width: 100%;
                    max-width: 1650px;
                    margin: auto;
                    padding-top: 20px;
                }
                .slider-img {
                    width: 100%;
                    height: 400px;
                    object-fit: cover;
                }

                .catt-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 2px;
                    text-align: center;
                    padding: 32px;
                }

                .catt-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-decoration: none;
                    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
                    padding: 15px;
                    border-radius: 10px;
                }

                .catt-item:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                }

                .catt-image {
                    width: 128px;
                    height: 128px;
                    object-fit: contain;
                    border-radius: 50%;
                }

                .catt-title {
                    font-family: "Playfair Display", serif;
                    font-size: 22px;
                    font-weight: 700;
                    color: #2c2c2c;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .catt-description {
                    font-family: "Playfair Display", serif;
                    font-size: 14px;
                    color: #666;
                    text-align: center;
                    max-width: 200px;
                    margin-top: 5px;
                }
                
                .promotion-container {
                    display: flex;
                    justify-content: center;
                    gap: 20px;
                    padding: 20px;
                }

                .promotion-card {
                    display: flex;
                    align-items: center;
                    background: #f8f8f8;
                    border-radius: 15px;
                    padding: 25px;
                    width: 500px;
                    height: 250px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
                    transition: transform 0.3s ease-in-out;
                }

                .promotion-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                }

                .promotion-content {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    align-items: flex-start;
                    text-align: left;
                }

                .discount {
                    margin: 0;
                    font-size: 32px;
                    font-weight: bold;
                }

                .discount-text {
                    color: #e63946;
                    font-weight: bold;
                    font-size: 28px;
                }

                .sale-text {
                    color: #1d3557;
                    font-size: 28px;
                }

                .promo-title {
                    font-size: 26px;
                    font-weight: bold;
                    color: #333;
                    margin: 10px 0;
                    font-family: "Playfair Display", serif;
                }

                .shop-button {
                    background: rgb(204, 91, 95);
                    color: white;
                    border: none;
                    padding: 10px 15px;
                    font-size: 14px;
                    font-weight: bold;
                    cursor: pointer;
                    font-family: "Playfair Display", serif;
                    border-radius: 5px;
                    transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
                    align-self: flex-start;
                }

                .shop-button:hover {
                    background: #e63946;
                    transform: scale(1.05);
                }

                .image-container {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .promo-image {
                    width: 285px;
                    height: 200px;
                    border-radius: 10px;
                    object-fit: cover;
                }

                .special-offer-banner {
                    position: relative;
                    width: 100%;
                    height: 400px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 20px;
                    background: linear-gradient(90deg, #D9D6D2 20%, #F8F1E4 100%);
                    overflow: hidden;
                }

                .special-offer-banner::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 800px;
                    height: 100%;
                    background: #ff5f66;
                    clip-path: circle(160px at 10% 20%);
                }

                .special-offer-banner::after {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    width: 270px;
                    height: 100%;
                    background: #42d9a1;
                    clip-path: circle(160px at 60% 70%);
                }

                .special-offer-content {
                    max-width: 600px;
                    color: #333;
                    z-index: 2;
                }

                .special-offer-discount {
                    margin: 0;
                    font-size: 20px;
                    font-weight: bold;
                }

                .special-offer-title {
                    font-size: 36px;
                    font-weight: bold;
                    color: Black;
                    margin: 10px 0;
                    font-family: "Playfair Display", serif;
                }

                .special-offer-description {
                    font-size: 16px;
                    color: Black;
                    margin-bottom: 20px;
                }

                .special-offer-button {
                    background: rgb(204, 91, 95);
                    color: white;
                    border: none;
                    padding: 12px 18px;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    font-family: "Playfair Display", serif;
                    border-radius: 5px;
                    transition: background 0.3s ease-in-out, transform 0.2s ease-in-out;
                }

                .special-offer-button:hover {
                    background: #e63946;
                    transform: scale(1.05);
                }

                .best-seller-slider {
                    padding: 40px 20px;
                    background-color: #f9f9f9;
                }

                .best-seller-title {
                    text-align: center;
                    font-family: "Playfair Display", serif;
                    font-size: 36px;
                    margin-bottom: 10px;
                }

                .best-seller-description {
                    text-align: center;
                    color: #666;
                    margin-bottom: 30px;
                    font-size: 16px;
                }

                .best-seller-card {
                    background: white;
                    border-radius: 10px;
                    padding: 15px;
                    margin: 10px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    text-align: center;
                }

                .best-seller-img-wrapper {
                    margin-bottom: 15px;
                    overflow: hidden;
                    border-radius: 8px;
                }

                .best-seller-product-title {
                    font-size: 18px;
                    margin: 10px 0;
                    font-weight: bold;
                }

                .best-seller-product-price {
                    color: #e63946;
                    font-weight: bold;
                    font-size: 16px;
                    margin-bottom: 15px;
                }

                .best-seller-icons {
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                }

                .pd-icon {
                    cursor: pointer;
                    font-size: 18px;
                    color: black;
                    transition: color 0.3s ease;
                }

                .pd-icon:hover {
                    color:rgb(108, 103, 103);
                }
            `}</style>
        </Layout>
    );
};

export default Homepage;