import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function VisaDestinations() {

  const destinations = [
    {
      name: "Azerbaijan",
      image: "/images/flags/se.png"
    },
    {
      name: "Thailand",
      image: "/images/countries/thailand.jpg"
    },
    {
      name: "Malaysia",
      image: "/images/countries/malaysia.jpg"
    },
    {
      name: "Sri Lanka",
      image: "/images/countries/srilanka.jpg"
    },
    {
      name: "Indonesia",
      image: "/images/countries/indonesia.jpg"
    },
    {
      name: "Singapore",
      image: "/images/countries/singapore.jpg"
    }
  ];

  const multiVisa = [
    "Malaysia + Thailand + Sri Lanka",
    "Malaysia + Singapore + Thailand",
    "Malaysia + Singapore"
  ];

  return (
    <section className="visa-destinations">

      <div className="container">

        <h2 className="section-title">
          Popular <span>Tourist Visa Destinations</span>
        </h2>

        <div className="visa-grid">

          {destinations.map((item, index) => (
            <div className="visa-card" key={index}>

              <div className="visa-image">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={400}
                  height={250}
                />
              </div>

              <div className="visa-content">

                <h3>{item.name}</h3>

                <a
                  href={`https://wa.me/923244440014?text=Hello Travelian, I want visit visa for ${item.name}`}
                  target="_blank"
                  className="visa-btn"
                >
                  <FaWhatsapp /> Ask on WhatsApp
                </a>

              </div>

            </div>
          ))}

        </div>

        <h3 className="visa-multi-title">
          Multiple Country Visit Visas
        </h3>

        <div className="visa-grid">

          {multiVisa.map((item, index) => (
            <div className="visa-card multi" key={index}>

              <div className="visa-content">

                <h3>{item}</h3>

                <a
                  href={`https://wa.me/923244440014?text=Hello Travelian, I want visit visa for ${item}`}
                  target="_blank"
                  className="visa-btn"
                >
                  <FaWhatsapp /> Ask on WhatsApp
                </a>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}