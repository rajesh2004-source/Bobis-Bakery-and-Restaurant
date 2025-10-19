// import React from 'react'
// import Layout from '../components/layout/Layout'
// import { BiSupport, BiMailSend, BiPhoneCall, BiLocationPlus, BiLoader } from 'react-icons/bi';
// import { IoMdContacts } from "react-icons/io"
// import { FaShippingFast,FaHeadset, FaCreditCard, FaUndo, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

// const contact = () => {
//     return (
//         <Layout title={"contact us"}>
//             <div className='row contactus' id="conta">
//                 <div className='col-md-6'>
//                     {/* images */}
//                     <img src='/images/contactus.jpg' alt="contactus" style={{ width: "100%", height: "90%" }}></img>
//                 </div>
//                 <div className='col-md-5' >
//                     <h1 className='bg-dark p-2 text-white text-center'><IoMdContacts /> Contact Page</h1>
//                     <p className='text-justify mt-2'>
//                         any query and info about product feel free to call anytime we 24x7 available
//                     </p>
//                     <p className='mt-3'> <BiMailSend /> : www.bobis.com</p>
//                     <p className='mt-3'> <BiPhoneCall /> : 026-1545420</p>
//                     <p className='mt-3'> <BiSupport /> : Gorakhpur, Uttar Pradesh</p>
//                     {/* <p className='mt-3'> <BiSupport /> : 1800-2400-0202(toll free)</p> */}
//                 </div>
//             </div>

//             <div className="contact-container">
//       <div className="contact-content">
//         <div className="intro-text">
//           <p className="intro-line1">We Are Here For Help You!</p>
//           <p className="intro-line2">Please Contact Us.</p>
//         </div>

     
        
//         <div className="stores-container">
//           <div className="store">
//             <h3>STORE IN GORAKHPUR</h3>
         
//               <p>If you have any question, please contact us at <a href="mailto:bobis1986@gamil.com">bobis1986@gamil.com</a></p>
//                       <p><FaMapMarkerAlt /> Gorakhpur</p>
//                       <p><FaPhoneAlt /> +0 123 456 789</p>
//                       <p><FaPhoneAlt /> +0 123 456 789</p>
//           </div>

//         </div>
//         <div className="floating-contact-icon">
//         <FaHeadset className="contact-icon" />
//       </div>
//       </div>
//     </div>
//  <style>{`
// /* ContactUs.css */
// .contact-container {
//   font-family: 'Arial', sans-serif;
//   background-color: #ffffff;
//   padding: 40px 0;
//   color: #333333;  font-family: "Playfair Display", serif;

// }

// .contact-content {
//   max-width: 1000px;
//   margin: 0 auto;
//   padding: 0 20px;
// }

// .intro-text {
//   margin-bottom: 30px;
//   line-height: 1.5;
// }

// .intro-line1 {
//   font-size: 32px;
//   font-weight: 600;
//   margin-bottom: 8px;
// }

// .intro-line2 {
//    font-size: 32px;

//   font-weight: 400;
// }

// .location-prompt {
//   margin-bottom: 25px;
// }

// .location-prompt p {
//   font-size: 15px;
//   color: #555555;
//   font-style: italic;
// }

// .stores-container {
//   display: flex;
//   gap: 60px;
//   margin-top: 35px;
// }

// .store {
//   flex: 1;
// }

// .store h3 {
//   font-size: 17px;
//   font-weight: 700;
//   text-transform: uppercase;
//   margin-bottom: 15px;
//   letter-spacing: 0.3px;
// }

// .store p {
//   font-size: 14px;
//   line-height: 1.7;
//   margin-bottom: 6px;
//   color: #555555;
// }

// .map-link {
//   background: none;
//   border: none;
//   color: #1a73e8;
//   text-decoration: underline;
//   cursor: pointer;
//   font-size: 14px;
//   padding: 0;
//   margin-top: 12px;
//   font-family: inherit;
//   font-weight: 500;
// }

