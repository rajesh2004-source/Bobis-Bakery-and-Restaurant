// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import Layout from './../components/layout/Layout'
// import useCategory from '../hooks/useCategory'
// import { useNavigate } from 'react-router-dom';

// const Categories = () => {

//     const categories = useCategory("");
//     const navigate = useNavigate();

//     return (
//         <Layout title={"All Categories"}>

//             <div className='container' style={{ marginTop: "100px" }}>
//                 <div className='row container '>
//                     {categories.map(c => (
//                         <div className='col-md-4 mt-5 mb-3 gx-3 gy-3' style={{ padding: "10px", textAlign: "center" }} key={c._id}>
//                             <div className="card  btn btn-secondary" style={{ height: "150px", width: "200px", padding: "30px" }} >
//                                 <Link to={`/category/${c.slug}`} className='btn btn-cat ' style={{}}> <h3>{c.name}</h3></Link>
//                             </div>
//                         </div>
//                     ))}

//                 </div>
//             </div>
//             <br />
//             <br /> <br /> <br />

//             <div className='col-md-3 container similar-products'>
//                 <button className="btn btn-secondary ms-1" onClick={() => navigate(`/`)}
//                 >BACK</button>


//             </div>
//             <br /> <br />
// <style>{   `

// .categories-page {
//     display: flex;
//     flex-wrap: wrap;
//     padding: 20px;
//     font-family: Arial, sans-serif;
// }

// .filters, .categories {
//     width: 20%;
//     padding: 10px;
//     background-color: #f8f9fa;
//     border-radius: 8px;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//     margin-bottom: 20px;
// }

// .categories ul {
//     list-style: none;
//     padding: 0;
// }

// .categories li a {
//     text-decoration: none;
//     color: inherit;
// }

// .sale-banner {
//     width: 100%;
//     padding: 20px;
//     background-color: #ff4757;
//     color: white;
//     text-align: center;
//     border-radius: 8px;
//     margin: 20px 0;
// }

// .products-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//     gap: 20px;
//     width: 100%;
// }

// .product-card {
//     background-color: white;
//     border: 1px solid #ddd;
//     border-radius: 8px;
//     overflow: hidden;
//     transition: transform 0.3s ease, box-shadow 0.3s ease;
// }

// .product-card:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
// }

// .product-image img {
//     width: 100%;
//     height: 200px;
//     object-fit: cover;
// }

// .back-button {
//     width: 100%;
//     text-align: center;
//     margin-top: 20px;
// }

// .back-button button {
//     background-color: #6c757d;
//     color: white;
//     border: none;
//     padding: 10px 20px;
//     font-size: 16px;
//     border-radius: 5px;
//     cursor: pointer;
// }

// .back-button button:hover {
//     background-color: #5a6268;
// }
// `}   </style>
//         </Layout>
//     )
// }

// export default Categories



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Radio, Slider } from 'antd';
// import axios from 'axios';
// import { prices } from '../components/price';
// import { useCart } from '../context/cart';
// import Layout from '../components/layout/Layout';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import toast from 'react-hot-toast';
// import { AiOutlineReload } from "react-icons/ai";
// import { useNavigate } from 'react-router-dom';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
// import { Checkbox } from 'antd';


// const Categories = () => {
//   // State management
//   const [products, setProduct] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [priceRange, setPriceRange] = useState([12, 325]);
//   const [total, setTotal] = useState(0);
//   const [page, setPage] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [cart, setCart] = useCart();
//   const [viewMode, setViewMode] = useState('list'); // 'list' or 'grid'
//   const [sortOption, setSortOption] = useState('default');
//   const [checked, setChecked] = useState([]);
//   const [radio, setRadio] = useState([]);
      
//       const navigate = useNavigate();


//       const getAllCategory = async () => {
//               try {
//                   const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/category/get-category`);
//                   if (data?.success) {
//                       setCategories(data?.getcat);
//                   }
//               } catch (error) {
//                   console.log(error);
//               }
//           };
      
//           useEffect(() => {
//               getAllCategory();
//               getTotal();
//           }, []);
      
//           const getAllProducts = async () => {
//               try {
//                   setLoading(true);
//                   const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/product/get-product`);
//                   setLoading(false);
//                   setProduct(data.product);
//               } catch (error) {
//                   setLoading(false);
//                   console.log(error);
//               }
//           };
      
