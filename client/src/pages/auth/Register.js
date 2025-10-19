// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Layout from '../../components/layout/Layout';

// const Register = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         phone: '',
//         address: '',
//         question: ''
//     });

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/auth/register`, formData);
//             if (res.data.success) {
//                 toast.success("Successfully Registered!");
//                 navigate('/login');
//             } else {
//                 toast.error(res.data.message);
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error("Something went wrong!");
//         }
//     };

//     return (
//         <Layout title={"Register - Ecommerce App"}>
//             <div className="register-container d-flex justify-content-center align-items-center vh-100" style={{
//                 background: 'linear-gradient(140deg , #4e342e  20% ,rgb(174, 166, 163) 100%)',
//                 padding: '20px'
//             }}>
//                 <style>
//                     {`
//                         .register-card {
//                             width: 100%;
//                             max-width: 450px;
//                             border-radius: 12px;
//                             background: #4e342e;
//                             padding: 30px;
//                             box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
//                             transition: transform 0.3s ease-in-out;
//                             border: 2px solid #3e2723;
//                             color: #fff;
//                         }
//                         // .register-card:hover {
//                         //     transform: translateY(-5px);
//                         // }
//                         .form-control {
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
//                         .btn {
//                             background: #8d6e63;
//                             border: none;
//                             padding: 12px;
//                             border-radius: 8px;
//                             font-size: 18px;
//                             font-weight: bold;
//                             width: 100%;
//                             color: white;
//                             transition: all 0.3s ease;
//                         }
//                         .btn:hover {
//                             background: #6d4c41;
//                         }
//                         .title {
//                             text-align: center;
//                             font-weight: bold;
//                             font-size: 24px;
//                             margin-bottom: 20px;
//                             color: #fff;
//                             text-shadow: 1px 1px 2px #3e2723;
//                         }
//                     `}
//                 </style>
//                 <div className="register-card">
//                     <h2 className="title">Create an Account</h2>
//                     <form onSubmit={handleSubmit}>
//                         {['name', 'email', 'password', 'phone', 'address', 'question'].map((field, index) => (
//                             <div className="mb-3" key={index}>
//                                 <input 
//                                     type={field === 'password' ? 'password' : 'text'}
//                                     className="form-control"
//                                     name={field}
//                                     value={formData[field]}
//                                     onChange={handleChange}
//                                     placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
//                                     required
//                                 />
//                             </div>
//                         ))}
//                         <button type="submit" className="btn  mt-3">Register</button>
//                     </form>
                    
//                 </div>
//                 <br/>
//             <br/>
//             </div>
          
//         </Layout>
//     );
// };

// export default Register;


