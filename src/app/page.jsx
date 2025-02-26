import Hero from "@/components/sections/Hero";
import Synopsis from "@/components/sections/Synopsis";
import ThreePillars from "@/components/sections/ThreePillars";
import WhyRead from "@/components/sections/WhyRead";
import AboutAuthor from "@/components/sections/AboutAuthor";

export default function Home() {
  return (
    <>
      <Hero />
      <Synopsis />
      <ThreePillars />
      <WhyRead />
      <AboutAuthor />
    </>
  );
}
