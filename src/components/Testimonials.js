"use client";

import { FaStar } from "react-icons/fa";

export default function Testimonials() {

  const reviews = [
    {
      name: "Ahmed Raza",
      city: "Lahore, Pakistan",
      text: "Travelian made my Umrah journey completely stress-free. Excellent service and very professional team!",
    },
    {
      name: "Fatima Khan",
      city: "Sialkot, Pakistan",
      text: "Got my UK student visa smoothly through Travelian. Highly recommended for visa consultancy.",
    },
    {
      name: "Usman Ali",
      city: "Gujranwala, Pakistan",
      text: "Best airfare prices and quick support. Their team responds instantly on WhatsApp.",
    },
    {
      name: "Hassan Sheikh",
      city: "Multan, Pakistan",
      text: "Booked Dubai tickets at amazing rates. Very transparent pricing and no hidden charges.",
    },
    {
      name: "Ayesha Noor",
      city: "Faisalabad, Pakistan",
      text: "My visit visa was processed very smoothly. Professional guidance at every step.",
    },
    {
      name: "Bilal Ahmed",
      city: "Sambrial, Pakistan",
      text: "Excellent customer service and very cooperative staff. Highly trustworthy agency.",
    },
    {
      name: "Zainab Malik",
      city: "Sialkot, Pakistan",
      text: "Travel insurance and hotel booking were arranged perfectly. Great experience!",
    },
    {
      name: "Imran Siddiqui",
      city: "Wazirabad, Pakistan",
      text: "Travelian handled my Turkey trip professionally. Smooth process from start to finish.",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">

        <h2 className="testimonials-title">
          What Our <span>Clients Say</span>
        </h2>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div className="testimonial-card" key={index}>

              

              <p>{review.text}</p>

              <h4>{review.name}</h4>
              <span>{review.city}</span>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}