import {
  FaPaperPlane,
  FaTag,
  FaCheckCircle,
  FaBolt
} from "react-icons/fa";

export default function HotelHowItWorks(){

  const steps = [
    {
      number: "1",
      icon: <FaPaperPlane />,
      title: "Send details",
      text: "Share your travel dates, destination, and preferences via WhatsApp."
    },
    {
      number: "2",
      icon: <FaTag />,
      title: "Get best price",
      text: "We search and send you the best available hotel rates."
    },
    {
      number: "3",
      icon: <FaCheckCircle />,
      title: "Confirm booking",
      text: "Review options and confirm. Pay in PKR without card issues."
    },
    {
      number: "4",
      icon: <FaBolt />,
      title: "Voucher instantly",
      text: "Receive your booking confirmation and voucher immediately."
    }
  ];

  return (

    <section className="hotel-how">

      <div className="container">

        <h2 className="section-title">
          <span>How It Works</span>
        </h2>

        <p className="section-subtitle">
          Book your hotel in four simple steps. We handle the rest.
        </p>

        <div className="hotel-how-grid">

          {steps.map((step,index)=>(
            <div className="hotel-how-card" key={index}>

              <div className="step-number">
                {step.number}
              </div>

              <div className="step-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

            </div>
          ))}

        </div>

      </div>

    </section>

  )
}