"use client";

import { FaCalendarCheck, FaTag, FaShieldAlt, FaHeadset } from "react-icons/fa";

export default function WhyChoose() {
  return (
    <section className="why-section">
      <div className="why-container">

        <h2 className="why-title">
          Why Choose <span>Travelian?</span>
        </h2>

        <div className="why-grid">

          <div className="why-card">
            <div className="why-icon">
              <FaCalendarCheck />
            </div>
            <h3>Easy Booking</h3>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <FaTag />
            </div>
            <h3>Best Price</h3>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <FaShieldAlt />
            </div>
            <h3>Safe & Reliable</h3>
          </div>

          <div className="why-card">
            <div className="why-icon">
              <FaHeadset />
            </div>
            <h3>24/7 Support</h3>
            
          </div>

        </div>
      </div>
    </section>
  );
}