// import React, { useState, useEffect } from "react";
// import Layout from '../../components/layout/Layout'
// import UserMenu from '../../components/layout/UserMenu'
// import axios from "axios";
// import { useAuth } from "../../context/auth";
// import moment from 'moment';

// const Orders = () => {
//     const [orders, setOrders] = useState([]);
//     const [auth, setAuth] = useAuth();

//     const getOrders = async () => {
//         try {
//             const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/auth/orders`);
//             setOrders(data);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         if (auth?.token) getOrders();
//     }, [auth?.token]);


//     return (
//         <Layout title={'Your Orders'}  >
//             <div className='container-fluid m-3 p-3 dashboard'  style={{
//                 background: 'linear-gradient(140deg , #4e342e  20% ,rgb(174, 166, 163) 100%)',
//                 padding: '20px'
//             }}>
//                 <div className="row">
//                     <div className="col-md-3"> <UserMenu /></div>
//                     <div className="col-md-8">
//                         <h1 className="text-center">All Orders</h1>

//                         {orders?.map((o, i) => {
//                             return (
//                                 <div className="border shadow">
//                                     <table className="table">
//                                         <thead>
//                                             <tr>
//                                                 <th scope="col">NO</th>
//                                                 <th scope="col">STATUS</th>
//                                                 <th scope="col">BUYER</th>
//                                                 <th scope="col"> DATE</th>
//                                                 <th scope="col">PAYMENT</th>
//                                                 <th scope="col">QUANTITY</th>
//                                             </tr>
//                                         </thead>
//                                         <tbody>
//                                             <tr>
//                                                 <td>{i + 1}</td>
//                                                 <td>{o?.status}</td>
//                                                 <td>{o?.buyer?.name}</td>
//                                                 <td>{moment(o?.createAt).fromNow()}</td>
//                                                 <td>{o?.payment.success ? "Success" : "Failed"}</td>
//                                                 <td>{o?.products?.length}</td>
//                                             </tr>
//                                         </tbody>
//                                     </table>
//                                     <div className="container">
//                                         {o?.products?.map((p, i) => (
//                                             <div className="row mb-2 p-3 card flex-row" key={p._id}>
//                                                 <div className="col-md-4">
//                                                     <img
//                                                         src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${p._id}`}
//                                                         className="card-img-top"
//                                                         alt={p.name}
//                                                         width="100px"
//                                                         height={"150px"}
//                                                     />
//                                                 </div>
//                                                 <div className="col-md-8">
//                                                     <b>   <p>{p.name}</p></b>
//                                                     <p>{p.description.substring(0, 30)}</p>
//                                                     <b>  <p style={{ color: "green" }}>Price : {p.price}</p> </b>
//                                                 </div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     )
// }

// export default Orders




import React, { useState, useEffect } from "react";
import Layout from '../../components/layout/Layout';
import UserMenu from '../../components/layout/UserMenu';
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from 'moment';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();

  const getOrders = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/auth/orders`);
      // Sort orders from newest to oldest based on createdAt
      const sortedOrders = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setOrders(sortedOrders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (auth?.token) getOrders();
  }, [auth?.token]);

  return (
    <Layout title={'Your Orders'}>
      <div className='container-fluid m-3 p-3 dashboard' style={{
        background: 'linear-gradient(140deg , #4e342e  20% ,rgb(174, 166, 163) 100%)',
        padding: '20px',
        minHeight: '100vh'
      }}>
        <div className="row">
          <div className="col-md-3 mt-5"> <UserMenu /></div>
          <div className="col-md-8">
            <h1 className="text-center text-white mb-4">All Orders</h1>

            {orders?.map((o, i) => {
              return (
                <div className="border shadow mb-4 bg-white rounded-4 overflow-hidden" key={o._id}>
                  <table className="table mb-0">
                    <thead>
                      <tr style={{ background: '#d7ccc8', color: 'black' }}>
                        <th scope="col">NO</th>
                        <th scope="col">STATUS</th>
                        <th scope="col">BUYER</th>
                        <th scope="col">DATE</th>
                        <th scope="col">PAYMENT</th>
                        <th scope="col">QUANTITY</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ color: 'black' }}>
                        <td>{i + 1}</td>
                        <td>{o?.status}</td>
                        <td>{o?.buyer?.name}</td>
                        <td>{moment(o?.createdAt).format("MMMM D, YYYY")}</td>
                        <td>{o?.payment ? "Success" : "Failed"}</td>
                        <td>{o?.products?.length}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="container p-3">
                    {o?.products?.map((p, i) => (
                      <div className="row mb-2 p-3 card flex-row"
                        key={p._id}
                        style={{
                          background: 'linear-gradient(140deg , #4e342e  20% ,rgb(174, 166, 163) 100%)',
                          color: 'white',
                          borderRadius: '12px'
                        }}>
                        <div className="col-md-4 d-flex align-items-center justify-content-center">
                          <img
                            src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${p._id}`}
                            className="img-fluid rounded"
                            alt={p.name}
                            style={{ maxHeight: '150px', backgroundColor: '#d7ccc8', padding: '5px', borderRadius: '10px' }}
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
              );
            })}
          </div>
        </div>
        <br/>
        <br/>
      </div>
    </Layout>
  );
};

export default Orders;