//           const getTotal = async () => {
//               try {
//                   const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/product/product-count`);
//                   setTotal(data?.total);
//               } catch (error) {
//                   console.log(error);
//               }
//           };

//           useEffect(() => {
//                   if (page === 1) return;
//                   LoadMore();
//               }, [page]);
          
//               const LoadMore = async () => {
//                   try {
//                       setLoading(true);
//                       const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/product/product-list/${page}`);
//                       setLoading(false);
//                       setProduct([...products, ...data.products]);
//                   } catch (error) {
//                       console.log(error);
//                       setLoading(false);
//                   }
//               };
          
//               const handleFilter = (value, id) => {
//                   let all = [...checked];
//                   if (value) {
//                       all.push(id);
//                   } else {
//                       all = all.filter(c => c !== id);
//                   }
//                   setChecked(all);
//               };
          
//               useEffect(() => {
//                   if (!checked.length && !radio.length) getAllProducts();
//               }, [checked.length, radio.length]);
          
//               useEffect(() => {
//                   if (checked.length || radio.length) filterProduct();
//               }, [checked, radio]);
          
//               const filterProduct = async () => {
//                   try {
//                       const { data } = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/product/product-filters`, { checked, radio });
//                       setProduct(data?.products);
//                   } catch (error) {
//                       console.log(error);
//                   }
//               };


            
//   // Initial data fetch
//   useEffect(() => {
//     getAllCategory();
//     getTotal();
//     getAllProducts();
//   }, []);

//   // Filter effect
//   useEffect(() => {
//     filterProduct();
//   }, [priceRange]);

//   // Sort products
//   const sortedProducts = [...products].sort((a, b) => {
//     switch(sortOption) {
//       case 'price-low-high':
//         return a.price - b.price;
//       case 'price-high-low':
//         return b.price - a.price;
//       case 'name-asc':
//         return a.name.localeCompare(b.name);
//       case 'name-desc':
//         return b.name.localeCompare(a.name);
//       default:
//         return 0;
//     }
//   });

//   return (
//     <Layout title={"All Products"}>
//       <style>{`
//         .product-page {
//           display: flex;
//           padding: 20px;
//           font-family: Arial, sans-serif;
//         }
        
//         .sidebar {
//           width: 250px;
//           padding-right: 20px;
//         }
        
//         .main-content {
//           flex: 1;
//         }
        
//         .filter-section {
//           margin-bottom: 30px;
//         }
        
//         .filter-title {
//           font-weight: bold;
//           margin-bottom: 10px;
//           font-size: 18px;
//         }
        
//         .filter-subtitle {
//           font-weight: bold;
//           margin: 15px 0 10px;
//           font-size: 16px;
//         }
        
//         .price-slider {
//           margin: 20px 10px;
//         }
        
//         .price-range {
//           display: flex;
//           justify-content: space-between;
//           margin-top: 10px;
//         }
        
//         .category-list {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//         }
        
//         .category-item {
//           padding: 5px 0;
//           display: flex;
//           justify-content: space-between;
//         }
        
//         .sale-banner {
//           background: #ff4757;
//           color: white;
//           padding: 15px;
//           text-align: center;
//           margin-top: 20px;
//           border-radius: 5px;
//         }
        
//         .sale-title {
//           font-weight: bold;
//           margin-bottom: 5px;
//         }
        
//         .shop-now-btn {
//           background: white;
//           color: #ff4757;
//           border: none;
//           padding: 5px 10px;
//           border-radius: 3px;
//           margin-top: 10px;
//           font-weight: bold;
//           cursor: pointer;
//         }
        
//         .product-toolbar {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 20px;
//         }
        
//         .product-count {
//           font-size: 14px;
//         }
        
//         .sorting {
//           display: flex;
//           align-items: center;
//           margin-right: 20px;
//         }
        
//         .sorting select {
//           margin-left: 10px;
//           padding: 5px;
//           border-radius: 4px;
//         }
        
//         .view-toggle {
//           display: flex;
//         }
        
//         .view-btn {
//           background: none;
//           border: none;
//           cursor: pointer;
//           font-size: 18px;
//           margin-left: 10px;
//           color: #666;
//         }
        
//         .view-btn.active {
//           color: #ff4757;
//         }
        
//         /* List View */
//         .product-list {
//           display: flex;
//           flex-direction: column;
//         }
        
