// import React, { useState, useEffect } from 'react';
// import Layout from '../../components/layout/Layout';
// import AdminMenu from '../../components/layout/AdminMenu';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const navigate = useNavigate();

//   // Fetch all users
//   const getAllUsers = async () => {
//     try {
//       const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/auth/allUser`);
//       setUsers(data.user);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAllUsers();
//   }, []);

//   return (
//     <Layout title={'Dashboard - All Users'}>
//       <style>
//         {`
//           .users-bg {
//             background: linear-gradient(140deg, #4e342e 25%, rgb(174, 166, 163) 70%);
//             min-height: 100vh;
//             padding: 40px 20px;
//           }

//           .admin-title {
//             font-size: 36px;
//             font-weight: bold;
//             color: #fff;
//             text-align: center;
//             text-shadow: 1px 1px 2px #000;
//             margin-bottom: 30px;
//           }

//           .user-card {
//             background: #4e342e;
//             color: white;
//             border: 2px solid #3e2723;
//             border-radius: 16px;
//             padding: 20px;
//             height: 100%;
//             box-shadow: 0 4px 15px rgba(0,0,0,0.4);
//             transition: transform 0.3s ease, box-shadow 0.3s ease;
//             text-transform: uppercase;
//           }

//           .user-card:hover {
//             transform: scale(1.02);
//             box-shadow: 0 6px 25px rgba(0,0,0,0.5);
//           }

//           .user-label {
//             font-weight: bold;
//             color: #ffcc80;
//           }

//           .go-home-btn {
//             background-color: transparent;
//             color: #fff;
//             border: 2px solid #fff;
//             transition: all 0.3s ease;
//             margin-top: 40px;
//           }

//           .go-home-btn:hover {
//             background-color: #ffcc80;
//             color: #3e2723;
//             border-color: #ffcc80;
//           }
//         `}
//       </style>

//       <div className='users-bg'>
//         <div className="container-fluid">
//           <div className="row">
//             {/* Sidebar */}
//             <div className="col-md-3 mb-4">
//               <AdminMenu />
//             </div>

//             {/* Main Content */}
//             <div className="col-md-9">
//               <h1 className="admin-title">All Users</h1>

//               <div className="row">
//                 {users?.filter((u) => u.role === 0).map((u) => (
//                   <div className="col-md-4 mb-4" key={u._id}>
//                     <div className="user-card">
//                       <h5><span className="user-label">👤 Name:</span> {u.name}</h5>
//                       <h6><span className="user-label">📧 Email:</span> {u.email}</h6>
//                       <h6><span className="user-label">📞 Phone:</span> {u.phone}</h6>
//                       <h6><span className="user-label">🏠 Address:</span> {u.address}</h6>
//                     </div>
//                   </div>
//                 ))}

//                 {users.filter((u) => u.role === 0).length === 0 && (
//                   <div className="text-white mt-4">No regular users found.</div>
//                 )}
//               </div>

//               <div className="text-center">
//                 <button className='btn go-home-btn' onClick={() => navigate('/')}>
//                   🏠 GO TO HOME PAGE
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default Users;

