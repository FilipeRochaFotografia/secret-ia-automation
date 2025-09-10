import { CheckCircle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Redução imediata de custos com equipe administrativa",
    "Zero risco de ausências por doença, férias ou atrasos",
    "Respostas em segundos, sem deixar clientes esperando",
    "Maior satisfação do cliente pela agilidade no atendimento",
    "Captação de leads mesmo fora do horário comercial"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Benefícios para a MC FACE CLINIC
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.slice(0, 4).map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-success/5 to-primary/5 p-6 rounded-xl border border-success/20 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-success" />
                  </div>
                  <p className="text-foreground font-medium text-lg leading-relaxed">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Centered last item */}
          <div className="flex justify-center mt-8">
            <div className="bg-gradient-to-r from-success/5 to-primary/5 p-6 rounded-xl border border-success/20 hover:shadow-lg transition-shadow duration-300 max-w-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="h-6 w-6 text-success" />
                </div>
                <p className="text-foreground font-medium text-lg leading-relaxed">
                  {benefits[4]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;