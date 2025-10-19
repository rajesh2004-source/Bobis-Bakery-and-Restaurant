// import React, { useState } from 'react'
// import Layout from '../../components/layout/Layout'
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// //import { toast } from 'react-toastify';
// import { } from "../../styles/authstyle.css"

// const ForgotPassword = () => {


//     const [email, setEmail] = useState("");
//     const [newPassword, setNewPassword] = useState("");
//     const [question, setQuestion] = useState("");
//     const navigate = useNavigate();

//     //form function
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         // console.log(name, email, password, address, phone);
//         // toast.success("Ragister Successfully");
//         try {

//             const res = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/auth/forgot-password`, { email, newPassword, question });

//             // console.log(email, password);

//             if (res.data || res.data.success) {
//                 toast.success("successfully Reset Password");

//                 navigate('/login');

//             }
//             else {
//                 toast.error("please check..");
//             }

//         } catch (error) {
//             console.log(error);
//             toast.error("something wrong")
//         }

//     };
//     return (
//         <Layout title={"ForgotPassword - Ecommerce App"}>
//             <div className='form-container'>
//                 <form onSubmit={handleSubmit}>
//                     <h4 className='title'>RESET PASSWORD</h4>


//                     <div className="mb-3">

//                         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter Email' required autoFocus />

//                     </div>

//                     <div className="mb-3">

//                         <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='What Is Your Favorite Sports ?' required autoFocus />

//                     </div>


//                     <div className="mb-3">

//                         <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter  Password' required autoFocus />
//                     </div>

//                     <button type="submit" className="btn btn-primary">RESET</button>

//                 </form>

//             </div>
//         </Layout>
//     )
// }

// export default ForgotPassword




// import React, { useState } from 'react';
// import Layout from '../../components/layout/Layout';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import toast from 'react-hot-toast';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ForgotPassword = () => {
//     const [email, setEmail] = useState("");
//     const [newPassword, setNewPassword] = useState("");
//     const [question, setQuestion] = useState("");
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const res = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/auth/forgot-password`, { email, newPassword, question });
//             if (res.data || res.data.success) {
//                 toast.success("Successfully Reset Password");
//                 navigate('/login');
//             } else {
//                 toast.error("Please check your inputs.");
//             }
//         } catch (error) {
//             console.error(error);
//             toast.error("Something went wrong!");
//         }
//     };

//     return (
//         <Layout title={"Forgot Password - Ecommerce App"}>
//             <div className="forgot-password-container d-flex justify-content-center align-items-center vh-100" style={{
//                 // background: 'linear-gradient(140deg , #4e342e  25% ,rgb(174, 166, 163) 70%)',
//                 background: 'linear-gradient(140deg , #4e342e  20% ,rgb(174, 166, 163) 100%)',
             
//                 padding: '20px'
//             }}>
//                 <style>
//                     {`
//                         .forgot-password-card {
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
//                 <div className="forgot-password-card">
//                     <h2 className="title">RESET PASSWORD</h2>
//                     <form onSubmit={handleSubmit}>
//                         <div className="mb-3">
//                             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder='Enter Email' required autoFocus />
//                         </div>
//                         <div className="mb-3">
//                             <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} className="form-control" placeholder='What is your favorite sport?' required autoFocus />
//                         </div>
//                         <div className="mb-3">
//                             <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="form-control" placeholder='Enter New Password' required autoFocus />
//                         </div>
//                         <button type="submit" className="btn">RESET</button>
//                     </form>
//                 </div>
//             </div>
//         </Layout>
//     );
// };

// export default ForgotPassword;



