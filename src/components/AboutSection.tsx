import { Check } from "lucide-react";

const AboutSection = () => {
  const services = [
    "Micropigmentação e Despigmentação de sobrancelhas",
    "Remoção de tatuagem", 
    "Micropigmentação labial",
    "Bye Bye Estrias",
    "Neutralização de olheiras",
    "Neutralização de manchas e melasma"
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
            <span className="block md:hidden">
              Sobre a<br />
              <span className="font-montserrat font-semibold" style={{ color: '#4a4a4a' }}>M<span style={{ color: '#ed832b' }}>C</span> FACE CLINIC</span>
            </span>
            <span className="hidden md:block">
              Sobre a <span className="font-montserrat font-semibold" style={{ color: '#4a4a4a' }}>M<span style={{ color: '#ed832b' }}>C</span> FACE CLINIC</span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Há mais de 10 anos, a MC FACE CLINIC, liderada por Matheus Carvalho, vem elevando a beleza e transformando vidas através de procedimentos inovadores:
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 text-left">
                <div className="flex-shrink-0">
                  <Check className="h-6 w-6 text-success" />
                </div>
                <span className="text-foreground font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;