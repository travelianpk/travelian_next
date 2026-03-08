import {
  FaComments,
  FaFileAlt,
  FaPassport,
  FaClock,
  FaPlaneDeparture
} from "react-icons/fa";

export default function VisaProcess() {

  const steps = [
    {
      icon: <FaComments />,
      title: "Consultation",
      text: "Discuss your travel plans and visa requirements with our experts."
    },
    {
      icon: <FaFileAlt />,
      title: "Document Preparation",
      text: "We help prepare all necessary documents for your visa application."
    },
    {
      icon: <FaPassport />,
      title: "Application Submission",
      text: "Our team submits your visa application to the embassy or visa center."
    },
    {
      icon: <FaClock />,
      title: "Visa Processing",
      text: "We track your application while the embassy reviews your case."
    },
    {
      icon: <FaPlaneDeparture />,
      title: "Travel Ready",
      text: "Receive your visa and prepare for your journey."
    }
  ];

  return (

    <section className="visa-process">

      <div className="container">

        <h2 className="section-title">
          Tourist Visa <span>Application Process</span>
        </h2>

        <p className="section-subtitle">
          A simple step-by-step process to get your tourist visa approved quickly.
        </p>

        <div className="visa-process-grid">

          {steps.map((step,index)=>(
            <div className="visa-step" key={index}>

              <div className="visa-step-icon">
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