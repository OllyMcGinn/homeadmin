import { Zap, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { utilities } from "../data/mock";

const statusStyles = {
  active: { badge: "bg-green-100 text-green-700", label: "Active" },
  renewing: { badge: "bg-amber-100 text-amber-700", label: "Renewing soon" },
};

function formatDate(dateStr: string | null) {
  if (!dateStr) return "Rolling";
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function Utilities() {
  const total = utilities.reduce((s, u) => s + u.monthly, 0);

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <Zap size={20} className="text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Utilities</h1>
        </div>
        <p className="text-gray-500 text-sm">Gas, electric, water, broadband and council tax.</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Monthly total</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">£{total}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Active providers</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{utilities.length}</p>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 shadow-sm">
          <p className="text-xs font-medium text-amber-600 uppercase tracking-wide">Action needed</p>
          <p className="text-2xl font-bold text-amber-700 mt-1">1</p>
          <p className="text-xs text-amber-600 mt-1">Broadband renewal</p>
        </div>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center gap-3 mb-6">
        <AlertTriangle size={18} className="text-amber-500 shrink-0" />
        <div className="flex-1">
          <p className="text-sm font-medium text-amber-900">Broadband deal found</p>
          <p className="text-xs text-amber-700">Switching from Sky to BT saves £28/month. Your contract expires in 5 days.</p>
        </div>
        <button className="flex items-center gap-1.5 bg-amber-600 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors whitespace-nowrap">
          Review deal <ArrowRight size={14} />
        </button>
      </div>

      <div className="space-y-3">
        {utilities.map((u) => {
          const style = statusStyles[u.status as keyof typeof statusStyles];
          return (
            <div key={u.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <p className="font-semibold text-gray-900">{u.name}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${style.badge}`}>
                    {style.label}
                  </span>
                </div>
                <p className="text-sm text-gray-500">{u.provider}</p>
              </div>
              <div className="text-right mr-8">
                <p className="font-semibold text-gray-900">£{u.monthly}/mo</p>
                <p className="text-xs text-gray-400">{u.renewal ? `Renews ${formatDate(u.renewal)}` : "Rolling contract"}</p>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                Manage →
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
