import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Automatize o atendimento<br />
              da MC FACE CLINIC
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              SecretarIA: sua atendente digital 24h por dia<br />
              sem férias, sem atrasos, sem erros.
            </p>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
              Quero Saber Mais
            </Button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img 
              src="/lovable-uploads/88736bfa-bdd0-418e-b89f-9ff7abb71fa3.png" 
              alt="MC Face Clinic Logo" 
              className="max-w-md w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;