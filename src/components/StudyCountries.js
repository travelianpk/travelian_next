import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function StudyCountries() {

  const countries = [
    {
      name: "United Kingdom",
      flag: "/images/flags/gb.png",
      description:
        "Study in world-class universities with excellent post-study work opportunities."
    },
    {
      name: "Finland",
      flag: "/images/flags/fi.png",
      description:
        "High-quality education system with innovative teaching and strong career prospects."
    },
    {
      name: "Sweden",
      flag: "/images/flags/se.png",
      description:
        "Globally recognized universities with strong focus on research and innovation."
    },
    {
      name: "Hungary",
      flag: "/images/flags/hungary.png",
      description:
        "Affordable European education with internationally recognized degrees."
    }
  ];

  return (
    <section className="study-countries">

      <div className="container">

        <h2 className="section-title">
          Countries We Help You <span>Study In</span>
        </h2>

        <p className="section-subtitle">
          Explore top study destinations with Travelian’s expert admission and visa guidance.
        </p>

        <div className="countries-grid">

          {countries.map((country, index) => (

            <div className="country-card" key={index}>

              <div className="country-flag">
                <Image
                  src={country.flag}
                  alt={country.name}
                  width={60}
                  height={40}
                />
              </div>

              <h3>{country.name}</h3>

              <p>{country.description}</p>

              <a
                href="https://wa.me/923244440014?text=Hello%20Travelian,%20I%20want%20information%20about%20studying%20in%20"
                target="_blank"
                rel="noopener noreferrer"
                className="country-btn"
              >
                <FaWhatsapp />WhatsApp
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}