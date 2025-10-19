// import React from 'react'
// import Layout from '../../components/layout/Layout'
// import UserMenu from '../../components/layout/UserMenu'
// import { useAuth } from '../../context/auth'

// const Dashboard = () => {

//     const [auth] = useAuth();
//     return (
//         <Layout title={"Dashboard  -Ecommerce App"}>
//             <div className='container-fluid m-3 p-3 dashboard' >
//                 <div className="row">
//                     <div className="col-md-3 " > <UserMenu /></div>
//                     <div className="col-md-9">
//                         <div className="card w-75 p-3">
//                             <h3>User Name : {auth?.user?.name}</h3>
//                             <h3>User Email : {auth?.user?.email}</h3>
//                             <h3>User Address :{auth?.user?.address}</h3>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Layout>

//     )
// }

// export default Dashboard


import React from 'react';
import Layout from '../../components/layout/Layout';
import UserMenu from '../../components/layout/UserMenu';
import { useAuth } from '../../context/auth';
import { FaUser, FaEnvelope, FaHome, FaPhone } from 'react-icons/fa';

const Dashboard = () => {
    const [auth] = useAuth();

    return (
        <Layout title={"Dashboard - Ecommerce App"}>
           
            <style>
                {`
                    .user-dashboard-bg {
                        background: linear-gradient(140deg, #4e342e 25%, rgb(174, 166, 163) 70%);
                        min-height: 100vh;
                        padding: 20px;
                    }

                    .dashboard-card {
                        width: 100%;
                        max-width: 600px;
                        border-radius: 20px;
                        background: #4e342e;
                        padding: 30px;
                        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
                        border: 2px solid #3e2723;
                        color: #fff;
                        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
                    }

                    .dashboard-card:hover {
                        transform: scale(1.03);
                        box-shadow: 0px 6px 25px rgba(0, 0, 0, 0.7);
                    }

                    .dashboard-title {
                        text-align: center;
                        font-weight: bold;
                        font-size: 32px;
                        margin-bottom: 25px;
                        color: #fff;
                        text-shadow: 1px 1px 2px #3e2723;
                    }

                    .dashboard-info {
                        font-size: 22px;
                        margin-bottom: 15px;
                        display: flex;
                        align-items: center;
                    }

                    .dashboard-info svg {
                        margin-right: 12px;
                        color: #ffcc80;
                    }

                    .dashboard-info:hover {
                        color: #ffcc80;
                    }

                `}
            </style>

            <div className="user-dashboard-bg">
                 <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                <div className="container-fluid">
                    <div className="row">
                        {/* Sidebar Menu */}
                        <div className="col-md-3 mb-4 mb-md-0">
                            <div className="menu-container">
                                <UserMenu />
                            </div>
                        </div>

                        {/* Dashboard Info */}
                        <div className="col-md-9 d-flex justify-content-center align-items-center">
                            <div className="dashboard-card">
                                <h2 className="dashboard-title">User Dashboard</h2>
                                <div className="dashboard-info">
                                    <FaUser /> User Name: {auth?.user?.name}
                                </div>
                                <div className="dashboard-info">
                                    <FaEnvelope /> User Email: {auth?.user?.email}
                                </div>
                                {auth?.user?.address && (
                                    <div className="dashboard-info">
                                        <FaHome /> User Address: {auth?.user?.address}
                                    </div>
                                )}
                                {auth?.user?.phone && (
                                    <div className="dashboard-info">
                                        <FaPhone /> User Contact: {auth?.user?.phone}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;