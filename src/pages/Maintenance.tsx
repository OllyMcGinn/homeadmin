import { Wrench, CheckCircle, Clock } from "lucide-react";
import { maintenance } from "../data/mock";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

const statusStyles = {
  booked: { badge: "bg-blue-100 text-blue-700", icon: <Clock size={13} /> },
  completed: { badge: "bg-green-100 text-green-700", icon: <CheckCircle size={13} /> },
};

export default function Maintenance() {
  const totalSpent = maintenance
    .filter((m) => m.status === "completed")
    .reduce((s, m) => s + m.cost, 0);

  return (
    <div className="p-8">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <Wrench size={20} className="text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Maintenance</h1>
        </div>
        <p className="text-gray-500 text-sm">Home repairs, servicing and contractor history.</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Total spent (12mo)</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">£{totalSpent}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Jobs logged</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{maintenance.length}</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 shadow-sm">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-wide">Upcoming</p>
          <p className="text-2xl font-bold text-blue-900 mt-1">1</p>
          <p className="text-xs text-blue-600 mt-1">Boiler service — 14 May</p>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm divide-y divide-gray-50">
        {maintenance.map((job) => {
          const style = statusStyles[job.status as keyof typeof statusStyles];
          return (
            <div key={job.id} className="flex items-center gap-4 px-5 py-4">
              <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center shrink-0">
                <Wrench size={15} className="text-slate-500" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900 text-sm">{job.name}</p>
                <p className="text-xs text-gray-500">{job.contractor} · {formatDate(job.date)}</p>
              </div>
              <p className="font-semibold text-gray-900 text-sm mr-6">£{job.cost}</p>
              <span className={`flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${style.badge}`}>
                {style.icon}
                {job.status === "booked" ? "Booked" : "Completed"}
              </span>
            </div>
          );
        })}
      </div>

      <button className="mt-4 w-full border border-dashed border-gray-200 text-gray-500 text-sm py-3 rounded-xl hover:bg-gray-50 transition-colors">
        + Log new job
      </button>
    </div>
  );
}
