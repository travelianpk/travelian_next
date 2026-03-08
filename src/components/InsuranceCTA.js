import { FaWhatsapp } from "react-icons/fa";

export default function InsuranceCTA(){

  return(

    <section className="insurance-cta">

      <div className="container">

        <h2>
          Travel With <span>Confidence</span>
        </h2>

        <p>
          Protect your journey with reliable travel insurance coverage.  
          Contact Travelian today and get your travel insurance policy quickly and easily.
        </p>

        <a
          href="https://wa.me/923244440014"
          target="_blank"
          className="insurance-cta-btn"
        >
          <FaWhatsapp /> Get Insurance on WhatsApp
        </a>

      </div>

    </section>

  )
}