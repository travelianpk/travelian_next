import { FaBullseye, FaEye } from "react-icons/fa";

export default function AboutMissionVision() {

  return (

    <section className="about-mission">

      <div className="container">

        <h2 className="section-title">
          Our <span>Mission & Vision</span>
        </h2>

        <div className="mission-grid">

          <div className="mission-card">

            <div className="mission-icon">
              <FaBullseye />
            </div>

            <h3>Our Mission</h3>

            <p>
              Our mission is to provide reliable, affordable, and professional
              travel services that make international travel simple and
              accessible for everyone.
            </p>

          </div>

          <div className="mission-card">

            <div className="mission-icon">
              <FaEye />
            </div>

            <h3>Our Vision</h3>

            <p>
              Our vision is to become a trusted global travel partner known for
              delivering exceptional travel experiences and customer service.
            </p>

          </div>

        </div>

      </div>

    </section>

  )

}