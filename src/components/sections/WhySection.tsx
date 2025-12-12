import { Shield, Briefcase, Layers, ArrowRight } from "lucide-react";

const WhySection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Sicherheit statt Risiko",
      description: "Der bestehende Job bleibt erhalten – das neue Einkommen wird parallel aufgebaut.",
      color: "accent-blue",
    },
    {
      icon: Briefcase,
      title: "Kein Kündigen notwendig",
      description: "Der Hauptjob bietet weiterhin finanzielle Stabilität während des Aufbaus.",
      color: "accent-green",
    },
    {
      icon: Layers,
      title: "Kontrollierter Aufbau",
      description: "Schritt für Schritt neben dem Alltag – ohne Druck und mit klarem Fokus.",
      color: "accent-yellow",
    },
    {
      icon: ArrowRight,
      title: "Schritt-für-Schritt",
      description: "Kein Alles-oder-nichts – sondern ein durchdachter, nachhaltiger Weg.",
      color: "accent-blue",
    },
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="container-narrow">
        <h2 className="text-center mb-4">
          Warum <span className="text-gradient-green">nebenberuflich</span> sinnvoll ist
        </h2>
        <p className="text-center text-text-secondary mb-12 max-w-xl mx-auto">
          Der nebenberufliche Weg bietet entscheidende Vorteile gegenüber einem vollständigen Wechsel.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-background p-6 rounded-xl shadow-soft hover:shadow-medium transition-shadow duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-${benefit.color}/10 flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 text-${benefit.color}`} />
                </div>
                <h3 className="text-lg font-medium mb-2 text-foreground">{benefit.title}</h3>
                <p className="text-text-secondary">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
