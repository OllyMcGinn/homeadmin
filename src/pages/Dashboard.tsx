import { AlertTriangle, CheckCircle, Info, ArrowRight, Sparkles, TrendingDown } from "lucide-react";
import { alerts, upcomingTasks } from "../data/mock";
import { Link } from "react-router-dom";
import SpendingChart from "../components/SpendingChart";
import DeadlineTimeline from "../components/DeadlineTimeline";
import StatCard from "../components/StatCard";

const alertStyles = {
  urgent: {
    wrapper: "border-red-200 bg-red-50",
    icon: <AlertTriangle size={15} className="text-red-500 shrink-0 mt-0.5" />,
    badge: "bg-red-100 text-red-700",
    label: "Urgent",
    cta: "bg-red-600 hover:bg-red-700",
  },
  warning: {
    wrapper: "border-amber-200 bg-amber-50",
    icon: <AlertTriangle size={15} className="text-amber-500 shrink-0 mt-0.5" />,
    badge: "bg-amber-100 text-amber-700",
    label: "Action needed",
    cta: "bg-amber-600 hover:bg-amber-700",
  },
  info: {
    wrapper: "border-blue-200 bg-blue-50",
    icon: <Info size={15} className="text-blue-500 shrink-0 mt-0.5" />,
    badge: "bg-blue-100 text-blue-700",
    label: "Upcoming",
    cta: "bg-blue-600 hover:bg-blue-700",
  },
  success: {
    wrapper: "border-green-200 bg-green-50",
    icon: <CheckCircle size={15} className="text-green-500 shrink-0 mt-0.5" />,
    badge: "bg-green-100 text-green-700",
    label: "Confirmed",
    cta: "bg-green-600 hover:bg-green-700",
  },
};

const priorityDot = {
  high: "bg-red-400",
  medium: "bg-amber-400",
  low: "bg-slate-300",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

const quickLinks = [
  { label: "Utilities", to: "/utilities", color: "bg-indigo-500" },
  { label: "Insurance", to: "/insurance", color: "bg-sky-500" },
  { label: "Vehicles", to: "/vehicles", color: "bg-slate-700" },
  { label: "Subscriptions", to: "/subscriptions", color: "bg-violet-500" },
  { label: "Maintenance", to: "/maintenance", color: "bg-amber-500" },
  { label: "Documents", to: "/documents", color: "bg-emerald-500" },
];

export default function Dashboard() {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="p-8 space-y-6 max-w-[1400px]">
      {/* Header */}
      <div className="flex items-end justify-between">
        <div>
          <p className="text-xs text-gray-400 font-medium">{today}</p>
          <h1 className="text-3xl font-bold text-gray-900 mt-0.5 tracking-tight">
            Good morning, Oliver
          </h1>
          <p className="text-gray-400 text-sm mt-1">Your household is mostly in order — 2 actions need attention.</p>
        </div>
        <Link
          to="/briefing"
          className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
        >
          <Sparkles size={15} className="text-blue-400" />
          AI Briefing
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        <StatCard label="Monthly spend" value="£2,340" sub="Across all services" />
        <StatCard label="Active services" value="18" sub="Utilities, insurance & more" />
        <StatCard label="Tasks this week" value="6" sub="2 urgent" accent="amber" />
        <StatCard label="Potential savings" value="£156/mo" sub="Identified by Home Admin" accent="green" icon={<TrendingDown size={18} className="text-green-600" />} />
      </div>

      {/* Main grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left col — 2 wide */}
        <div className="col-span-2 space-y-6">
          <SpendingChart />

          {/* Alerts */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-gray-900">Alerts & Actions</h2>
              <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
                {alerts.length} active
              </span>
            </div>
            <div className="space-y-3">
              {alerts.map((alert) => {
                const style = alertStyles[alert.type as keyof typeof alertStyles];
                return (
                  <div
                    key={alert.id}
                    className={`border rounded-xl p-4 flex items-start gap-3 ${style.wrapper}`}
                  >
                    {style.icon}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p className="font-semibold text-gray-900 text-sm">{alert.title}</p>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${style.badge}`}>
                          {style.label}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm">{alert.description}</p>
                    </div>
                    <button
                      className={`text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors ${style.cta}`}
                    >
                      {alert.action}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right col */}
        <div className="space-y-6">
          <DeadlineTimeline />

          {/* Tasks */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Task Queue</h2>
            <div className="space-y-2.5">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full shrink-0 ${
                      priorityDot[task.priority as keyof typeof priorityDot]
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-800 truncate">{task.title}</p>
                  </div>
                  <p className="text-xs text-gray-400 whitespace-nowrap">{formatDate(task.due)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick access */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-semibold text-gray-900 mb-4">Quick Access</h2>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group flex items-center gap-2.5 border border-gray-100 rounded-xl px-3 py-2.5 hover:border-gray-200 hover:bg-gray-50 transition-all"
                >
                  <div className={`w-2 h-2 rounded-full ${link.color}`} />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors">
                    {link.label}
                  </span>
                  <ArrowRight size={12} className="ml-auto text-gray-300 group-hover:text-gray-500 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
