
// import React, { useState, useEffect } from 'react';
// import Layout from './../components/layout/Layout';
// import { useCart } from '../context/cart';
// import { useAuth } from '../context/auth';
// import { useNavigate } from 'react-router-dom';
// import DropIn from 'braintree-web-drop-in-react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';

// const CartPage = () => {
//     const [cart, setCart] = useCart();
//     const [auth, setAuth] = useAuth();
//     const [clientToken, setClientToken] = useState("");
//     const [instance, setInstance] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const navigate = useNavigate();

//     const totalPrice = () => {
//         return cart.reduce((total, item) => total + item.price, 0);
//     };

//     const removeCartItem = (pid) => {
//         const updatedCart = cart.filter(item => item._id !== pid);
//         setCart(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     const getToken = async () => {
//         try {
//             const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/product/braintree/token`);
//             setClientToken(data?.clientToken);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         if (auth?.token) getToken();
//     }, [auth?.token]);

//     const handlePayment = async () => {
//         try {
//             setLoading(true);
//             const { nonce } = await instance.requestPaymentMethod();
//             const { data } = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/product/braintree/payment`, { nonce, cart });
//             setLoading(false);
//             setCart([]);
//             localStorage.removeItem('cart');
//             toast.success("Payment Completed Successfully");
//             navigate('/');
//         } catch (error) {
//             console.log(error);
//             toast.error("Payment Failed");
//             setLoading(false);
//         }
//     };


//     return (
//         <Layout title={'Your Cart'}>
//             <div style={{
//                 // background: 'linear-gradient(135deg, #4e342e 0%, #a1887f 100%)',
//                 background:'#fff9f2',
//                 minHeight: '100vh',
//                 padding: '30px 15px'
//             }}>
//                 <div className="container">
//                     <h1 className='text-center text-white mb-4'>Hello, {auth?.user?.name || 'Guest'}</h1>
//                     <h4 className='text-center text-white mb-4'>
//                         {cart?.length
//                             ? `You have ${cart.length} item's in your cart`
//                             : "Your cart is empty"
//                         }
//                     </h4><hr/>

//                     <div className='row'>
//                         <div className='col-md-7'>
//                             {cart.map((p) => (
//                                 <div className='card mb-4' key={p._id} style={{ backgroundColor: '#6d4c41', color: '#fff' }}>
//                                     <div className='row g-0'>
//                                         <div className='col-md-4 d-flex align-items-center justify-content-center'>
//                                             <img src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${p._id}`} className='img-fluid rounded' alt={p.name} style={{ maxHeight: '150px' }} />
//                                         </div>
//                                         <div className='col-md-8 p-3'>
//                                             <h5>{p.name}</h5>
//                                             <p>{p.description.substring(0, 60)}...</p>
//                                             <h6 className='text-success'>₹ {p.price}</h6>
//                                             <button className='btn btn-danger btn-sm mt-2' onClick={() => removeCartItem(p._id)}>Remove</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className='col-md-5'>
//                             <div className='card p-4' style={{ backgroundColor: '#5d4037', color: '#fff' }}>
//                                 <h3 className='mb-3 text-center'>Cart Summary</h3>
//                                 <hr className='border-light' />
//                                 <h4>Total: ₹ <span className='text-success'>{totalPrice()}</span></h4>
//                                 <div className='my-3'>
//                                     <h5>Delivery Address:</h5>
//                                     {auth?.user?.address ? (
//                                         <>
//                                             <p>{auth.user.address}</p>
//                                             <button className='btn btn-warning btn-sm' onClick={() => navigate('/dashboard/user/profile')}>Update Address</button>
//                                         </>
//                                     ) : (
//                                         <>
//                                             {auth?.token ? (
//                                                 <button className='btn btn-warning btn-sm' onClick={() => navigate('/dashboard/user/profile')}>
//                                                     Add Address
//                                                 </button>
//                                             ) : (
//                                                 <button className='btn btn-warning btn-sm' onClick={() => navigate('/login', { state: '/cart' })}>
//                                                     Login to Checkout
//                                                 </button>
//                                             )}
//                                         </>
//                                     )}
//                                 </div>

//                                 {clientToken && cart.length > 0 && (
//                                     <>
//                                         <DropIn
//                                             options={{
//                                                 authorization: clientToken,
//                                                 paypal: { flow: 'vault' },
//                                             }}
//                                             onInstance={(instance) => setInstance(instance)}
//                                         />
//                                         <button className='btn btn-success w-100' onClick={handlePayment} disabled={loading}>
//                                             {loading ? 'Processing...' : 'Make Payment'}
//                                         </button>
//                                     </>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default CartPage;



// import React, { useState, useEffect } from 'react';
// import Layout from './../components/layout/Layout';
// import { useCart } from '../context/cart';
// import { useAuth } from '../context/auth';
// import { useNavigate } from 'react-router-dom';
// import DropIn from 'braintree-web-drop-in-react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';

// const CartPage = () => {
//     const [cart, setCart] = useCart();
//     const [auth, setAuth] = useAuth();
//     const [clientToken, setClientToken] = useState("");
//     const [instance, setInstance] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const navigate = useNavigate();

//     const totalPrice = () => {
//         return cart.reduce((total, item) => total + item.price, 0);
//     };

//     const removeCartItem = (pid) => {
//         const updatedCart = cart.filter(item => item._id !== pid);
//         setCart(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     const getToken = async () => {
//         try {
//             const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/product/braintree/token`);
//             setClientToken(data?.clientToken);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         if (auth?.token) getToken();
//     }, [auth?.token]);

//     const handlePayment = async () => {
//         try {
//             setLoading(true);
//             const { nonce } = await instance.requestPaymentMethod();
//             const { data } = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/product/braintree/payment`, { nonce, cart });
//             setLoading(false);
//             setCart([]);
//             localStorage.removeItem('cart');
//             toast.success("Payment Completed Successfully");
//             navigate('/');
//         } catch (error) {
//             console.log(error);
//             toast.error("Payment Failed");
//             setLoading(false);
//         }
//     };

