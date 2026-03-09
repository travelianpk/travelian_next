import {
  FaComments,
  FaUniversity,
  FaFileAlt,
  FaEnvelopeOpenText,
  FaPassport,
  FaPlaneDeparture
} from "react-icons/fa";

export default function StudyProcess() {

  const steps = [
    {
      icon: <FaComments />,
      title: "Free Consultation",
      text: "Discuss your study goals and preferred destination with our advisors."
    },
    {
      icon: <FaUniversity />,
      title: "University Selection",
      text: "We help you choose the right university and program."
    },
    {
      icon: <FaFileAlt />,
      title: "Application Submission",
      text: "Complete support for preparing and submitting university applications."
    },
    {
      icon: <FaEnvelopeOpenText />,
      title: "Offer & Acceptance",
      text: "Receive your offer letter and we guide you through acceptance and next steps."
    },
    {
      icon: <FaPassport />,
      title: "Visa Processing",
      text: "Our team assists with documentation and visa application."
    },
    {
      icon: <FaPlaneDeparture />,
      title: "Departure Preparation",
      text: "Pre-departure guidance including travel and accommodation support."
    }
  ];

  return (
    <section className="study-process">

      <div className="container">

        <h2 className="section-title">
          Study Visa <span>Application Process</span>
        </h2>

        <p className="section-subtitle">
          Our simple step-by-step process helps students successfully start their study abroad journey.
        </p>

        <div className="process-grid">

          {steps.map((step, index) => (

            <div className="process-step" key={index}>

              <div className="process-icon">
                {step.icon}
              </div>

              <h3>{step.title}</h3>

              <p>{step.text}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}