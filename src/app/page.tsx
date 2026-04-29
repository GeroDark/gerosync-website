import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ContactSection } from "@/components/sections/ContactSection";
import { CTASection } from "@/components/sections/CTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MethodSection } from "@/components/sections/MethodSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { UseCasesSection } from "@/components/sections/UseCasesSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <UseCasesSection />
        <MethodSection />
        <WhyUsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
