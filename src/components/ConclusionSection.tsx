import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ConclusionSection = () => {
  const finalBenefits = [
    "Atendimento 24/7",
    "Um funcionário digital incansável",
    "Mais agendamentos e clientes satisfeitos",
    "Mais tempo para focar no que importa: a beleza dos seus clientes"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            Conclusão
          </h2>
          
          <p className="text-lg text-foreground mb-8">
            Com a True Rise Company, a MC FACE CLINIC terá:
          </p>
          
          <div className="space-y-4 mb-12">
            {finalBenefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3 justify-center">
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
          
          <Button variant="cta" size="lg" className="text-lg px-8 py-4 h-auto">
            👉 Quero Implementar Agora
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;