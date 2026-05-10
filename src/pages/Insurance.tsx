import { Shield, Loader2 } from "lucide-react";
import { useInsurance } from "../hooks/useData";
import StatCard from "../components/StatCard";

function formatDate(dateStr: string | null) {
  if (!dateStr) return "Ongoing";
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function daysUntil(dateStr: string | null) {
  if (!dateStr) return null;
  return Math.ceil((new Date(dateStr).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
}

const categoryColors: Record<string, string> = {
  "Home Insurance": "bg-sky-100 text-sky-700",
  "Car Insurance": "bg-indigo-100 text-indigo-700",
  "Life Insurance": "bg-emerald-100 text-emerald-700",
  "Pet Insurance": "bg-rose-100 text-rose-700",
};

export default function Insurance() {
  const { data: policies, loading } = useInsurance();

  const totalAnnual = policies.reduce((s: number, p: any) => {
    const annual = p.annual_cost ? Number(p.annual_cost) : (p.monthly_cost ? Number(p.monthly_cost) * 12 : 0);
    return s + annual;
  }, 0);

  const nextRenewal = policies
    .filter((p: any) => p.renewal_date)
    .sort((a: any, b: any) => new Date(a.renewal_date).getTime() - new Date(b.renewal_date).getTime())[0];

  return (
    <div className="p-8 max-w-3xl space-y-6">
      <div>
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-8 h-8 bg-sky-100 rounded-xl flex items-center justify-center">
            <Shield size={16} className="text-sky-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Insurance</h1>
        </div>
        <p className="text-gray-400 text-sm">Home, car, life and pet insurance policies.</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Annual total" value={loading ? "—" : `£${totalAnnual.toFixed(0)}`} sub="All policies" />
        <StatCard label="Active policies" value={loading ? "—" : String(policies.length)} />
        <StatCard
          label="Next renewal"
          value={loading || !nextRenewal ? "—" : formatDate(nextRenewal.renewal_date).split(" ").slice(0, 2).join(" ")}
          sub={nextRenewal ? nextRenewal.name : ""}
          accent={nextRenewal && daysUntil(nextRenewal.renewal_date)! <= 30 ? "amber" : "default"}
        />
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
          <h2 className="font-semibold text-gray-900 text-sm">All Policies</h2>
          <button className="text-xs text-blue-600 font-semibold">+ Add policy</button>
        </div>
        {loading ? (
          <div className="flex items-center justify-center py-12 text-gray-400">
            <Loader2 size={20} className="animate-spin mr-2" /> Loading…
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {policies.map((policy: any) => {
              const cost = policy.annual_cost
                ? `£${Number(policy.annual_cost).toFixed(0)}/yr`
                : `£${Number(policy.monthly_cost).toFixed(0)}/mo`;
              const days = daysUntil(policy.renewal_date);
              const soonColor = days !== null && days <= 30 ? "text-red-600" : days !== null && days <= 60 ? "text-amber-600" : "text-gray-400";

              return (
                <div key={policy.id} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors">
                  <div className="w-10 h-10 bg-sky-50 rounded-xl flex items-center justify-center shrink-0">
                    <Shield size={16} className="text-sky-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm">{policy.name}</p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[policy.name] ?? "bg-gray-100 text-gray-600"}`}>
                        {policy.provider}
                      </span>
                    </div>
                  </div>
                  <div className="text-right mr-4">
                    <p className="font-bold text-gray-900 text-sm">{cost}</p>
                    <p className={`text-xs mt-0.5 ${soonColor}`}>
                      {policy.renewal_date
                        ? days !== null && days <= 0
                          ? "Expired"
                          : `Renews ${formatDate(policy.renewal_date)}`
                        : "Ongoing"}
                    </p>
                  </div>
                  <button className="text-xs text-blue-600 hover:text-blue-700 font-semibold">
                    View →
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