//     return (
//         <Layout title={'Your Cart'}>
//                     <br/>
//             <div style={{
//                 background: '#fff9f2',
//                 minHeight: '100vh',
//                 padding: '30px 15px',
//                 color: 'black'
//             }}>
//                 <div className="container">
//                     <h1 className='text-center mb-4'>Hello, {auth?.user?.name || 'Guest'}</h1>
//                     <h4 className='text-center mb-4'>
//                         {cart?.length
//                             ? `You have ${cart.length} item(s) in your cart`
//                             : "Your cart is empty"
//                         }
//                     </h4>
//                     <hr />

//                     <div className='row'>
//                         <div className='col-md-7'>
//                             {cart.map((p) => (
//                                 <div className='card mb-4' key={p._id} style={{ backgroundColor: '#f0e6dd', color: 'black' }}>
//                                     <div className='row g-0'>
//                                         <div className='col-md-4 d-flex align-items-center justify-content-center'>
//                                             <img src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${p._id}`} className='img-fluid rounded' alt={p.name} style={{ maxHeight: '150px' }} />
//                                         </div>
//                                         <div className='col-md-8 p-3'>
//                                             <h5>{p.name}</h5>
//                                             <p>{p.description.substring(0, 60)}...</p>
//                                             <h6 className='text-success'>₹ {p.price}</h6>
//                                             <button className='btn btn-danger btn-sm mt-2' onClick={() => removeCartItem(p._id)}>Remove</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className='col-md-5'>
//                             <div className='card p-4' style={{ backgroundColor: '#f7ede2', color: 'black' }}>
//                                 <h3 className='mb-3 text-center'>Cart Summary</h3>
//                                 <hr />
//                                 <h4>Total: ₹ <span className='text-success'>{totalPrice()}</span></h4>
//                                 <div className='my-3'>
//                                     <h5>Delivery Address:</h5>
//                                     {auth?.user?.address ? (
//                                         <>
//                                             <p>{auth.user.address}</p>
//                                             <button className='btn btn-warning btn-sm' onClick={() => navigate('/dashboard/user/profile')}>Update Address</button>
//                                         </>
//                                     ) : (
//                                         <>
//                                             {auth?.token ? (
//                                                 <button className='btn btn-warning btn-sm' onClick={() => navigate('/dashboard/user/profile')}>
//                                                     Add Address
//                                                 </button>
//                                             ) : (
//                                                 <button className='btn btn-warning btn-sm' onClick={() => navigate('/login', { state: '/cart' })}>
//                                                     Login to Checkout
//                                                 </button>
//                                             )}
//                                         </>
//                                     )}
//                                 </div>

//                                 {clientToken && cart.length > 0 && (
//                                     <>
//                                         <DropIn
//                                             options={{
//                                                 authorization: clientToken,
//                                                 paypal: { flow: 'vault' },
//                                             }}
//                                             onInstance={(instance) => setInstance(instance)}
//                                         />
//                                         <button className='btn btn-success w-100' onClick={handlePayment} disabled={loading}>
//                                             {loading ? 'Processing...' : 'Make Payment'}
//                                         </button>
//                                     </>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default CartPage;




// import React, { useState, useEffect } from 'react';
// import Layout from './../components/layout/Layout';
// import { useCart } from '../context/cart';
// import { useAuth } from '../context/auth';
// import { useNavigate } from 'react-router-dom';
// import DropIn from 'braintree-web-drop-in-react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import { FaShoppingCart, FaTrashAlt, FaHome, FaWallet, FaBoxOpen, FaAddressCard } from 'react-icons/fa';
// import { MdPayment } from 'react-icons/md';

// const CartPage = () => {
//     const [cart, setCart] = useCart();
//     const [auth, setAuth] = useAuth();
//     const [clientToken, setClientToken] = useState("");
//     const [instance, setInstance] = useState(null);
//     const [loading, setLoading] = useState(false);

//     const navigate = useNavigate();

//     const totalPrice = () => {
//         return cart.reduce((total, item) => total + item.price, 0);
//     };

//     const removeCartItem = (pid) => {
//         const updatedCart = cart.filter(item => item._id !== pid);
//         setCart(updatedCart);
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//     };

//     const getToken = async () => {
//         try {
//             const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/product/braintree/token`);
//             setClientToken(data?.clientToken);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     useEffect(() => {
//         if (auth?.token) getToken();
//     }, [auth?.token]);

//     const handlePayment = async () => {
//         try {
//             setLoading(true);
//             const { nonce } = await instance.requestPaymentMethod();
//             const { data } = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/product/braintree/payment`, { nonce, cart });
//             setLoading(false);
//             setCart([]);
//             localStorage.removeItem('cart');
//             toast.success("Payment Completed Successfully");
//             navigate('/');
//         } catch (error) {
//             console.log(error);
//             toast.error("Payment Failed");
//             setLoading(false);
//         }
//     };

//     return (
//         <Layout title={'Your Cart'}>
//             <br />
//             <div style={{
//                 background: '#fff9f2',
//                 minHeight: '100vh',
//                 padding: '30px 15px',
//                 color: 'black'
//             }}>
//                 <div className="container">
//                     <h1 className='text-center mb-4'>
//                         <FaShoppingCart className='me-2' />
//                         Hello, {auth?.user?.name || 'Guest'}
//                     </h1>
//                     <h4 className='text-center mb-4'>
//                         {cart?.length
//                             ? `🧾 You have ${cart.length} item(s) in your cart`
//                             : "🛒 Your cart is empty"
//                         }
//                     </h4>
//                     <hr />

