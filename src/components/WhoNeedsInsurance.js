import {
  FaPlane,
  FaUserGraduate,
  FaBriefcase,
  FaMosque,
  FaUsers
} from "react-icons/fa";

export default function WhoNeedsInsurance(){

  const people = [
    {
      icon:<FaPlane />,
      title:"Tourists",
      text:"Travel insurance protects tourists against medical emergencies, trip cancellations and lost baggage."
    },
    {
      icon:<FaUserGraduate />,
      title:"Students Abroad",
      text:"Students traveling abroad for education can stay protected during their study journey."
    },
    {
      icon:<FaBriefcase />,
      title:"Business Travelers",
      text:"Frequent business travelers benefit from coverage for delays, emergencies and lost documents."
    },
    {
      icon:<FaMosque />,
      title:"Umrah Travelers",
      text:"Insurance ensures peace of mind during Umrah journeys by covering health and travel risks."
    },
    {
      icon:<FaUsers />,
      title:"Family Travelers",
      text:"Families traveling together can stay protected from unexpected situations during vacations."
    }
  ];

  return(

    <section className="who-needs-insurance">

      <div className="container">

        <h2 className="section-title">
          Who Needs <span>Travel Insurance</span>
        </h2>

        <p className="section-subtitle">
          Travel insurance is recommended for anyone traveling abroad or domestically.
        </p>

        <div className="who-grid">

          {people.map((item,index)=>(
            <div className="who-card" key={index}>

              <div className="who-icon">
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