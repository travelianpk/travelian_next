import { FaWhatsapp } from "react-icons/fa";

export default function VisaCTA() {
  return (
    <section className="visa-cta">

      <div className="visa-cta-container">

        <h2>
          Ready to Explore the World?
        </h2>

        <p>
          Apply for your tourist visa today with Travelian and travel to your
          favorite destinations without stress.
        </p>

        <a
          href="https://wa.me/923244440014"
          target="_blank"
          rel="noopener noreferrer"
          className="visa-cta-btn"
        >
          <FaWhatsapp />
          Chat on WhatsApp
        </a>

      </div>

    </section>
  );
}