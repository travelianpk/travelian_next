"use client";

import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function ContactQuick() {
  return (
    <section className="contact-quick-section">
        <h2 className="contact-heading">
  Get in <span>Touch</span>
</h2>
      <div className="contact-quick-container">

        
        <div className="contact-card">
          <div className="contact-icon">
            <FaPhoneAlt />
          </div>
          <h3>Call Us</h3>
          <p>+92 324 444 0014</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <FaWhatsapp />
          </div>
          <h3>WhatsApp</h3>
          <p>Chat with us instantly</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <FaEnvelope />
          </div>
          <h3>Email</h3>
          <p>travelian.pk@gmail.com</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <FaFacebookF />
          </div>
          <h3>Facebook</h3>
          <p>Follow us for updates</p>
        </div>

        <div className="contact-card">
          <div className="contact-icon">
            <FaInstagram />
          </div>
          <h3>Instagram</h3>
          <p>Follow & message us</p>
        </div>

      </div>
    </section>
  );
}