// import React, { useState, useEffect } from 'react'
// import Layout from '../../components/layout/Layout'
// import AdminMenu from '../../components/layout/AdminMenu'
// import toast from 'react-hot-toast';
// import axios from 'axios';
// import { Select } from 'antd';
// import { useNavigate } from 'react-router-dom';

// const { Option } = Select;

// const CreateProduct = () => {

//     const navigate = useNavigate();
//     const [categories, setCategories] = useState([]);
//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [price, setPrice] = useState("");
//     const [category, setCategory] = useState("");
//     const [quantity, setQuantity] = useState("");
//     const [shipping, setShipping] = useState("");
//     const [photo, setPhoto] = useState("");


//     //get all category
//     const getAllCategory = async () => {
//         try {
//             const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/category/get-category`);
//             if (data?.success) {
//                 setCategories(data?.getcat);
//             }

//         } catch (error) {
//             console.log(error);
//             toast.error("wrong category");
//         }
//     }

//     useEffect(() => {
//         getAllCategory();
//     }, [])

//     //create product f..
//     const handleCreate = async (e) => {
//         e.preventDefault();
//         try {
//             const productData = new FormData()
//             productData.append("name", name)
//             productData.append("description", description)
//             productData.append("price", price)
//             productData.append("quantity", quantity)
//             productData.append("photo", photo)
//             productData.append("category", category)



//             const { data } = axios.post(`${process.env.REACT_APP_ACT}/api/v1/product/create-product`, productData);
//             if (data?.success) {
//                 toast.error("something went wrong");

//             }
//             else {

//                 toast.success("successfully created product");
//                 navigate("/dashboard/admin/products");
//             }

//         } catch (error) {
//             console.log(error);
//             toast.error("something went wrong");
//         }
//     }

//     return (
//         <>
//             <Layout title={'Dashboard - Create  Product'}>
//                 <div className='container-fluid m-3 p-3 dashboard'>

//                     <div className="row">
//                         <div className="col-md-3"> <AdminMenu /></div>

//                         <div className="col-md-9">
//                             <h1>Create  Product</h1>

//                             <div className='m-1 w-75'>
//                                 <Select bordered={false}
//                                     placeholder=" select a category" size='large'
//                                     showSearch
//                                     className='form-select mb-3'
//                                     onChange={(value) => { setCategory(value); }}>
//                                     {categories?.map(c => (
//                                         <Option key={c._id} value={c._id}  > {c.name} </Option>
//                                     ))};

//                                 </Select>

//                                 <div className='mb-3'>
//                                     <label
//                                         className='btn btn-outline-secondary col-md-12'>
//                                         {photo ? photo.name : "upload photo"}

//                                         <input type='file' name='photo'
//                                             accept='image/*'
//                                             onChange={(e) => setPhoto(e.target.files[0])}
//                                             hidden />

//                                     </label>
//                                 </div>
//                                 <div className='mb-3'>
//                                     {photo && (
//                                         <div className='text-center'>
//                                             <img src={URL.createObjectURL(photo)} alt="product_photo" height={'200px'}
//                                                 className="img img-responsive" />
//                                         </div>
//                                     )}
//                                 </div>

//                                 <div className='mb-3'>
//                                     <input type="text"
//                                         placeholder="Write a name"
//                                         value={name}
//                                         className='form-control'
//                                         onChange={(e) => setName(e.target.value)} />

//                                 </div>
//                                 <div className='mb-3'>
//                                     <input type="text"
//                                         placeholder="Write a description"
//                                         value={description}
//                                         className='form-control'
//                                         onChange={(e) => setDescription(e.target.value)} />

//                                 </div>
//                                 <div className='mb-3'>
//                                     <input type="number"
//                                         placeholder="Write a price"
//                                         value={price}
//                                         className='form-control'
//                                         onChange={(e) => setPrice(e.target.value)} />

