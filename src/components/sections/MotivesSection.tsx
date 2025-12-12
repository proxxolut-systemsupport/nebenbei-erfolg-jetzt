import { Wallet, PiggyBank, Heart, Users, Compass } from "lucide-react";

const MotivesSection = () => {
  const motives = [
    {
      icon: Wallet,
      text: "Mehr finanzielle Sicherheit",
    },
    {
      icon: PiggyBank,
      text: "Rücklagen aufbauen",
    },
    {
      icon: Heart,
      text: "Wünsche erfüllen",
    },
    {
      icon: Users,
      text: "Familie entlasten",
    },
    {
      icon: Compass,
      text: "Mehr Handlungsspielraum",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <h2 className="text-center mb-4">
          Was Menschen <span className="text-gradient-blue">antreibt</span>
        </h2>
        <p className="text-center text-text-secondary mb-12 max-w-xl mx-auto">
          Hinter dem Wunsch nach einem zusätzlichen Einkommen stehen oft sehr persönliche Motive.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {motives.map((motive, index) => {
            const Icon = motive.icon;
            const colors = ["accent-blue", "accent-green", "accent-yellow", "accent-blue", "accent-green"];
            const color = colors[index % colors.length];
            
            return (
              <div
                key={index}
                className="flex items-center gap-3 bg-surface px-5 py-3 rounded-full"
              >
                <Icon className={`w-5 h-5 text-${color}`} />
                <span className="text-foreground font-medium">{motive.text}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Es geht nicht darum, reich zu werden – sondern um ein Leben mit 
            <span className="font-medium text-foreground"> mehr Möglichkeiten</span>, 
            weniger Sorgen und größerer Unabhängigkeit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MotivesSection;
