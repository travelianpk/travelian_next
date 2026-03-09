"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { data: session, status } = useSession();

  // Close menu on route change
  useEffect(() => {
    setIsDropdownOpen(false);
    document.body.classList.remove("menu-open");
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isDropdownOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isDropdownOpen]);

  const closeMenu = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="site-header">
      <div className="site-container">

        {/* Logo */}
        <Link href="/" className="logo" onClick={closeMenu}>
          <img src="/logo.png" alt="Travelian" className="logo-img" />
        </Link>

        {/* Center Menu */}
        <div className="center-menu-wrapper">
          <button
            className="menu-btn"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <span className="menu-text">
              {isDropdownOpen ? "CLOSE" : "MENU"}
            </span>

            <span className="menu-icon">
              {isDropdownOpen ? <FaTimes /> : <FaBars />}
            </span>
          </button>

          <nav className={`dropdown-menu ${isDropdownOpen ? "active" : ""}`}>

            {/* LEFT SIDE */}
            <div className="dropdown-left">
              <ul className="dropdown-list">
                <li><Link href="/" onClick={closeMenu}>Home</Link></li>
                <li><Link href="/umrah-journeys" onClick={closeMenu}>Umrah Journeys</Link></li>
                <li><Link href="/study-abroad" onClick={closeMenu}>Study Abroad</Link></li>
                <li><Link href="/tourist-visas" onClick={closeMenu}>Tourist Visas</Link></li>
                <li><Link href="/hotel-stays" onClick={closeMenu}>Hotel Stays</Link></li>
                <li><Link href="/travel-insurance" onClick={closeMenu}>Travel Insurance</Link></li>
                <li><Link href="/about" onClick={closeMenu}>About</Link></li>
                <li><Link href="/contact" onClick={closeMenu}>Contact</Link></li>
              </ul>
            </div>

            {/* RIGHT SIDE */}
            <div className="dropdown-right">
              <h3>CONTACT TRAVELIAN</h3>

              <div className="contact-item">
                <div className="header-icon">
                  <FaPhoneAlt />
                </div>
                <div>
                  <strong>Call / WhatsApp: </strong>
                  <a
                    href="https://wa.me/923244440014"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    +92 324 444 0014
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="header-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <strong>Email: </strong>
                  <a
                    href="mailto:travelian.pk@gmail.com"
                    className="contact-link"
                  >
                    travelian.pk@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="header-icon">
                  <FaFacebookF />
                </div>
                <div>
                  <strong>Facebook: </strong>
                  <a
                    href="https://www.facebook.com/Travelian.pk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    facebook.com/Travelian.pk
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="header-icon">
                  <FaInstagram />
                </div>
                <div>
                  <strong>Instagram: </strong>
                  <a
                    href="https://www.instagram.com/travelian.pk/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    instagram.com/travelian.pk
                  </a>
                </div>
              </div>

            </div>

          </nav>
        </div>

        {/* Right Side */}
        <div className="header-actions">
          {status === "authenticated" ? (
            <>
              <Link href="/agent" className="cta" onClick={closeMenu}>
                Agent Portal
              </Link>
              <button
                type="button"
                className="cta cta-outline"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Logout
              </button>
            </>
          ) : (
            <Link href="/signin" className="cta" onClick={closeMenu}>
              Agent Portal
            </Link>
          )}
        </div>

      </div>
    </header>
  );
}