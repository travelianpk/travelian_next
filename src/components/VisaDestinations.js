import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function VisaDestinations() {

  const destinations = [
    { name: "Azerbaijan", image: "/images/tvisas/azerbaijanf.jpg" },
    { name: "Thailand", image: "/images/tvisas/thailand.jpg" },
    { name: "Malaysia", image: "/images/tvisas/malaysia.jpg" },
    { name: "Sri Lanka", image: "/images/tvisas/SriLanka.jpg" },
    { name: "Indonesia", image: "/images/tvisas/indonesia.jpg" },
    { name: "Singapore", image: "/images/tvisas/Singapore.png" }
  ];

  const multiVisa = [
    { name: "Malaysia + Thailand + Sri Lanka", image: "/images/tvisas/MalaysiaThailandSriLanka.jpg" },
    { name: "Malaysia + Singapore + Thailand", image: "/images/tvisas/MalaysiaSingaporeThailand.jpg" },
    { name: "Malaysia + Singapore", image: "/images/tvisas/MalaysiaSingapore.jpg" }
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
                  href={`https://wa.me/923244440014?text=Hello Travelian, I want visit visa for ${encodeURIComponent(item.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="visa-btn"
                >
                  <FaWhatsapp /> Ask on WhatsApp
                </a>

              </div>

            </div>
          ))}

        </div>

        <h2 className="section-title">
          Multiple Country <span>Visit Visas</span>
        </h2>

        <div className="visa-grid">

          {multiVisa.map((item, index) => (
            <div className="visa-card multi" key={index}>

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
                  href={`https://wa.me/923244440014?text=Hello Travelian, I want visit visa for ${encodeURIComponent(item.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
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