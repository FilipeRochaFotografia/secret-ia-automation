import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, RefreshCw } from "lucide-react";

const InvestmentSection = () => {
  return (
    <section id="investment-section" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Investimento
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary/20 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center bg-gradient-to-br from-primary/5 to-primary/10">
                <div className="bg-primary/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <CreditCard className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  💰 Implementação Única
                </CardTitle>
                <CardDescription className="text-3xl font-bold text-primary mt-2">
                  R$ 3.500,00
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-success mt-1">•</span>
                    <span className="text-muted-foreground">Personalização completa do sistema.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-success mt-1">•</span>
                    <span className="text-muted-foreground">Treinamento da SecretarIA.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-success mt-1">•</span>
                    <span className="text-muted-foreground">Integração com Google Calendar e canais de atendimento.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-success mt-1">•</span>
                    <span className="text-muted-foreground">Integração das automações True Rise com o CRM Kommo.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center bg-gradient-to-br from-accent/5 to-accent/10">
                <div className="bg-accent/20 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <RefreshCw className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">
                  🔄 Manutenção e Melhorias Mensais
                </CardTitle>
                <CardDescription className="text-3xl font-bold text-accent mt-2">
                  R$ 500,00
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="text-success mt-1">•</span>
                    <span className="text-muted-foreground">Melhorias contínuas para acompanhar as inovações do mercado.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-success mt-1">•</span>
                    <span className="text-muted-foreground">Ajustes e refinamentos nos agentes.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-success mt-1">•</span>
                    <span className="text-muted-foreground">Inclusão de novas funcionalidades conforme evolução da tecnologia.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              variant="cta" 
              size="lg" 
              className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 h-auto font-bold w-full md:w-auto text-white"
              style={{ background: '#ed832b', borderColor: '#ed832b' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#d97316';
                e.currentTarget.style.borderColor = '#d97316';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ed832b';
                e.currentTarget.style.borderColor = '#ed832b';
              }}
            >
              Fale conosco
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;