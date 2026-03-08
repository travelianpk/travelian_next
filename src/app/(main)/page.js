"use client";

import Image from "next/image";
import FlightSearch from "@/components/FlightSearch";
import WhyChoose from "@/components/WhyChoose"; // ✅ move here
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
import ContactQuick from "@/components/ContactQuick";
import AuthorizedSection from "@/components/AuthorizedSection";




export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}
      <section className="hero">
        <Image
          src="/images/homeban.svg"
          alt="Travelian Home"
          width={1920}
          height={700}
          priority
          className="hero-image"
        />

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <FlightSearch />
        </div>
      </section>

      {/* WHY CHOOSE SECTION */}
      <WhyChoose />
      <OurServices />
      <Testimonials />
      <ContactQuick />
      <AuthorizedSection />

    </main>
  );
}