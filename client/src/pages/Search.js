// import React from 'react'
// import Layout from '../components/layout/Layout'
// import { useSearch } from '../context/search'
// import { useCart } from '../context/cart';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';

// const Search = () => {

//     const [values, setValues] = useSearch([]);
//     const [cart, setCart] = useCart();

//     const navigate = useNavigate();

//     return (
//         <Layout title={"search results"}>
//             <div className='container'>
//                 <div className='text-center'>
//                     <h1>Search Results</h1>
//                     <h6>{values?.result.length < 1 ? "no products found" : `Found ${values?.result.length}`}</h6>
//                     <div className='d-flex flex-wrap mt-4'>
//                         {values?.result.map((s) => (
//                             <div className="card m-2" style={{ width: '18rem' }}>
//                                 <img src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${s._id}`} style={{ width: '250px', height: '250px' }} className="card-img-top" alt={s.name} />
//                                 <div className="card-body  ">
//                                     <h5 className="card-title ">{s.name}</h5>
//                                     <p className="card-text">{s.description}</p>
//                                     <p className="card-text"> RS. {s.price}</p>

//                                     <button className="btn btn-info ms-2"
//                                         onClick={() => navigate(`/product/${s.slug}`)}>More details</button>
//                                     <button className="btn btn-dark ms-2" onClick={() => {
//                                         setCart([...cart, s])
//                                         localStorage.setItem('cart', JSON.stringify([...cart, s]))
//                                         toast.success("Item Added to cart");
//                                     }}> Add to Card
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}

//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     )
// }

// export default Search




import React from 'react';
import Layout from '../components/layout/Layout';
import { useSearch } from '../context/search';
import { useCart } from '../context/cart';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FaHeart, FaShoppingCart, FaEye } from "react-icons/fa";

const Search = () => {
  const [values] = useSearch([]);
  const [cart, setCart] = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const exists = cart.find((item) => item._id === product._id);
    const updatedCart = exists
      ? cart.map((item) =>
          item._id === product._id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      : [...cart, { ...product, quantity: 1 }];

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success("Item Added to Cart");
  };

  const handleLike = (product) => {
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
    <Layout title="Search Results">
        <br/>
      <div style={{ backgroundColor: "#fff9f2", padding: "40px" }}>
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.result.length < 1
              ? "No products found"
              : `Found ${values?.result.length} product(s)`}
          </h6>
        </div>
        <div className="search-grid">
          {values?.result.map((s) => (
            <div className="search-card" key={s._id}>
              <img
                src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${s._id}`}
                alt={s.name}
              />
              <h5>{s.name}</h5>
              <p className="price">RS. {s.price}</p>
              <p className="desc">{s.description.substring(0, 60)}...</p>
              <div className="search-icons">
                <FaEye title="View Details" onClick={() => navigate(`/product/${s.slug}`)} />
                <FaShoppingCart title="Add to Cart" onClick={() => handleAddToCart(s)} />
                <FaHeart title="Add to Favorites" onClick={() => handleLike(s)} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styling */}
      <style jsx="true">{`
        .search-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
          margin-top: 30px;
        }

        .search-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          width: 250px;
          padding: 16px;
          text-align: center;
          font-family: "Playfair Display", serif;
        }

        .search-card img {
          width: 100%;
          height: 180px;
          object-fit: contain;
          border-radius: 12px;
          margin-bottom: 12px;
        }

        .search-card h5 {
          font-size: 18px;
          margin-bottom: 6px;
        }

        .price {
          color: #ff5722;
          font-weight: bold;
          margin-bottom: 6px;
        }

        .desc {
          font-size: 14px;
          color: #555;
          margin-bottom: 12px;
        }

        .search-icons {
           display: flex;
    
          justify-content: space-around;
          font-size: 18px;
          color: #444;
          cursor: pointer;
        }

        .search-icons svg:hover {
          color: #000;
        }

        @media (max-width: 768px) {
          .search-grid {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Search;