//                     <div className='row'>
//                         <div className='col-md-7'>
//                             {cart.map((p) => (
//                                 <div className='card mb-4' key={p._id} style={{ backgroundColor: '#f0e6dd', color: 'black' }}>
//                                     <div className='row g-0'>
//                                         <div className='col-md-4 d-flex align-items-center justify-content-center'>
//                                             <img src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${p._id}`} className='img-fluid rounded' alt={p.name} style={{ maxHeight: '150px' }} />
//                                         </div>
//                                         <div className='col-md-8 p-3'>
//                                             <h5><FaBoxOpen className='me-2' />{p.name}</h5>
//                                             <p>{p.description.substring(0, 60)}...</p>
//                                             <h6 className='text-success'>₹ {p.price}</h6>
//                                             <button className='btn btn-danger btn-sm mt-2' onClick={() => removeCartItem(p._id)}>
//                                                 <FaTrashAlt className='me-1' /> Remove
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className='col-md-5'>
//                             <div className='card p-4' style={{ backgroundColor: '#f7ede2', color: 'black' }}>
//                                 <h3 className='mb-3 text-center'><FaWallet className='me-2' />Cart Summary</h3>
//                                 <hr />
//                                 <h4>Total: ₹ <span className='text-success'>{totalPrice()}</span></h4>
//                                 <div className='my-3'>
//                                     <h5><FaAddressCard className='me-2' />Delivery Address:</h5>
//                                     {auth?.user?.address ? (
//                                         <>
//                                             <p>{auth.user.address}</p>
//                                             <button className='btn btn-warning btn-sm' onClick={() => navigate('/dashboard/user/profile')}>
//                                                 <FaHome className='me-1' />Update Address
//                                             </button>
//                                         </>
//                                     ) : (
//                                         <>
//                                             {auth?.token ? (
//                                                 <button className='btn btn-warning btn-sm' onClick={() => navigate('/dashboard/user/profile')}>
//                                                     <FaHome className='me-1' />Add Address
//                                                 </button>
//                                             ) : (
//                                                 <button className='btn btn-warning btn-sm' onClick={() => navigate('/login', { state: '/cart' })}>
//                                                     Login to Checkout
//                                                 </button>
//                                             )}
//                                         </>
//                                     )}
//                                 </div>

//                                 {clientToken && cart.length > 0 && (
//                                     <>
//                                         <DropIn
//                                             options={{
//                                                 authorization: clientToken,
//                                                 paypal: { flow: 'vault' },
//                                             }}
//                                             onInstance={(instance) => setInstance(instance)}
//                                         />
//                                         <button className='btn btn-success w-100' onClick={handlePayment} disabled={loading}>
//                                             <MdPayment className='me-2' />
//                                             {loading ? 'Processing...' : 'Make Payment'}
//                                         </button>
//                                     </>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default CartPage;






// import React, { useState, useEffect } from 'react';
// import Layout from './../components/layout/Layout';
// import { useCart } from '../context/cart';
// import { useAuth } from '../context/auth';
// import { useNavigate } from 'react-router-dom';
// import DropIn from 'braintree-web-drop-in-react';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import { FaShoppingCart, FaTrashAlt, FaHome, FaWallet, FaBoxOpen, FaAddressCard } from 'react-icons/fa';
// import { MdPayment } from 'react-icons/md';
// import jsPDF from 'jspdf';

// const CartPage = () => {
//   const [cart, setCart] = useCart();
//   const [auth] = useAuth();
//   const [clientToken, setClientToken] = useState("");
//   const [instance, setInstance] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const totalPrice = () => cart.reduce((total, item) => total + item.price, 0);

//   const removeCartItem = (pid) => {
//     const updatedCart = cart.filter(item => item._id !== pid);
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

//   const getToken = async () => {
//     try {
//       const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/product/braintree/token`);
//       setClientToken(data?.clientToken);
//     } catch (error) {
//       console.error("Token fetch error:", error);
//     }
//   };

//   useEffect(() => {
//     if (auth?.token) getToken();
//   }, [auth?.token]);

//   const handlePayment = async () => {
//     if (!instance) {
//       toast.error("Payment system not ready.");
//       return;
//     }
//     try {
//       setLoading(true);
//       const { nonce } = await instance.requestPaymentMethod();
//       const { data } = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/product/braintree/payment`, {
//         nonce,
//         cart,
//       });

//       toast.success("Payment successful 🎉");

//       // PDF Invoice
//       const invoiceNumber = `INV-${Date.now()}`;
//       const doc = new jsPDF();
//       const margin = 20;
//       let y = margin;

//       // ⚠️ Replace this with your real logo base64
//       const logoBase64 = 'YOUR_BASE64_LOGO_HERE';

//       try {
//         doc.addImage(logoBase64, 'PNG', margin, y, 40, 20);
//       } catch (err) {
//         console.warn("Logo couldn't be added. Check your base64 string.");
//       }

//       doc.setFontSize(18);
//       doc.text("MyStore - Payment Receipt", margin + 50, y + 10);
//       y += 30;

//       doc.setFontSize(12);
//       doc.text(`Invoice #: ${invoiceNumber}`, margin, y);
//       doc.text(`Date: ${new Date().toLocaleString()}`, margin + 100, y);
//       y += 14;

//       doc.text(`Customer: ${auth?.user?.name || 'Guest'}`, margin, y);
//       y += 8;
//       doc.text(`Email: ${auth?.user?.email || 'N/A'}`, margin, y);
//       y += 8;
//       doc.text(`Address: ${auth?.user?.address || 'N/A'}`, margin, y);
//       y += 12;

//       doc.setFontSize(13);
//       doc.text("Items Purchased:", margin, y);
//       y += 8;

//       doc.setFontSize(12);
//       cart.forEach((item, index) => {
//         doc.text(`${index + 1}. ${item.name} - ₹${item.price}`, margin + 5, y);
//         y += 8;
//       });

//       y += 6;
//       doc.setFontSize(13);
//       doc.text(`Total Paid: ₹${totalPrice()}`, margin, y);
//       y += 8;
//       doc.text("Payment Status: ✅ Success", margin, y);

//       doc.save(`${invoiceNumber}.pdf`);

