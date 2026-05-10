import { Wrench, CheckCircle, Clock, Loader2 } from "lucide-react";
import { useMaintenance } from "../hooks/useData";
import StatCard from "../components/StatCard";

function formatDate(dateStr: string | null) {
  if (!dateStr) return "—";
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

const statusStyles = {
  booked: { badge: "bg-blue-100 text-blue-700", icon: <Clock size={12} /> },
  completed: { badge: "bg-green-100 text-green-700", icon: <CheckCircle size={12} /> },
};

export default function Maintenance() {
  const { data: jobs, loading } = useMaintenance();
  const completed = jobs.filter((j: any) => j.status === "completed");
  const totalSpent = completed.reduce((s: number, j: any) => s + Number(j.cost ?? 0), 0);
  const booked = jobs.filter((j: any) => j.status === "booked");

  return (
    <div className="p-8 max-w-3xl space-y-6">
      <div>
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-8 h-8 bg-amber-100 rounded-xl flex items-center justify-center">
            <Wrench size={16} className="text-amber-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Maintenance</h1>
        </div>
        <p className="text-gray-400 text-sm">Home repairs, servicing and contractor history.</p>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Total spent" value={loading ? "—" : `£${totalSpent.toLocaleString()}`} sub="All jobs" />
        <StatCard label="Jobs logged" value={loading ? "—" : String(jobs.length)} />
        <StatCard
          label="Upcoming"
          value={loading ? "—" : String(booked.length)}
          sub={booked[0] ? `${booked[0].name}` : "None booked"}
          accent={booked.length ? "amber" : "default"}
        />
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-50 flex items-center justify-between">
          <h2 className="font-semibold text-gray-900 text-sm">Job History</h2>
          <button className="text-xs text-blue-600 font-semibold">+ Log job</button>
        </div>
        {loading ? (
          <div className="flex items-center justify-center py-12 text-gray-400">
            <Loader2 size={20} className="animate-spin mr-2" /> Loading…
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {jobs.map((job: any) => {
              const style = statusStyles[job.status as keyof typeof statusStyles] ?? statusStyles.completed;
              return (
                <div key={job.id} className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50/50 transition-colors">
                  <div className="w-9 h-9 bg-amber-50 rounded-xl flex items-center justify-center shrink-0">
                    <Wrench size={14} className="text-amber-500" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 text-sm">{job.name}</p>
                    <p className="text-xs text-gray-400">{job.contractor} · {formatDate(job.job_date)}</p>
                  </div>
                  {job.cost && (
                    <p className="font-bold text-gray-900 text-sm mr-4">£{Number(job.cost).toFixed(0)}</p>
                  )}
                  <span className={`flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-medium ${style.badge}`}>
                    {style.icon}
                    {job.status === "booked" ? "Booked" : "Completed"}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
