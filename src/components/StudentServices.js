import {
  FaUniversity,
  FaPassport,
  FaFileAlt,
  FaHome,
  FaPlaneDeparture,
  FaUserGraduate
} from "react-icons/fa";

export default function StudentServices() {

  const services = [
    {
      icon: <FaUniversity />,
      title: "University Admissions",
      text: "Guidance in selecting and applying to the right universities and programs."
    },
    {
      icon: <FaPassport />,
      title: "Visa Assistance",
      text: "Complete support for student visa documentation and application."
    },
    {
      icon: <FaFileAlt />,
      title: "SOP & Documentation",
      text: "Professional help with statements of purpose and required documents."
    },
    {
      icon: <FaHome />,
      title: "Accommodation Support",
      text: "Assistance in finding safe and comfortable student accommodation."
    },
    {
      icon: <FaPlaneDeparture />,
      title: "Travel Arrangements",
      text: "Flight booking and travel preparation before your departure."
    },
    {
      icon: <FaUserGraduate />,
      title: "Pre-Departure Guidance",
      text: "Orientation and preparation to help you start your study journey abroad."
    }
  ];

  return (
    <section className="student-services">

      <div className="container">

        <h2 className="section-title">
          Student <span>Services</span>
        </h2>

        <p className="section-subtitle">
          Travelian provides complete support to make your study abroad journey smooth and successful.
        </p>

        <div className="services-grid">

          {services.map((service, index) => (

            <div className="service-card" key={index}>

              <div className="service-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.text}</p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}