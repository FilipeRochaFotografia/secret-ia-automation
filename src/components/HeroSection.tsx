import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section className="relative bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              <span className="block md:hidden">
                Automatize<br />
                o atendimento<br />
                da MC FACE CLINIC
              </span>
              <span className="hidden md:block">
                Automatize o atendimento da MC FACE CLINIC
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              <span className="block md:hidden">
                SecretarIA: sua atendente digital<br />
                humanizada e 24h disponível<br />
                sem férias, sem atrasos, sem erros.
              </span>
              <span className="hidden md:block">
                SecretarIA: sua atendente digital 24h por dia<br />
                sem férias, sem atrasos, sem erros.
              </span>
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
              Quero Saber Mais
            </Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img src="/lovable-uploads/88736bfa-bdd0-418e-b89f-9ff7abb71fa3.png" alt="MC Face Clinic Logo" className="max-w-md w-full h-auto" />
          </div>
        </div>
        
        {/* True Rise Logo */}
        <div className="text-center mt-16">
          
          <img src="/lovable-uploads/53e72638-a323-43bd-a2b8-68784f626397.png" alt="True Rise Company Logo" className="max-w-48 mx-auto h-auto" />
        </div>
      </div>
    </section>;
};
export default HeroSection;