//       setCart([]);
//       localStorage.removeItem('cart');
//       navigate('/');
//     } catch (error) {
//       console.error("Payment error:", error);
//       toast.error("Payment failed. Try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <Layout title={'Your Cart'}>
//       <div style={{ background: '#fff9f2', minHeight: '100vh', padding: '30px 15px', color: 'black' }}>
//         <div className="container">
//           <h1 className='text-center mb-4'>
//             <FaShoppingCart className='me-2' />
//             Hello, {auth?.user?.name || 'Guest'}
//           </h1>
//           <h4 className='text-center mb-4'>
//             {cart?.length ? `🧾 You have ${cart.length} item(s) in your cart` : "🛒 Your cart is empty"}
//           </h4>
//           <hr />
//           <div className='row'>
//             <div className='col-md-7'>
//               {cart.map((p) => (
//                 <div className='card mb-4' key={p._id} style={{ backgroundColor: '#f0e6dd', color: 'black' }}>
//                   <div className='row g-0'>
//                     <div className='col-md-4 d-flex align-items-center justify-content-center'>
//                       <img src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${p._id}`} className='img-fluid rounded' alt={p.name} style={{ maxHeight: '150px' }} />
//                     </div>
//                     <div className='col-md-8 p-3'>
//                       <h5><FaBoxOpen className='me-2' />{p.name}</h5>
//                       <p>{p.description.substring(0, 60)}...</p>
//                       <h6 className='text-success'>₹ {p.price}</h6>
//                       <button className='btn btn-danger btn-sm mt-2' onClick={() => removeCartItem(p._id)}>
//                         <FaTrashAlt className='me-1' /> Remove
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className='col-md-5'>
//               <div className='card p-4' style={{ backgroundColor: '#f7ede2', color: 'black' }}>
//                 <h3 className='mb-3 text-center'><FaWallet className='me-2' />Cart Summary</h3>
//                 <hr />
//                 <h4>Total: ₹ <span className='text-success'>{totalPrice()}</span></h4>
//                 <div className='my-3'>
//                   <h5><FaAddressCard className='me-2' />Delivery Address:</h5>
//                   {auth?.user?.address ? (
//                     <>
//                       <p>{auth.user.address}</p>
//                       <button className='btn btn-warning btn-sm' onClick={() => navigate('/dashboard/user/profile')}>
//                         <FaHome className='me-1' />Update Address
//                       </button>
//                     </>
//                   ) : auth?.token ? (
//                     <button className='btn btn-warning btn-sm' onClick={() => navigate('/dashboard/user/profile')}>
//                       <FaHome className='me-1' />Add Address
//                     </button>
//                   ) : (
//                     <button className='btn btn-warning btn-sm' onClick={() => navigate('/login', { state: '/cart' })}>
//                       Login to Checkout
//                     </button>
//                   )}
//                 </div>

//                 {clientToken && cart.length > 0 && (
//                   <>
//                     <DropIn
//                       options={{ authorization: clientToken, paypal: { flow: 'vault' } }}
//                       onInstance={(instance) => setInstance(instance)}
//                     />
//                     <button
//                       className='btn btn-success w-100'
//                       onClick={handlePayment}
//                       disabled={loading || !instance}
//                     >
//                       <MdPayment className='me-2' />
//                       {loading ? 'Processing...' : 'Make Payment'}
//                     </button>
//                   </>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CartPage;

// import React, { useState } from 'react';
// import Layout from './../components/layout/Layout';
// import { useCart } from '../context/cart';
// import { useAuth } from '../context/auth';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import { FaShoppingCart, FaTrashAlt, FaHome, FaWallet, FaBoxOpen, FaAddressCard } from 'react-icons/fa';
// import { MdPayment } from 'react-icons/md';
// import jsPDF from 'jspdf';

