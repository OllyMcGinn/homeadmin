import { CreditCard } from "lucide-react";
import { subscriptions } from "../data/mock";

const categoryColors: Record<string, string> = {
  Entertainment: "bg-purple-100 text-purple-700",
  Music: "bg-green-100 text-green-700",
  Shopping: "bg-blue-100 text-blue-700",
  Storage: "bg-gray-100 text-gray-700",
  Health: "bg-red-100 text-red-700",
};

export default function Subscriptions() {
  const total = subscriptions.reduce((s, sub) => s + sub.monthly, 0);
  const annual = total * 12;

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <CreditCard size={20} className="text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Subscriptions</h1>
        </div>
        <p className="text-gray-500 text-sm">All your recurring monthly and annual subscriptions.</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Monthly total</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">£{total.toFixed(2)}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Annual total</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">£{annual.toFixed(0)}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Active</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{subscriptions.length}</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm divide-y divide-gray-50">
        {subscriptions.map((sub) => (
          <div key={sub.id} className="flex items-center gap-4 px-5 py-4">
            <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
              <CreditCard size={15} className="text-slate-500" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900 text-sm">{sub.name}</p>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[sub.category] ?? "bg-gray-100 text-gray-700"}`}>
                {sub.category}
              </span>
            </div>
            <p className="font-semibold text-gray-900 text-sm">£{sub.monthly}/mo</p>
            <button className="text-xs text-red-500 hover:text-red-600 font-medium ml-4">
              Cancel
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
