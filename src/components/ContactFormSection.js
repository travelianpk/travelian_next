"use client";

import { useState } from "react";

export default function ContactFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section className="contact-strip">
  <div className="contact-strip-container">

    <div className="strip-text">
      <h3>Need Help With Travel?</h3>
      <p>Send us a quick message & our team will contact you.</p>
    </div>

    <form className="strip-form">
      <input type="text" placeholder="Your Name" required />
      <input type="text" placeholder="Phone / WhatsApp" required />
      <input type="text" placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>

  </div>
</section>
  );
}