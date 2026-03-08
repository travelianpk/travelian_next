import Image from "next/image";
import WhyTravelInsurance from "@/components/WhyTravelInsurance";
import InsuranceCoverage from "@/components/InsuranceCoverage";
import InsurancePlans from "@/components/InsurancePlans";
import WhoNeedsInsurance from "@/components/WhoNeedsInsurance";
import InsuranceProcess from "@/components/InsuranceProcess";
import InsuranceCTA from "@/components/InsuranceCTA";

export const metadata = {
  title: "Travel Insurance - Travelian",
  description:
    "Get reliable travel insurance with Travelian. Safe journeys, worldwide coverage, trusted support.",
};

export default function TravelInsurance() {
  return (
    <main>
      <section className="hero">
        <Image
          src="/images/insuranceban.svg"
          alt="Travelian Travel Insurance"
          width={1920}
          height={600}
          className="hero-image"
          priority
        />
      </section>

      <WhyTravelInsurance />
      <InsuranceCoverage />
      <InsurancePlans />
      <WhoNeedsInsurance />
      <InsuranceProcess />
      <InsuranceCTA />

    </main>
  );
}