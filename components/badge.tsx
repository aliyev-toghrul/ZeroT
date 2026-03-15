interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "teal" | "blue" | "amber";
  className?: string;
}

const variantClasses = {
  default: "bg-slate-100 text-slate-600",
  teal: "bg-teal-50 text-teal-700",
  blue: "bg-zerot-50 text-zerot-700",
  amber: "bg-amber-50 text-amber-700",
};

export default function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
