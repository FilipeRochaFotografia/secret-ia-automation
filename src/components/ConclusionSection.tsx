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
    <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-success/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12">
            Conclusão
          </h2>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl border border-white/20 mb-12">
            <p className="text-xl md:text-2xl text-foreground mb-8 font-medium">
              Com a automação da True Rise Company, a MC FACE CLINIC terá:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {finalBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 justify-center md:justify-start">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-foreground font-medium text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            
            <Button variant="cta" size="lg" className="text-xl px-12 py-6 h-auto font-bold">
              👉 Quero Implementar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;