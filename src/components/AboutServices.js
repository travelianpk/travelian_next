import {
  FaPlane,
  FaMosque,
  FaPassport,
  FaUserGraduate,
  FaHotel,
  FaShieldAlt
} from "react-icons/fa";

export default function AboutServices(){

  const services = [
    {
      icon:<FaPlane />,
      title:"Flight Tickets",
      text:"Book domestic and international flights with competitive prices and reliable support."
    },
    {
      icon:<FaMosque />,
      title:"Umrah Packages",
      text:"Complete Umrah travel packages including flights, hotels, visa processing and transport."
    },
    {
      icon:<FaPassport />,
      title:"Visit Visas",
      text:"Professional assistance for tourist and visit visas for multiple destinations."
    },
    {
      icon:<FaUserGraduate />,
      title:"Study Abroad",
      text:"Expert guidance for study visas and university admissions in top destinations."
    },
    {
      icon:<FaHotel />,
      title:"Hotel Bookings",
      text:"Affordable hotel reservations worldwide with comfortable accommodation options."
    },
    {
      icon:<FaShieldAlt />,
      title:"Travel Insurance",
      text:"Comprehensive travel insurance coverage to protect your journey abroad."
    }
  ];

  return(

    <section className="about-services">

      <div className="container">

        <h2 className="section-title">
          Our <span>Services</span>
        </h2>

        <p className="section-subtitle">
          Travelian provides a complete range of travel solutions designed to make your journey easy and stress-free.
        </p>

        <div className="services-grid">

          {services.map((service,index)=>(
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

  )

}