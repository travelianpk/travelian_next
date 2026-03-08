import { FaWhatsapp } from "react-icons/fa";

export default function InsurancePlans() {

  const plans = [
    {
      name: "Schengen Travel Insurance",
      text: "Required insurance coverage for travel to Schengen countries in Europe."
    },
    {
      name: "Worldwide Coverage",
      text: "Comprehensive protection for international travel worldwide."
    },
    {
      name: "Rest of World",
      text: "Coverage for global travel excluding USA, Canada, and Australia."
    },
    {
      name: "Student Travel Insurance",
      text: "Special travel insurance plans for students studying abroad."
    },
    {
      name: "Pak Care",
      text: "Insurance for international residents visiting Pakistan."
    },
    {
      name: "United Domestic Care",
      text: "Travel insurance protection for Pakistani residents traveling locally."
    }
  ];

  return (
    <section className="insurance-plans">

      <div className="container">

        <h2 className="section-title">
          Travel Insurance <span>Plans</span>
        </h2>

        <p className="section-subtitle">
          Choose the travel insurance plan that fits your destination and travel needs.
        </p>

        <div className="plans-grid">

          {plans.map((plan, index) => (

            <div className="plan-card" key={index}>

              <h3>{plan.name}</h3>

              <p>{plan.text}</p>

              <a
                href="https://wa.me/923244440014"
                target="_blank"
                className="plan-btn"
              >
                <FaWhatsapp /> Chat on WhatsApp
              </a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}