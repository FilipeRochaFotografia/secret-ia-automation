import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

import DeliverSection from "@/components/DeliverSection";
import BenefitsSection from "@/components/BenefitsSection";
import PlanActionSection from "@/components/PlanActionSection";
import InvestmentSection from "@/components/InvestmentSection";
import PartnershipSection from "@/components/PartnershipSection";
import ConclusionSection from "@/components/ConclusionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      
      <DeliverSection />
      <BenefitsSection />
      <PlanActionSection />
      <InvestmentSection />
      <PartnershipSection />
      <ConclusionSection />
    </div>
  );
};

export default Index;
