// import React, { useState, useEffect } from 'react'
// import Layout from '../../components/layout/Layout'
// import UserMenu from '../../components/layout/UserMenu'
// import { useAuth } from '../../context/auth'
// import toast from 'react-hot-toast';
// import axios from 'axios';

// const Profile = () => {

//     const [auth, setAuth] = useAuth();

//     const [name, setNAme] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [phone, setPhone] = useState("")
//     const [address, setAddress] = useState("")

//     //get user data
//     useEffect(() => {
//         const { name, email, password, address, phone } = auth.user
//         setNAme(name);
//         setEmail(email);
//         setPassword(password);
//         setAddress(address);
//         setPhone(phone);
//     }, [auth?.user])

//     //form function
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // console.log(name, email, password, address, phone);
//         // toast.success("Ragister Successfully");
//         try {

//             const { data } = await axios.put(`${process.env.REACT_APP_ACT}/api/v1/auth/profile`, { name, email, phone, address, password });

//             if (data?.error) {
//                 toast.error(data?.error);
//             }
//             else {
//                 setAuth({ ...auth, user: data?.updatedUser })
//                 let ls = localStorage.getItem('auth')
//                 ls = JSON.parse(ls);
//                 ls.user = data.updatedUser;
//                 localStorage.setItem('auth', JSON.stringify(ls));
//                 toast.success("Profile Updated Successfully");
//             }


//         } catch (error) {
//             console.log(error);
//             toast.error("something wrong")
//         }

//     };

//     return (
//         <Layout title={'Your Profile'}>
//             <div className='container-fluid m-3 p-3 dashboard'>
//                 <div className="row">
//                     <div className="col-md-3">
//                         <UserMenu />
//                     </div>
//                     <div className="col-md-9">
//                         <div className='form-container'>
//                             <form onSubmit={handleSubmit}>
//                                 <h4 className='title'>USER PROFILE</h4>
//                                 <div className="mb-3">
//                                     <input type="text" value={name} onChange={(e) => setNAme(e.target.value)} className="form-control" id="exampleInputName" placeholder='Enter Name' autoFocus />
//                                 </div>

//                                 <div className="mb-3">

//                                     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter Email' autoFocus disabled />

//                                 </div>


//                                 <div className="mb-3">

//                                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter  Password' autoFocus />
//                                 </div>

//                                 <div className="mb-3">
//                                     <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputPhone" placeholder='Enter phone' autoFocus />
//                                 </div>

//                                 <div className="mb-3">
//                                     <input type="text " value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputAddress" placeholder='Enter Address' autoFocus />
//                                 </div>

//                                 <button type="submit" className="btn btn-primary">UPDATE</button>
//                             </form>

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     )
// }

// export default Profile



import React, { useState, useEffect } from 'react';
import Layout from '../../components/layout/Layout';
import UserMenu from '../../components/layout/UserMenu';
import { useAuth } from '../../context/auth';
import toast from 'react-hot-toast';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Profile = () => {
    const [auth, setAuth] = useAuth();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        address: ''
    });

    useEffect(() => {
        const { name, email, password, phone, address } = auth.user || {};
        setFormData({ name, email, password, phone, address });
    }, [auth?.user]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, password, phone, address } = formData;
        if (!name || !password || !phone || !address) {
            toast.error("All fields except email are required");
            return;
        }

        try {
            const { data } = await axios.put(`${process.env.REACT_APP_ACT}/api/v1/auth/profile`, formData);

            if (data?.error) {
                toast.error(data?.error);
            } else {
                setAuth({ ...auth, user: data?.updatedUser });
                let ls = localStorage.getItem('auth');
                ls = JSON.parse(ls);
                ls.user = data.updatedUser;
                localStorage.setItem('auth', JSON.stringify(ls));
                toast.success("Profile Updated Successfully");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        }
    };

    return (
        <Layout title={"Update Profile"}>
            <div className="profile-container vh-100 d-flex align-items-center" style={{
                background: 'linear-gradient(140deg , #4e342e  20% ,rgb(174, 166, 163) 100%)',
                padding: '20px'
            }}>
                <style>
                    {`
                        .register-card {
                            width: 100%;
                            max-width: 500px;
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
                            transition: all 0.3s ease;
                        }
                        .form-control::placeholder {
                            color: rgba(255, 255, 255, 0.7);
                        }
                        .form-control:focus {
                            border-color: #a1887f;
                            box-shadow: 0 0 8px rgba(161, 136, 127, 0.5);
                        }
                        .form-control[readonly] {
                            background: #5d4037 !important;
                            color: #fff !important;
                            cursor: not-allowed;
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
                            transition: all 0.3s ease;
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

                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <UserMenu />
                        </div>
                        <div className="col-md-8 d-flex justify-content-center align-items-center">
                            <div className="register-card">
                                <h2 className="title">Update Profile</h2>
                                <form onSubmit={handleSubmit}>
                                    {['name', 'email', 'password', 'phone', 'address'].map((field, index) => (
                                        <div className="mb-3" key={index}>
                                            <input
                                                type={field === 'password' ? 'password' : (field === 'email' ? 'email' : 'text')}
                                                name={field}
                                                value={formData[field]}
                                                onChange={handleChange}
                                                className="form-control"
                                                placeholder={`Enter ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                                                readOnly={field === 'email'}
                                            />
                                        </div>
                                    ))}
                                    <button type="submit" className="btn mt-3">Update</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Profile;
