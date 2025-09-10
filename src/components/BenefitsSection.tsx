import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Benefícios para a MC FACE CLINIC
          </h2>
          
          <div className="space-y-8">
            {/* Primeira linha com os primeiros 4 benefícios */}
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.slice(0, 4).map((benefit, index) => (
                <Card key={index} className="border-success/20 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="bg-success/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                      <CheckCircle className="h-6 w-6 text-success" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-foreground font-medium text-lg leading-relaxed">
                      {benefit}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Segunda linha com o último benefício centralizado */}
            <div className="flex justify-center">
              <div className="max-w-md w-full">
                <Card className="border-success/20 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="bg-success/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-3">
                      <CheckCircle className="h-6 w-6 text-success" />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="text-foreground font-medium text-lg leading-relaxed">
                      {benefits[4]}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;