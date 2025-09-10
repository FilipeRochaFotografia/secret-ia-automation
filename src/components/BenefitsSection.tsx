import { CheckCircle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    "Um colaborador digital 24h ativo.",
    "Mais clientes fechados com rapidez no primeiro contato.",
    "Equipe presencial focada apenas em atender.",
    "Organização e visão estratégica com relatórios.",
    "Atendimento padronizado, porém humanizado."
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-16 text-center">
            Benefícios para a MC FACE CLINIC
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-success/5 to-primary/5 p-6 rounded-xl border border-success/20 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="h-6 w-6 text-success" />
                  </div>
                  <p className="text-foreground font-medium text-lg leading-relaxed">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;