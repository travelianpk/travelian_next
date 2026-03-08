import Image from "next/image";
import WhyChooseUmrah from "@/components/WhyChooseUmrah";
import UmrahPackages from "@/components/UmrahPackages";
import UmrahIncludes from "@/components/UmrahIncludes";
import Testimonials from "@/components/Testimonials";
import UmrahCTA from "@/components/UmrahCTA";

export const metadata = {
  title: "Umrah Journeys - Travelian",
  description:
    "Book premium Umrah journeys with Travelian. Complete packages including flights, hotels and visa processing.",
};

export default function UmrahJourneys() {
  return (
    <main>

      {/* Banner */}
      <section className="hero">
        <Image
          src="/images/umrahban.svg"
          alt="Travelian Umrah Journeys"
          width={1920}
          height={600}
          className="hero-image"
          priority
        />
      </section>

      {/* Why Choose Travelian */}
      <WhyChooseUmrah />
       {/* Section 2 */}
      <UmrahPackages />
      <UmrahIncludes />
      <Testimonials />
      <UmrahCTA />


    </main>
  );
}