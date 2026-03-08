import {
  FaUserGraduate,
  FaUniversity,
  FaFileAlt,
  FaPlaneDeparture
} from "react-icons/fa";

export default function WhyChooseStudy() {

  const features = [
    {
      icon: <FaUserGraduate />,
      title: "Expert Student Guidance",
      text: "Our consultants guide students throughout the admission and visa process."
    },
    {
      icon: <FaUniversity />,
      title: "University Selection",
      text: "We help you choose the right university and program for your career goals."
    },
    {
      icon: <FaFileAlt />,
      title: "Application Assistance",
      text: "Complete support for applications, documentation and statement of purpose."
    },
    {
      icon: <FaPlaneDeparture />,
      title: "Pre-Departure Support",
      text: "Guidance for accommodation, travel planning and preparation before departure."
    }
  ];

  return (
    <section className="study-why">

      <div className="container">

        <h2 className="section-title">
          Why Study Abroad with <span>Travelian</span>
        </h2>

        <p className="section-subtitle">
          We help students achieve their international education goals with expert guidance and reliable support.
        </p>

        <div className="study-why-grid">

          {features.map((item, index) => (

            <div className="study-why-card" key={index}>

              <div className="study-icon">
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