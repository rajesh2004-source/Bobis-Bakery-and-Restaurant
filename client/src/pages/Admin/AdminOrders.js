// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import AdminMenu from "../../components/layout/AdminMenu";
// import Layout from "../../components/layout/Layout";
// import { useAuth } from "../../context/auth";
// import moment from "moment";
// import { Select } from "antd";

// const { Option } = Select;

// const AdminOrders = () => {
//   const [status] = useState([
//     "Not Process",
//     "Processing",
//     "Shipped",
//     "Delivered",
//     "Cancel",
//   ]);
//   const [orders, setOrders] = useState([]);
//   const [auth] = useAuth();

//   const getOrders = async () => {
//     try {
//       const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/auth/all-orders`);
//       const sortedOrders = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//       setOrders(sortedOrders);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     if (auth?.token) getOrders();
//   }, [auth?.token]);

//   const handleChange = async (orderId, value) => {
//     try {
//       await axios.put(`${process.env.REACT_APP_ACT}/api/v1/auth/order-status/${orderId}`, {
//         status: value,
//       });
//       getOrders();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <Layout title="Admin Orders">
//       <div
//         className="container-fluid m-3 p-3"
//         style={{
//           background: "linear-gradient(140deg, #4e342e 20%, #aea6a3 100%)",
//           minHeight: "100vh",
//           paddingBottom: "3rem"
//         }}
//       >
//         <div className="row">
//           <div className="col-md-3 mt-5">
//             <AdminMenu />
//           </div>
//           <div className="col-md-9">
//             <h1 className="text-center text-white mb-4">All Orders</h1>

//             {orders?.map((o, i) => (
//               <div className="border shadow mb-4 bg-white rounded-4 overflow-hidden" key={o._id}>
//                 <table className="table mb-0">
//                   <thead>
//                     <tr style={{ background: "#d7ccc8", color: "black" }}>
//                       <th>NO</th>
//                       <th>STATUS</th>
//                       <th>BUYER</th>
//                       <th>DATE</th>
//                       <th>PAYMENT</th>
//                       <th>QUANTITY</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr style={{ color: "black" }}>
//                       <td>{i + 1}</td>
//                       <td>
//                         <Select
//                           bordered={false}
//                           onChange={(value) => handleChange(o._id, value)}
//                           defaultValue={o?.status}
//                         >
//                           {status.map((s, idx) => (
//                             <Option key={idx} value={s}>
//                               {s}
//                             </Option>
//                           ))}
//                         </Select>
//                       </td>
//                       <td>{o?.buyer?.name}</td>
//                       <td>{moment(o?.createdAt).format("MMMM D, YYYY")}</td>
//                       <td>{o?.payment ? "Success" : "Failed"}</td>
//                       <td>{o?.products?.length}</td>
//                     </tr>
//                   </tbody>
//                 </table>

//                 <div className="container p-3">
//                   {o?.products?.map((p) => (
//                     <div
//                       className="row mb-2 p-3 card flex-row"
//                       key={p._id}
//                       style={{
//                         background: "linear-gradient(140deg, #4e342e 20%, #aea6a3 100%)",
//                         color: "white",
//                         borderRadius: "12px",
//                       }}
//                     >
//                       <div className="col-md-4 d-flex align-items-center justify-content-center">
//                         <img
//                           src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${p._id}`}
//                           className="img-fluid rounded"
//                           alt={p.name}
//                           style={{
//                             maxHeight: "150px",
//                             backgroundColor: "#d7ccc8",
//                             padding: "5px",
//                             borderRadius: "10px",
//                           }}
//                         />
//                       </div>
//                       <div className="col-md-8">
//                         <h5 className="mb-1">{p.name}</h5>
//                         <p className="mb-1">{p.description.substring(0, 40)}...</p>
//                         <h6 style={{ color: "#c8e6c9" }}>Price: ₹{p.price}</h6>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AdminOrders;




