import { Zap, AlertTriangle, ArrowRight, TrendingDown } from "lucide-react";
import { utilities } from "../data/mock";
import StatCard from "../components/StatCard";

const statusStyles = {
  active: { badge: "bg-green-100 text-green-700", dot: "bg-green-400", label: "Active" },
  renewing: { badge: "bg-amber-100 text-amber-700", dot: "bg-amber-400", label: "Renewing soon" },
};

function formatDate(dateStr: string | null) {
  if (!dateStr) return "Rolling contract";
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function Utilities() {
  const total = utilities.reduce((s, u) => s + u.monthly, 0);

  return (
    <div className="p-8 max-w-4xl space-y-6">
      <div>
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-8 h-8 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Zap size={16} className="text-indigo-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Utilities</h1>
        </div>
        <p className="text-gray-400 text-sm">Gas, electric, water, broadband and council tax.</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Monthly total" value={`£${total}`} sub="4 providers" />
        <StatCard label="Annual total" value={`£${(total * 12).toLocaleString()}`} />
        <StatCard label="Action needed" value="1" sub="Broadband renewing" accent="amber" />
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-center gap-4">
        <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center shrink-0">
          <TrendingDown size={18} className="text-amber-600" />
        </div>
        <div className="flex-1">
          <p className="font-semibold text-amber-900 text-sm">Better broadband deal found</p>
          <p className="text-amber-700 text-xs mt-0.5">
            Switching from Sky to BT saves £28/month. Contract expires 15 May — 5 days left.
          </p>
        </div>
        <button className="flex items-center gap-1.5 bg-amber-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-amber-700 transition-colors whitespace-nowrap shadow-sm">
          Review deal <ArrowRight size={14} />
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-50">
          <h2 className="font-semibold text-gray-900 text-sm">All Providers</h2>
        </div>
        <div className="divide-y divide-gray-50">
          {utilities.map((u) => {
            const style = statusStyles[u.status as keyof typeof statusStyles];
            return (
              <div key={u.id} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors">
                <div className={`w-2 h-2 rounded-full ${style.dot} shrink-0`} />
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{u.name}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{u.provider} · {formatDate(u.renewal)}</p>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${style.badge}`}>
                  {style.label}
                </span>
                <div className="text-right w-24">
                  <p className="font-bold text-gray-900 text-sm">£{u.monthly}/mo</p>
                </div>
                <button className="text-xs text-blue-600 hover:text-blue-700 font-semibold ml-2">
                  Manage →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
