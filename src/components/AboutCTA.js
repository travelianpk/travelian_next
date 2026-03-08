import { FaWhatsapp } from "react-icons/fa";

export default function AboutCTA(){

  return(

    <section className="about-cta">

      <div className="container">

        <h2>
          Start Your Journey With <span>Travelian</span>
        </h2>

        <p>
          Whether you are planning Umrah, study abroad, a visit visa, or your next vacation,
          Travelian is here to make your travel experience smooth and stress-free.
        </p>

        <a
          href="https://wa.me/923244440014"
          target="_blank"
          className="about-cta-btn"
        >
          <FaWhatsapp /> Chat on WhatsApp
        </a>

      </div>

    </section>

  )

}