//         .product-list-item {
//           display: flex;
//           margin-bottom: 20px;
//           padding-bottom: 20px;
//           border-bottom: 1px solid #eee;
//         }
        
//         .product-list-image {
//           width: 150px;
//           height: 150px;
//           object-fit: cover;
//           margin-right: 20px;
//         }
        
//         .product-list-info {
//           flex: 1;
//         }
        
//         .product-list-title {
//           font-weight: bold;
//           font-size: 18px;
//           margin-bottom: 5px;
//         }
        
//         .product-rating {
//           color: #ffc107;
//           margin: 5px 0;
//         }
        
//         .product-list-price {
//           font-weight: bold;
//           color: #ff4757;
//           margin: 5px 0;
//         }
        
//         .product-list-description {
//           color: #666;
//           margin-bottom: 10px;
//         }
        
//         .product-list-actions {
//           display: flex;
//           gap: 10px;
//         }
        
//         .action-btn {
//           background: none;
//           border: none;
//           cursor: pointer;
//           font-size: 16px;
//         }
        
//         /* Grid View */
//         .product-grid {
//           display: grid;
//           grid-template-columns: repeat(3, 1fr);
//           gap: 20px;
//         }
        
//         .product-grid-item {
//           border: 1px solid #eee;
//           padding: 15px;
//           border-radius: 5px;
//         }
        
//         .product-grid-image {
//           width: 100%;
//           height: 150px;
//           object-fit: cover;
//           margin-bottom: 10px;
//         }
        
//         .product-grid-title {
//           font-weight: bold;
//           margin-bottom: 5px;
//         }
        
//         .product-grid-price {
//           font-weight: bold;
//           color: #ff4757;
//           margin-bottom: 5px;
//         }
        
//         .product-grid-actions {
//           display: flex;
//           justify-content: center;
//           gap: 10px;
//           margin-top: 10px;
//         }
        
//         @media (max-width: 768px) {
//           .product-page {
//             flex-direction: column;
//           }
          
//           .sidebar {
//             width: 100%;
//             padding-right: 0;
//             margin-bottom: 20px;
//           }
          
//           .product-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//         }
        
//         @media (max-width: 480px) {
//           .product-grid {
//             grid-template-columns: 1fr;
//           }
          
//           .product-toolbar {
//             flex-direction: column;
//             align-items: flex-start;
//           }
          
//           .sorting {
//             margin: 10px 0;
//           }
//         }
//       `}</style>

//       <div className="product-page">
//         {/* Left Sidebar */}
//         <div className="sidebar">
         
//         <div className="filter-section">
//             <div className="filter-title">FILTER</div>
          
//           <div className="filter-section">
//             <div className="filter-title">CATEGORY</div>
//             <ul className="category-list"><li>
//             {categories?.map((c) => (
//                                 <Checkbox className="abc" key={c._id} onChange={(e) => handleFilter(e.target.checked, c._id)}>
//                                     {c.name}
//                                 </Checkbox>
//                             ))}

//                 </li>
        
//             </ul>
//           </div>

            
//             <div className="filter-subtitle">FILTER BY PRICE</div>
//             <div className='d-flex flex-column '>
//                              <Radio.Group onChange={e => setRadio(e.target.value)}>
//                                {prices?.map(p => (
//                                     <div key={p._id}>
//                                         <Radio className='pqr' value={p.array}>{p.name}</Radio>

//                                     </div>
//                                 ))}
//                             </Radio.Group>

//                         </div>
//           </div>
          
//           <div className="sale-banner">
//             <div className="sale-title">70% Sale Off</div>
//             <div>Best Quality Products</div>
//             <button className="shop-now-btn">SHOP NOW</button>
//           </div>
//         </div>
        
//         {/* Main Content */}
//         <div className="main-content">
//           <div className="product-toolbar">
//             <div className="product-count">
//               {products.length} Product Found of {total}
//             </div>
            
//             <div style={{ display: 'flex', alignItems: 'center' }}>
//               <div className="sorting">
//                 <span>Sort By :</span>
//                 <select 
//                   value={sortOption}
//                   onChange={(e) => setSortOption(e.target.value)}
//                 >
//                   <option value="default">Default</option>
//                   <option value="price-low-high">Price: low to high</option>
//                   <option value="price-high-low">Price: high to low</option>
//                   <option value="name-asc">Name: A-Z</option>
//                   <option value="name-desc">Name: Z-A</option>
//                 </select>
//               </div>
              
