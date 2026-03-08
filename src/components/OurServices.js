"use client";

import {
  FaPlane,
  FaKaaba,
  FaGlobe,
  FaGraduationCap,
  FaHotel,
  FaShieldAlt,
} from "react-icons/fa";

export default function OurServices() {
  return (
    <section className="services-section">
      <div className="services-container">

        <h2 className="services-title">
          Our <span>Services</span>
        </h2>

        <div className="services-grid">

          <div className="service-card">
            <div className="service-icon"><FaPlane /></div>
            <h3>Tickets</h3>
          </div>

          <div className="service-card">
            <div className="service-icon"><FaKaaba /></div>
            <h3>Umrah</h3>
          </div>

          <div className="service-card">
            <div className="service-icon"><FaGlobe /></div>
            <h3>Visit Visa</h3>
          </div>

          <div className="service-card">
            <div className="service-icon"><FaGraduationCap /></div>
            <h3>Study Visa</h3>
          </div>

          <div className="service-card">
            <div className="service-icon"><FaHotel /></div>
            <h3>Hotel Booking</h3>
          </div>

          <div className="service-card">
            <div className="service-icon"><FaShieldAlt /></div>
            <h3>Travel Insurance</h3>
          </div>

        </div>

      </div>
    </section>
  );
}