import Image from "next/image";
import AboutIntro from "@/components/AboutIntro";
import AboutMissionVision from "@/components/AboutMissionVision";
import WhyChooseTravelian from "@/components/WhyChooseTravelian";
import AboutServices from "@/components/AboutServices";
import AboutStats from "@/components/AboutStats";
import AuthorizedSection from "@/components/AuthorizedSection";
import AboutCTA from "@/components/AboutCTA";

export const metadata = {
  title: "About - Travelian",
  description:
    "Learn more about Travelian – your trusted travel partner for flights, Umrah, visas, hotels and travel insurance.",
};

export default function About() {
  return (
    <main>
      <section className="hero">
        <Image
          src="/images/aboutusban.svg"
          alt="Travelian About Us"
          width={1920}
          height={600}
          className="hero-image"
          priority
        />
      </section>

      <AboutIntro />
      <AboutMissionVision />
      <WhyChooseTravelian />
      <AboutServices />
      <AboutStats />
      <AuthorizedSection />
      <AboutCTA />

    </main>
  );
}