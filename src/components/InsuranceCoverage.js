import {
  FaHeartbeat,
  FaPlane,
  FaSuitcaseRolling,
  FaAmbulance,
  FaPassport,
  FaUserShield
} from "react-icons/fa";

export default function InsuranceCoverage() {

  const coverage = [
    {
      icon: <FaHeartbeat />,
      title: "Emergency Medical",
      text: "Coverage for unexpected illness, hospitalization, and medical treatment during travel."
    },
    {
      icon: <FaPlane />,
      title: "Trip Cancellation",
      text: "Protection against cancelled or delayed trips due to unforeseen circumstances."
    },
    {
      icon: <FaSuitcaseRolling />,
      title: "Lost Baggage",
      text: "Compensation for delayed, lost, or damaged luggage during your journey."
    },
    {
      icon: <FaAmbulance />,
      title: "Emergency Evacuation",
      text: "Medical evacuation or repatriation in case of serious emergencies abroad."
    },
    {
      icon: <FaPassport />,
      title: "Passport Loss",
      text: "Assistance and support if your passport is lost or stolen while traveling."
    },
    {
      icon: <FaUserShield />,
      title: "Personal Liability",
      text: "Protection against legal liability for accidental injury or property damage."
    }
  ];

  return (
    <section className="insurance-coverage">

      <div className="container">

        <h2 className="section-title">
          Travel Insurance <span>Coverage</span>
        </h2>

        <p className="section-subtitle">
          Comprehensive protection designed to keep you safe and secure during your travels.
        </p>

        <div className="coverage-grid">

          {coverage.map((item, index) => (

            <div className="coverage-card" key={index}>

              <div className="coverage-icon">
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