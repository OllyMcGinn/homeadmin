import { CreditCard, Loader2 } from "lucide-react";
import { useSubscriptions } from "../hooks/useData";
import StatCard from "../components/StatCard";

const categoryColors: Record<string, string> = {
  Entertainment: "bg-purple-100 text-purple-700",
  Music: "bg-green-100 text-green-700",
  Shopping: "bg-blue-100 text-blue-700",
  Storage: "bg-gray-100 text-gray-700",
  Health: "bg-red-100 text-red-700",
};

export default function Subscriptions() {
  const { data: subscriptions, loading } = useSubscriptions();
  const total = subscriptions.reduce((s: number, sub: any) => s + Number(sub.monthly_cost), 0);

  return (
    <div className="p-8 max-w-3xl space-y-6">
      <div>
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-8 h-8 bg-violet-100 rounded-xl flex items-center justify-center">
            <CreditCard size={16} className="text-violet-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Subscriptions</h1>
        </div>
        <p className="text-gray-400 text-sm">All your recurring monthly and annual subscriptions.</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Monthly total" value={loading ? "—" : `£${total.toFixed(2)}`} />
        <StatCard label="Annual total" value={loading ? "—" : `£${(total * 12).toFixed(0)}`} />
        <StatCard label="Active" value={loading ? "—" : String(subscriptions.length)} />
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
          <h2 className="font-semibold text-gray-900 text-sm">All Subscriptions</h2>
          <button className="text-xs text-blue-600 font-semibold">+ Add</button>
        </div>
        {loading ? (
          <div className="flex items-center justify-center py-12 text-gray-400">
            <Loader2 size={20} className="animate-spin mr-2" /> Loading…
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {subscriptions.map((sub: any) => (
              <div key={sub.id} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors">
                <div className="w-9 h-9 bg-slate-100 rounded-xl flex items-center justify-center shrink-0">
                  <CreditCard size={14} className="text-slate-500" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 text-sm">{sub.name}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[sub.category] ?? "bg-gray-100 text-gray-700"}`}>
                    {sub.category}
                  </span>
                </div>
                <p className="font-bold text-gray-900 text-sm">£{Number(sub.monthly_cost).toFixed(2)}/mo</p>
                <button className="text-xs text-red-500 hover:text-red-600 font-semibold ml-4">
                  Cancel
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
