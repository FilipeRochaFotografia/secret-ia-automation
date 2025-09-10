import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-background py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
            Automatize o Atendimento<br />
            da MC FACE CLINIC
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 leading-relaxed max-w-3xl mx-auto">
            SecretarIA: sua atendente digital 24h por dia
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Sem férias, sem atrasos, sem erros.
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-4 h-auto">
            👉 Quero Saber Mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;