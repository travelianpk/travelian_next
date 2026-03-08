import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function HotelDestinations() {

  const destinations = [
    {
      name: "Dubai",
      image: "/images/flags/se.png"
    },
    {
      name: "Makkah",
      image: "/images/hotels/makkah.jpg"
    },
    {
      name: "Madinah",
      image: "/images/hotels/madinah.jpg"
    },
    {
      name: "Istanbul",
      image: "/images/hotels/istanbul.jpg"
    },
    {
      name: "Kuala Lumpur",
      image: "/images/hotels/kualalumpur.jpg"
    },
    {
      name: "Bangkok",
      image: "/images/hotels/bangkok.jpg"
    }
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
                    href={`https://wa.me/923244440014?text=Hello Travelian, I want hotel booking in ${item.name}`}
                    target="_blank"
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