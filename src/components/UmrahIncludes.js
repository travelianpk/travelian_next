import { FaPassport, FaPlane, FaHotel, FaBus, FaMapMarkedAlt, FaHeadset } from "react-icons/fa";

export default function UmrahIncludes() {

  const includes = [
    {
      icon: <FaPassport />,
      title: "Umrah Visa Processing",
      text: "Complete visa assistance handled by our experienced team."
    },
    {
      icon: <FaPlane />,
      title: "Return Flights",
      text: "Convenient flight options from major cities in Pakistan."
    },
    {
      icon: <FaHotel />,
      title: "Hotel Accommodation",
      text: "Comfortable hotels near Haram in Makkah and Madinah."
    },
    {
      icon: <FaBus />,
      title: "Airport Transfers",
      text: "Reliable transport between airport, hotel and Haram."
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Ziyarat Tours",
      text: "Guided visits to important Islamic historical sites."
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      text: "Dedicated assistance before and during your journey."
    }
  ];

  return (
    <section className="umrah-includes">

      <div className="container">

        <h2 className="section-title">
          What's <span>Included</span> in Our Packages
        </h2>

        <p className="section-subtitle">
          Everything you need for a comfortable and spiritually fulfilling Umrah journey.
        </p>

        <div className="includes-grid">

          {includes.map((item, index) => (

            <div className="include-card" key={index}>

              <div className="include-icon">
                {item.icon}
              </div>

              <h4>{item.title}</h4>

              <p>{item.text}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}