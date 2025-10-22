import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useCountUp } from "@/hooks/useCountUp";

const StatItem = ({ stat, isVisible }: { stat: { number: number; label: string; suffix: string }; isVisible: boolean }) => {
  const count = useCountUp(stat.number, 2000, isVisible);
  
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
        {count}{stat.suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wide">
        {stat.label}
      </div>
    </div>
  );
};

const Stats = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const stats = [
    { number: 500, label: "Active Members", suffix: "+" },
    { number: 50, label: "Projects Completed", suffix: "+" },
    { number: 15, label: "Competition Wins", suffix: "+" },
    { number: 10, label: "Years of Excellence", suffix: "+" },
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-24 bg-card transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;