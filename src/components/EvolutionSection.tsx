import { Clock, Users, TrendingUp, CheckCircle, Calendar, BarChart } from "lucide-react";

const EvolutionSection = () => {
  const features = [
    { icon: CheckCircle, text: "Responde automaticamente em WhatsApp, Instagram e Facebook" },
    { icon: Users, text: "Atende leads, responde dúvidas e cataloga dados" },
    { icon: Calendar, text: "Agenda direto no Google Calendar" },
    { icon: BarChart, text: "Gera relatórios diários por e-mail" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 text-center">
            O Problema
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              O CRM Kommo organiza leads, mas sozinho não garante velocidade.<br />
              E quem demora a responder… perde clientes.
            </p>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              A Solução: SecretarIA
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              Um funcionário digital que nunca descansa:
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 md:p-12 rounded-2xl border border-primary/20">
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <Icon className="h-6 w-6 text-success" />
                    </div>
                    <span className="text-foreground font-medium">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolutionSection;