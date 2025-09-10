const PartnershipSection = () => {
  const partnershipBenefits = [
    "20% de desconto na implementação por indicação",
    "R$ 100,00 de desconto na mensalidade por cliente indicado",
    "5 indicações = manutenção gratuita",
    "A partir da 6ª indicação → repasse financeiro mensal"
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Parceria Exclusiva
          </h2>
          
          <p className="text-center text-foreground mb-8 text-lg">
            Indique clientes e ganhe:
          </p>

          <div className="space-y-4">
            {partnershipBenefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-success/5 to-primary/5 p-4 rounded-lg border border-success/20 flex items-center space-x-3"
              >
                <span className="text-success">•</span>
                <span className="text-foreground font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;