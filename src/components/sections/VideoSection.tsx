import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  return (
    <section className="section-padding bg-surface">
      <div className="container-narrow">
        <h2 className="text-center mb-4">
          Nächster Schritt
        </h2>
        <p className="text-center text-text-secondary mb-10 max-w-xl mx-auto">
          Im folgenden Video werden verschiedene Möglichkeiten, Denkweisen und 
          Systeme vorgestellt, die Menschen für ihren nebenberuflichen Aufbau nutzen.
        </p>

        {/* Video Placeholder */}
        <div className="relative bg-background rounded-2xl overflow-hidden shadow-elevated max-w-3xl mx-auto">
          <div className="aspect-video bg-muted flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-accent-blue/20 transition-colors duration-300">
                <Play className="w-8 h-8 text-accent-blue ml-1" />
              </div>
              <p className="text-text-muted text-sm">Video wird hier eingebettet</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-text-secondary mb-6 max-w-lg mx-auto">
            Keine Verkaufspräsentation – sondern Einblicke in Ansätze, 
            die für viele Menschen funktionieren.
          </p>
          <Button 
            variant="default" 
            size="lg"
            className="bg-accent-blue hover:bg-accent-blue/90 text-primary-foreground px-8"
          >
            Video ansehen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
