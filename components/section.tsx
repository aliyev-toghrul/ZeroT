interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  contained?: boolean;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
  contained = true,
}: SectionProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className={contained ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" : ""}>
        {(title || subtitle) && (
          <div className="text-center mb-16 max-w-3xl mx-auto">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-slate-500 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
