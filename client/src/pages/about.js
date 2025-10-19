// import React from 'react'
// import Layout from '../components/layout/Layout'
// import { FcAbout } from 'react-icons/fc'

// const about = () => {
//     return (
//         <Layout title={"about us - Ecommerce app"}>
//             <div className='row contactus' id="conta">
//                 <div className='col-md-6'>

//                     <img src='/images/NN.png' alt="aboutus" style={{ width: "80%", height: "60%" }}></img>
//                 </div>
//                 <div className='col-md-5' >
//                     <h1 className='bg-dark p-2 text-white text-center'><FcAbout /> About us Page</h1>
//                     <p className='text-justify mt-2'>
//                         Welcome to Bobi’s Bakery, where tradition meets taste! Located in the heart of Gorakhpur, Uttar Pradesh, we are passionate about crafting delicious, freshly baked goods that bring joy to every bite. Founded with a love for baking and a commitment to quality, Bobi’s Bakery has become a beloved name in the community.

//                         Our story began with a simple mission: to offer the finest baked treats made from the highest quality ingredients. Whether it’s our signature cakes, pastries, bread, or cookies, every item is made with care, dedication, and a sprinkle of love. We take pride in blending traditional recipes with a modern twist, ensuring that each product reflects our commitment to excellence.

//                         At Bobi’s Bakery, we believe in more than just great taste; we believe in creating memories. From celebrations to everyday indulgences, our treats are designed to add sweetness to your life. We are dedicated to providing a warm, friendly environment where customers feel at home and enjoy the finest bakery items.

//                     </p>
//                     <p><ul>
//                         <li>-Freshly baked cakes for all occasions</li>
//                         <li>-Flaky and delicious pastries</li>
//                         <li>-Soft and flavorful bread</li>
//                         <li>-Homemade cookies and snacks</li>
//                         <li>-Special treats for festivals and celebrations</li>
//                     </ul></p>
//                     <p>Come visit us at Bobi’s Bakery, where every bite is a taste of happiness!

//                         Location: Gorakhpur, Uttar Pradesh</p>
//                 </div>
//             </div>
//             <br/>
//         <br/>
//         <br/>
//         <br/>
//         </Layout>
       
//     )
// }

// export default about

import React from 'react';
import Layout from '../components/layout/Layout';
import { FcAbout } from 'react-icons/fc';
import { GiCakeSlice, GiBread, GiCookie } from 'react-icons/gi';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Layout title="About Us - Bobi’s Bakery">
      <br/>
      <div className="about-page">
        <div className="about-banner">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="about-title"
          >
            <FcAbout /> About Bobi’s Bakery
          </motion.h1>
          <p className="about-subtitle">
            Where tradition meets taste, and every bite tells a story!
          </p>
        </div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-justify mt-2">
              Welcome to Bobi’s Bakery, where tradition meets taste! Located in the heart of Gorakhpur, Uttar Pradesh, we are passionate about crafting delicious, freshly baked goods that bring joy to every bite. Founded with a love for baking and a commitment to quality, Bobi’s Bakery has become a beloved name in the community.
              <br /><br />
              Our story began with a simple mission: to offer the finest baked treats made from the highest quality ingredients. Whether it’s our signature cakes, pastries, bread, or cookies, every item is made with care, dedication, and a sprinkle of love. We take pride in blending traditional recipes with a modern twist, ensuring that each product reflects our commitment to excellence.
              <br /><br />
              At Bobi’s Bakery, we believe in more than just great taste; we believe in creating memories. From celebrations to everyday indulgences, our treats are designed to add sweetness to your life. We are dedicated to providing a warm, friendly environment where customers feel at home and enjoy the finest bakery items.
            </p>

            <ul className="about-list">
              <li>🍰 Freshly baked cakes for all occasions</li>
              <li>🥐 Flaky and delicious pastries</li>
              <li>🍞 Soft and flavorful bread</li>
              <li>🍪 Homemade cookies and snacks</li>
              <li>🎉 Special treats for festivals and celebrations</li>
            </ul>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="highlight-card">
              <GiCakeSlice className="highlight-icon" />
              <p>Custom Cakes</p>
            </div>
            <div className="highlight-card">
              <GiBread className="highlight-icon" />
              <p>Fresh Breads</p>
            </div>
            <div className="highlight-card">
              <GiCookie className="highlight-icon" />
              <p>Homemade Cookies</p>
            </div>
          </motion.div>

          <div className="about-footer">
            <p>
              🍞 Visit us in Gorakhpur and experience the magic of baking — one bite at a time!
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .about-page {
          font-family: 'Playfair Display', serif;
          background: #fff8f0;
          padding: 60px 20px;
          color: #5a3e2b;
        }

        .about-banner {
          text-align: center;
          margin-bottom: 40px;
        }

        .about-title {
          font-size: 36px;
          font-weight: 700;
        }

        .about-subtitle {
          font-size: 18px;
          color: #a15c38;
          margin-top: 8px;
        }

        .about-content {
          max-width: 900px;
          margin: auto;
        }

        .about-text p {
          font-size: 16px;
          margin-bottom: 16px;
          line-height: 1.7;
        }

        .text-justify {
          text-align: justify;
        }

        .mt-2 {
          margin-top: 1rem;
        }

        .about-list {
          margin-top: 20px;
          padding-left: 20px;
          font-size: 16px;
          line-height: 1.8;
        }

        .about-highlights {
          display: flex;
          justify-content: space-around;
          margin: 40px 0;
          flex-wrap: wrap;
        }

        .highlight-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          padding: 20px;
          text-align: center;
          width: 180px;
          margin: 10px;
          transition: transform 0.3s ease;
        }

        .highlight-card:hover {
          transform: translateY(-8px);
        }

        .highlight-icon {
          font-size: 36px;
          color: #d2691e;
          margin-bottom: 10px;
        }

        .about-footer {
          text-align: center;
          font-weight: 500;
          margin-top: 40px;
          font-size: 18px;
          color: #6d4c41;
        }

        @media (max-width: 768px) {
          .about-highlights {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </Layout>
  );
};

export default About;