//               <div className="view-toggle">
//                 <button 
//                   className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
//                   onClick={() => setViewMode('list')}
//                   title="List View"
//                 >
//                   <i className="ion-ios-list"></i>
//                 </button>
//                 <button 
//                   className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
//                   onClick={() => setViewMode('grid')}
//                   title="Grid View"
//                 >
//                   <i className="ion-grid"></i>
//                 </button>
//               </div>
//             </div>
//           </div>
          
//           {viewMode === 'list' ? (
//             <div className="product-list">
//               {sortedProducts.map(product => (
//                 <div className="product-list-item" key={product._id}>
//                   <img 
//                     src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
//                     alt={product.name}
//                     className="product-list-image"
//                   />
//                   <div className="product-list-info">
//                     <div className="product-list-title">{product.name}</div>
//                     <div className="product-rating">★★★★☆</div>
//                     <div className="product-list-price">${product.price.toFixed(2)}</div>
//                     <p className="product-list-description">
//                       {product.description.substring(0, 100)}...
//                     </p>
//                     <div className="product-list-actions">
//                       <button className="action-btn">🔄</button>
//                       <button className="action-btn">🌬</button>
//                       <button 
//                         className="action-btn"
//                         onClick={() => {
//                           setCart([...cart, product]);
//                           localStorage.setItem('cart', JSON.stringify([...cart, product]));
//                         }}
//                       >
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}



//                {products?.map((p) => (
//                           <div className="col-md-2.5 pd-product-card-wrapper" key={p._id}>
//                             <div className="card pd-product-card">
//                               {/* Product Image */}
//                               <div className="pd-product-img-wrapper">
//                                 <img
//                                   src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${p._id}`}
//                                   className="card-img-top pd-product-image"
//                                   alt={p.name}
//                                 />
//                               </div>
              
//                               {/* Product Details */}
//                               <div className="card-body pd-card-body">
//                                 <h5 className="card-title pd-product-title">{p.name}</h5>
//                                 <p className="card-text pd-product-price">RS. {p.price}</p>
              
//                                 {/* Icons (Like, Add to Cart, More Details) */}
//                                 <div className="pd-product-icons">
//                                   <FaHeart
//                                     className="pd-icon"
//                                     onClick={() => {
//                                       toast.success("Added to Favorites"); // Show toast on like
//                                     }}
//                                   />
//                                   <FaShoppingCart
//                                     className="pd-icon"
//                                     onClick={() => {
//                                       setCart([...cart, p]); // Add to cart
//                                       localStorage.setItem("cart", JSON.stringify([...cart, p])); // Save to localStorage
//                                       toast.success("Item Added to Cart"); // Show toast on add to cart
//                                     }}
//                                   />
//                                   <FaEye
//                                     className="pd-icon"
//                                     onClick={() => navigate(`/product/${p.slug}`)} // Navigate to product details
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//             </div>
//           ) : (
//             <div className="product-grid">
//               {sortedProducts.map(product => (
//                 <div className="product-grid-item" key={product._id}>
//                   <img 
//                     src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
//                     alt={product.name}
//                     className="product-grid-image"
//                   />
//                   <div className="product-grid-title">{product.name}</div>
//                   <div className="product-rating">★★★★☆</div>
//                   <div className="product-grid-price">${product.price.toFixed(2)}</div>
//                   <div className="product-grid-actions">
//                     <button className="action-btn">🔄</button>
//                     <button className="action-btn">🌬</button>
//                     <button 
//                       className="action-btn"
//                       onClick={() => {
//                         setCart([...cart, product]);
//                         localStorage.setItem('cart', JSON.stringify([...cart, product]));
//                       }}
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               ))}


//                {products?.map((p) => (
//                           <div className="col-md-2.5 pd-product-card-wrapper" key={p._id}>
//                             <div className="card pd-product-card">
//                               {/* Product Image */}
//                               <div className="pd-product-img-wrapper">
//                                 <img
//                                   src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${p._id}`}
//                                   className="card-img-top pd-product-image"
//                                   alt={p.name}
//                                 />
//                               </div>
              
//                               {/* Product Details */}
//                               <div className="card-body pd-card-body">
//                                 <h5 className="card-title pd-product-title">{p.name}</h5>
//                                 <p className="card-text pd-product-price">RS. {p.price}</p>
              