//                                 </div>
//                                 <div className='mb-3'>
//                                     <input type="number"
//                                         placeholder="Write a Quantity"
//                                         value={quantity}
//                                         className='form-control'
//                                         onChange={(e) => setQuantity(e.target.value)} />

//                                 </div>
//                                 <div className='mb-3'>
//                                     <Select bordered={false}
//                                         placeholder="Write a shipping"

//                                         onChange={(value) => setShipping(value)}
//                                         size='large'
//                                         showSearch
//                                         className='foem-select mb-3'
//                                     >

//                                         <Option value="0">NO</Option>
//                                         <Option value="1">YES</Option>

//                                     </Select>
//                                 </div>
//                                 <div className='mb-3'>
//                                     <button className='btn btn-primary' onClick={handleCreate}>CREATE PRODUCT</button>
//                                 </div>

//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </Layout>
//         </>
//     )
// }

// export default CreateProduct




// import React, { useState, useEffect } from 'react';
// import Layout from '../../components/layout/Layout';
// import AdminMenu from '../../components/layout/AdminMenu';
// import toast from 'react-hot-toast';
// import axios from 'axios';
// import { Select } from 'antd';
// import { useNavigate } from 'react-router-dom';

// const { Option } = Select;

// const CreateProduct = () => {
//     const navigate = useNavigate();
//     const [categories, setCategories] = useState([]);
//     const [name, setName] = useState("");
//     const [description, setDescription] = useState("");
//     const [price, setPrice] = useState("");
//     const [category, setCategory] = useState("");
//     const [quantity, setQuantity] = useState("");
//     const [shipping, setShipping] = useState("");
//     const [photo, setPhoto] = useState("");

//     //get all category
//     const getAllCategory = async () => {
//         try {
//             const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/category/get-category`);
//             if (data?.success) {
//                 setCategories(data?.getcat);
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error("Wrong category");
//         }
//     };

//     useEffect(() => {
//         getAllCategory();
//     }, []);

//     //create product function
//     const handleCreate = async (e) => {
//         e.preventDefault();
//         try {
//             const productData = new FormData();
//             productData.append("name", name);
//             productData.append("description", description);
//             productData.append("price", price);
//             productData.append("quantity", quantity);
//             productData.append("photo", photo);
//             productData.append("category", category);

//             const { data } = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/product/create-product`, productData);
//             if (data?.success) {
//                 toast.error("Something went wrong");
//             } else {
//                 toast.success("Successfully created product");
//                 navigate("/dashboard/admin/products");
//             }
//         } catch (error) {
//             console.log(error);
//             toast.error("Something went wrong");
//         }
//     };

//     return (
//         <Layout title={'Dashboard - Create Product'}>
//              <div className='admin-dashboard-container   vh-100' style={{
//                 background: 'linear-gradient(140deg , #4e342e  25% ,rgb(174, 166, 163) 70%)',
//                 padding: '20px' }}>
//                <style>
//                     {`
//                        .form-control {
//                             border-radius: 8px;
//                             padding: 12px;
//                             border: 2px solid #6d4c41;
//                             font-size: 16px;
//                             background: #5d4037;
//                             color: #fff;
//                             transition: all 0.3s ease;
//                         }
//                         .form-control::placeholder {
//                             color: rgba(255, 255, 255, 0.7);
//                         }
                    
//                         .form-control:focus {
//                             border-color: #a1887f;
//                             box-shadow: 0 0 8px rgba(161, 136, 127, 0.5);
//                         }

//                     `}
//                 </style>
//                 <div className="row">
//                     <div className="col-md-3"> <AdminMenu /></div>
//                     <div className="col-md-9">
//                         <h1 style={{ color: "white" }}>Create Product</h1>
//                         <div className='m-1 w-75'>
//                             <Select bordered={false} placeholder="Select a category" size='large' showSearch className='form-select mb-3' onChange={(value) => { setCategory(value); }}>
//                                 {categories?.map(c => (
//                                     <Option key={c._id} value={c._id}>{c.name}</Option>
//                                 ))}
//                             </Select>

