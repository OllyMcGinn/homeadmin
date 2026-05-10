import { Shield } from "lucide-react";
import { insurance } from "../data/mock";

function formatDate(dateStr: string | null) {
  if (!dateStr) return "Ongoing";
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default function Insurance() {
  const totalAnnual = insurance.reduce((s, i) => {
    const annual = i.annual ?? (i.monthly ? i.monthly * 12 : 0);
    return s + annual;
  }, 0);

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <Shield size={20} className="text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Insurance</h1>
        </div>
        <p className="text-gray-500 text-sm">Home, car, life and pet insurance policies.</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Annual total</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">£{totalAnnual.toLocaleString()}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Active policies</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{insurance.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Next renewal</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">15 Jun</p>
          <p className="text-xs text-gray-400 mt-1">Home Insurance</p>
        </div>
      </div>

      <div className="space-y-3">
        {insurance.map((policy) => {
          const cost = policy.annual
            ? `£${policy.annual}/yr`
            : `£${policy.monthly}/mo`;

          return (
            <div key={policy.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex items-center gap-4">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                <Shield size={18} className="text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900">{policy.name}</p>
                <p className="text-sm text-gray-500">{policy.provider}</p>
              </div>
              <div className="text-right mr-8">
                <p className="font-semibold text-gray-900">{cost}</p>
                <p className="text-xs text-gray-400">
                  {policy.renewal ? `Renews ${formatDate(policy.renewal)}` : "Ongoing"}
                </p>
              </div>
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View →
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
