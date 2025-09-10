import { PiggyBank, Shield, Zap, Heart, Clock } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Benefícios para a MC FACE CLINIC
          </h2>
          
          <div className="space-y-8">
            {/* Primeira linha com os primeiros 4 benefícios */}
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.slice(0, 4).map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                <Card key={index} className="border-border/50 transition-all duration-300 hover:scale-[1.02] bg-card shadow-lg hover:shadow-xl">
                  <CardHeader className="text-center">
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground mb-2">
                      Benefício {index + 1}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground font-medium text-base leading-relaxed">
                      {benefit.text}
                    </CardDescription>
                  </CardContent>
                </Card>
                );
              })}
            </div>
            
            {/* Segunda linha com o último benefício centralizado */}
            <div className="flex justify-center">
              <div className="max-w-md w-full">
                {(() => {
                  const Icon = benefits[4].icon;
                  return (
                <Card className="border-border/50 transition-all duration-300 hover:scale-[1.02] bg-card shadow-lg hover:shadow-xl">
                  <CardHeader className="text-center">
                    <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground mb-2">
                      Benefício 5
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground font-medium text-base leading-relaxed">
                      {benefits[4].text}
                    </CardDescription>
                  </CardContent>
                </Card>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;