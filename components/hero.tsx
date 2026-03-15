import Button from "./button";

const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL || "#";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-zerot-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-teal-200/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zerot-50 border border-zerot-100 text-zerot-700 text-sm font-medium mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse-gentle" />
            AI-Powered Cybersecurity Readiness for SMEs
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Understand cyber risk in{" "}
            <span className="bg-gradient-to-r from-zerot-600 to-teal-500 bg-clip-text text-transparent">
              plain English
            </span>
            <br />
            and act with confidence
          </h1>

          {/* Supporting copy */}
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed mb-10 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Report suspicious emails, get instant risk assessments in language
            anyone can understand, and follow guided response steps — all
            without needing a security team.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="primary" size="lg" href={loginUrl}>
              Get Started
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
            <Button variant="secondary" size="lg" href="#workflow">
              View Demo Flow
            </Button>
          </div>

          {/* Trust text */}
          <p className="text-xs text-slate-400 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            Trusted by SMEs · No security expertise required · Ready in minutes
          </p>
        </div>

        {/* Floating Hero Panel */}
        <div className="mt-16 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <div className="glass-panel rounded-2xl p-6 md:p-8 float-shadow">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full bg-teal-400" />
              <span className="text-sm font-medium text-slate-600">
                ZeroT Security Overview — Sample
              </span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white/80 rounded-xl p-4 border border-slate-100">
                <p className="text-2xl font-bold text-teal-600">72%</p>
                <p className="text-xs text-slate-500 mt-1">Readiness Score</p>
              </div>
              <div className="bg-white/80 rounded-xl p-4 border border-slate-100">
                <p className="text-2xl font-bold text-zerot-600">3</p>
                <p className="text-xs text-slate-500 mt-1">Open Incidents</p>
              </div>
              <div className="bg-white/80 rounded-xl p-4 border border-slate-100">
                <p className="text-2xl font-bold text-amber-500">2</p>
                <p className="text-xs text-slate-500 mt-1">Urgent Gaps</p>
              </div>
              <div className="bg-white/80 rounded-xl p-4 border border-slate-100">
                <p className="text-2xl font-bold text-slate-700">14</p>
                <p className="text-xs text-slate-500 mt-1">Actions Done</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
