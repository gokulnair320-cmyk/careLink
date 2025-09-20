import React from 'react';
import './Footer.css'
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Brand + About */}
        <div className="footer-section">
          <h2 className="footer-title">careLink</h2>
          <p className="footer-text">
            A secure digital health record system for migrant workers in Kerala,
            making healthcare accessible, portable, and multilingual.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/health-card">Health Card</a></li>
            <li><a href="/medical-records">Medical Records</a></li>
            <li><a href="/find-doctors">Find Doctors</a></li>
            <li><a href="/health-surveillance">Health Surveillance</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <p className="footer-text">📍 Kerala, India</p>
          <p className="footer-text">📧 support@healthcard.org</p>
          <p className="footer-text">📞 +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 careLink | All Rights Reserved</p>
      </div>
    </footer>
  );
}
