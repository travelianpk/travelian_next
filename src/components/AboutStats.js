import { FaUsers, FaGlobe, FaPassport, FaHeadset } from "react-icons/fa";

export default function AboutStats(){

  const stats = [
    {
      icon:<FaUsers />,
      number:"5000+",
      text:"Happy Travelers"
    },
    {
      icon:<FaGlobe />,
      number:"50+",
      text:"Travel Destinations"
    },
    {
      icon:<FaPassport />,
      number:"1000+",
      text:"Visa Applications"
    },
    {
      icon:<FaHeadset />,
      number:"24/7",
      text:"Customer Support"
    }
  ];

  return(

    <section className="about-stats">

      <div className="container">

        <div className="stats-grid">

          {stats.map((stat,index)=>(
            <div className="stat-card" key={index}>

              <div className="stat-icon">
                {stat.icon}
              </div>

              <h3>{stat.number}</h3>

              <p>{stat.text}</p>

            </div>
          ))}

        </div>

      </div>

    </section>

  )

}