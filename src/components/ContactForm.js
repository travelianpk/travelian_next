export default function ContactForm() {
  return (
    <section className="contact-form-section">

      <div className="contact-form-container">

        {/* Form Side */}

        <div className="contact-form-box">

          <h2 className="contact-form-title">
            Send <span>a Message</span>
          </h2>

          <p className="contact-form-subtitle">
            Fill the form below and our team will contact you shortly.
          </p>

          <form className="contact-form">

            <input
              type="text"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              placeholder="Email Address"
              required
            />

            <input
              type="tel"
              placeholder="Phone Number"
            />

            <textarea
              placeholder="Your Message"
              rows="5"
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

        {/* Map Side */}

        <div className="contact-map">

          <iframe
            src="https://maps.google.com/maps?q=Pakistan&t=&z=5&ie=UTF8&iwloc=&output=embed"
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </section>
  );
}