import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import AdminMenu from '../../components/layout/AdminMenu';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/auth/allUser`);
      setUsers(data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

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

  const generateRegisteredUsersReport = async () => {
    const doc = new jsPDF();
    const startY = await setupPDFHeader(doc, 'Registered Users Report');

    const filteredUsers = users.filter((u) => u.role === 0);

    autoTable(doc, {
      startY,
      head: [['#', 'Name', 'Email', 'Phone', 'Address']],
      body: filteredUsers.map((u, i) => [
        i + 1,
        u.name,
        u.email,
        u.phone || 'N/A',
        u.address || 'N/A',
      ]),
      styles: { fontSize: 10, cellPadding: 3 },
      headStyles: { fillColor: [78, 52, 46], textColor: 255 },
      margin: { left: 15, right: 15 },
    });

    doc.save('Registered-Users-Report.pdf');
  };

  const generateUserSummaryReport = async () => {
    const doc = new jsPDF();
    const startY = await setupPDFHeader(doc, 'User Summary Report');

    const filteredUsers = users.filter((u) => u.role === 0);
    const totalUsers = filteredUsers.length;

    const cityCounts = {};
    filteredUsers.forEach((u) => {
      const city = (u.address || 'Unknown').split(',')[1]?.trim() || 'Unknown';
      cityCounts[city] = (cityCounts[city] || 0) + 1;
    });

    const cityTable = Object.entries(cityCounts).map(([city, count]) => [city, count]);

    autoTable(doc, {
      startY,
      body: [['Total Users', totalUsers]],
      styles: { fontSize: 11 },
      margin: { left: 15, right: 15 },
    });

    autoTable(doc, {
      startY: doc.lastAutoTable.finalY + 10,
      head: [['City', 'User Count']],
      body: cityTable,
      styles: { fontSize: 10 },
      headStyles: { fillColor: [78, 52, 46], textColor: 255 },
      margin: { left: 15, right: 15 },
    });

    doc.save('User-Summary-Report.pdf');
  };

  const generateContactSheet = async () => {
    const doc = new jsPDF();
    const startY = await setupPDFHeader(doc, 'User Contact Sheet');

    const filteredUsers = users.filter((u) => u.role === 0);

    autoTable(doc, {
      startY,
      head: [['Name', 'Email', 'Phone']],
      body: filteredUsers.map((u) => [
        u.name,
        u.email,
        u.phone || 'N/A'
      ]),
      styles: { fontSize: 10 },
      headStyles: { fillColor: [78, 52, 46], textColor: 255 },
      margin: { left: 15, right: 15 },
    });

    doc.save('User-Contact-Sheet.pdf');
  };

  return (
    <Layout title={'Dashboard - All Users'}>
      <style>
        {`
          .users-bg {
            background: linear-gradient(140deg, #4e342e 25%, rgb(174, 166, 163) 70%);
            min-height: 100vh;
            padding: 40px 20px;
          }

          .admin-title {
            font-size: 36px;
            font-weight: bold;
            color: #fff;
            text-align: center;
            text-shadow: 1px 1px 2px #000;
            margin-bottom: 30px;
          }

          .user-card {
            background: #4e342e;
            color: white;
            border: 2px solid #3e2723;
            border-radius: 16px;
            padding: 20px;
            height: 100%;
            box-shadow: 0 4px 15px rgba(0,0,0,0.4);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-transform: uppercase;
          }

          .user-card:hover {
            transform: scale(1.02);
            box-shadow: 0 6px 25px rgba(0,0,0,0.5);
          }

          .user-label {
            font-weight: bold;
            color: #ffcc80;
          }

          .go-home-btn {
            background-color: transparent;
            color: #fff;
            border: 2px solid #fff;
            transition: all 0.3s ease;
            margin-top: 40px;
          }

          .go-home-btn:hover {
            background-color: #ffcc80;
            color: #3e2723;
            border-color: #ffcc80;
          }
        `}
      </style>

      <div className='users-bg'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 mb-4">
              <AdminMenu />
            </div>

            <div className="col-md-9">
              <h1 className="admin-title">All Users</h1>

              <div className="mb-4 d-flex flex-wrap gap-2 justify-content-end">
                <button className="btn btn-outline-light btn-sm" onClick={generateRegisteredUsersReport}>
                  📄 Registered Users Report
                </button>
                <button className="btn btn-outline-light btn-sm" onClick={generateUserSummaryReport}>
                  📊 User Summary
                </button>
                <button className="btn btn-outline-light btn-sm" onClick={generateContactSheet}>
                  🧾 Contact Sheet
                </button>
              </div>

              <div className="row">
                {users?.filter((u) => u.role === 0).map((u) => (
                  <div className="col-md-4 mb-4" key={u._id}>
                    <div className="user-card">
                      <h5><span className="user-label">👤 Name:</span> {u.name}</h5>
                      <h6><span className="user-label">📧 Email:</span> {u.email}</h6>
                      <h6><span className="user-label">📞 Phone:</span> {u.phone}</h6>
                      <h6><span className="user-label">🏠 Address:</span> {u.address}</h6>
                    </div>
                  </div>
                ))}

                {users.filter((u) => u.role === 0).length === 0 && (
                  <div className="text-white mt-4">No regular users found.</div>
                )}
              </div>

              <div className="text-center">
                <button className='btn go-home-btn' onClick={() => navigate('/')}>
                  🏠 GO TO HOME PAGE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
