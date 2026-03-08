import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

export default function ContactInfo() {

  return (

    <section className="contact-section">

      <div className="contact-container">

        <h2 className="contact-title">
          Get in <span>Touch</span>
        </h2>

        <p className="contact-subtitle">
          Our team is ready to help you with flights, visas, Umrah and travel services.
        </p>

        <div className="contact-grid">

          <div className="contact-box">
            <FaPhoneAlt className="contact-page-icon" />
            <h3>Call / WhatsApp</h3>

            <a
              href="https://wa.me/923244440014"
              target="_blank"
            >
              +92 324 444 0014
            </a>

          </div>

          <div className="contact-box">
            <FaEnvelope className="contact-page-icon" />
            <h3>Email</h3>

            <a href="mailto:travelian.pk@gmail.com">
              travelian.pk@gmail.com
            </a>

          </div>

          <div className="contact-box">
            <FaMapMarkerAlt className="contact-page-icon" />
            <h3>Location</h3>

            <p>Pakistan</p>

          </div>

          <div className="contact-box">
            <FaClock className="contact-page-icon" />
            <h3>Business Hours</h3>

            <p>Mon – Sat : 10AM – 7PM</p>

          </div>

        </div>

      </div>

    </section>

  );
}