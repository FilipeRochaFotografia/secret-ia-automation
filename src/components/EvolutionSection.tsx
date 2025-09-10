const EvolutionSection = () => {
  const features = [
    "Responde automaticamente em WhatsApp, Instagram e Facebook",
    "Atende leads, responde dúvidas e cataloga dados", 
    "Agenda direto no Google Calendar",
    "Gera relatórios diários por e-mail"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            O Problema
          </h2>
          
          <p className="text-center text-foreground mb-12 text-lg">
            O CRM Kommo organiza leads, mas sozinho não garante velocidade.<br />
            E quem demora a responder… perde clientes.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            A Solução: SecretarIA
          </h2>

          <p className="text-center text-foreground mb-8 text-lg">
            Um funcionário digital que nunca descansa:
          </p>

          <div className="space-y-4 mb-12">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-success/5 to-primary/5 p-4 rounded-lg border border-success/20"
              >
                <p className="text-foreground text-center">
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolutionSection;