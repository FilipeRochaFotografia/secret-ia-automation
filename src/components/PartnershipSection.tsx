import { Handshake, Users, Gift, DollarSign } from "lucide-react";

const PartnershipSection = () => {
  const partnershipBenefits = [
    {
      icon: Gift,
      text: "20% de desconto na implementação para clientes indicados."
    },
    {
      icon: DollarSign,
      text: "R$ 100,00 de desconto na mensalidade por cliente indicado."
    },
    {
      icon: Users,
      text: "5 indicações = mensalidade zerada."
    },
    {
      icon: Handshake,
      text: "A partir do 5º cliente, os descontos viram repasse financeiro (20 clientes = R$ 1.500,00 de lucro mensal para a MC FACE CLINIC)."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Proposta de Parceria
          </h2>
          
          <div className="text-center mb-12">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              A True Rise Company também oferece um modelo de parceria para expansão conjunta:
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 via-accent/5 to-success/5 p-8 md:p-12 rounded-2xl border border-primary/20">
            <div className="grid md:grid-cols-2 gap-8">
              {partnershipBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 bg-white p-3 rounded-full shadow-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-foreground font-medium leading-relaxed">{benefit.text}</p>
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

export default PartnershipSection;