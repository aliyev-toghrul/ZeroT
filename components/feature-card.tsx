import Badge from "./badge";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  tag?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  tag,
}: FeatureCardProps) {
  return (
    <div className="group glass-card rounded-2xl p-6 hover:bg-white/80 transition-all duration-300 hover:shadow-[var(--shadow-glass-lg)]">
      <div className="flex items-start justify-between mb-4">
        <span className="text-3xl">{icon}</span>
        {tag && <Badge variant="teal">{tag}</Badge>}
      </div>
      <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-zerot-700 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}
