import {
  FaPaperPlane,
  FaFileInvoiceDollar,
  FaCheckCircle,
  FaFileDownload
} from "react-icons/fa";

export default function InsuranceProcess(){

  const steps = [
    {
      icon:<FaPaperPlane />,
      title:"Share Travel Details",
      text:"Tell us your destination, travel dates and number of travelers."
    },
    {
      icon:<FaFileInvoiceDollar />,
      title:"Receive Insurance Quote",
      text:"We provide the best available travel insurance options for your trip."
    },
    {
      icon:<FaCheckCircle />,
      title:"Confirm Policy",
      text:"Choose your preferred insurance plan and confirm the coverage."
    },
    {
      icon:<FaFileDownload />,
      title:"Get Insurance Certificate",
      text:"Receive your travel insurance policy and certificate instantly."
    }
  ];

  return(

    <section className="insurance-process">

      <div className="container">

        <h2 className="section-title">
          How Travel Insurance <span>Works</span>
        </h2>

        <p className="section-subtitle">
          Getting travel insurance with Travelian is simple and quick.
        </p>

        <div className="process-grid">

          {steps.map((step,index)=>(
            <div className="process-card" key={index}>

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

  )
}