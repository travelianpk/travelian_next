"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Login attempt:", { email, password });
  }

  return (
    <div className="login-wrapper">
      {/* Logo */}
      <div className="logo">
        <Link href="/">
          <img
            src="/images/logo.png"
            alt="Travelian Logo"
            className="auth-logo"
          />
        </Link>
      </div>

      {/* Card */}
      <div className="login-card">
        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="input-group">
            <span className="input-icon">
              <FaEnvelope />
            </span>
            <input
              type="email"
              placeholder="Email ID"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <span className="input-icon">
              <FaLock />
            </span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Eye Toggle */}
            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Options */}
          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          {/* Button */}
          <button type="submit" className="login-btn">
            LOGIN
          </button>

        </form>
      </div>

      {/* Register Link */}
      <Link href="/register" className="register-btn">
        REGISTER
      </Link>
    </div>
  );
}