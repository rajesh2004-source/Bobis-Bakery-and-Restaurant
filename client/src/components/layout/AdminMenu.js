// import React from 'react'
// import { Link } from 'react-router-dom'

// const AdminMenu = () => {
//     return (
//         <>
//             <div className='text-center'>
//                 <div className="list-group  dashboard-menu">
//                     <h4>Admin Panel</h4>
//                     <Link to="/dashboard/admin/create-category" className="list-group-item list-group-item-action">Create Catagories</Link>
//                     <Link to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">Create Product</Link>
//                     <Link to="/dashboard/admin/products" className="list-group-item list-group-item-action"> Products</Link>
//                     <Link to="/dashboard/admin/orders" className="list-group-item list-group-item-action"> Orders </Link>
//                     <Link to="/dashboard/admin/users" className="list-group-item list-group-item-action">Users</Link>
//                 </div>

//             </div>
//         </>
//     )
// }

// export default AdminMenu



// import React from 'react';
// import { Link } from 'react-router-dom';

// const AdminMenu = () => {   
//     return (
//         <div className='admin-container d-flex justify-content-center align-items-center vh-100' style={{
//             background: 'linear-gradient(140deg , #4e342e  25% ,rgb(174, 166, 163) 70%)',
//             padding: '20px'
//         }}>
//             <style>
//                 {`
//                     .dashboard-menu {
//                         width: 100%;
//                         max-width: 450px;
//                         border-radius: 12px;
//                         background: #4e342e;
//                         padding: 30px;
//                         box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
//                         border: 2px solid #3e2723;
//                         color: #fff;
//                     }
//                     .list-group-item {
//                         background: #5d4037;
//                         color: white;
//                         border: 2px solid #6d4c41;
//                         font-size: 16px;
//                         transition: all 0.3s ease;
//                     }
//                     .list-group-item:hover {
//                         background: #6d4c41;
//                         color: #fff;
//                     }
//                     h4 {
//                         text-align: center;
//                        font-weight: bold;
//                         font-size: 24px;
//                         margin-bottom: 20px;
//                         color: white;
//                         text-shadow: 1px 1px 2px #3e2723;
//                         background: #6d4c41;
                        
//                     }
//                 `}
//             </style>
//             <div className='text-center dashboard-menu'>
//                 <h4 >Admin Panel</h4>
//                 <div className="list-group">
//                     <Link to="/dashboard/admin/create-category" className="list-group-item list-group-item-action">Create Categories</Link>
//                     <Link to="/dashboard/admin/create-product" className="list-group-item list-group-item-action">Create Product</Link>
//                     <Link to="/dashboard/admin/products" className="list-group-item list-group-item-action">Products</Link>
//                     <Link to="/dashboard/admin/orders" className="list-group-item list-group-item-action">Orders</Link>
//                     <Link to="/dashboard/admin/users" className="list-group-item list-group-item-action">Users</Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AdminMenu;


import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaTags,
  FaBoxOpen,
  FaBoxes,
  FaClipboardCheck,
  FaUsersCog
} from 'react-icons/fa';

const AdminMenu = () => {
  const location = useLocation();

  return (
    <>
      <style>
        {`
          .dashboard-sidebar {
            background: linear-gradient(145deg, #4e342e, #6d4c41);
            border-radius: 16px;
            padding: 20px;
            box-shadow: 0px 4px 15px rgba(0,0,0,0.4);
            color: white;
            transition: all 0.3s ease-in-out;
            width: 100%;
            max-width: 450px;
          }

          .dashboard-sidebar h4 {
            text-align: center;
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 25px;
            color: #fff;
            text-shadow: 1px 1px 2px #3e2723;
          }

          .menu-item {
            display: flex;
            align-items: center;
            padding: 12px 16px;
            margin-bottom: 12px;
            border-radius: 10px;
            background-color: #5d4037;
            color: #fff;
            text-decoration: none;
            font-weight: 500;
            border: 2px solid transparent;
            transition: all 0.3s ease;
          }

          .menu-item svg {
            margin-right: 10px;
          }

          .menu-item:hover {
            background-color: #8d6e63;
            border-color: #a1887f;
            color: #fff;
          }

          .menu-item.active {
            background-color: #a1887f;
            border-color: #fff;
            font-weight: bold;
          }

          .admin-container {
          font-size: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            // background: linear-gradient(140deg , #4e342e  25% ,rgb(174, 166, 163) 70%);
            padding: 20px;
          }
        `}
      </style>

      <div className="admin-container">
        <div className="dashboard-sidebar">
          <h4>Admin Panel</h4>
          <Link
            to="/dashboard/admin/create-category"
            className={`menu-item ${location.pathname === "/dashboard/admin/create-category" ? "active" : ""}`}
          >
            <FaTags /> Create Categories
          </Link>
          <Link
            to="/dashboard/admin/create-product"
            className={`menu-item ${location.pathname === "/dashboard/admin/create-product" ? "active" : ""}`}
          >
            <FaBoxOpen /> Create Product
          </Link>
          <Link
            to="/dashboard/admin/products"
            className={`menu-item ${location.pathname === "/dashboard/admin/products" ? "active" : ""}`}
          >
            <FaBoxes /> Products
          </Link>
          <Link
            to="/dashboard/admin/orders"
            className={`menu-item ${location.pathname === "/dashboard/admin/orders" ? "active" : ""}`}
          >
            <FaClipboardCheck /> Orders
          </Link>
          <Link
            to="/dashboard/admin/users"
            className={`menu-item ${location.pathname === "/dashboard/admin/users" ? "active" : ""}`}
          >
            <FaUsersCog /> Users
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
