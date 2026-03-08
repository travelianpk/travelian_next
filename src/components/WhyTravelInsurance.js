import { FaHeartbeat, FaPlaneDeparture, FaSuitcase, FaHeadset } from "react-icons/fa";

export default function WhyTravelInsurance() {

  const features = [
    {
      icon: <FaHeartbeat />,
      title: "Medical Protection",
      text: "Coverage for emergency medical treatment and hospitalization during your trip."
    },
    {
      icon: <FaPlaneDeparture />,
      title: "Trip Cancellation",
      text: "Protection against trip cancellations, delays, and unexpected travel interruptions."
    },
    {
      icon: <FaSuitcase />,
      title: "Lost Baggage",
      text: "Compensation for lost, delayed, or damaged luggage during your journey."
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Assistance",
      text: "Global support and emergency assistance whenever you need help abroad."
    }
  ];

  return (
    <section className="travel-insurance-why">

      <div className="container">

        <h2 className="section-title">
          Why <span>Travel Insurance</span> Matters
        </h2>

        <p className="section-subtitle">
          Travel with confidence knowing you're protected from unexpected situations during your journey.
        </p>

        <div className="insurance-grid">

          {features.map((item, index) => (
            <div className="insurance-card" key={index}>

              <div className="insurance-icon">
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