// .map-link:hover {
//   color: #0d5bba;
// }


// .floating-contact-icon {
//   position: fixed;
//   right: 30px;
//   bottom: 30px;
//   background-color: #1a73e8;
//   color: white;
//   width: 60px;
//   height: 60px;
//   border-radius: 50%;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//   cursor: pointer;
//   transition: all 0.3s ease;
//   z-index: 100;
// }

// .floating-contact-icon:hover {
//   background-color: #0d5bba;
//   transform: scale(1.05);
// }

// .contact-icon {
//   font-size: 28px;
// }
//     `}</style>
//         </Layout>


//     )
// }

// export default contact






import React from 'react';
import Layout from '../components/layout/Layout';
import { BiMailSend, BiPhoneCall, BiSupport } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { FaMapMarkerAlt, FaPhoneAlt, FaHeadset } from 'react-icons/fa';

const Contact = () => {
  return (
    <Layout title="Contact Us">
      <br/>

      <div className="contact-wrapper">
        <div className="contact-container">
          <div className="heading">
            <IoMdContacts className="heading-icon" />
            <h1>Let's Connect</h1>
            <p>We're here to serve you fresh support – anytime, all the time 🍞</p>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <BiMailSend className="info-icon" />
              <h3>Email</h3>
              <p><a href="mailto:bobis1986@gmail.com">bobis1986@gmail.com</a></p>
            </div>

            <div className="info-card">
              <BiPhoneCall className="info-icon" />
              <h3>Call Us</h3>
              <p>0261-2544040</p>
            </div>

            <div className="info-card">
              <BiSupport className="info-icon" />
              <h3>Support Center</h3>
              <p>Gorakhpur, Uttar Pradesh</p>
            </div>

            <div className="info-card">
              <FaMapMarkerAlt className="info-icon" />
              <h3>Store Location</h3>
              <p>Gorakhpur</p>
              <p><FaPhoneAlt /> +91 9512525010</p>
            </div>
          </div>
        </div>

        <div className="floating-contact-icon">
          <FaHeadset className="contact-icon" />
        </div>
      </div>

      <style>{`
        .contact-wrapper {
          padding: 60px 20px;
          background-color: #fff9f2;
          min-height: 100vh;
          font-family: 'Playfair Display', serif;
        }

        .contact-container {
          max-width: 1100px;
          margin: 0 auto;
          text-align: center;
        }

        .heading {
          margin-bottom: 60px;
        }

        .heading-icon {
          font-size: 50px;
          color: #b23b3b;
        }

        .heading h1 {
          font-size: 36px;
          margin: 10px 0;
          color: #3b2f2f;
        }

        .heading p {
          font-size: 18px;
          color: #5f4d4d;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 30px;
        }

        .info-card {
          background: #ffffff;
          border-radius: 16px;
          padding: 30px 20px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
          border: 1px solid #f3e8e8;
        }

        .info-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
        }

        .info-icon {
          font-size: 34px;
          color: #b23b3b;
          margin-bottom: 10px;
        }

        .info-card h3 {
          margin-bottom: 8px;
          font-size: 20px;
          color: #3b2f2f;
        }

        .info-card p {
          font-size: 15px;
          color: #6f5c5c;
          line-height: 1.6;
        }

        .info-card a {
          text-decoration: none;
          color: #b23b3b;
        }

        .info-card a:hover {
          text-decoration: underline;
        }

        .floating-contact-icon {
          position: fixed;
          right: 30px;
          bottom: 30px;
          background-color: #b23b3b;
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .floating-contact-icon:hover {
          background-color: #8c2c2c;
          transform: scale(1.05);
        }

        .contact-icon {
          font-size: 28px;
        }

        @media (max-width: 600px) {
          .heading h1 {
            font-size: 28px;
          }

          .info-grid {
            gap: 20px;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Contact;
