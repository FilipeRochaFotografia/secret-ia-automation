import { CheckCircle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Atendimento imediato e padronizado",
    "Mais clientes fechados",
    "Equipe focada apenas no presencial",
    "Relatórios claros para decisões rápidas",
    "Humanização com eficiência digital"
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            O que você ganha
          </h2>
          
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-success/5 to-primary/5 p-4 rounded-lg border border-success/20 flex items-center space-x-3"
              >
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;