import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminMenu from "../../components/layout/AdminMenu";
import Layout from "../../components/layout/Layout";
import { useAuth } from "../../context/auth";
import moment from "moment";
import { Select } from "antd";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const { Option } = Select;

const AdminOrders = () => {
  const [status] = useState(["Not Process", "Processing", "Shipped", "Delivered", "Cancel"]);
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/auth/all-orders`);
      const sortedOrders = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setOrders(sortedOrders);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  const handleChange = async (orderId, value) => {
    try {
      await axios.put(`${process.env.REACT_APP_ACT}/api/v1/auth/order-status/${orderId}`, {
        status: value,
      });
      getOrders();
    } catch (error) {
      console.error(error);
    }
  };

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

  const generateSalesPeriodReport = async () => {
  const doc = new jsPDF();
  const startY = await setupPDFHeader(doc, "Sales Period Report");

  const daily = {};
  const weekly = {};
  const monthly = {};

  orders.forEach((o) => {
    const dayKey = moment(o.createdAt).format("YYYY-MM-DD");
    const weekKey = moment(o.createdAt).startOf("isoWeek").format("YYYY-[W]WW");
    const monthKey = moment(o.createdAt).format("YYYY-MM");

    daily[dayKey] = (daily[dayKey] || 0) + o.products.length;
    weekly[weekKey] = (weekly[weekKey] || 0) + o.products.length;
    monthly[monthKey] = (monthly[monthKey] || 0) + o.products.length;
  });

  const formatTable = (title, dataObj) => {
    autoTable(doc, {
      startY: doc.lastAutoTable ? doc.lastAutoTable.finalY + 10 : startY,
      head: [[title, "Total Products Sold"]],
      body: Object.entries(dataObj).map(([key, val]) => [key, val]),
      styles: { fontSize: 10 },
      headStyles: { fillColor: [78, 52, 46], textColor: 255 },
      margin: { left: 15, right: 15 },
    });
  };

  formatTable("Daily Sales", daily);
  formatTable("Weekly Sales", weekly);
  formatTable("Monthly Sales", monthly);

  doc.save("Sales-Period-Report.pdf");
};

  const generateOrderSummary = async () => {
    const doc = new jsPDF();
    const startY = await setupPDFHeader(doc, "Order Summary Report");

    autoTable(doc, {
      startY,
      head: [["#", "Buyer", "Status", "Date", "Payment", "Items"]],
      body: orders.map((o, i) => [
        i + 1,
        o?.buyer?.name || "N/A",
        o.status,
        moment(o.createdAt).format("YYYY-MM-DD"),
        o.payment ? "Success" : "Failed",
        o.products.length
      ]),
      headStyles: { fillColor: [78, 52, 46], textColor: 255 },
      styles: { fontSize: 10 },
      margin: { left: 15, right: 15 },
    });

    doc.save("Order-Summary-Report.pdf");
  };

  const generateDetailedOrderReport = async () => {
    const doc = new jsPDF();
    let y = await setupPDFHeader(doc, "Detailed Order Report");
  
    for (let i = 0; i < orders.length; i++) {
      const o = orders[i];
  
      doc.setFontSize(12);
      doc.setTextColor(0);
      doc.text(`Order #${i + 1} - ${o?.buyer?.name}`, 15, y);
      doc.setFontSize(10);
      doc.text(
        `Status: ${o.status} | Date: ${moment(o.createdAt).format("YYYY-MM-DD")} | Payment: ${o.payment ? "Success" : "Failed"}`,
        15,
        y + 5
      );
  
      y += 10;
  
      autoTable(doc, {
        startY: y,
        head: [["Product", "Price (₹)", "Description"]],
        body: o.products.map((p) => [
          p.name,
          p.price,
          p.description?.substring(0, 50) + "..."
        ]),
        styles: { fontSize: 9, cellPadding: 3 },
        headStyles: { fillColor: [78, 52, 46], textColor: 255 },
        margin: { left: 15, right: 15 },
      });
  
      // ⚠️ Update `y` ONLY AFTER autoTable finishes
      y = doc.lastAutoTable.finalY + 10;
  
      // Check for page overflow
      if (y > doc.internal.pageSize.getHeight() - 30) {
        doc.addPage();
        y = 20; // Reset for next page
      }
    }
  
    doc.save("Detailed-Order-Report.pdf");
  };
  

  const generateStatusAnalyticsReport = async () => {
    const doc = new jsPDF();
    const startY = await setupPDFHeader(doc, "Order Status Analytics Report");

    const statusCounts = status.reduce((acc, s) => {
      acc[s] = orders.filter((o) => o.status === s).length;
      return acc;
    }, {});

    const total = orders.length;
    const tableData = Object.entries(statusCounts).map(([key, value]) => [key, value]);
    tableData.unshift(["Total Orders", total]);

    autoTable(doc, {
      startY,
      body: tableData,
      styles: { fontSize: 11 },
      margin: { left: 15, right: 15 },
    });

    doc.save("Order-Status-Analytics.pdf");
  };

  return (
    <Layout title="Admin Orders">
      <div
        className="container-fluid m-3 p-3"
        style={{
          background: "linear-gradient(140deg, #4e342e 20%, #aea6a3 100%)",
          minHeight: "100vh",
          paddingBottom: "3rem"
        }}
      >
        <div className="row">
          <div className="col-md-3 mt-5">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h1 className="text-white">All Orders</h1>
              <div>
                <button className="btn btn-outline-light btn-sm me-2" onClick={generateOrderSummary}>
                  Summary Report
                </button>
                <button className="btn btn-outline-light btn-sm me-2" onClick={generateDetailedOrderReport}>
                  Detailed Report
                </button>
                <button className="btn btn-outline-light btn-sm" onClick={generateStatusAnalyticsReport}>
                  Analytics Report
                </button>
               
  <button className="btn btn-outline-light btn-sm me-2" onClick={generateSalesPeriodReport}>
    Summary bbhjbhReport
  </button>
              </div>
            </div>

            {orders?.map((o, i) => (
              <div className="border shadow mb-4 bg-white rounded-4 overflow-hidden" key={o._id}>
                <table className="table mb-0">
                  <thead>
                    <tr style={{ background: "#d7ccc8", color: "black" }}>
                      <th>NO</th>
                      <th>STATUS</th>
                      <th>BUYER</th>
                      <th>DATE</th>
                      <th>PAYMENT</th>
                      <th>QUANTITY</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ color: "black" }}>
                      <td>{i + 1}</td>
                      <td>
                        <Select bordered={false} onChange={(value) => handleChange(o._id, value)} defaultValue={o?.status}>
                          {status.map((s, idx) => (
                            <Option key={idx} value={s}>{s}</Option>
                          ))}
                        </Select>
                      </td>
                      <td>{o?.buyer?.name}</td>
                      <td>{moment(o?.createdAt).format("MMMM D, YYYY")}</td>
                      <td>{o?.payment ? "Success" : "Failed"}</td>
                      <td>{o?.products?.length}</td>
                    </tr>
                  </tbody>
                </table>

                <div className="container p-3">
                  {o?.products?.map((p) => (
                    <div
                      className="row mb-2 p-3 card flex-row"
                      key={p._id}
                      style={{
                        background: "linear-gradient(140deg, #4e342e 20%, #aea6a3 100%)",
                        color: "white",
                        borderRadius: "12px",
                      }}
                    >
                      <div className="col-md-4 d-flex align-items-center justify-content-center">
                        <img
                          src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${p._id}`}
                          className="img-fluid rounded"
                          alt={p.name}
                          style={{
                            maxHeight: "150px",
                            backgroundColor: "#d7ccc8",
                            padding: "5px",
                            borderRadius: "10px",
                          }}
                        />
                      </div>
                      <div className="col-md-8">
                        <h5 className="mb-1">{p.name}</h5>
                        <p className="mb-1">{p.description.substring(0, 40)}...</p>
                        <h6 style={{ color: "#c8e6c9" }}>Price: ₹{p.price}</h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminOrders;
