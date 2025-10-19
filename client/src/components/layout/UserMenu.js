// import React from 'react'
// import { Link } from 'react-router-dom'
// import Dashboard from '../../pages/userss/Dashboard'

// const UserMenu = () => {
//     return (
//         <>
//             <div>
//                 <div className='text-center dashboard-menu'>
//                     <div className="list-group">
//                         <h4>Dashboard </h4>
//                         <Link to="/dashboard/user/profile" className="list-group-item list-group-item-action">Profile</Link>
//                         <Link to="/dashboard/user/orders" className="list-group-item list-group-item-action">Orders</Link>
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }

// export default UserMenu



import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUserCircle, FaClipboardList } from 'react-icons/fa';

const UserMenu = () => {
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
            height:300px;
          }

          .dashboard-sidebar h4 {
            text-align: center;
            font-size: 22px;
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
        `}
      </style>

      <div className="dashboard-sidebar">
        <h4>User Panel</h4>
        <Link
          to="/dashboard/user/profile"
          className={`menu-item ${location.pathname === "/dashboard/user/profile" ? "active" : ""}`}
        >
          <FaUserCircle /> Profile
        </Link>
        <Link
          to="/dashboard/user/orders"
          className={`menu-item ${location.pathname === "/dashboard/user/orders" ? "active" : ""}`}
        >
          <FaClipboardList /> Orders
        </Link>
      </div>
    </>
  );
};

export default UserMenu;
