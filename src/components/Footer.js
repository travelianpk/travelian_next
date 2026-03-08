"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* 1️⃣ BRAND SECTION */}
        <div className="footer-col footer-brand">

          <div className="footer-logo">
            <Image
              src="/images/logo.png"
              alt="Travelian Logo"
              width={170}
              height={45}
            />
          </div>

          <p className="footer-description">
            Travelian – Your Trusted Travel Partner, offering professional services for flights,
            Umrah, visit visas, study visas, hotel bookings, and beyond.
            Explore the world with Travelian.
          </p>

          <div className="footer-socials">
            <a href="https://wa.me/923244440014" target="_blank">
              <FaWhatsapp />
            </a>
            <a href="https://facebook.com/Travelian.pk" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com/travelian.pk" target="_blank">
              <FaInstagram />
            </a>
            <a href="mailto:travelian.pk@gmail.com">
              <FaEnvelope />
            </a>
          </div>

        </div>

        {/* 2️⃣ SERVICES */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link href="/">Flight Tickets</Link></li>
            <li><Link href="/umrah-journeys">Umrah Packages</Link></li>
            <li><Link href="/visit-visa">Visit Visa</Link></li>
            <li><Link href="/study-visa">Study Visa</Link></li>
            <li><Link href="/">Hotel Booking</Link></li>
            <li><Link href="/">Travel Insurance</Link></li>
          </ul>
        </div>

        {/* 3️⃣ COMPANY */}
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/info/privacy">Privacy Policy</Link></li>
            <li><Link href="/info/termsofuse">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* 4️⃣ SUPPORT */}
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><Link href="/info/help">Help center & FAQs</Link></li>
            <li><Link href="/">Agent Portal</Link></li>
            <li><Link href="/contact">Customer Support</Link></li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Travelian (Private) Limited. All Rights Reserved.
      </div>

    </footer>
  );
}