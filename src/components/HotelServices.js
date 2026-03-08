import {
  FaCrown,
  FaBed,
  FaUsers,
  FaMosque,
  FaBuilding
} from "react-icons/fa";

export default function HotelServices(){

  const services = [
    {
      icon: <FaCrown />,
      title: "Luxury Hotels",
      text: "Book premium 5-star hotels with world-class facilities and comfort."
    },
    {
      icon: <FaBed />,
      title: "Budget Hotels",
      text: "Affordable hotel stays with clean rooms and excellent service."
    },
    {
      icon: <FaUsers />,
      title: "Family Rooms",
      text: "Comfortable hotel accommodations designed for families and groups."
    },
    {
      icon: <FaMosque />,
      title: "Umrah Hotels",
      text: "Hotels near Haram in Makkah and Madinah for convenient Umrah stays."
    },
    {
      icon: <FaBuilding />,
      title: "Business Hotels",
      text: "Perfect hotels for business travelers near commercial centers."
    }
  ];

  return (

    <section className="hotel-services">

      <div className="container">

        <h2 className="section-title">
          Our <span>Hotel Booking Services</span>
        </h2>

        <p className="section-subtitle">
          Travelian provides a wide range of hotel booking services to suit every traveler.
        </p>

        <div className="hotel-services-grid">

          {services.map((service,index)=>(
            <div className="hotel-service-card" key={index}>

              <div className="hotel-service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

            </div>
          ))}

        </div>

      </div>

    </section>

  )
}