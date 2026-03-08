import WhyChooseVisa from "@/components/WhyChooseVisa";
import VisaDestinations from "@/components/VisaDestinations";
import VisaProcess from "@/components/VisaProcess";
import VisaCTA from "@/components/VisaCTA";
import Image from "next/image";

export const metadata = {
  title: "Tourist Visas - Travelian",
  description:
    "Apply for tourist and visit visas with Travelian. Fast processing, expert guidance, trusted service.",
};

export default function TouristVisas() {
  return (
    <main>
      <section className="hero">
        <Image
          src="/images/visitvisaban.svg"
          alt="Travelian Tourist Visas"
          width={1920}
          height={600}
          className="hero-image"
          priority
        />
      </section>

      {/* Why Choose Travelian */}
      <WhyChooseVisa />
      <VisaDestinations />
      <VisaProcess />
      <VisaCTA />


    </main>
  );
}