//                                 {/* Icons (Like, Add to Cart, More Details) */}
//                                 <div className="pd-product-icons">
//                                   <FaHeart
//                                     className="pd-icon"
//                                     onClick={() => {
//                                       toast.success("Added to Favorites"); // Show toast on like
//                                     }}
//                                   />
//                                   <FaShoppingCart
//                                     className="pd-icon"
//                                     onClick={() => {
//                                       setCart([...cart, p]); // Add to cart
//                                       localStorage.setItem("cart", JSON.stringify([...cart, p])); // Save to localStorage
//                                       toast.success("Item Added to Cart"); // Show toast on add to cart
//                                     }}
//                                   />
//                                   <FaEye
//                                     className="pd-icon"
//                                     onClick={() => navigate(`/product/${p.slug}`)} // Navigate to product details
//                                   />
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Categories;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Radio, Slider } from 'antd';
import axios from 'axios';
import { prices } from '../components/price';
import { useCart } from '../context/cart';
import Layout from '../components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import toast from 'react-hot-toast';
import { AiOutlineReload } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaEye, FaHeart, FaShoppingCart, FaList, FaTh } from "react-icons/fa";
import { Checkbox } from 'antd';


const Categories = () => {
  // State management
  const [products, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([12, 325]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useCart();
  const [viewMode, setViewMode] = useState('grid'); // 'list' or 'grid'
  const [sortOption, setSortOption] = useState('default');
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
      
  const navigate = useNavigate();

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/category/get-category`);
      if (data?.success && Array.isArray(data?.categories)) {
        setCategories(data.categories);
      } else if (data?.success && Array.isArray(data?.getcat)) {
        setCategories(data.getcat); // fallback for old key
      } else {
        toast.error('No categories found');
      }
    } catch (error) {
      console.error(error);
      toast.error('Failed to load categories');
    }
  };
  

  useEffect(() => {
    getAllCategory();
  }, []);
  
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
    
                setProduct([...products, ...data.products])
    
    
            } catch (error) {
                console.log(error);
                setLoading(false);
    
    
            }
        }
  
        
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


  
  const promotions = [
    {
      discount: "70%",
      title: "Best Quality Products",
      image: "/images/banner1.webp", // Replace with actual image path
      buttonText: "SHOP NOW",
      link: "/best-quality-products",
    }];

  // Initial data fetch
  useEffect(() => {
    getAllCategory();
    getTotal();
    getAllProducts();
  }, []);

  // Filter effect
  useEffect(() => {
    filterProduct();
  }, [priceRange]);

  // Sort products
  const sortedProducts = [...products].sort((a, b) => {
    switch(sortOption) {
      case 'price-low-high':
        return a.price - b.price;
      case 'price-high-low':
        return b.price - a.price;
      case 'name-asc':
        return a.name.localeCompare(b.name);
      case 'name-desc':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <Layout title={"All Products"}>
      <style>{`
        .product-page {
          display: flex;
          padding: 20px;
           font-family: "Playfair Display", serif;
        }
        
        .sidebar {
          width: 250px;
          padding-right: 20px;  font-family: "Playfair Display", serif;
        }
        
        .main-content {
          flex: 1;
        }
        
        .filter-section {
          margin-bottom: 30px;
        }
        
        .filter-title {
          font-weight: bold;
          margin-bottom: 10px;
          font-size: 18px;
           font-family: "Playfair Display", serif;
        }
        
        .filter-subtitle {
         font-family: "Playfair Display", serif;
          font-weight: bold;
          margin: 15px 0 10px;
          font-size: 16px;
        }
        
        .price-slider {
          margin: 20px 10px; font-family: "Playfair Display", serif;
        }
        
        .price-range {
          display: flex;
          justify-content: space-between;
          margin-top: 10px; font-family: "Playfair Display", serif;
        }
        
        .category-list {
          list-style: none;
          padding: 0;
          margin: 0; 
          font-family: "Playfair Display", serif;
        }
        
        .category-item {
          padding: 5px 0;
          display: flex;
          justify-content: space-between; font-family: "Playfair Display", serif;
        }
        
        .sale-banner {
          background: #ff4757;
          color: white;
          padding: 15px;
          text-align: center;
          margin-top: 20px;
          border-radius: 5px;
        }
        
        .sale-title {
          font-weight: bold;
          margin-bottom: 5px;
        }
        
        .shop-now-btn {
          background: white;
          color: #ff4757;
          border: none;
          padding: 5px 10px;
          border-radius: 3px;
          margin-top: 10px;
          font-weight: bold;
          cursor: pointer;
        }
        
        .product-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }
        
        .product-count {
          font-size: 18px;
        }
        
        .sorting {
          display: flex;
          align-items: center;
          margin-right: 20px;
        }
        
        .sorting select {
          margin-left: 10px;
          padding: 5px;
          border-radius: 4px;
        }
        
        .view-toggle {
          display: flex;
          gap: 10px;
        }
        
        .view-btn {
          background: none;
          border: 1px solid #ddd;
          cursor: pointer;
          font-size: 16px;
          padding: 5px 10px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          color: #666;
        }
        
        .view-btn.active {
          background: #f0f0f0;
          color: #333;
          border-color: #999;
        }
        
        /* List View */
        .product-list {
          display: flex;
          flex-direction: column;
        }
        .promo-image {
  width: 210px;
  height: 300px;
  border-radius: 100px;
  object-fit: cover;
}
        .product-list-item {
          display: flex;
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        
        .product-list-image {
          width: 150px;
          height: 150px;
          object-fit: cover;
          margin-right: 20px;
        }
        
        .product-list-info {
          flex: 1;
        }
        
        .product-list-title {
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 5px;
        }
        
        .product-rating {
          color: #ffc107;
          margin: 5px 0;
           text-align: center;
        }
        
        .product-list-price {
          font-weight: bold;
          color: #ff4757;
          margin: 5px 0;
        }
        
        .product-list-description {
          color: #666;
          margin-bottom: 10px;
        }
        
        .product-list-actions {
          display: flex;
          gap: 10px;
        }
        
        .action-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 16px;
        }
        
        /* Grid View */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }
        
        .product-grid-item {
          border: 1px solid #eee;
          padding: 15px;
          border-radius: 5px;
          transition: transform 0.3s ease;
        }
        
        .product-grid-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .product-grid-image {
          width: 75%;
          height: 200px;
          object-fit: cover;
          margin-bottom: 10px;
          margin-left: 25px;

        }
        
        .product-grid-title {
          font-weight: bold;
          margin-bottom: 5px;
           text-align: center;
        }
        
        .product-list-rating
      { color: #ffc107;
        
      }
        .product-grid-price {
          font-weight: bold;
          color: #ff4757;
          margin-bottom: 5px;
           text-align: center;
        }
        
        .product-grid-actions {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 10px;
        }
        
        @media (max-width: 768px) {
          .product-page {
            flex-direction: column;
          }
          
          .sidebar {
            width: 100%;
            padding-right: 0;
            margin-bottom: 20px;
          }
          
          .product-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (max-width: 480px) {
          .product-grid {
            grid-template-columns: 1fr;
          }
          
          .product-toolbar {
            flex-direction: column;
            align-items: flex-start;
          }
          
          .sorting {
            margin: 10px 0;
          }
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
  width: 260px;
  height: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  background-color: lightgray;

}

.promotion-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* ✅ Ensures all text and button align to the left */
.promotion-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Aligns content to the top */
  align-items: flex-start; /* Aligns text and button to the left */
  text-align: left; /* Ensures text is aligned left */
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

/* ✅ Ensures the button is at the left side */
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
  align-self: flex-start; /* ✅ Forces the button to align left */
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

      `}</style>

      <div className="product-page" >
        {/* Left Sidebar */}
        <div className="sidebar">
          <div className="filter-section">
            <div className="filter-title">FILTER</div>
          
            <div className="filter-section">
              <div className="filter-title">CATEGORY</div>
              <ul className="category-list">
                <li>
                  {categories?.map((c) => (
                    <Checkbox className="abc" key={c._id} onChange={(e) => handleFilter(e.target.checked, c._id)}>
                      {c.name}
                    </Checkbox>
                  ))}
                </li>
              </ul>
            </div>

            <div className="filter-subtitle">FILTER BY PRICE</div>
            <div className='d-flex flex-column '>
              <Radio.Group onChange={e => setRadio(e.target.value)}>
                {prices?.map(p => (
                  <div key={p._id}>
                    <Radio className='pqr' value={p.array}>{p.name}</Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
          </div>
          <div className='d-flex flex-column '>
                            <button className='btn btn-danger' onClick={() => window.location.reload()}> RESET FILTERS</button>
                        </div>
          <div className="promotion-container">
      {promotions.map((promo, index) => (
        <div key={index} className="promotion-card">
          <div className="promotion-content">
            <h3 className="discount">
              <span className="discount-text">{promo.discount} </span>
              <span className="sale-text">Sale Off</span>
            </h3>
            <h2 className="promo-title">{promo.title}</h2>
           
            <div className="image-container">
            <img src={promo.image} alt={promo.title} className="promo-image" />
          </div><br/>
          <button className="shop-button " >
              {promo.buttonText}
            </button>
          </div>
          
        </div>
        
      ))}
    </div>
        </div>
        
        {/* Main Content */}
        <div className="main-content">
          <div className="product-toolbar">
            <div className="product-count">
              {products.length} Product Found of {total}
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className="sorting">
                <span>Sort By :</span>
                <select 
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="price-low-high">Price: low to high</option>
                  <option value="price-high-low">Price: high to low</option>
                  <option value="name-asc">Name: A-Z</option>
                  <option value="name-desc">Name: Z-A</option>
                </select>
              </div>
              
              <div className="view-toggle">
                <button 
                  className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                  title="List View"
                >
                  <FaList style={{ marginRight: '5px' }} /> List
                </button>
                <button 
                  className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                  title="Grid View"
                >
                  <FaTh style={{ marginRight: '5px' }} /> Grid
                </button>
              </div>
            </div>
          </div>
          {viewMode === 'list' ? (
            <div className="product-list">
              {sortedProducts.map(product => (
                <div className="product-list-item" key={product._id}>
                  <img 
                    // src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
                    src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${product._id}`}
                  
                    alt={product.name}
                    className="product-list-image"
                  />
                  <div className="product-list-info">
                    <div className="product-list-title">{product.name}</div>
                    <div className="product-list-rating">★★★★☆</div>
                    <div className="product-list-price">RS.{product.price.toFixed(2)}</div>
                    <p className="product-list-description">
                      {product.description.substring(0, 100)}...
                    </p>
                    <div className="product-list-actions">
                    <div className="pd-product-icons">
                    <FaHeart
                      className="pd-icon"
                      onClick={() => {
                        toast.success("Added to Favorites"); // Show toast on like
                      }}
                    />
                    <FaShoppingCart
                      className="pd-icon"
                      onClick={() => {
                        setCart([...cart, product]); // Add to cart
                        localStorage.setItem("cart", JSON.stringify([...cart, product])); // Save to localStorage
                        toast.success("Item Added to Cart"); // Show toast on add to cart
                      }}
                    />
                    <FaEye
                      className="pd-icon"
                      onClick={() => navigate(`/product/${product.slug}`)} // Navigate to product details
                    />
                  </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="product-grid">
              {sortedProducts.map(product => (
                <div className="product-grid-item" key={product._id}>
                  <img 
                    // src={`${process.env.REACT_APP_API}/api/v1/product/product-photo/${product._id}`}
                    src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${product._id}`}
                    alt={product.name}
                    className="product-grid-image"
                  />
                  
                  <div >
                  <div className="product-grid-title" >{product.name}</div>
                  <div className="product-rating">★★★★☆</div>
                  <div className="product-grid-price">RS. {product.price.toFixed(2)}</div></div>
                  <div className="product-grid-actions">
                  <div className="pd-product-icons">
                    <FaHeart
                      className="pd-icon"
                      onClick={() => {
                        toast.success("Added to Favorites"); // Show toast on like
                      }}
                    />
                    <FaShoppingCart
                      className="pd-icon"
                      onClick={() => {
                        setCart([...cart, product]); // Add to cart
                        localStorage.setItem("cart", JSON.stringify([...cart, product])); // Save to localStorage
                        toast.success("Item Added to Cart"); // Show toast on add to cart
                      }}
                    />
                    <FaEye
                      className="pd-icon"
                      onClick={() => navigate(`/product/${product.slug}`)} // Navigate to product details
                    />
                  </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
  
      {products && products.length < total && (   <div className='text-center my-4'>
                                 <button className='btn btn-outline-light load-more-btn' onClick={(e) => {
                                    e.preventDefault();
                                    setPage(page + 1);
                                }}>
                                   {loading ? "Loading..." : <>Load More <AiOutlineReload /></>}
                                </button>
                                </div>
                            )}
    </Layout>
  );
};

export default Categories;