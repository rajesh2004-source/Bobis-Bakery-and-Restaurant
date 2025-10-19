import React from "react";
import "./Footer.css"; // Make sure this CSS file is linked
import { FaShippingFast, FaCreditCard, FaUndo, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer" style={{ background: "#242323" }}>
      {/* Top Section: Features */}
      <div className="footer-top">
        <div className="feature">
          <div className="feature-icon"><FaShippingFast /></div>
          <h3>Free Shipping</h3>
          <p>Capped at RS.39 per order</p>
          
        </div>
        <div className="feature">
          <div className="feature-icon"><FaCreditCard /></div>
          <h3>Card Payments</h3>
          <p> With Installments</p>
        </div>
        <div className="feature">
          <div className="feature-icon"><FaUndo /></div>
          <h3>Easy Returns</h3>
          <p>Shop With Confidence</p>
        </div>
      </div>

      {/* Bottom Section: Contact, Info, Account, Newsletter */}
      <div className="footer-bottom">
        {/* Contact Section */}
        <div className="footer-section">
        <Link to="/contact"> <h3>CONTACT US</h3></Link>
          <p>If you have any question, please contact us at <a href="mailto:bobis1986@gamil.com">bobis1986@gamil.com</a></p>
          <p><FaMapMarkerAlt /> Gorakhpur</p>
          <p><FaPhoneAlt /> +0 123 456 789</p>
          <p><FaPhoneAlt /> +0 123 456 789</p>
        </div>

        {/* Information Section */}
        <div className="footer-section">
        <Link to="/about"> <h3>INFORMATION</h3></Link>
          <ul>
            <Link to="/about">  <li>About Us </li></Link>
            <Link to="/about">  <li>Delivery Information </li></Link>
            <Link to="/about">  <li>Sales </li></Link>
            <Link to="/about">  <li>Terms & Conditions </li></Link>
            <Link to="/about">  <li>Shipping Policy</li></Link>
            <Link to="/about">  <li>About Us </li></Link>
          </ul>
        </div>

        {/* Account Section */}
        <div className="footer-section">
        <Link to="/about">   <h3>ACCOUNT</h3></Link>
          <ul>
            <Link to="#">  <li>My Account </li></Link>
              <Link to="#">  <li>My Orders </li></Link>
              <Link to="#">  <li>Returns </li></Link>
              <Link to="#">  <li>Shipping </li></Link>
              <Link to="#">  <li>Wishlist</li></Link>
              <Link to="#">  <li>Sign Up</li></Link>
              <Link to="#">  <li>How Does it Work </li></Link>
          
            
          </ul>
        
          
        </div>

        {/* Newsletter Section */}
        <div className="footer-section">
        <Link to="/about"> <h3>NEWSLETTER</h3></Link>
    <p>If you have any question, please contact us at <a href="mailto:support@example.com">Send Us a Email</a></p>
          <div className="newsletter">
            <input type="email" placeholder="Email Address" />
            <button>→</button>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="footer-copy">
         All Right Reserved By &copy; Bobi's Bakery
      </div>



    </footer>
  );
};

export default Footer;