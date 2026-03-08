import { FaWhatsapp } from "react-icons/fa";

export default function UmrahCTA() {
  return (
    <section className="umrah-cta">

      <div className="container">

        <h2>
          Start Your <span>Umrah Journey</span> with Travelian
        </h2>

        <p>
          Book your Umrah package with confidence. Our team will guide you 
          through every step for a comfortable and spiritually fulfilling journey.
        </p>

        <a
          href="https://wa.me/923244440014"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-btn"
        >
          <FaWhatsapp /> Chat on WhatsApp
        </a>

      </div>

    </section>
  );
}