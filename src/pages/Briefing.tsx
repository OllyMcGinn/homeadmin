import { Sparkles, CheckCircle, ChevronRight } from "lucide-react";

const briefing = {
  date: "Sunday, 10 May 2026",
  greeting: "Good morning, Oliver. Here's your household briefing.",
  today: [
    "Boiler engineer arriving between 1–3pm — British Gas",
    "Council tax payment due tomorrow — £185 due",
    "Heavy traffic expected on school route — leave by 7:45am",
  ],
  thisWeek: [
    "Ford Focus MOT due 22 May — book this week to avoid a gap",
    "Sky broadband contract ends 15 May — review deal to save £28/mo",
    "Sophie has football Thursday at 4pm",
  ],
  suggestedActions: [
    { id: 1, text: "Book MOT for Ford Focus — expires in 12 days", cta: "Find a garage", urgency: "high" },
    { id: 2, text: "Review broadband deal — save £28/mo switching to BT", cta: "Approve switch", urgency: "high" },
    { id: 3, text: "Review home insurance renewal (due 15 Jun)", cta: "Compare prices", urgency: "medium" },
  ],
  horizon: [
    "Mum's birthday — 18 May",
    "Car tax renewal — Ford Focus (31 Jul)",
    "Pet insurance renewal — Petplan (1 Jul)",
  ],
};

const urgencyStyles = {
  high: "border-red-200 bg-red-50",
  medium: "border-blue-200 bg-blue-50",
};

const ctaStyles = {
  high: "bg-red-600 hover:bg-red-700",
  medium: "bg-blue-600 hover:bg-blue-700",
};

export default function Briefing() {
  return (
    <div className="p-8 max-w-2xl space-y-6">
      <div>
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-8 h-8 bg-blue-100 rounded-xl flex items-center justify-center">
            <Sparkles size={16} className="text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">AI Briefing</h1>
        </div>
        <p className="text-gray-400 text-sm">Your daily household intelligence summary.</p>
      </div>

      {/* Briefing card */}
      <div className="bg-slate-950 rounded-2xl p-7 space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={14} className="text-blue-400" />
            <span className="text-blue-400 text-xs font-semibold tracking-wide">
              HOME ADMIN · {briefing.date.toUpperCase()}
            </span>
          </div>
          <p className="text-white text-lg font-medium leading-snug">{briefing.greeting}</p>
        </div>

        <div className="h-px bg-white/10" />

        <div className="space-y-5">
          <div>
            <p className="text-slate-500 text-[10px] uppercase tracking-widest font-semibold mb-3">Today</p>
            <ul className="space-y-2">
              {briefing.today.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <ChevronRight size={14} className="text-slate-600 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-slate-500 text-[10px] uppercase tracking-widest font-semibold mb-3">This Week</p>
            <ul className="space-y-2">
              {briefing.thisWeek.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <ChevronRight size={14} className="text-slate-600 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-slate-500 text-[10px] uppercase tracking-widest font-semibold mb-3">On the Horizon</p>
            <ul className="space-y-2">
              {briefing.horizon.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                  <ChevronRight size={14} className="text-slate-600 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Suggested actions */}
      <div>
        <h2 className="font-semibold text-gray-900 mb-3">Suggested Actions</h2>
        <div className="space-y-3">
          {briefing.suggestedActions.map((action) => (
            <div
              key={action.id}
              className={`border rounded-2xl p-4 flex items-center gap-4 ${urgencyStyles[action.urgency as keyof typeof urgencyStyles]}`}
            >
              <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                <CheckCircle size={16} className={action.urgency === "high" ? "text-red-500" : "text-blue-500"} />
              </div>
              <p className="flex-1 text-sm text-gray-800 font-medium">{action.text}</p>
              <button className={`text-sm font-semibold text-white px-4 py-2 rounded-xl transition-colors whitespace-nowrap shadow-sm ${ctaStyles[action.urgency as keyof typeof ctaStyles]}`}>
                {action.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