import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import 'bootstrap/dist/css/bootstrap.min.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [question, setQuestion] = useState("");
    const navigate = useNavigate();

    const generatePasswordResetPDF = (resetData) => {
        const doc = new jsPDF();
        
        const img = new Image();
        img.src = `${window.location.origin}/images/GreenMarketingLogo.png`;

        img.onload = () => {
            doc.addImage(img, 'PNG', 80, 10, 50, 30);
            doc.setFontSize(18);
            doc.text("Bobi's Bakery - Password Reset Confirmation", 105, 50, null, null, 'center');
            doc.setFontSize(12);

            autoTable(doc, {
                startY: 60,
                head: [['Field', 'Details']],
                body: [
                    ['Email', resetData.email],
                    ['Security Question', 'What is your favorite sport?'],
                    ['Password Status', 'Successfully Reset'],
                    ['Reset Time', new Date().toLocaleString()],
                ],
                styles: { 
                    halign: 'left',
                    cellPadding: 5,
                    fontSize: 12
                },
                headStyles: { 
                    fillColor: [78, 52, 46],
                    textColor: [255, 255, 255],
                    fontStyle: 'bold'
                },
                columnStyles: {
                    0: { fontStyle: 'bold', cellWidth: 70 },
                    1: { cellWidth: 'auto' }
                },
                margin: { top: 10 }
            });

            // Security notice
            doc.setFontSize(10);
            doc.setTextColor(100);
            doc.text("Please keep this confirmation secure. If you didn't request this change, contact support immediately.", 
                    doc.internal.pageSize.getWidth() / 2, 
                    doc.lastAutoTable.finalY + 15, 
                    { align: 'center' });

            doc.save(`Bobi-Bakery-Password-Reset-${new Date().toISOString().slice(0,10)}.pdf`);
        };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_ACT}/api/v1/auth/forgot-password`, { 
                email, 
                newPassword, 
                question 
            });

            if (res.data && res.data.success) {
                toast.success("Password reset successful!");
                
                // Generate PDF confirmation
                generatePasswordResetPDF({
                    email,
                    timestamp: new Date()
                });
                
                navigate('/login');
            } else {
                toast.error(res.data?.message || "Password reset failed");
            }
        } catch (error) {
            console.error("Password reset error:", error);
            toast.error(error.response?.data?.message || "Something went wrong!");
        }
    };

    return (
        <Layout title={"Forgot Password - Bobi's Bakery"}>
            <div className="forgot-password-container d-flex justify-content-center align-items-center vh-100" 
                style={{
                    background: 'linear-gradient(140deg, #4e342e 20%, rgb(174, 166, 163) 100%)',
                    padding: '20px'
                }}>
                
                <style>
                    {`
                        .forgot-password-card {
                            width: 100%;
                            max-width: 450px;
                            border-radius: 12px;
                            background: #4e342e;
                            padding: 30px;
                            box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.5);
                            border: 2px solid #3e2723;
                            color: #fff;
                            transition: transform 0.3s ease;
                        }
                        .forgot-password-card:hover {
                            transform: translateY(-5px);
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
                        .form-control:focus {
                            border-color: #a1887f;
                            box-shadow: 0 0 8px rgba(161, 136, 127, 0.5);
                            background: #6d4c41;
                        }
                        .btn-reset {
                            background: #8d6e63;
                            border: none;
                            padding: 12px;
                            font-size: 18px;
                            font-weight: bold;
                            transition: all 0.3s ease;
                        }
                        .btn-reset:hover {
                            background: #6d4c41;
                        }
                        .btn-back {
                            background: transparent;
                            border: 1px solid #8d6e63;
                            color: #d7ccc8;
                            margin-top: 10px;
                        }
                        .btn-back:hover {
                            background: rgba(141, 110, 99, 0.2);
                            color: #fff;
                        }
                        .title {
                            text-align: center;
                            font-weight: bold;
                            font-size: 24px;
                            margin-bottom: 25px;
                            color: #fff;
                            text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
                        }
                        .password-strength {
                            font-size: 12px;
                            margin-top: 5px;
                            color: #d7ccc8;
                        }
                    `}
                </style>

                <div className="forgot-password-card">
                    <h2 className="title">Reset Your Password</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input 
                                type="email" 
                                className="form-control" 
                                placeholder="Your registered email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required 
                                autoFocus
                            />
                        </div>
                        <div className="mb-3">
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="What is your favorite sport?" 
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="New password (min 6 characters)" 
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                minLength="6"
                                required
                            />
                            <div className="password-strength">
                                {newPassword.length > 0 && (
                                    <span>
                                        Strength: {
                                            newPassword.length < 6 ? 'Weak' :
                                            newPassword.length < 10 ? 'Medium' : 'Strong'
                                        }
                                    </span>
                                )}
                            </div>
                        </div>
                        <button 
                            type="submit" 
                            className="btn btn-reset w-100"
                        >
                            Reset Password
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-back w-100"
                            onClick={() => navigate('/login')}
                        >
                            Back to Login
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
};

export default ForgotPassword;