import { Check } from "lucide-react";

const AboutSection = () => {
  const services = [
    "Micropigmentação de sobrancelhas",
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
            Por que a MC FACE CLINIC?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
            Mais de 10 anos transformando vidas com:
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