// const CartPage = () => {
//   const [cart, setCart] = useCart();
//   const [auth] = useAuth();
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const totalPrice = () => {
//     return cart.reduce((total, item) => total + item.price, 0);
//   };

//   const removeCartItem = (pid) => {
//     const updatedCart = cart.filter(item => item._id !== pid);
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     toast.success('Item removed from cart');
//   };

//   const loadRazorpayScript = (src) => {
//     return new Promise((resolve) => {
//       const script = document.createElement('script');
//       script.src = src;
//       script.onload = () => {
//         resolve(true);
//       };
//       script.onerror = () => {
//         resolve(false);
//       };
//       document.body.appendChild(script);
//     });
//   };

//   const handlePayment = async () => {
//     try {
//       setLoading(true);

//       // Load Razorpay script
//       const res = await loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js');
//       if (!res) {
//         toast.error("Razorpay SDK failed to load");
//         return;
//       }

//       // Create order on backend
//       const { data } = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/product/razorpay/create-order`, {
//         cart
//       });

//       const options = {
//         key: process.env.REACT_APP_RAZORPAY_KEY_ID,
//         amount: data.order.amount,
//         currency: data.order.currency,
//         name: "My Bakery Shop",
//         description: "Payment for your delicious treats",
//         image: "https://example.com/your_logo.jpg", // Replace with your logo
//         order_id: data.order.id,
//         handler: async function(response) {
//           try {
//             // Verify payment on backend
//             await axios.post(`${process.env.REACT_APP_ACT}/api/v1/product/razorpay/verify-payment`, {
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//               cart
//             });

//             toast.success("Payment successful 🎉");
//             generateInvoice(response.razorpay_order_id, response.razorpay_payment_id);

//             setCart([]);
//             localStorage.removeItem('cart');
//             navigate('/orders');
//           } catch (error) {
//             console.error("Verification error:", error);
//             toast.error("Payment verification failed");
//           }
//         },
//         prefill: {
//           name: auth?.user?.name || 'Customer',
//           email: auth?.user?.email || 'customer@example.com',
//           contact: auth?.user?.phone || '9999999999'
//         },
//         notes: {
//           address: auth?.user?.address || 'No address provided'
//         },
//         theme: {
//           color: "#F37254" // Your bakery theme color
//         }
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();

//     } catch (error) {
//       console.error("Payment error:", error);
//       toast.error("Payment initialization failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const generateInvoice = (orderId, paymentId) => {
//     const invoiceNumber = `INV-${Date.now()}`;
//     const doc = new jsPDF();
//     const margin = 20;
//     let y = margin;

//     // Add logo (replace with your base64 logo or URL)
//     // doc.addImage(logoData, 'PNG', margin, y, 40, 20);
//     // y += 30;

//     doc.setFontSize(18);
//     doc.text("My Bakery Shop - Invoice", margin, y);
//     y += 10;

//     doc.setFontSize(12);
//     doc.text(`Invoice #: ${invoiceNumber}`, margin, y);
//     doc.text(`Date: ${new Date().toLocaleDateString()}`, 110, y);
//     y += 10;

//     doc.text(`Order ID: ${orderId}`, margin, y);
//     doc.text(`Payment ID: ${paymentId}`, 110, y);
//     y += 10;

//     doc.text(`Customer: ${auth?.user?.name || 'Guest'}`, margin, y);
//     y += 8;
//     doc.text(`Email: ${auth?.user?.email || 'N/A'}`, margin, y);
//     y += 8;
//     doc.text(`Address: ${auth?.user?.address || 'N/A'}`, margin, y);
//     y += 15;

//     // Items header
//     doc.setFontSize(14);
//     doc.text("Items Purchased:", margin, y);
//     y += 10;

//     // Items list
//     doc.setFontSize(12);
//     cart.forEach((item, index) => {
//       doc.text(`${index + 1}. ${item.name} - ₹${item.price}`, margin + 5, y);
//       y += 8;
//     });

//     y += 10;
//     doc.setFontSize(14);
//     doc.text(`Total: ₹${totalPrice()}`, margin, y);
//     y += 10;
//     doc.text("Thank you for your purchase!", margin, y);

//     doc.save(`${invoiceNumber}.pdf`);
//   };

//   return (
//     <Layout title={'Your Cart'}>
//         <br/>

//       <div className="container-fluid" style={{ backgroundColor: '#fff9f2', minHeight: '100vh', padding: '20px' }}>
//         <div className="row">
//           <div className="col-md-12">
//             <h1 className="text-center mb-4">
//               <FaShoppingCart className="me-2" />
//               {auth?.user?.name ? `${auth.user.name}'s Cart` : 'Your Cart'}
//             </h1>
//             <h4 className="text-center mb-4">
//               {cart.length > 0 
//                 ? `You have ${cart.length} item${cart.length > 1 ? 's' : ''} in your cart` 
//                 : "Your cart is empty"}
//             </h4>
//           </div>
//         </div>

//         <div className="row">
//           {/* Cart Items Column */}
//           <div className="col-md-8">
//             {cart.length === 0 ? (
//               <div className="text-center">
//                 <img 
//                   src="/empty-cart.png" 
//                   alt="Empty Cart" 
//                   style={{ maxWidth: '300px' }}
//                 />
//                 <button 
//                   className="btn btn-primary mt-3"
//                   onClick={() => navigate('/')}
//                 >
//                   Continue Shopping
//                 </button>
//               </div>
//             ) : (
//               cart.map((product) => (
//                 <div className="card mb-3" key={product._id} style={{ backgroundColor: '#f8f9fa' }}>
//                   <div className="row g-0">
//                     <div className="col-md-4 d-flex align-items-center justify-content-center p-2">
//                       <img
//                         src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${product._id}`}
//                         className="img-fluid rounded"
//                         alt={product.name}
//                         style={{ maxHeight: '200px', objectFit: 'cover' }}
//                       />
//                     </div>
//                     <div className="col-md-8">
//                       <div className="card-body">
//                         <h5 className="card-title">
//                           <FaBoxOpen className="me-2" />
//                           {product.name}
//                         </h5>
//                         <p className="card-text">
//                           {product.description?.substring(0, 100)}...
//                         </p>
//                         <h6 className="text-success">₹ {product.price}</h6>
//                         <button
//                           className="btn btn-danger btn-sm"
//                           onClick={() => removeCartItem(product._id)}
//                         >
//                           <FaTrashAlt className="me-1" /> Remove
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Order Summary Column */}
//           <div className="col-md-4">
//             <div className="card p-3" style={{ backgroundColor: '#f7ede2' }}>
//               <h3 className="mb-3 text-center">
//                 <FaWallet className="me-2" />
//                 Order Summary
//               </h3>
//               <hr />
//               <h5>Total Items: {cart.length}</h5>
//               <h4 className="my-3">
//                 Total Amount: ₹ <span className="text-success">{totalPrice()}</span>
//               </h4>

//               <div className="mb-3">
//                 <h5>
//                   <FaAddressCard className="me-2" />
//                   Delivery Address:
//                 </h5>
//                 {auth?.user?.address ? (
//                   <>
//                     <p>{auth.user.address}</p>
//                     <button
//                       className="btn btn-warning btn-sm"
//                       onClick={() => navigate('/dashboard/user/profile')}
//                     >
//                       <FaHome className="me-1" />
//                       Update Address
//                     </button>
//                   </>
//                 ) : auth?.token ? (
//                   <button
//                     className="btn btn-warning btn-sm"
//                     onClick={() => navigate('/dashboard/user/profile')}
//                   >
//                     <FaHome className="me-1" />
//                     Add Address
//                   </button>
//                 ) : (
//                   <button
//                     className="btn btn-warning btn-sm"
//                     onClick={() => navigate('/login', { state: '/cart' })}
//                   >
//                     Login to Checkout
//                   </button>
//                 )}
//               </div>

//               {cart.length > 0 && auth?.token && (
//                 <button
//                   className="btn btn-success w-100 mt-2"
//                   onClick={handlePayment}
//                   disabled={loading}
//                 >
//                   <MdPayment className="me-2" />
//                   {loading ? 'Processing...' : 'Proceed to Payment'}
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CartPage;


// import React, { useState } from 'react';
// import Layout from './../components/layout/Layout';
// import { useCart } from '../context/cart';
// import { useAuth } from '../context/auth';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-hot-toast';
// import { FaShoppingCart, FaTrashAlt, FaHome, FaWallet, FaBoxOpen, FaAddressCard } from 'react-icons/fa';
// import { MdPayment } from 'react-icons/md';
// import jsPDF from 'jspdf';

