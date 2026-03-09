import { FaHotel, FaPlane, FaBus, FaPassport } from "react-icons/fa";

export default function UmrahPackages() {

  const packages = [
    {
      name: "Economy / Budget Packages",
      price: "Starting from Rs. 250,000",
      features: [
        { icon: <FaHotel />, text: "3★ Hotels" },
        { icon: "🕋", text: "7–10 Nights Stay" },
        { icon: <FaPlane />, text: "Return Flights" },
        { icon: <FaPassport />, text: "Umrah Visa Included" },
        { icon: <FaBus />, text: "Shared Transport" }
      ]
    },
    {
      name: "Standard Packages",
      price: "Starting from Rs. 320,000",
      features: [
        { icon: <FaHotel />, text: "4★ Hotels" },
        { icon: "🕋", text: "7–10 Nights Stay" },
        { icon: <FaPlane />, text: "Return Flights" },
        { icon: <FaPassport />, text: "Umrah Visa Included" },
        { icon: <FaBus />, text: "Private Transport" }
      ]
    },
    {
      name: "Premium / Luxury Packages",
      price: "Starting from Rs. 420,000",
      featured: true,
      features: [
        { icon: <FaHotel />, text: "5★ Hotels Near Haram" },
        { icon: "🕋", text: "10–12 Nights Stay" },
        { icon: <FaPlane />, text: "Direct Flights" },
        { icon: <FaPassport />, text: "Umrah Visa Included" },
        { icon: <FaBus />, text: "VIP Transport" }
      ]
    },
    {
      name: "VIP / VVIP / Ultra-Luxury",
      price: "Starting from Rs. 650,000",
      features: [
        { icon: <FaHotel />, text: "5★ Luxury Hotels" },
        { icon: "🕋", text: "Custom Stay Duration" },
        { icon: <FaPlane />, text: "Business Class Flights" },
        { icon: <FaBus />, text: "Private VIP Transport" },
        { icon: <FaPassport />, text: "Dedicated Assistance" }
      ]
    }
  ];

  return (
    <section className="umrah-packages">

      <div className="container">

        <h2 className="section-title">
          Our <span>Umrah Packages</span>
        </h2>

        <p className="section-subtitle">
          Flexible Umrah packages designed for every pilgrim's comfort and budget.
        </p>

        <div className="packages-grid">

          {packages.map((pkg, index) => (

            <div
              className={`package-card ${pkg.featured ? "featured" : ""}`}
              key={index}
            >
              <div className="package-card-body">
                <h3>{pkg.name}</h3>

                <div className="package-price">
                  {pkg.price}
                </div>

                <ul className="package-features">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>
                      <span className="feature-icon">{feature.icon}</span>
                      <span className="feature-text">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://wa.me/923244440014"
                target="_blank"
                rel="noopener noreferrer"
                className="package-btn"
              >
                Ask on WhatsApp
              </a>
            </div>

          ))}

        </div>

      </div>

    </section>
  );
}