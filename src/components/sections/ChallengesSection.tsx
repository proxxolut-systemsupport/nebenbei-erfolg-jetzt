import { Clock, Shuffle, AlertCircle, Puzzle, Target } from "lucide-react";

const ChallengesSection = () => {
  const challenges = [
    {
      icon: Target,
      title: "Fokus auf schnelle Ergebnisse",
      description: "Die Erwartung sofortiger Einnahmen führt oft zu Frustration und vorzeitigem Aufgeben.",
    },
    {
      icon: Clock,
      title: "Zeit gegen Geld tauschen",
      description: "Ohne skalierbare Strukturen bleibt das Einkommen an die eigene Arbeitszeit gebunden.",
    },
    {
      icon: Shuffle,
      title: "Fehlende Struktur",
      description: "Ohne klaren Plan verliert man sich schnell in Aktivitäten ohne echten Fortschritt.",
    },
    {
      icon: Puzzle,
      title: "Zu viele Tools, keine Strategie",
      description: "Werkzeuge ohne durchdachte Strategie führen selten zum gewünschten Ergebnis.",
    },
    {
      icon: AlertCircle,
      title: "Unrealistische Erwartungen",
      description: "Überzogene Versprechen anderer führen zu Enttäuschung und Zweifel am eigenen Weg.",
    },
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="container-narrow">
        <h2 className="text-center mb-4">
          Warum viele <span className="text-foreground">nicht vorankommen</span>
        </h2>
        <p className="text-center text-text-secondary mb-12 max-w-xl mx-auto">
          Es gibt wiederkehrende Muster, die den Aufbau eines nebenberuflichen Einkommens erschweren.
        </p>

        <div className="space-y-4">
          {challenges.map((challenge, index) => {
            const Icon = challenge.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 bg-background p-5 rounded-xl"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                  <Icon className="w-5 h-5 text-text-muted" />
                </div>
                <div>
                  <h3 className="text-base font-medium mb-1 text-foreground">{challenge.title}</h3>
                  <p className="text-sm text-text-secondary">{challenge.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center mt-12 text-text-secondary max-w-xl mx-auto">
          Diese Hürden zu kennen ist der erste Schritt, um sie zu vermeiden.
        </p>
      </div>
    </section>
  );
};

export default ChallengesSection;
