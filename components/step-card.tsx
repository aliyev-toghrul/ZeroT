interface StepCardProps {
  step: number;
  title: string;
  description: string;
}

export default function StepCard({ step, title, description }: StepCardProps) {
  return (
    <div className="relative flex gap-6 group">
      {/* Step number */}
      <div className="flex-shrink-0">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-zerot-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:shadow-lg transition-shadow">
          {step}
        </div>
      </div>

      {/* Content */}
      <div className="pb-10">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">{title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </div>
  );
}
