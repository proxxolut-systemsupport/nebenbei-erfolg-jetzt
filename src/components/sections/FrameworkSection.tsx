import { Laptop, GitBranch, TrendingUp, Lightbulb } from "lucide-react";

const FrameworkSection = () => {
  const elements = [
    {
      icon: Laptop,
      title: "Digitale Strukturen",
      description: "Online-basierte Systeme ermöglichen ortsunabhängiges Arbeiten.",
      color: "accent-blue",
    },
    {
      icon: GitBranch,
      title: "Klare Prozesse",
      description: "Definierte Abläufe schaffen Verlässlichkeit und Effizienz.",
      color: "accent-green",
    },
    {
      icon: TrendingUp,
      title: "Skalierbarkeit",
      description: "Wachstum ohne proportional mehr Zeitaufwand.",
      color: "accent-yellow",
    },
    {
      icon: Lightbulb,
      title: "Systemdenken",
      description: "Einzelaktionen werden zu einem funktionierenden Ganzen.",
      color: "accent-blue",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="text-center mb-4">
          Der richtige <span className="text-gradient-green">Rahmen</span>
        </h2>
        <p className="text-center text-text-secondary mb-12 max-w-xl mx-auto">
          Nachhaltiges nebenberufliches Einkommen entsteht nicht durch mehr Arbeit – 
          sondern durch bessere Strukturen.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {elements.map((element, index) => {
            const Icon = element.icon;
            return (
              <div
                key={index}
                className="relative p-6 rounded-xl border border-border bg-background hover:border-accent-blue/30 transition-colors duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-${element.color}/10 flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 text-${element.color}`} />
                </div>
                <h3 className="text-lg font-medium mb-2 text-foreground">{element.title}</h3>
                <p className="text-text-secondary">{element.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 rounded-xl bg-surface text-center">
          <p className="text-lg text-text-secondary">
            Es geht nicht darum, <span className="font-medium text-foreground">mehr zu arbeiten</span> – 
            sondern darum, <span className="font-medium text-foreground">klüger zu strukturieren</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrameworkSection;
