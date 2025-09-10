import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Automatize o Atendimento<br />
            da MC FACE CLINIC
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            SecretarIA: sua atendente digital 24h por dia, sem férias, sem atrasos e sem erros.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
            Quero Saber Mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;