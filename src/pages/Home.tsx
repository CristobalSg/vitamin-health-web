import AuthoritySection from "@/sections/AuthoritySection";
import BaseLayout from "@/layout/BaseLayout";
import BalanceSection from "@/sections/BalanceSection";
import ContentAndSocialSection from "@/sections/ContentAndSocialSection";
import ExperienceSection from "@/sections/ExperienceSection";
import FinalCtaSection from "@/sections/FinalCtaSection";
import HeroSection from "@/sections/HeroSection";
import LocationSection from "@/sections/LocationSection";
import ProcessSection from "@/sections/ProcessSection";
import ServicesSection from "@/sections/ServicesSection";
import TrustMetricsSection from "@/sections/TrustMetricsSection";
import ValueSection from "@/sections/ValueSection";

export default function Home() {
  return (
    <BaseLayout>
      <HeroSection />
      <TrustMetricsSection />
      <BalanceSection />
      <ValueSection />
      <ProcessSection />
      <AuthoritySection />
      <ServicesSection />
      <ContentAndSocialSection />
      <ExperienceSection />
      <LocationSection />
      <FinalCtaSection />
    </BaseLayout>
  );
}