// import Layout from '../../components/layout/Layout';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Register = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         phone: '',
//         address: '',
//         question: ''
//     });

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const validateForm = () => {
//         const { name, email, password, phone, address, question } = formData;
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         const phoneRegex = /^[0-9]{10}$/;

//         if (!name) {
//             toast.error("Name is required");
//             return false;
//         }
//         if (!email) {
//             toast.error("Email is required");
//             return false;
//         }
//         if (!emailRegex.test(email)) {
//             toast.error("Invalid email format");
//             return false;
//         }
//         if (!password) {
//             toast.error("Password is required");
//             return false;
//         }
//         if (password.length < 2) {
//             toast.error("Password must be at least 6 characters");
//             return false;
//         }
//         if (!phone) {
//             toast.error("Phone number is required");
//             return false;
//         }
//         if (!phoneRegex.test(phone)) {
//             toast.error("Phone number must be 10 digits");
//             return false;
//         }
//         if (!address) {
//             toast.error("Address is required");
//             return false;
//         }
//         if (!question) {
//             toast.error("Answer to the security question is required");
//             return false;
//         }
//         if (question.trim().length < 4) {
//             toast.error("Answer must be at least 4 characters");
//             return false;
//         }
//         return true;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!validateForm()) return;

//         try {
//             const res = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/auth/register`, formData);
//             if (res.data.success) {
//                 toast.success("Successfully Registered!");
//                 navigate('/login');
//             } else {
//                 toast.error(res.data.message);
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error("Something went wrong!");
//         }
//     };

//     return (
//         <Layout title={"Register - Ecommerce App"}>
//             <div className="register-container d-flex justify-content-center align-items-center vh-100" style={{
//                 background: 'linear-gradient(140deg , #4e342e  20% ,rgb(174, 166, 163) 100%)',
//                 padding: '20px'
//             }}>
                
//                 <style>
//                     {`
//                         .register-card {
//                             width: 100%;
//                             max-width: 450px;
//                             border-radius: 12px;
//                             background: #4e342e;
//                             padding: 30px;
//                             box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
//                             border: 2px solid #3e2723;
//                             color: #fff;
//                         }
//                         .form-control {
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
//                         .btn {
//                             background: #8d6e63;
//                             border: none;
//                             padding: 12px;
//                             border-radius: 8px;
//                             font-size: 18px;
//                             font-weight: bold;
//                             width: 100%;
//                             color: white;
//                             transition: all 0.3s ease;
//                         }
//                         .btn:hover {
//                             background: #6d4c41;
//                         }
//                         .title {
//                             text-align: center;
//                             font-weight: bold;
//                             font-size: 24px;
//                             margin-bottom: 20px;
//                             color: #fff;
//                             text-shadow: 1px 1px 2px #3e2723;
//                         }
//                     `}
//                 </style>

//                 <div className="register-card">
//                     <h2 className="title">Create an Account</h2>
//                     <form onSubmit={handleSubmit}>
//                         {['name', 'email', 'password', 'phone', 'address', 'question'].map((field, index) => (
//                             <div className="mb-3" key={index}>
//                                 <input
//                                     type={field === 'password' ? 'password' : (field === 'email' ? 'email' : 'text')}
//                                     className="form-control"
//                                     name={field}
//                                     value={formData[field]}
//                                     onChange={handleChange}
//                                     placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                 
//                                 />
//                             </div>
//                         ))}
//                         <button type="submit" className="btn mt-3">Register</button>
//                     </form>
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default Register;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import axios from 'axios';
import toast from 'react-hot-toast';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    question: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, password, phone, address, question } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    if (!name || !email || !password || !phone || !address || !question) {
      toast.error("All fields are required");
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }
    if (!phoneRegex.test(phone)) {
      toast.error("Phone number must be 10 digits");
      return false;
    }
    if (question.trim().length < 4) {
      toast.error("Answer must be at least 4 characters");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const res = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/auth/register`, formData);
      if (res.data.success) {
        toast.success("Successfully Registered!");
      // 🎉 Generate PDF after success
        navigate('/login');
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <Layout title="Register - Ecommerce App">
      <div
        className="register-container d-flex justify-content-center align-items-center vh-100"
        style={{
          background: 'linear-gradient(140deg , #4e342e  20% ,rgb(174, 166, 163) 100%)',
          padding: '20px'
        }}
      >
        <style>
          {`
            .register-card {
              width: 100%;
              max-width: 450px;
              border-radius: 12px;
              background: #4e342e;
              padding: 30px;
              box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
              border: 2px solid #3e2723;
              color: #fff;
            }
            .form-control {
              border-radius: 8px;
              padding: 12px;
              border: 2px solid #6d4c41;
              font-size: 16px;
              background: #5d4037;
              color: #fff;
            }
            .form-control::placeholder {
              color: rgba(255, 255, 255, 0.7);
            }
            .form-control:focus {
              border-color: #a1887f;
              box-shadow: 0 0 8px rgba(161, 136, 127, 0.5);
            }
            .btn {
              background: #8d6e63;
              border: none;
              padding: 12px;
              border-radius: 8px;
              font-size: 18px;
              font-weight: bold;
              width: 100%;
              color: white;
            }
            .btn:hover {
              background: #6d4c41;
            }
            .title {
              text-align: center;
              font-weight: bold;
              font-size: 24px;
              margin-bottom: 20px;
              color: #fff;
              text-shadow: 1px 1px 2px #3e2723;
            }
          `}
        </style>

        <div className="register-card">
          <h2 className="title">Create an Account</h2>
          <form onSubmit={handleSubmit}>
            {['name', 'email', 'password', 'phone', 'address', 'question'].map((field, index) => (
              <div className="mb-3" key={index}>
                <input
                  type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
                  className="form-control"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                />
              </div>
            ))}
            <button type="submit" className="btn mt-3">Register</button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Register;