// const CartPage = () => {
//   const [cart, setCart] = useCart();
//   const [auth] = useAuth();
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const totalPrice = () => {
//     return cart.reduce((total, item) => total + item.price, 0);
//   };

//   const removeCartItem = (pid) => {
//     const updatedCart = cart.filter(item => item._id !== pid);
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//     toast.success('Item removed from cart');
//   };

//   const loadRazorpayScript = (src) => {
//     return new Promise((resolve) => {
//       const script = document.createElement('script');
//       script.src = src;
//       script.onload = () => {
//         resolve(true);
//       };
//       script.onerror = () => {
//         resolve(false);
//       };
//       document.body.appendChild(script);
//     });
//   };

//   const handlePayment = async () => {
//     try {
//       setLoading(true);

//       // Load Razorpay script
//       const res = await loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js');
//       if (!res) {
//         toast.error("Razorpay SDK failed to load");
//         return;
//       }

//       // Create order on backend
//       const { data } = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/product/razorpay/create-order`, {
//         cart
//       });

//       const options = {
//         key: process.env.REACT_APP_RAZORPAY_KEY_ID,
//         amount: data.order.amount,
//         currency: data.order.currency,
//         name: "My Bakery Shop",
//         description: "Payment for your delicious treats",
//         image: "https://example.com/your_logo.jpg", // Replace with your logo
//         order_id: data.order.id,
//         handler: async function (response) {
//           try {
//             // Verify payment on backend
//             await axios.post(`${process.env.REACT_APP_ACT}/api/v1/product/razorpay/verify-payment`, {
//               razorpay_order_id: response.razorpay_order_id,
//               razorpay_payment_id: response.razorpay_payment_id,
//               razorpay_signature: response.razorpay_signature,
//               cart
//             });

//             toast.success("Payment successful 🎉");
//             generateInvoice(response.razorpay_order_id, response.razorpay_payment_id);

//             setCart([]);
//             localStorage.removeItem('cart');
//             navigate('/orders');
//           } catch (error) {
//             console.error("Verification error:", error);
//             toast.error("Payment verification failed");
//           }
//         },
//         prefill: {
//           name: auth?.user?.name || 'Customer',
//           email: auth?.user?.email || 'customer@example.com',
//           contact: auth?.user?.phone || '9999999999'
//         },
//         notes: {
//           address: auth?.user?.address || 'No address provided'
//         },
//         theme: {
//           color: "#F37254" // Your bakery theme color
//         }
//       };

//       const rzp = new window.Razorpay(options);
//       rzp.open();

//     } catch (error) {
//       console.error("Payment error:", error);
//       toast.error("Payment initialization failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const generateInvoice = (orderId, paymentId) => {
//     const invoiceNumber = `INV-${Date.now()}`;
//     const doc = new jsPDF();
//     const margin = 20;
//     let y = margin;

//     doc.setFontSize(18);
//     doc.text("My Bakery Shop - Invoice", margin, y);
//     y += 10;

//     doc.setFontSize(12);
//     doc.text(`Invoice #: ${invoiceNumber}`, margin, y);
//     doc.text(`Date: ${new Date().toLocaleDateString()}`, 110, y);
//     y += 10;

//     doc.text(`Order ID: ${orderId}`, margin, y);
//     doc.text(`Payment ID: ${paymentId}`, 110, y);
//     y += 10;

//     doc.text(`Customer: ${auth?.user?.name || 'Guest'}`, margin, y);
//     y += 8;
//     doc.text(`Email: ${auth?.user?.email || 'N/A'}`, margin, y);
//     y += 8;
//     doc.text(`Address: ${auth?.user?.address || 'N/A'}`, margin, y);
//     y += 15;

//     doc.setFontSize(14);
//     doc.text("Items Purchased:", margin, y);
//     y += 10;

//     doc.setFontSize(12);
//     cart.forEach((item, index) => {
//       doc.text(`${index + 1}. ${item.name} - ₹${item.price}`, margin + 5, y);
//       y += 8;
//     });

//     y += 10;
//     doc.setFontSize(14);
//     doc.text(`Total: ₹${totalPrice()}`, margin, y);
//     y += 10;
//     doc.text("Thank you for your purchase!", margin, y);

//     doc.save(`${invoiceNumber}.pdf`);
//   };

//   return (
//     <Layout title={'Your Cart'}>
//       <br />
//       <div className="container-fluid" style={{ backgroundColor: '#fff9f2', minHeight: '100vh', padding: '20px' }}>
//         <div className="row">
//           <div className="col-md-12">
//             <h1 className="text-center mb-4">
//               <FaShoppingCart className="me-2" />
//               {auth?.user?.name ? `${auth.user.name}'s Cart` : 'Your Cart'}
//             </h1>
//             <h4 className="text-center mb-4">
//               {cart.length > 0
//                 ? `You have ${cart.length} item${cart.length > 1 ? 's' : ''} in your cart`
//                 : "Your cart is empty"}
//             </h4>
//           </div>
//         </div>

//         <div className="row">
//           {/* Cart Items Column */}
//           <div className="col-md-8">
//             {cart.length === 0 ? (
//               <div className="text-center">
//                 <img
//                   src="/empty-cart.png"
//                   alt="Empty Cart"
//                   style={{ maxWidth: '300px' }}
//                 />
//                 <button
//                   className="btn btn-primary mt-3"
//                   onClick={() => navigate('/')}
//                 >
//                   Continue Shopping
//                 </button>
//               </div>
//             ) : (
//               cart.map((product) => (
//                 <div className="card mb-3" key={product._id} style={{ backgroundColor: '#f8f9fa' }}>
//                   <div className="row g-0">
//                     <div className="col-md-4 d-flex align-items-center justify-content-center p-2">
//                       <img
//                         src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${product._id}`}
//                         className="img-fluid rounded"
//                         alt={product.name}
//                         style={{ maxHeight: '200px', objectFit: 'cover' }}
//                       />
//                     </div>
//                     <div className="col-md-8">
//                       <div className="card-body text-center"> {/* Added text-center here */}
//                         <h5 className="card-title">
//                           <FaBoxOpen className="me-2" />
//                           {product.name}
//                         </h5>
//                         <p className="card-text mx-auto" style={{ maxWidth: '80%' }}> {/* Centered description */}
//                           {product.description?.substring(0, 100)}...
//                         </p>
//                         <h6 className="text-success">₹ {product.price}</h6>
//                         <button
//                           className="btn btn-danger btn-sm"
//                           onClick={() => removeCartItem(product._id)}
//                         >
//                           <FaTrashAlt className="me-1" /> Remove
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Order Summary Column */}
//           <div className="col-md-4">
//             <div className="card p-3" style={{ backgroundColor: '#f7ede2' }}>
//               <h3 className="mb-3 text-center">
//                 <FaWallet className="me-2" />
//                 Order Summary
//               </h3>
//               <hr />
//               <h5>Total Items: {cart.length}</h5>
//               <h4 className="my-3">
//                 Total Amount: ₹ <span className="text-success">{totalPrice()}</span>
//               </h4>

