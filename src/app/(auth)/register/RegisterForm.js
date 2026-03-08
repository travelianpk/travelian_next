"use client";

import { useState } from "react";
import Link from "next/link";

export default function RegisterForm() {
  const [form, setForm] = useState({
    agency: "",
    name: "",
    email: "",
    city: "",
    cnic: "",
    mobile: "",
    license: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const cnicPattern = /^[0-9]{5}-[0-9]{7}-[0-9]{1}$/;
  const mobilePattern = /^[0-9]{10,13}$/;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/;

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    let newErrors = {};

    if (!form.agency) newErrors.agency = "Agency required";
    if (!form.name) newErrors.name = "Name required";
    if (!emailPattern.test(form.email))
      newErrors.email = "Valid email required";
    if (!form.city) newErrors.city = "City required";
    if (!cnicPattern.test(form.cnic))
      newErrors.cnic = "Valid CNIC required";
    if (!mobilePattern.test(form.mobile))
      newErrors.mobile = "Valid mobile required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
      setSubmitted(true);
      console.log("Registration Data:", form);
    }
  }

  if (submitted) {
    return (
      <div className="register-wrapper">
        <div className="thank-you">
          <h3>Thank You!</h3>
          <p>Your registration request has been submitted successfully.</p>
          <p>Our team will contact you after verification.</p>
          <br />
          <Link href="/signin" className="submit-btn">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="register-wrapper">
      <div className="logo">
        <Link href="/">
            <img
            src="/images/logo.png"
            alt="Travelian Logo"
            className="auth-logo"
            />
        </Link>
      </div>

      <div className="card">
        <h2>Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="form-group">
              <input
                name="agency"
                placeholder="Agency Name"
                onChange={handleChange}
              />
              {errors.agency && (
                <span className="error">{errors.agency}</span>
              )}
            </div>

            <div className="form-group">
              <input
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
              />
              {errors.name && (
                <span className="error">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <input
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <input
                name="city"
                placeholder="City"
                onChange={handleChange}
              />
              {errors.city && (
                <span className="error">{errors.city}</span>
              )}
            </div>

            <div className="form-group">
              <input
                name="cnic"
                placeholder="Owner's CNIC (35201-1234567-1)"
                onChange={handleChange}
              />
              {errors.cnic && (
                <span className="error">{errors.cnic}</span>
              )}
            </div>

            <div className="form-group">
              <input
                name="mobile"
                placeholder="Mobile / WhatsApp"
                onChange={handleChange}
              />
              {errors.mobile && (
                <span className="error">{errors.mobile}</span>
              )}
            </div>

            <div className="form-group">
              <input
                name="license"
                placeholder="License Number (Optional)"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <a
                href="https://wa.me/923244440014?text=Hello%20Travelian,%20I%20want%20to%20apply%20for%20B2B%20Agent%20Account."
                target="_blank"
                className="whatsapp-btn"
              >
                Register via WhatsApp
              </a>
            </div>

            <div className="form-group full-width">
              <button type="submit" className="submit-btn">
                Submit Registration
              </button>
            </div>
          </div>
        </form>

        <div className="login-link">
          Already registered?{" "}
          <Link href="/signin">Login here</Link>
        </div>
      </div>
    </div>
  );
}