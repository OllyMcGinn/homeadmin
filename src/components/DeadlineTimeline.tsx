import { AlertTriangle, Clock, CheckCircle } from "lucide-react";

const deadlines = [
  { id: 1, label: "Broadband renewal", date: "15 May", daysLeft: 5, type: "urgent" },
  { id: 2, label: "Ford Focus MOT", date: "22 May", daysLeft: 12, type: "urgent" },
  { id: 3, label: "Boiler service", date: "14 May", daysLeft: 4, type: "booked" },
  { id: 4, label: "Home insurance", date: "15 Jun", daysLeft: 36, type: "upcoming" },
  { id: 5, label: "Ford Focus road tax", date: "31 Jul", daysLeft: 82, type: "upcoming" },
];

const typeConfig = {
  urgent: { icon: <AlertTriangle size={13} />, color: "text-red-500", bg: "bg-red-50 border-red-200", bar: "bg-red-400" },
  booked: { icon: <CheckCircle size={13} />, color: "text-green-500", bg: "bg-green-50 border-green-200", bar: "bg-green-400" },
  upcoming: { icon: <Clock size={13} />, color: "text-blue-500", bg: "bg-blue-50 border-blue-200", bar: "bg-blue-400" },
};

export default function DeadlineTimeline() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="font-semibold text-gray-900">Upcoming Deadlines</h2>
          <p className="text-xs text-gray-400">Next 90 days</p>
        </div>
      </div>

      <div className="space-y-3">
        {deadlines.map((d) => {
          const cfg = typeConfig[d.type as keyof typeof typeConfig];
          const pct = Math.max(5, Math.min(100, 100 - (d.daysLeft / 90) * 100));
          return (
            <div key={d.id} className={`rounded-xl border p-3 ${cfg.bg}`}>
              <div className="flex items-center gap-2 mb-2">
                <span className={cfg.color}>{cfg.icon}</span>
                <span className="text-sm font-medium text-gray-800 flex-1">{d.label}</span>
                <span className={`text-xs font-semibold ${cfg.color}`}>
                  {d.daysLeft === 0 ? "Today" : `${d.daysLeft}d`}
                </span>
              </div>
              <div className="w-full h-1.5 bg-black/10 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${cfg.bar}`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">Due {d.date}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
