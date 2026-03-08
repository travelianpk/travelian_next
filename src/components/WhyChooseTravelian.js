import {
  FaShieldAlt,
  FaPassport,
  FaMoneyBillWave,
  FaGlobe,
  FaBolt,
  FaHeadset
} from "react-icons/fa";

export default function WhyChooseTravelian(){

  const features = [
    {
      icon:<FaShieldAlt />,
      title:"Trusted Travel Services",
      text:"Travelian provides reliable travel services with a strong focus on customer satisfaction."
    },
    {
      icon:<FaPassport />,
      title:"Expert Visa Guidance",
      text:"Our experienced team assists you with visit visas, study visas, and travel documentation."
    },
    {
      icon:<FaMoneyBillWave />,
      title:"Affordable Packages",
      text:"We offer competitive prices for flights, Umrah packages, hotels, and travel services."
    },
    {
      icon:<FaGlobe />,
      title:"Global Travel Solutions",
      text:"From tourism to education abroad, we help travelers explore destinations worldwide."
    },
    {
      icon:<FaBolt />,
      title:"Fast Processing",
      text:"Quick handling of travel bookings, visa applications, and travel arrangements."
    },
    {
      icon:<FaHeadset />,
      title:"Dedicated Support",
      text:"Our support team is always ready to assist you before and during your journey."
    }
  ];

  return(

    <section className="why-travelian">

      <div className="container">

        <h2 className="section-title">
          Why Choose <span>Travelian</span>
        </h2>

        <p className="section-subtitle">
          We combine professional expertise with personalized service to make every journey smooth and memorable.
        </p>

        <div className="why-grid">

          {features.map((item,index)=>(
            <div className="why-card" key={index}>

              <div className="why-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </div>
          ))}

        </div>

      </div>

    </section>

  )

}