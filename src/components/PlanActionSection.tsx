import { Search, Settings, Link, TestTube, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PlanActionSection = () => {
  const planItems = [
    {
      icon: Search,
      title: "Diagnóstico Rápido",
      description: "Entendemos o fluxo atual de atendimento da clínica."
    },
    {
      icon: Settings,
      title: "Personalização",
      description: "SecretarIA treinada com a linguagem da MC FACE CLINIC."
    },
    {
      icon: Link,
      title: "Integrações",
      description: "Conexão com Google Calendar, canais e CRM Kommo."
    },
    {
      icon: TestTube,
      title: "Testes Práticos",
      description: "Ajustes finos antes do lançamento."
    },
    {
      icon: Users,
      title: "Equipe Pronta",
      description: "Treinamento para trabalhar junto com a SecretarIA."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Plano de Ação
          </h2>
          
          <div className="space-y-8">
            {/* Primeira linha com 3 cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {planItems.slice(0, 3).map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="border-border/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <CardHeader className="text-center p-4">
                      <div className="bg-primary/10 p-2 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-base font-bold text-foreground">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardDescription className="text-center text-muted-foreground leading-relaxed text-sm">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            
            {/* Segunda linha com 2 cards centralizados */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {planItems.slice(3, 5).map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index + 3} className="border-border/50 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <CardHeader className="text-center p-4">
                      <div className="bg-primary/10 p-2 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-base font-bold text-foreground">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <CardDescription className="text-center text-muted-foreground leading-relaxed text-sm">
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

export default PlanActionSection;