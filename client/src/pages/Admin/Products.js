// import React, { useState, useEffect } from 'react';
// import AdminMenu from '../../components/layout/AdminMenu';
// import Layout from './../../components/layout/Layout';
// import toast from 'react-hot-toast';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';

// const Products = () => {
//   const [products, setProduct] = useState([]);
//   const [cart, setCart] = useState([]);
//   const navigate = useNavigate();

//   // Fetch all products
//   const getAllProducts = async () => {
//     try {
//       const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/product/get-product`);
//       setProduct(data.product);
//     } catch (error) {
//       console.log(error);
//       toast.error('Error fetching products');
//     }
//   };

//   useEffect(() => {
//     getAllProducts();
//     const localCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCart(localCart);
//   }, []);

//   // Add to favorites
//   const handleFavorite = (p) => {
//     const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
//     if (!likedItems.some((item) => item._id === p._id)) {
//       const updatedLiked = [...likedItems, p];
//       localStorage.setItem('likedItems', JSON.stringify(updatedLiked));
//       toast.success('Added to Favorites');
//     } else {
//       toast('Already in your favorites');
//     }
//   };

//   // Add to cart
//   const handleAddToCart = (p) => {
//     const updatedCart = [...cart, p];
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     toast.success('Item Added to Cart');
//   };

//   return (
//     <Layout title="Admin - All Products">
//       <div className="container-fluid m-3 p-3">
//         <div className="row dashboard">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9 ">
//             <h2 className="mb-4" id="abc">All Products</h2>

//             <div className="row pd-product-grid">
//               {products?.map((p) => (
//                 <div className="col-md-2 col-sm-6 pd-product-card-wrapper" key={p._id}>
//                   <div
//                     className="card pd-product-card"
//                     onClick={() => navigate(`/dashboard/admin/product/${p.slug}`)}
//                     style={{ cursor: 'pointer' }}
//                   >
//                     {/* Product Image */}
//                     <div className="pd-product-img-wrapper">
//                       <img
//                         src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${p._id}`}
//                         className="card-img-top pd-product-image"
//                         alt={p.name}
//                       />
//                     </div>

//                     {/* Product Details */}
//                     <div className="card-body pd-card-body">
//                       <h5 className="card-title pd-product-title">{p.name}</h5>
//                       <p className="card-text pd-product-price">₹{p.price}</p>

//                       {/* Icons */}
//                       <div className="pd-product-icons d-flex justify-content-between">
//                         <FaHeart
//                           className="pd-icon"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleFavorite(p);
//                           }}
//                         />
//                         <FaShoppingCart
//                           className="pd-icon"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleAddToCart(p);
//                           }}
//                         />
//                         <FaEye
//                           className="pd-icon"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             navigate(`/product/${p.slug}`);
//                           }}
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               {products.length === 0 && (
//                 <div className="text-center text-muted mt-4">No products available.</div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <style>
        
//       </style>
//     </Layout>
//   );
// };

// export default Products;



import React, { useState, useEffect } from 'react';
import AdminMenu from '../../components/layout/AdminMenu';
import Layout from './../../components/layout/Layout';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';

const Products = () => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/product/get-product`);
      setProduct(data.product);
    } catch (error) {
      console.log(error);
      toast.error('Error fetching products');
    }
  };

  useEffect(() => {
    getAllProducts();
    const localCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(localCart);
  }, []);

  const handleFavorite = (p) => {
    const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
    if (!likedItems.some((item) => item._id === p._id)) {
      const updatedLiked = [...likedItems, p];
      localStorage.setItem('likedItems', JSON.stringify(updatedLiked));
      toast.success('Added to Favorites');
    } else {
      toast('Already in your favorites');
    }
  };

  const handleAddToCart = (p) => {
    const updatedCart = [...cart, p];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success('Item Added to Cart');
  };

  // COMMON PDF HEAD SETUP
  const setupPDFHeader = (doc, title) => {
    const margin = 15;
    const pageWidth = doc.internal.pageSize.getWidth();
    let y = margin;

    const img = new Image();
    img.src = `${window.location.origin}/images/GreenMarketingLogo.png`;

    return new Promise((resolve) => {
      img.onload = () => {
        const imgWidth = 50;
        const imgHeight = 30;
        const imgX = (pageWidth - imgWidth) / 2;
        doc.addImage(img, 'PNG', imgX, y, imgWidth, imgHeight);
        y += imgHeight + 10;

        doc.setFontSize(16);
        doc.setTextColor(78, 52, 46);
        doc.text(title, pageWidth / 2, y, { align: 'center' });
        y += 5;

        doc.setFontSize(10);
        doc.setTextColor(100);
        doc.text(`Generated on: ${new Date().toLocaleString()}`, pageWidth / 2, y, { align: 'center' });

        resolve(y + 10);
      };
    });
  };

  // 1. PRODUCT INVENTORY REPORT
  const generateInventoryReport = async () => {
    const doc = new jsPDF();
    const startY = await setupPDFHeader(doc, 'Product Inventory Report');

    autoTable(doc, {
      startY,
      head: [['#', 'Product Name', 'Price (₹)', 'Quantity']],
      body: products.map((p, i) => [
        i + 1,
        p.name,
        p.price.toFixed(2),
        p.quantity || 'N/A'
      ]),
      styles: { fontSize: 10, cellPadding: 3 },
      headStyles: { fillColor: [78, 52, 46], textColor: 255 },
      margin: { left: 15, right: 15 },
    });

    doc.save('Product-Inventory-Report.pdf');
  };

  // 2. PRODUCT LISTING SUMMARY REPORT
  const generateListingSummary = async () => {
    const doc = new jsPDF();
    const startY = await setupPDFHeader(doc, 'Product Listing Summary');

    const total = products.length;
    const avgPrice = products.reduce((sum, p) => sum + p.price, 0) / total;
    const categories = {};
    products.forEach((p) => {
      const cat = p.category?.name || 'Uncategorized';
      categories[cat] = (categories[cat] || 0) + 1;
    });

    autoTable(doc, {
      startY,
      body: [
        ['Total Products', total],
        ['Average Price', `₹${avgPrice.toFixed(2)}`],
      ],
      styles: { fontSize: 11 },
      margin: { left: 15, right: 15 },
    });

    const catData = Object.entries(categories).map(([name, count]) => [name, count]);

    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 10,
      head: [['Category', 'Product Count']],
      body: catData,
      styles: { fontSize: 10 },
      headStyles: { fillColor: [78, 52, 46], textColor: 255 },
      margin: { left: 15, right: 15 },
    });

    doc.save('Product-Listing-Summary.pdf');
  };

  // 3. PRODUCT ACTIVITY REPORT (Dummy stats)
  const generateActivityReport = async () => {
    const doc = new jsPDF();
    const startY = await setupPDFHeader(doc, 'Product Activity Report');

    autoTable(doc, {
      startY,
      head: [['#', 'Product Name', 'Views', 'Sold Count', 'Last Updated']],
      body: products.map((p, i) => [
        i + 1,
        p.name,
        Math.floor(Math.random() * 100), // Placeholder for views
        Math.floor(Math.random() * 50),  // Placeholder for sales
        new Date(p.updatedAt || Date.now()).toLocaleDateString()
      ]),
      styles: { fontSize: 10 },
      headStyles: { fillColor: [78, 52, 46], textColor: 255 },
      margin: { left: 15, right: 15 },
    });

    doc.save('Product-Activity-Report.pdf');
  };

  return (
    <Layout title="Admin - All Products">
      <div className="container-fluid m-3 p-3">
        <div className="row dashboard">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h2>All Products</h2>
              <div>
                <button onClick={generateInventoryReport} className="btn btn-outline-primary btn-sm me-2">
                  Inventory Report
                </button>
                <button onClick={generateListingSummary} className="btn btn-outline-success btn-sm me-2">
                  Listing Summary
                </button>
                <button onClick={generateActivityReport} className="btn btn-outline-warning btn-sm">
                  Activity Report
                </button>
              </div>
            </div>

            <div className="row pd-product-grid">
              {products?.map((p) => (
                <div className="col-md-2 col-sm-6 pd-product-card-wrapper" key={p._id}>
                  <div
                    className="card pd-product-card"
                    onClick={() => navigate(`/dashboard/admin/product/${p.slug}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="pd-product-img-wrapper">
                      <img
                        src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${p._id}`}
                        className="card-img-top pd-product-image"
                        alt={p.name}
                      />
                    </div>
                    <div className="card-body pd-card-body">
                      <h5 className="card-title pd-product-title">{p.name}</h5>
                      <p className="card-text pd-product-price">₹{p.price}</p>
                      <div className="pd-product-icons d-flex justify-content-between">
                        <FaHeart className="pd-icon" onClick={(e) => { e.stopPropagation(); handleFavorite(p); }} />
                        <FaShoppingCart className="pd-icon" onClick={(e) => { e.stopPropagation(); handleAddToCart(p); }} />
                        <FaEye className="pd-icon" onClick={(e) => { e.stopPropagation(); navigate(`/product/${p.slug}`); }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {products.length === 0 && (
                <div className="text-center text-muted mt-4">No products available.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
