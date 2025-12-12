import { TrendingUp, Euro, Home } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <h1 className="text-center mb-8">
          Online-Geld verdienen{" "}
          <span className="text-gradient-blue">nebenberuflich</span>
        </h1>
        
        <p className="text-lg md:text-xl text-center max-w-2xl mx-auto mb-12 text-text-secondary">
          In einer Zeit, in der die Kosten für Miete, Energie und Lebensmittel 
          kontinuierlich steigen, reicht ein einzelnes Gehalt oft nicht mehr aus.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="flex items-start gap-4 p-6 rounded-xl bg-surface">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
              <Home className="w-5 h-5 text-accent-blue" />
            </div>
            <div>
              <h3 className="text-base font-medium mb-1 text-foreground">Steigende Mieten</h3>
              <p className="text-sm text-text-muted">
                Die Wohnkosten belasten immer mehr Haushalte erheblich.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-xl bg-surface">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-green/10 flex items-center justify-center">
              <Euro className="w-5 h-5 text-accent-green" />
            </div>
            <div>
              <h3 className="text-base font-medium mb-1 text-foreground">Höhere Lebenshaltung</h3>
              <p className="text-sm text-text-muted">
                Alltägliche Ausgaben wachsen schneller als die Einkommen.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-6 rounded-xl bg-surface">
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-yellow/10 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-accent-yellow" />
            </div>
            <div>
              <h3 className="text-base font-medium mb-1 text-foreground">Zusatzeinkommen</h3>
              <p className="text-sm text-text-muted">
                Immer mehr Menschen suchen nach nebenberuflichen Möglichkeiten.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center mt-12 text-lg text-text-secondary max-w-2xl mx-auto">
          Ein <span className="font-medium text-foreground">nebenberufliches Einkommen</span> ist 
          heute für viele keine Option mehr – sondern eine realistische Antwort auf diese 
          Entwicklung.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
