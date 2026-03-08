import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function StudyCTA() {
  return (
    <section className="study-cta">

      <div className="study-cta-box">

        <h2>
          Start Your <span>Study Abroad Journey</span>
        </h2>

        <p>
          Travelian helps students secure admissions and visas for the UK,
          Finland, Sweden and Hungary with complete professional guidance.
        </p>

        {/* Country Flags */}

        <div className="study-flags">

          <Image src="/images/flags/gb.png" alt="UK" width={50} height={35}/>
          <Image src="/images/flags/fi.png" alt="Finland" width={50} height={35}/>
          <Image src="/images/flags/se.png" alt="Sweden" width={50} height={35}/>
          <Image src="/images/flags/hungary.png" alt="Hungary" width={50} height={35}/>

        </div>

        <a
          href="https://wa.me/923244440014"
          target="_blank"
          rel="noopener noreferrer"
          className="study-cta-btn"
        >
          <FaWhatsapp />
          Chat on WhatsApp
        </a>

      </div>

    </section>
  );
}