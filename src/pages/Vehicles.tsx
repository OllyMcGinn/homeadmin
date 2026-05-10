import { Car, Loader2 } from "lucide-react";
import { useVehicles } from "../hooks/useData";

function formatDate(dateStr: string | null) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function daysUntil(dateStr: string | null) {
  if (!dateStr) return null;
  return Math.ceil((new Date(dateStr).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
}

function DateBadge({ label, dateStr }: { label: string; dateStr: string | null }) {
  const days = daysUntil(dateStr);
  const urgent = days !== null && days <= 30;
  const warning = days !== null && days <= 60 && !urgent;

  return (
    <div className={`flex-1 rounded-xl p-3 border ${urgent ? "bg-red-50 border-red-200" : warning ? "bg-amber-50 border-amber-200" : "bg-gray-50 border-gray-100"}`}>
      <p className={`text-[10px] font-semibold uppercase tracking-wide ${urgent ? "text-red-500" : warning ? "text-amber-500" : "text-gray-400"}`}>
        {label}
      </p>
      <p className={`text-sm font-bold mt-1 ${urgent ? "text-red-800" : warning ? "text-amber-800" : "text-gray-800"}`}>
        {formatDate(dateStr)}
      </p>
      {days !== null && (
        <p className={`text-xs mt-0.5 ${urgent ? "text-red-500" : warning ? "text-amber-500" : "text-gray-400"}`}>
          {days <= 0 ? "Overdue" : days === 1 ? "Tomorrow" : `${days} days`}
        </p>
      )}
    </div>
  );
}

export default function Vehicles() {
  const { data: vehicles, loading } = useVehicles();

  return (
    <div className="p-8 max-w-3xl space-y-6">
      <div>
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-8 h-8 bg-slate-100 rounded-xl flex items-center justify-center">
            <Car size={16} className="text-slate-700" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Vehicles</h1>
        </div>
        <p className="text-gray-400 text-sm">MOT, road tax, service history and mileage tracking.</p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20 text-gray-400">
          <Loader2 size={20} className="animate-spin mr-2" /> Loading…
        </div>
      ) : (
        <div className="space-y-5">
          {vehicles.map((v: any) => (
            <div key={v.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-6 py-5 flex items-center justify-between border-b border-gray-50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center">
                    <Car size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-lg tracking-tight">
                      {v.make} {v.model}
                    </p>
                    <p className="text-xs font-mono text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md inline-block mt-1">
                      {v.registration}
                    </p>
                  </div>
                </div>
                {v.mileage && (
                  <div className="text-right">
                    <p className="text-xs text-gray-400 uppercase tracking-wide">Mileage</p>
                    <p className="text-xl font-bold text-gray-900">{Number(v.mileage).toLocaleString()}</p>
                    <p className="text-xs text-gray-400">miles</p>
                  </div>
                )}
              </div>

              <div className="px-6 py-4">
                <div className="flex gap-3">
                  <DateBadge label="MOT Expiry" dateStr={v.mot_expiry} />
                  <DateBadge label="Road Tax" dateStr={v.tax_expiry} />
                  <DateBadge label="Last Service" dateStr={v.last_service} />
                </div>
              </div>

              <div className="px-6 pb-5 flex gap-2">
                <button className="flex-1 border border-gray-200 text-gray-700 text-sm font-semibold py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                  View Full History
                </button>
                <button className="flex-1 bg-slate-900 text-white text-sm font-semibold py-2.5 rounded-xl hover:bg-slate-800 transition-colors">
                  Book MOT
                </button>
              </div>
            </div>
          ))}

          <button className="w-full border border-dashed border-gray-200 text-gray-400 text-sm py-3.5 rounded-2xl hover:bg-gray-50 transition-colors">
            + Add vehicle
          </button>
        </div>
      )}
    </div>
  );
}