//               <div className="mb-3">
//                 <h5>
//                   <FaAddressCard className="me-2" />
//                   Delivery Address:
//                 </h5>
//                 {auth?.user?.address ? (
//                   <>
//                     <p>{auth.user.address}</p>
//                     <button
//                       className="btn btn-warning btn-sm"
//                       onClick={() => navigate('/dashboard/user/profile')}
//                     >
//                       <FaHome className="me-1" />
//                       Update Address
//                     </button>
//                   </>
//                 ) : auth?.token ? (
//                   <button
//                     className="btn btn-warning btn-sm"
//                     onClick={() => navigate('/dashboard/user/profile')}
//                   >
//                     <FaHome className="me-1" />
//                     Add Address
//                   </button>
//                 ) : (
//                   <button
//                     className="btn btn-warning btn-sm"
//                     onClick={() => navigate('/login', { state: '/cart' })}
//                   >
//                     Login to Checkout
//                   </button>
//                 )}
//               </div>

//               {cart.length > 0 && auth?.token && (
//                 <button
//                   className="btn btn-success w-100 mt-2"
//                   onClick={handlePayment}
//                   disabled={loading}
//                 >
//                   <MdPayment className="me-2" />
//                   {loading ? 'Processing...' : 'Proceed to Payment'}
//                 </button>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CartPage;




