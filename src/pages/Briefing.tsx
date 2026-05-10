import { Sparkles, CheckCircle } from "lucide-react";

const briefing = {
  date: "Sunday, 10 May 2026",
  greeting: "Good morning, Oliver. Here's your household briefing.",
  today: [
    "Boiler engineer arriving between 1–3pm — British Gas",
    "Council tax payment due tomorrow",
    "Heavy traffic expected on school route — leave by 7:45am",
  ],
  thisWeek: [
    "Ford Focus MOT due 22 May — book this week",
    "Sky broadband contract ends 15 May — review deal to save £28/mo",
    "Sophie has football Thursday at 4pm",
  ],
  suggestedActions: [
    { id: 1, text: "Book MOT for Ford Focus", cta: "Find a garage" },
    { id: 2, text: "Review broadband deal — save £28/mo by switching to BT", cta: "Approve switch" },
    { id: 3, text: "Review home insurance renewal (due 15 Jun)", cta: "Compare prices" },
  ],
  horizon: [
    "Mum's birthday — 18 May",
    "Car tax renewal — Ford Focus (31 Jul)",
    "Pet insurance renewal — 1 Jul",
  ],
};

export default function Briefing() {
  return (
    <div className="p-8 max-w-3xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles size={20} className="text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">AI Briefing</h1>
        </div>
        <p className="text-gray-500 text-sm">Your daily household intelligence summary.</p>
      </div>

      <div className="bg-slate-900 text-white rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={16} className="text-blue-400" />
          <span className="text-blue-400 text-sm font-medium">Home Admin · {briefing.date}</span>
        </div>
        <p className="text-white font-medium text-lg mb-5">{briefing.greeting}</p>

        <div className="space-y-5">
          <div>
            <p className="text-slate-400 text-xs uppercase tracking-wide font-medium mb-2">Today</p>
            <ul className="space-y-1.5">
              {briefing.today.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-200">
                  <span className="text-slate-500 mt-0.5">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-slate-400 text-xs uppercase tracking-wide font-medium mb-2">This Week</p>
            <ul className="space-y-1.5">
              {briefing.thisWeek.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-200">
                  <span className="text-slate-500 mt-0.5">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-slate-400 text-xs uppercase tracking-wide font-medium mb-2">On the Horizon</p>
            <ul className="space-y-1.5">
              {briefing.horizon.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-200">
                  <span className="text-slate-500 mt-0.5">·</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-semibold text-gray-900 mb-3">Suggested Actions</h2>
        <div className="space-y-3">
          {briefing.suggestedActions.map((action) => (
            <div
              key={action.id}
              className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-4 shadow-sm"
            >
              <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                <CheckCircle size={16} className="text-blue-600" />
              </div>
              <p className="flex-1 text-sm text-gray-800">{action.text}</p>
              <button className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 px-4 py-1.5 rounded-lg transition-colors whitespace-nowrap">
                {action.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
