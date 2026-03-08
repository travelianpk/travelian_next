import {
  FaHotel,
  FaMapMarkedAlt,
  FaTags,
  FaHeadset
} from "react-icons/fa";

export default function WhyChooseHotel(){

  const items = [
    {
      icon:<FaHotel/>,
      title:"Wide Hotel Selection",
      text:"Choose from thousands of hotels worldwide including luxury and budget stays."
    },
    {
      icon:<FaMapMarkedAlt/>,
      title:"Best Locations",
      text:"Stay close to major attractions, business centers, or holy sites."
    },
    {
      icon:<FaTags/>,
      title:"Best Price Deals",
      text:"We provide competitive hotel rates with exclusive travel deals."
    },
    {
      icon:<FaHeadset/>,
      title:"24/7 Travel Support",
      text:"Our team assists you with booking changes and travel support anytime."
    }
  ];

  return(

    <section className="hotel-why">

      <div className="container">

        <h2 className="section-title">
          Why Book Hotels with <span>Travelian</span>
        </h2>

        <div className="hotel-why-grid">

          {items.map((item,index)=>(
            <div className="hotel-card" key={index}>

              <div className="hotel-icon">
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