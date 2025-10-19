// import React, { useEffect, useState } from 'react'
// import Layout from '../../components/layout/Layout'
// import AdminMenu from '../../components/layout/AdminMenu'
// import toast from 'react-hot-toast';
// import axios from 'axios';
// import Categoryform from '../../components/form/Categoryform';
// import { Modal } from 'antd';


// const CreateCatagory = () => {

//     const [categories, setCategories] = useState([]);
//     const [name, setName] = useState();
//     const [visible, setVisible] = useState(false);
//     const [selected, setSelected] = useState(null);
//     const [updateName, setUpdateName] = useState('');;


//     //handlesubmit
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const { data } = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/category/create-category`, { name });
//             if (data?.success) {
//                 toast.success("category is created");
//                 getAllCategory();
//             }
//             else {
//                 toast.error("Something went wrong in form");

//             }


//         } catch (error) {
//             console.log(error);
//             toast.error("Something went wrong in input form");
//         }
//     }

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

//     //update cat
//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         try {
//             const { data } = await axios.put(`${process.env.REACT_APP_ACT}/api/v1/category/update-category/${selected._id}`, { name: updateName });
//             if (data.success) {
//                 toast.success("category is updated");
//                 setSelected(null)
//                 setUpdateName("")
//                 setVisible(false)
//                 getAllCategory();
//             }
//             else {
//                 toast.error("Something went wrong in update");

//             }


//         } catch (error) {
//             console.log(error);
//             toast.error("Something went wrong in update");
//         }
//     }


//     //delete cat
//     const handleDelete = async (pid) => {
//         try {
//             const { data } = await axios.delete(`${process.env.REACT_APP_ACT}/api/v1/category/delete-category/${pid}`);
//             if (data.success) {
//                 toast.success("category is deleted");

//                 getAllCategory();
//             }
//             else {
//                 toast.error("Something went wrong in delete");

//             }


//         } catch (error) {
//             console.log(error);
//             toast.error("Something went wrong in delete");
//         }
//     }


//     useEffect(() => {
//         getAllCategory();
//     }, [])

//     return (
//         <Layout title={'Dashboard - Create  Catagory'} >
//             <div className='admin-dashboard-container   vh-100' style={{
//                 background: 'linear-gradient(140deg , #4e342e  70% ,rgb(174, 166, 163) 100%)',
//                 padding: '20px' }}>
//                 <div className="row">
//                     <div className="col-md-3"> <AdminMenu /></div>
//                     <div className="col-md-9" >
//                         <h1 style={{color:"white"}}>Manage Catagory</h1>
//                         <div className='p-3 w-50'>
//                             <Categoryform handleSubmit={handleSubmit}
//                                 value={name}
//                                 setValue={setName} />
//                         </div>
//                         <div className='w-75'>
//                             <table className="table" border={'5px'}>
//                                 <thead >
//                                     <tr >
//                                         <th scope="col"  style={{ color:"white",background: 'linear-gradient(140deg , #4e342e 25%, rgb(174, 166, 163) 70%)', padding: '20px', borderRadius: '10px' }} >Name</th>
//                                         <th scope="col"  style={{  color:"white",background: 'linear-gradient(140deg , #4e342e 25%, rgb(174, 166, 163) 70%)', padding: '20px', borderRadius: '10px' }}>Actions</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {categories?.map((c) => (
//                                         <>
//                                             <tr>
//                                                 <td key={c._id}  style={{ color:"white", background: 'linear-gradient(140deg , #4e342e 25%, rgb(174, 166, 163) 70%)', padding: '20px', borderRadius: '10px' }}>{c.name}</td>
//                                                 <td style={{ background: 'linear-gradient(140deg , #4e342e 25%, rgb(174, 166, 163) 70%)', padding: '20px', borderRadius: '10px' }}><button className='btn btn-primary btn-md active ms-2' onClick={() => {
//                                                     setVisible(true);
//                                                     setUpdateName(c.name);
//                                                     setSelected(c);
                                                    
//                                                 }}
//                                                  >Edit</button>
//                                                 </td>

//                                                 <td style={{ background: 'linear-gradient(140deg , #4e342e 25%, rgb(174, 166, 163) 70%)', padding: '20px', borderRadius: '10px' }}><button className='btn btn-danger btn-md activems-2' onClick={() => {
//                                                     handleDelete(c._id)
//                                                 }}>Delete</button></td>



//                                             </tr>
//                                         </>
//                                     ))}

//                                 </tbody>
//                             </table>
//                         </div>
//                         <Modal onCancel={() => setVisible(false)} footer={null} visible={visible}>
//                             <Categoryform value={updateName} setValue={setUpdateName} handleSubmit={handleUpdate} /> </Modal>

//                     </div>

//                 </div>
//             </div>
//         </Layout>
//     )
// }

// export default CreateCatagory


// import React, { useEffect, useState } from 'react';
// import Layout from '../../components/layout/Layout';
// import AdminMenu from '../../components/layout/AdminMenu';
// import toast from 'react-hot-toast';
// import axios from 'axios';
// import Categoryform from '../../components/form/Categoryform';
// import { Modal } from 'antd';
// import { FaEdit, FaTrash, FaTags } from 'react-icons/fa';

// const CreateCatagory = () => {
//   const [categories, setCategories] = useState([]);
//   const [name, setName] = useState('');
//   const [visible, setVisible] = useState(false);
//   const [selected, setSelected] = useState(null);
//   const [updateName, setUpdateName] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         `${process.env.REACT_APP_ACT}/api/v1/category/create-category`,
//         { name }
//       );
//       if (data?.success) {
//         toast.success('Category created');
//         getAllCategory();
//         setName('');
//       } else {
//         toast.error('Something went wrong');
//       }
//     } catch (error) {
//       toast.error('Failed to create category');
//     }
//   };

//   const getAllCategory = async () => {
//     try {
//       const { data } = await axios.get(
//         `${process.env.REACT_APP_ACT}/api/v1/category/get-category`
//       );
//       if (data?.success) {
//         setCategories(data?.getcat);
//       }
//     } catch (error) {
//       toast.error('Failed to load categories');
//     }
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.put(
//         `${process.env.REACT_APP_ACT}/api/v1/category/update-category/${selected._id}`,
//         { name: updateName }
//       );
//       if (data.success) {
//         toast.success('Category updated');
//         setVisible(false);
//         setSelected(null);
//         setUpdateName('');
//         getAllCategory();
//       } else {
//         toast.error('Update failed');
//       }
//     } catch (error) {
//       toast.error('Update failed');
//     }
//   };

//   const handleDelete = async (pid) => {
//     try {
//       const { data } = await axios.delete(
//         `${process.env.REACT_APP_ACT}/api/v1/category/delete-category/${pid}`
//       );
//       if (data.success) {
//         toast.success('Category deleted');
//         getAllCategory();
//       } else {
//         toast.error('Delete failed');
//       }
//     } catch (error) {
//       toast.error('Delete failed');
//     }
//   };

//   useEffect(() => {
//     getAllCategory();
//   }, []);

//   return (
//     <Layout title={'Dashboard - Create Category'}>
//       <div
//         className="admin-dashboard-container vh-100"
//         style={{
//           background: 'linear-gradient(140deg , #4e342e 70% ,rgb(174, 166, 163) 100%)',
//           padding: '20px',
//         }}
//       >
//         <div className="row">
//           <div className="col-md-3">
//             <AdminMenu />
//           </div>
//           <div className="col-md-8">
//             <h1 className="text-white mb-4 mt-5 d-flex align-items-center gap-2">
//               <FaTags /> Manage Categories
//             </h1>
//             <div className="p-3" style={{ maxWidth: '500px' }}>
//               <Categoryform
//                 handleSubmit={handleSubmit}
//                 value={name}
//                 setValue={setName}
//               />
//             </div>
//             <div className="mt-4">
//               <table className="table table-hover table-bordered text-white">
//                 <thead className="thead-dark">
//                   <tr style={{ backgroundColor: '#4e342e' }}>
//                     <th style={{ fontSize: '18px' }}>Category Name</th>
//                     <th style={{ fontSize: '18px' }}>Edit</th>
//                     <th style={{ fontSize: '18px' }}>Delete</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {categories?.map((c) => (
//                     <tr key={c._id} style={{ backgroundColor: '#6d4c41' }}>
//                       <td style={{ fontSize: '17px' }}>{c.name}</td>
//                       <td>
//                         <button
//                           className="btn btn-sm btn-primary"
//                           onClick={() => {
//                             setVisible(true);
//                             setUpdateName(c.name);
//                             setSelected(c);
//                           }}
//                         >
//                           <FaEdit />
//                         </button>
//                       </td>
//                       <td>
//                         <button
//                           className="btn btn-sm btn-danger"
//                           onClick={() => handleDelete(c._id)}
//                         >
//                           <FaTrash />
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//             <Modal
//               open={visible}
//               onCancel={() => setVisible(false)}
//               footer={null}
//             >
//               <Categoryform
//                 value={updateName}
//                 setValue={setUpdateName}
//                 handleSubmit={handleUpdate}
//               />
//             </Modal>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CreateCatagory;




import React, { useEffect, useState } from 'react';
import Layout from '../../components/layout/Layout';
import AdminMenu from '../../components/layout/AdminMenu';
import toast from 'react-hot-toast';
import axios from 'axios';
import CategoryForm from '../../components/form/Categoryform';
import { Modal } from 'antd';
import { FaEdit, FaTrash, FaTags } from 'react-icons/fa';

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState('');
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updateName, setUpdateName] = useState('');

  // Fetch categories from DB
  const getAllCategories = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_ACT}/api/v1/category/get-category`);
      if (data?.success && Array.isArray(data?.categories)) {
        setCategories(data.categories);
      } else {
        toast.error('Failed to load categories');
      }
    } catch (error) {
      console.error(error);
      toast.error('Error fetching categories');
    }
  };

  // Handle create category
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/category/create-category`, { name });
      if (data?.success) {
        toast.success('Category created');
        getAllCategories();
        setName('');
      } else {
        toast.error(data?.message || 'Create failed');
      }
    } catch (error) {
      toast.error('Error creating category');
    }
  };

  // Handle update category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_ACT}/api/v1/category/update-category/${selected._id}`,
        { name: updateName }
      );
      if (data?.success) {
        toast.success('Category updated');
        setVisible(false);
        setSelected(null);
        setUpdateName('');
        getAllCategories();
      } else {
        toast.error(data?.message || 'Update failed');
      }
    } catch (error) {
      toast.error('Error updating category');
    }
  };

  // Handle delete category
  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`${process.env.REACT_APP_ACT}/api/v1/category/delete-category/${id}`);
      if (data?.success) {
        toast.success('Category deleted');
        getAllCategories();
      } else {
        toast.error(data?.message || 'Delete failed');
      }
    } catch (error) {
      toast.error('Error deleting category');
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <Layout title={'Dashboard - Manage Categories'}>
      <div
        className="admin-dashboard-container vh-100"
        style={{
          background: 'linear-gradient(140deg , #4e342e 70% ,rgb(174, 166, 163) 100%)',
          padding: '20px',
        }}
      >
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-8">
            <h1 className="text-white mb-4 mt-5 d-flex align-items-center gap-2">
              <FaTags /> Manage Categories
            </h1>

            {/* Category form */}
            <div className="p-3" style={{ maxWidth: '500px' }}>
              <CategoryForm
                handleSubmit={handleSubmit}
                value={name}
                setValue={setName}
              />
            </div>

            {/* Categories Table */}
            <div className="mt-4">
              <table className="table table-hover table-bordered text-white">
                <thead>
                  <tr style={{ backgroundColor: '#4e342e' }}>
                    <th style={{ fontSize: '18px' }}>Category Name</th>
                    <th style={{ fontSize: '18px' }}>Edit</th>
                    <th style={{ fontSize: '18px' }}>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {categories?.map((cat) => (
                    <tr key={cat._id} style={{ backgroundColor: '#6d4c41' }}>
                      <td style={{ fontSize: '17px' }}>{cat.name}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-primary"
                          onClick={() => {
                            setVisible(true);
                            setUpdateName(cat.name);
                            setSelected(cat);
                          }}
                        >
                          <FaEdit />
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleDelete(cat._id)}
                        >
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {categories.length === 0 && (
                    <tr>
                      <td colSpan="3" className="text-center text-muted">No categories found.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Modal for update form */}
            <Modal
              open={visible}
              onCancel={() => setVisible(false)}
              footer={null}
            >
              <CategoryForm
                value={updateName}
                setValue={setUpdateName}
                handleSubmit={handleUpdate}
              />
            </Modal>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateCategory;
