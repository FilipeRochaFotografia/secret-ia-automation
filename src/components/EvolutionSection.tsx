import { Clock, Users, TrendingUp, CheckCircle, Calendar, BarChart } from "lucide-react";

const EvolutionSection = () => {
  const benefits = [
    { icon: Clock, text: "Atendimento imediato (sem deixar o cliente esperando)" },
    { icon: Users, text: "Padronização das respostas, sem perder o lado humano" },
    { icon: TrendingUp, text: "Mais conversões e menos tempo desperdiçado pela equipe" }
  ];

  const features = [
    { icon: CheckCircle, text: "Atende leads em todos os canais" },
    { icon: Users, text: "Responde dúvidas frequentes" },
    { icon: BarChart, text: "Cataloga informações no CRM" },
    { icon: Calendar, text: "Faz agendamentos no Google Calendar" },
    { icon: TrendingUp, text: "Gera relatórios diários de desempenho" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Oportunidade de Evolução Digital
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto">
              O CRM Kommo organiza leads, mas sozinho não garante velocidade.<br />
              E quem demora a responder… perde clientes.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{benefit.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 md:p-12 rounded-2xl border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              SecretarIA funciona como um funcionário digital 24h por dia:
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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