import { Bot, BarChart, Calendar, Mail, Smartphone } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const DeliverSection = () => {
  const deliverables = [
    {
      icon: Bot,
      title: "SecretarIA – Atendente Humanizada",
      description: "Responde automaticamente, com a linguagem da MC FACE CLINIC, treinada com base nas conversas reais da clínica."
    },
    {
      icon: BarChart,
      title: "Gestão Inteligente de Leads",
      description: "Categorização automática dentro do CRM e segmentação por procedimento."
    },
    {
      icon: Calendar,
      title: "Agendamento Automático",
      description: "Integração com Google Calendar e atualização em tempo real."
    },
    {
      icon: Mail,
      title: "Relatórios Automatizados",
      description: "Relatórios diários por e-mail com dados de atendimentos e conversões."
    },
    {
      icon: Smartphone,
      title: "Multicanal Integrado",
      description: "Responda todos os canais automaticamente dentro do Kommo."
    }
  ];

  return (
    <section id="deliver-section" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">
            O que vamos entregar
          </h2>
          
          <div className="space-y-8">
            {/* Primeira linha com 3 cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {deliverables.slice(0, 3).map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="border-border/50 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="text-center">
                      <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-bold text-foreground">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-muted-foreground leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            {/* Segunda linha com 2 cards centralizados */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {deliverables.slice(3, 5).map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index + 3} className="border-border/50 hover:shadow-lg transition-shadow duration-300">
                    <CardHeader className="text-center">
                      <div className="bg-primary/10 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-lg font-bold text-foreground">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center text-muted-foreground leading-relaxed">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverSection;