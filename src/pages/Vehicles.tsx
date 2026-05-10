import { Car, AlertTriangle, CheckCircle } from "lucide-react";
import { vehicles } from "../data/mock";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function daysUntil(dateStr: string) {
  const diff = new Date(dateStr).getTime() - Date.now();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

function StatusBadge({ dateStr, label }: { dateStr: string; label: string }) {
  const days = daysUntil(dateStr);
  const urgent = days <= 30;
  const warning = days <= 60;

  return (
    <div className={`rounded-lg p-3 border ${urgent ? "bg-red-50 border-red-200" : warning ? "bg-amber-50 border-amber-200" : "bg-green-50 border-green-200"}`}>
      <p className={`text-xs font-medium ${urgent ? "text-red-600" : warning ? "text-amber-600" : "text-green-600"}`}>
        {label}
      </p>
      <p className={`text-sm font-semibold mt-0.5 ${urgent ? "text-red-900" : warning ? "text-amber-900" : "text-green-900"}`}>
        {formatDate(dateStr)}
      </p>
      <p className={`text-xs mt-0.5 ${urgent ? "text-red-600" : warning ? "text-amber-600" : "text-green-600"}`}>
        {days <= 0 ? "Overdue" : `${days} days`}
      </p>
    </div>
  );
}

export default function Vehicles() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <Car size={20} className="text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Vehicles</h1>
        </div>
        <p className="text-gray-500 text-sm">MOT, tax, service history and more.</p>
      </div>

      <div className="space-y-6">
        {vehicles.map((v) => (
          <div key={v.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center">
                  <Car size={22} className="text-slate-600" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">
                    {v.make} {v.model}
                  </p>
                  <p className="text-sm text-gray-500 font-mono">{v.reg}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-400">Mileage</p>
                <p className="font-semibold text-gray-900">{v.mileage.toLocaleString()} mi</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-4">
              <StatusBadge dateStr={v.mot} label="MOT Expiry" />
              <StatusBadge dateStr={v.tax} label="Tax Expiry" />
              <StatusBadge dateStr={v.service} label="Last Service" />
            </div>

            <div className="flex gap-2">
              <button className="flex-1 border border-gray-200 text-gray-700 text-sm font-medium py-2 rounded-lg hover:bg-gray-50 transition-colors">
                View History
              </button>
              <button className="flex-1 bg-blue-600 text-white text-sm font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Book MOT
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
