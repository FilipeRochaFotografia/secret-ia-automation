import { CheckCircle } from "lucide-react";

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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Por que a MC FACE CLINIC?
          </h2>
          
          <p className="text-center text-foreground mb-8 text-lg">
            Mais de 10 anos transformando vidas com:
          </p>

          <div className="space-y-4">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-3 justify-center md:justify-start"
              >
                <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                <span className="text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;