//                             <div className='mb-3'>
//                                 <label className='btn btn-outline-secondary col-md-12'>
//                                     {photo ? photo.name : "Upload photo"}
//                                     <input type='file' name='photo' accept='image/*' onChange={(e) => setPhoto(e.target.files[0])} hidden />
//                                 </label>
//                             </div>
//                             <div className='mb-3'>
//                                 {photo && (
//                                     <div className='text-center'>
//                                         <img src={URL.createObjectURL(photo)} alt="product_photo" height={'200px'} className="img img-responsive" />
//                                     </div>
//                                 )}
//                             </div>
//                             <div className='mb-3'>
//                                 <input type="text"  placeholder="Write a name" value={name} className='form-control' onChange={(e) => setName(e.target.value)} />
//                             </div>
//                             <div className='mb-3'>
//                                 <input type="text" placeholder="Write a description" value={description} className='form-control' onChange={(e) => setDescription(e.target.value)} />
//                             </div>
//                             <div className='mb-3'>
//                                 <input type="number" placeholder="Write a price" value={price} className='form-control' onChange={(e) => setPrice(e.target.value)} />
//                             </div>
//                             <div className='mb-3'>
//                                 <input type="number" placeholder="Write a Quantity" value={quantity} className='form-control' onChange={(e) => setQuantity(e.target.value)} />
//                             </div>
//                             <div className='mb-3'>
//                                 <Select bordered={false} placeholder="Select shipping" onChange={(value) => setShipping(value)} size='large' showSearch className='form-select mb-3'>
//                                     <Option value="0">NO</Option>
//                                     <Option value="1">YES</Option>
//                                 </Select>
//                             </div>
//                             <div className='mb-3'>
//                                 <button className='btn btn-primary' onClick={handleCreate}>CREATE PRODUCT</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default CreateProduct;



// import React, { useState, useEffect } from 'react';
// import Layout from '../../components/layout/Layout';
// import AdminMenu from '../../components/layout/AdminMenu';
// import toast from 'react-hot-toast';
// import axios from 'axios';
// import { Select } from 'antd';
// import { useNavigate } from 'react-router-dom';
// import {
//   FaBoxOpen,
//   FaRupeeSign,
//   FaImage,
//   FaLayerGroup,
//   FaSortAmountUp,
//   FaShippingFast,
//   FaTags,
// } from 'react-icons/fa';

// const { Option } = Select;

// const CreateProduct = () => {
//   const navigate = useNavigate();
//   const [categories, setCategories] = useState([]);
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [price, setPrice] = useState('');
//   const [category, setCategory] = useState('');
//   const [quantity, setQuantity] = useState('');
//   const [shipping, setShipping] = useState('');
//   const [photo, setPhoto] = useState(null);

//   const getAllCategory = async () => {
//     try {
//       const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/category/get-category`);
//       if (data?.success && Array.isArray(data?.categories)) {
//         setCategories(data.categories);
//       } else if (data?.success && Array.isArray(data?.getcat)) {
//         setCategories(data.getcat); // fallback for old key
//       } else {
//         toast.error('No categories found');
//       }
//     } catch (error) {
//       console.error(error);
//       toast.error('Failed to load categories');
//     }
//   };
  

