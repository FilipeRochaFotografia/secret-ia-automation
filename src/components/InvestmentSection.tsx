const InvestmentSection = () => {
  const implementationFeatures = [
    "Configuração completa",
    "Treinamento da SecretarIA",
    "Integração com Google Calendar e Kommo CRM",
    "Atualizações e melhorias contínuas"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Investimento
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-2">
                💰 Implementação única: R$ 3.500,00
              </h3>
            </div>
            
            <div className="bg-gradient-to-r from-accent/5 to-accent/10 p-6 rounded-lg border border-accent/20">
              <h3 className="text-xl font-bold text-foreground mb-2">
                🔄 Manutenção mensal: R$ 500,00
              </h3>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-lg font-bold text-foreground mb-4 text-center">
              Inclui:
            </h3>
            <div className="space-y-2">
              {implementationFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-success">•</span>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentSection;