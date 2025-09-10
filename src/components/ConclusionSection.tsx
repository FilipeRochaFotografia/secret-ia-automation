import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const ConclusionSection = () => {
  const finalBenefits = [
    "Atendimento 24/7",
    "Um funcionário digital incansável", 
    "Mais agendamentos e clientes satisfeitos",
    "Foque no que interessa"
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-success/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12">
            Conclusão
          </h2>
          
          <div className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-xl border border-white/20 mb-12">
            <p className="text-xl md:text-2xl text-foreground mb-8 font-medium">
              Com a automação da True Rise Company, a MC FACE CLINIC terá:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {finalBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 justify-center md:justify-start">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0" />
                  <span className="text-foreground font-medium text-lg">{benefit}</span>
                </div>
              ))}
            </div>
            
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
              onClick={() => document.getElementById('investment-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Quero Implementar Agora
            </Button>
          </div>
          
          {/* True Rise Logo */}
          <div className="text-center">
            <img 
              src="/lovable-uploads/53e72638-a323-43bd-a2b8-68784f626397.png" 
              alt="True Rise Company Logo" 
              className="max-w-xs mx-auto h-auto opacity-80"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;