interface MetricCardProps {
  label: string;
  value: string;
  trend: string;
  change: string;
  color: string;
}

const colorMap: Record<string, { text: string; bg: string; icon: string }> = {
  teal: { text: "text-teal-600", bg: "bg-teal-50", icon: "text-teal-500" },
  blue: { text: "text-zerot-600", bg: "bg-zerot-50", icon: "text-zerot-500" },
  amber: { text: "text-amber-600", bg: "bg-amber-50", icon: "text-amber-500" },
};

const trendIcons: Record<string, string> = {
  up: "↑",
  down: "↓",
  neutral: "→",
};

export default function MetricCard({
  label,
  value,
  trend,
  change,
  color,
}: MetricCardProps) {
  const c = colorMap[color] || colorMap.blue;

  return (
    <div className="glass-card rounded-2xl p-5 hover:bg-white/80 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
          {label}
        </span>
        <span className={`${c.bg} ${c.icon} w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold`}>
          {trendIcons[trend]}
        </span>
      </div>
      <p className={`text-3xl font-bold ${c.text} mb-1`}>{value}</p>
      <p className="text-xs text-slate-400">{change}</p>
    </div>
  );
}
