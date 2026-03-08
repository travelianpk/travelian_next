import { FaWhatsapp } from "react-icons/fa";

export default function HotelCTA() {
  return (
    <section className="hotel-cta">

      <div className="hotel-cta-container">

        <h2>
          Book Your <span>Perfect Hotel Stay</span>
        </h2>

        <p>
          Whether you need luxury hotels, budget stays, or hotels near Haram in
          Makkah and Madinah, Travelian will find the best option for your trip.
        </p>

        <div className="hotel-cta-actions">

          <a
            href="https://wa.me/923244440014?text=Hello Travelian, I want to book a hotel"
            target="_blank"
            rel="noopener noreferrer"
            className="hotel-cta-btn"
          >
            <FaWhatsapp /> Book on WhatsApp
          </a>

        </div>

        <div className="hotel-cta-trust">
          ✓ Best Hotel Deals  
          ✓ Trusted Travel Experts  
          ✓ Worldwide Hotel Booking
        </div>

      </div>

    </section>
  );
}