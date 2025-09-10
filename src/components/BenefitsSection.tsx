import { PiggyBank, Shield, Zap, Heart, Clock } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      text: "Redução imediata de custos com equipe administrativa",
      icon: PiggyBank
    },
    {
      text: "Zero risco de ausências por doença, férias ou atrasos",
      icon: Shield
    },
    {
      text: "Respostas em segundos, sem deixar clientes esperando",
      icon: Zap
    },
    {
      text: "Maior satisfação do cliente pela agilidade no atendimento",
      icon: Heart
    },
    {
      text: "Captação de leads mesmo fora do horário comercial",
      icon: Clock
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Benefícios para a MC FACE CLINIC
          </h2>
          
          <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-success/5 p-8 md:p-12 rounded-2xl border border-primary/20">
            <div className="space-y-8">
              {/* Primeira linha com os primeiros 4 benefícios */}
              <div className="grid md:grid-cols-2 gap-8">
                {benefits.slice(0, 4).map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={index} className="flex flex-col items-center text-center space-y-4">
                      <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-lg">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <p className="text-foreground font-medium leading-relaxed">{benefit.text}</p>
                    </div>
                  );
                })}
              </div>
              
              {/* Segunda linha com o último benefício centralizado */}
              <div className="flex justify-center">
                <div className="max-w-md w-full">
                  {(() => {
                    const Icon = benefits[4].icon;
                    return (
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-lg">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <p className="text-foreground font-medium leading-relaxed">{benefits[4].text}</p>
                      </div>
                    );
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;