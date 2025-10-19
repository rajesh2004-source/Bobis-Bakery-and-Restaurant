import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useAuth } from '../../context/auth';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [auth, setAuth] = useAuth("");
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/auth/login`, { email, password });
            if (res.data || res.data.success) {
                toast.success("Successfully logged in!");
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                });
                localStorage.setItem('auth', JSON.stringify(res.data));
                
               
                
                navigate(location.state || '/');
            } else {
                toast.error("Please check your credentials.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong!");
        }
    };

    // ... (rest of your component remains the same)
    return (
              <Layout title={"Login - Ecommerce App"}>
            <div className="login-container d-flex justify-content-center align-items-center vh-100" style={{
                 background: 'linear-gradient(140deg , #4e342e  20% ,rgb(174, 166, 163) 100%)',
                padding: '20px'
            }}>
                <style>
                    {`
                        .login-card {
                            width: 100%;
                            max-width: 450px;
                            border-radius: 12px;
                            background: #4e342e;
                            padding: 30px;
                            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
                            transition: transform 0.3s ease-in-out;
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
                <div className="login-card">
                    <h2 className="title">LOGIN FORM</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder='Enter Email' required autoFocus />
                        </div>
                        <div className="mb-3">
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder='Enter Password' required />
                        </div>
                        <div className="mb-3">
                            <button type="button" className="btn " onClick={() => { navigate("/forgot-password") }}>Forgot Password</button>
                        </div>
                        <button type="submit" className="btn ">Login</button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default Login;