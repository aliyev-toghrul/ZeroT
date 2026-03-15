interface TrustCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function TrustCard({ icon, title, description }: TrustCardProps) {
  return (
    <div className="glass-card rounded-2xl p-6 hover:bg-white/80 transition-all duration-300">
      <span className="text-3xl mb-4 block">{icon}</span>
      <h3 className="text-base font-semibold text-slate-900 mb-2">{title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}
