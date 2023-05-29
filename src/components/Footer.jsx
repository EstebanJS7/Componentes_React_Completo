import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="containerf">
        <div className="footer-row">
          <div className="footer-links">
            <h4 className="footer-link-title">Products</h4>
            <div className="footer-link">
              <a href="#" className="footer-link-item">
                ICM
              </a>
              <a href="#" className="footer-link-item">
                DMS
              </a>
              <a href="#" className="footer-link-item">
                CRM
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h4 className="footer-link-title">Resources</h4>
            <div className="footer-link">
              <a href="#" className="footer-link-item">
                Case Studies
              </a>
              <a href="#" className="footer-link-item">
                FAQ's
              </a>
              <a href="#" className="footer-link-item">
                Newsletter
              </a>
              <a href="#" className="footer-link-item">
                Release Notes
              </a>
              <a href="#" className="footer-link-item">
                Developer's Guide
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h4 className="footer-link-title">Company</h4>
            <div className="footer-link">
              <a href="#" className="footer-link-item">
                About
              </a>
              <a href="#" className="footer-link-item">
                Our Experts
              </a>
              <a href="#" className="footer-link-item">
                Terms & Conditions
              </a>
              <a href="#" className="footer-link-item">
                Schedule a Demo
              </a>
              <a href="#" className="footer-link-item">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h4 className="footer-link-title">Contact Us</h4>
            <div className="social-links">
              <a href="#" className="social-link-item">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-link-item">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-link-item">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-cr">
          <p>©2023. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
