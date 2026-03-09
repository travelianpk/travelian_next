import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function HotelDestinations() {

  const destinations = [
    { name: "Dubai", image: "/images/hotelsimgs/dubai.jpg" },
    { name: "Makkah", image: "/images/hotelsimgs/makka.jpg" },
    { name: "Madinah", image: "/images/hotelsimgs/Madinah.jpg" },
    { name: "Istanbul", image: "/images/hotelsimgs/Istanbul.jpg" },
    { name: "Kuala Lumpur", image: "/images/hotelsimgs/KualaLumpur.jpg" },
    { name: "Bangkok", image: "/images/hotelsimgs/Bangkok.jpg" }
  ];

  return (

    <section className="hotel-destinations">

      <div className="container">

        <h2 className="section-title">
          Popular <span>Hotel Destinations</span>
        </h2>

        <p className="section-subtitle">
          Book comfortable hotel stays in top travel destinations with Travelian.
        </p>

        <div className="hotel-destination-grid">

          {destinations.map((item,index)=>(
            <div className="hotel-destination-card" key={index}>

              <div className="hotel-destination-image">

                <Image
                  src={item.image}
                  alt={item.name}
                  width={600}
                  height={400}
                />

                <div className="hotel-overlay">
                  <h3>{item.name}</h3>

                  <a
                    href={`https://wa.me/923244440014?text=Hello Travelian, I want hotel booking in ${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hotel-btn"
                  >
                    <FaWhatsapp /> Book on WhatsApp
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>

  )
}