import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { useCart } from '../context/cart';
import { useAuth } from '../context/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FaShoppingCart, FaTrashAlt, FaHome, FaWallet, FaBoxOpen, FaAddressCard } from 'react-icons/fa';
import { MdPayment } from 'react-icons/md';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const CartPage = () => {
  const [cart, setCart] = useCart();
  const [auth] = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const totalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const removeCartItem = (pid) => {
    const updatedCart = cart.filter(item => item._id !== pid);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success('Item removed from cart');
  };

  const loadRazorpayScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const generateInvoice = (orderId, paymentId) => {
    const invoiceNumber = `INV-${Date.now().toString().slice(-6)}`;
    const doc = new jsPDF();
    const margin = 15;
    const pageWidth = doc.internal.pageSize.getWidth();
    let y = margin;
  
    // Add logo
    const img = new Image();
    img.src = `${window.location.origin}/images/GreenMarketingLogo.png`;
    
    img.onload = () => {
      // Logo dimensions and positioning
      const imgWidth = 50;
      const imgHeight = 30;
      const imgX = (pageWidth - imgWidth) / 2;
      
      // Add logo and header
      doc.addImage(img, 'PNG', imgX, y, imgWidth, imgHeight);
      y += imgHeight + 10;
  
      // Shop information
      doc.setFontSize(18);
      doc.setTextColor(78, 52, 46); // Brown color
      doc.text("Bobi's Bakery - Payment Receipt", pageWidth / 2, y, { align: 'center' });
      y += 8;
  
      doc.setFontSize(10);
      doc.setTextColor(100);
      doc.text("123 Bakery Street, Sweet Town | Phone: (123) 456-7890", pageWidth / 2, y, { align: 'center' });
      y += 15;
  
      // Invoice details table
      const details = [
        { label: 'Invoice Number', value: invoiceNumber },
        { label: 'Order ID', value: orderId },
        { label: 'Payment ID', value: paymentId },
        { label: 'Date', value: new Date().toLocaleString() },
        { label: 'Customer Name', value: auth?.user?.name || 'Guest' },
        { label: 'Email', value: auth?.user?.email || 'N/A' },
        { label: 'Phone', value: auth?.user?.phone || 'N/A' },
        { label: 'Delivery Address', value: auth?.user?.address || 'N/A' }
      ];
  
      // Create a perfect two-column layout
      autoTable(doc, {
        startY: y,
        body: [
          [
            { content: 'Invoice Number:', styles: { fontStyle: 'bold' }},
            { content: invoiceNumber },
            { content: 'Email:', styles: { fontStyle: 'bold' }},
            { content: auth?.user?.email || 'N/A' }
          ],
          [
            { content: 'Order ID:', styles: { fontStyle: 'bold' }},
            { content: orderId },
            { content: 'Phone:', styles: { fontStyle: 'bold' }},
            { content: auth?.user?.phone || 'N/A' }
          ],
          [
            { content: 'Payment ID:', styles: { fontStyle: 'bold' }},
            { content: paymentId },
            { content: 'Delivery Address:', styles: { fontStyle: 'bold' }},
            { content: auth?.user?.address || 'N/A' }
          ],
          [
            { content: 'Date:', styles: { fontStyle: 'bold' }},
            { content: new Date().toLocaleString() },
            '',
            ''
          ]
        ],
        columnStyles: {
          0: { cellWidth: 35, fontStyle: 'bold' },
          1: { cellWidth: 50 },
          2: { cellWidth: 35, fontStyle: 'bold' },
          3: { cellWidth: 'auto' }
        },
        styles: {
          fontSize: 10,
          cellPadding: 3,
          overflow: 'linebreak'
        },
        margin: { left: margin, right: margin },
        tableWidth: 'wrap'
      });
  
      y = doc.lastAutoTable.finalY + 15;
  
      // Order items header
      doc.setFontSize(14);
      doc.setTextColor(78, 52, 46);
      doc.text("Order Items", margin, y);
      y += 8;
  
      // Order items table
      autoTable(doc, {
        startY: y,
        head: [['#', 'Item', 'Price (₹)']],
        body: cart.map((item, index) => [
          index + 1,
          item.name,
          { content: item.price.toFixed(2), styles: { halign: 'right' }}
        ]),
        headStyles: {
          fillColor: [78, 52, 46],
          textColor: 255,
          fontStyle: 'bold'
        },
        columnStyles: {
          0: { cellWidth: 10, halign: 'center' },
          1: { cellWidth: 'auto' },
          2: { cellWidth: 30, halign: 'right' }
        },
        styles: {
          fontSize: 10,
          cellPadding: 4
        },
        margin: { left: margin, right: margin }
      });
  
      y = doc.lastAutoTable.finalY + 10;
  
      // Total amounts - perfectly aligned
      const totalX = pageWidth - margin - 10;
      doc.setFontSize(12);
      
      doc.text("Subtotal:", totalX - 50, y, { align: 'left' });
      doc.text(`${totalPrice().toFixed(2)}`, totalX, y, { align: 'right' });
      y += 7;
  
      doc.text("Delivery Charge:", totalX - 50, y, { align: 'left' });
      doc.text("0.00", totalX, y, { align: 'right' });
      y += 7;
  
      doc.setFontSize(14);
      doc.setFont(undefined, 'bold');
      doc.text("Total Amount:", totalX - 50, y, { align: 'left' });
      doc.text(`${totalPrice().toFixed(2)}`, totalX, y, { align: 'right' });
      y += 15;
  
      // Payment method
      doc.setFontSize(12);
      doc.text(`Payment Method: Razorpay (${paymentId})`, margin, y);
      y += 15;
  
      // Thank you message
      doc.setFontSize(14);
      doc.setTextColor(78, 52, 46);
      doc.text("Thank you for your order!", pageWidth / 2, y, { align: 'center' });
      y += 8;
  
      doc.setFontSize(10);
      doc.setTextColor(100);
      doc.text("Please retain this receipt for your records", pageWidth / 2, y, { align: 'center' });
      y += 5;
      doc.text("For any queries, contact: support@bobisbakery.com", pageWidth / 2, y, { align: 'center' });
  
      // Save PDF
      doc.save(`Bobi-Bakery-Receipt-${invoiceNumber}.pdf`);
    };
  };
  const handlePayment = async () => {
    try {
      setLoading(true);

      // Load Razorpay script
      const res = await loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js');
      if (!res) {
        toast.error("Razorpay SDK failed to load");
        return;
      }

      // Create order on backend
      const { data } = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/product/razorpay/create-order`, {
        cart
      });

      const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY_ID,
        amount: data.order.amount,
        currency: data.order.currency,
        name: "Bobi's Bakery",
        description: "Payment for your delicious treats",
        image: `${window.location.origin}/images/GreenMarketingLogo.png`,
        order_id: data.order.id,
        handler: async function (response) {
          try {
            // Verify payment on backend
            await axios.post(`${process.env.REACT_APP_ACT}/api/v1/product/razorpay/verify-payment`, {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              cart
            });

            toast.success("Payment successful 🎉");
            generateInvoice(response.razorpay_order_id, response.razorpay_payment_id);

            setCart([]);
            localStorage.removeItem('cart');
            navigate('/orders');
          } catch (error) {
            console.error("Verification error:", error);
            toast.error("Payment verification failed");
          }
        },
        prefill: {
          name: auth?.user?.name || 'Customer',
          email: auth?.user?.email || 'customer@example.com',
          contact: auth?.user?.phone || '9999999999'
        },
        notes: {
          address: auth?.user?.address || 'No address provided'
        },
        theme: {
          color: "#4e342e"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error("Payment error:", error);
      toast.error("Payment initialization failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout title={'Your Cart'}>
      <br></br>
      <div className="container-fluid" style={{ backgroundColor: '#fff9f2', minHeight: '100vh', padding: '20px' }}>
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center mb-4">
              <FaShoppingCart className="me-2" />
              {auth?.user?.name ? `${auth.user.name}'s Cart` : 'Your Cart'}
            </h1>
            <h4 className="text-center mb-4">
              {cart.length > 0
                ? `You have ${cart.length} item${cart.length > 1 ? 's' : ''} in your cart`
                : "Your cart is empty"}
            </h4>
          </div>
        </div>

        <div className="row">
          {/* Cart Items Column */}
          <div className="col-md-8">
            {cart.length === 0 ? (
              <div className="text-center">
                <img
                  src="/empty-cart.png"
                  alt="Empty Cart"
                  style={{ maxWidth: '300px' }}
                /><br/>
                <button
                  className="btn btn-primary mt-3"
                  onClick={() => navigate('/')}
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              cart.map((product) => (
                <div className="card mb-3" key={product._id} style={{ backgroundColor: '#f8f9fa' }}>
                  <div className="row g-0">
                    <div className="col-md-4 d-flex align-items-center justify-content-center p-2">
                      <img
                        src={`${process.env.REACT_APP_ACT}/api/v1/product/product-photo/${product._id}`}
                        className="img-fluid rounded"
                        alt={product.name}
                        style={{ maxHeight: '200px', objectFit: 'cover' }}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body text-center">
                        <h5 className="card-title">
                          <FaBoxOpen className="me-2" />
                          {product.name}
                        </h5>
                        <p className="card-text mx-auto" style={{ maxWidth: '80%' }}>
                          {product.description?.substring(0, 100)}...
                        </p>
                        <h6 className="text-success">₹ {product.price}</h6>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeCartItem(product._id)}
                        >
                          <FaTrashAlt className="me-1" /> Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary Column */}
          <div className="col-md-4">
            <div className="card p-3" style={{ backgroundColor: '#f7ede2' }}>
              <h3 className="mb-3 text-center">
                <FaWallet className="me-2" />
                Order Summary
              </h3>
              <hr />
              <h5>Total Items: {cart.length}</h5>
              <h4 className="my-3">
                Total Amount: ₹ <span className="text-success">{totalPrice()}</span>
              </h4>

              <div className="mb-3">
                <h5>
                  <FaAddressCard className="me-2" />
                  Delivery Address:
                </h5>
                {auth?.user?.address ? (
                  <>
                    <p>{auth.user.address}</p>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => navigate('/dashboard/user/profile')}
                    >
                      <FaHome className="me-1" />
                      Update Address
                    </button>
                  </>
                ) : auth?.token ? (
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => navigate('/dashboard/user/profile')}
                  >
                    <FaHome className="me-1" />
                    Add Address
                  </button>
                ) : (
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => navigate('/login', { state: '/cart' })}
                  >
                    Login to Checkout
                  </button>
                )}
              </div>

              {cart.length > 0 && auth?.token && (
                <button
                  className="btn btn-success w-100 mt-2"
                  onClick={handlePayment}
                  disabled={loading}
                >
                  <MdPayment className="me-2" />
                  {loading ? 'Processing...' : 'Proceed to Payment'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;