//   useEffect(() => {
//     getAllCategory();
//   }, []);

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     try {
//       const productData = new FormData();
//       productData.append('name', name);
//       productData.append('description', description);
//       productData.append('price', price);
//       productData.append('quantity', quantity);
//       productData.append('photo', photo);
//       productData.append('category', category);
//       productData.append('shipping', shipping);

//       const { data } = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/product/create-product`, productData);
//       if (data?.success) {
//         toast.success('Product created successfully');
//         navigate('/dashboard/admin/products');
//       } else {
//         toast.error(data.message || 'Failed to create product');
//       }
//     } catch (error) {
//       toast.error('Something went wrong');
//     }
//   };

//   return (
//     <Layout title="Dashboard - Create Product">
//       <div className="admin-dashboard-container vh-100" style={{ background: 'linear-gradient(to right, #4e342e, #a1887f)', padding: '20px' }}>
//         <div className="row" >
//           <div className="col-md-3" >
//             <AdminMenu />
//           </div>
//           <div className="col-md-9 ">
//             <br/>
//             <br/>
//             <div className="bg-white bg-opacity-10 p-4 rounded text-white">
//               <h1 className="text-3xl font-bold mb-4 d-flex align-items-center gap-3">
//                 <FaBoxOpen className="text-warning" /> Create Product
//               </h1>
//               <form onSubmit={handleCreate}>
//                 <div className="row">
//                   <div className="col-md-6 mb-3">
//                     <label>Category</label>
//                     <Select
//                       className="w-100"
//                       placeholder="Select a category"
//                       size="large"
//                       onChange={(value) => setCategory(value)}
//                     >
//                       {categories?.map((c) => (
//                         <Option key={c._id} value={c._id}>{c.name}</Option>
//                       ))}
//                     </Select>
//                   </div>

//                   <div className="col-md-6 mb-3">
//                     <label>Shipping</label>
//                     <Select
//                       className="w-100"
//                       placeholder="Select Shipping"
//                       size="large"
//                       onChange={(value) => setShipping(value)}
//                     >
//                       <Option value="0">No</Option>
//                       <Option value="1">Yes</Option>
//                     </Select>
//                   </div>

//                   <div className="col-md-6 mb-3">
//                     <label>Product Name</label>
//                     <div className="input-group">
//                       <span className="input-group-text"><FaTags /></span>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Name"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                       />
//                     </div>
//                   </div>

//                   <div className="col-md-6 mb-3">
//                     <label>Quantity</label>
//                     <div className="input-group">
//                       <span className="input-group-text"><FaSortAmountUp /></span>
//                       <input
//                         type="number"
//                         className="form-control"
//                         placeholder="Quantity"
//                         value={quantity}
//                         onChange={(e) => setQuantity(e.target.value)}
//                       />
//                     </div>
//                   </div>

//                   <div className="col-md-6 mb-3">
//                     <label>Price</label>
//                     <div className="input-group">
//                       <span className="input-group-text"><FaRupeeSign /></span>
//                       <input
//                         type="number"
//                         className="form-control"
//                         placeholder="Price"
//                         value={price}
//                         onChange={(e) => setPrice(e.target.value)}
//                       />
//                     </div>
//                   </div>

//                   <div className="col-md-6 mb-3">
//                     <label>Description</label>
//                     <div className="input-group">
//                       <span className="input-group-text"><FaLayerGroup /></span>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Description"
//                         value={description}
//                         onChange={(e) => setDescription(e.target.value)}
//                       />
//                     </div>
//                   </div>

//                   <div className="col-md-12 mb-3" >
//                     <label>Upload Image</label>
//                     <label className="btn btn-outline-light w-100 d-flex align-items-center gap-2 justify-content-center">
//                       <FaImage /> {photo ? photo.name : 'Choose Image'}
//                       <input type="file" accept="image/*" hidden onChange={(e) => setPhoto(e.target.files[0])}   />
//                     </label>
//                   </div>

//                   {photo && (
//                     <div className="col-md-12 text-center mb-3">
//                       <img src={URL.createObjectURL(photo)} alt="product" className="img-fluid rounded" height="100" />
//                     </div>
//                   )}

//                   <div className="col-md-12">
//                     <button type="submit" className="btn btn-warning w-100 fw-bold">
//                       Create Product
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//         <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <div>

 
//       </div>
//  <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       <br/>
//       </div>
      
//     </Layout>
//   );
// };

// export default CreateProduct;


import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import AdminMenu from '../../components/layout/AdminMenu';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  FaBoxOpen,
  FaRupeeSign,
  FaImage,
  FaLayerGroup,
  FaSortAmountUp,
  FaShippingFast,
  FaTags,
} from 'react-icons/fa';

