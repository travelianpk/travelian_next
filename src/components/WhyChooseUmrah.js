import {
  FaPassport,
  FaHotel,
  FaPlane,
  FaHandsHelping
} from "react-icons/fa";

export default function WhyChooseUmrah() {

  const features = [
    {
      icon: <FaPassport />,
      title: "Umrah Visa Assistance",
      text: "Fast and reliable Umrah visa processing handled by our experienced team."
    },
    {
      icon: <FaHotel />,
      title: "Hotels Near Haram",
      text: "Stay in comfortable hotels located near Masjid Al-Haram and Masjid Al-Nabawi."
    },
    {
      icon: <FaPlane />,
      title: "Flights & Transport",
      text: "Complete travel arrangements including flights and local transport."
    },
    {
      icon: <FaHandsHelping />,
      title: "Guided Support",
      text: "Our team assists you throughout the journey for a smooth Umrah experience."
    }
  ];

  return (
    <section className="umrah-why">
      <div className="container">

        <h2 className="section-title">
          Why Choose <span>Travelian</span> for Umrah
        </h2>

        <p className="section-subtitle">
          We ensure a comfortable, reliable, and spiritually fulfilling Umrah
          experience for every pilgrim.
        </p>

        <div className="why-grid">

          {features.map((item, index) => (
            <div className="why-card" key={index}>

              <div className="why-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}