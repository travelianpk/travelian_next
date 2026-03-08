import {
  FaPassport,
  FaFileAlt,
  FaGlobe,
  FaUserCheck
} from "react-icons/fa";

export default function WhyChooseVisa(){

  const items = [
    {
      icon:<FaPassport/>,
      title:"Expert Visa Guidance",
      text:"Professional support for preparing and submitting tourist visa applications."
    },
    {
      icon:<FaFileAlt/>,
      title:"Complete Documentation",
      text:"We assist you in preparing all required documents for successful visa approval."
    },
    {
      icon:<FaGlobe/>,
      title:"Multiple Destinations",
      text:"Tourist visa services for popular travel destinations worldwide."
    },
    {
      icon:<FaUserCheck/>,
      title:"Trusted Travel Experts",
      text:"Experienced team helping travelers explore the world without stress."
    }
  ];

  return(

    <section className="visa-why">

      <div className="container">

        <h2 className="section-title">
          Why Choose Travelian for <span>Tourist Visas</span>
        </h2>

        <div className="visa-why-grid">

          {items.map((item,index)=>(
            <div className="visa-card" key={index}>

              <div className="visa-icon">
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