const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');
  const [shipping, setShipping] = useState('');
  const [photo, setPhoto] = useState(null);

  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/category/get-category`);
      if (data?.success && Array.isArray(data?.categories)) {
        setCategories(data.categories);
      } else if (data?.success && Array.isArray(data?.getcat)) {
        setCategories(data.getcat);
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

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append('name', name);
      productData.append('description', description);
      productData.append('price', price);
      productData.append('quantity', quantity);
      productData.append('photo', photo);
      productData.append('category', category);
      productData.append('shipping', shipping);

      const { data } = await axios.post(
        `${process.env.REACT_APP_ACT}/api/v1/product/create-product`, 
        productData
      );
      if (data?.success) {
        toast.success('Product created successfully');
        navigate('/dashboard/admin/products');
      } else {
        toast.error(data.message || 'Failed to create product');
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <Layout title="Dashboard - Create Product">
      <style>
        {`
          .admin-dashboard-container {
            background: linear-gradient(to right, #4e342e, #a1887f);
            min-height: 100vh;
            padding: 20px;
          }
          .form-container {
            background: rgba(255, 255, 255, 0.1);
            padding: 30px;
            border-radius: 10px;
            backdrop-filter: blur(5px);
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          }
          .image-preview-container {
            margin-top: 15px;
            text-align: center;
          }
          .image-preview {
            max-width: 100%;
            max-height: 200px;
            border-radius: 8px;
            border: 2px solid rgba(255, 255, 255, 0.2);
            object-fit: contain;
          }
          .upload-btn {
            transition: all 0.3s ease;
          }
          .upload-btn:hover {
            background: rgba(255, 255, 255, 0.2) !important;
          }
        `}
      </style>

      <div className="admin-dashboard-container">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="form-container text-white">
              <h1 className="text-3xl font-bold mb-4 d-flex align-items-center gap-3">
                <FaBoxOpen className="text-warning" /> Create Product
              </h1>
              
              <form onSubmit={handleCreate}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Category</label>
                    <Select
                      className="w-100"
                      placeholder="Select a category"
                      size="large"
                      onChange={(value) => setCategory(value)}
                    >
                      {categories?.map((c) => (
                        <Option key={c._id} value={c._id}>{c.name}</Option>
                      ))}
                    </Select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Shipping</label>
                    <Select
                      className="w-100"
                      placeholder="Select Shipping"
                      size="large"
                      onChange={(value) => setShipping(value)}
                    >
                      <Option value="0">No</Option>
                      <Option value="1">Yes</Option>
                    </Select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Product Name</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaTags /></span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Quantity</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaSortAmountUp /></span>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                        min="1"
                      />
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Price</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaRupeeSign /></span>
                      <input
                        type="number"
                        className="form-control"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                        min="1"
                      />
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Description</label>
                    <div className="input-group">
                      <span className="input-group-text"><FaLayerGroup /></span>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-md-12 mb-3">
                    <label className="form-label">Upload Image</label>
                    <label className="btn btn-outline-light w-100 d-flex align-items-center gap-2 justify-content-center upload-btn">
                      <FaImage /> {photo ? photo.name : 'Choose Image'}
                      <input 
                        type="file" 
                        accept="image/*" 
                        hidden 
                        onChange={(e) => setPhoto(e.target.files[0])}
                        required
                      />
                    </label>
                  </div>

                  {photo && (
                    <div className="col-md-12 mb-3 image-preview-container">
                      <img 
                        src={URL.createObjectURL(photo)} 
                        alt="product preview" 
                        className="image-preview"
                      />
                    </div>
                  )}

                  <div className="col-md-12 mt-4">
                    <button type="submit" className="btn btn-warning w-100 fw-bold py-2">
                      Create Product
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;