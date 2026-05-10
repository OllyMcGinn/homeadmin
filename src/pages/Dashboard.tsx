import { AlertTriangle, TrendingDown, CheckCircle, Info, ArrowRight, Pound } from "lucide-react";
import { alerts, stats, upcomingTasks, utilities, subscriptions } from "../data/mock";
import { Link } from "react-router-dom";

const alertStyles = {
  urgent: {
    border: "border-red-200 bg-red-50",
    icon: <AlertTriangle size={16} className="text-red-500" />,
    badge: "bg-red-100 text-red-700",
    label: "Urgent",
  },
  warning: {
    border: "border-amber-200 bg-amber-50",
    icon: <AlertTriangle size={16} className="text-amber-500" />,
    badge: "bg-amber-100 text-amber-700",
    label: "Action needed",
  },
  info: {
    border: "border-blue-200 bg-blue-50",
    icon: <Info size={16} className="text-blue-500" />,
    badge: "bg-blue-100 text-blue-700",
    label: "Upcoming",
  },
  success: {
    border: "border-green-200 bg-green-50",
    icon: <CheckCircle size={16} className="text-green-500" />,
    badge: "bg-green-100 text-green-700",
    label: "Confirmed",
  },
};

const priorityStyles = {
  high: "bg-red-100 text-red-700",
  medium: "bg-amber-100 text-amber-700",
  low: "bg-slate-100 text-slate-600",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

export default function Dashboard() {
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const totalSubscriptions = subscriptions.reduce((s, sub) => s + sub.monthly, 0);

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-sm text-gray-400">{today}</p>
        <h1 className="text-2xl font-bold text-gray-900 mt-0.5">Good morning, Oliver</h1>
        <p className="text-gray-500 text-sm mt-1">Here's your household overview.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Monthly spend</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">£{stats.monthlySpend.toLocaleString()}</p>
          <p className="text-xs text-gray-400 mt-1">Across all services</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Active services</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{stats.activeServices}</p>
          <p className="text-xs text-gray-400 mt-1">Utilities, insurance & more</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Tasks this week</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{stats.tasksThisWeek}</p>
          <p className="text-xs text-gray-400 mt-1">2 urgent</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
          <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">Potential savings</p>
          <p className="text-2xl font-bold text-green-600 mt-1">£{stats.potentialSavings}/mo</p>
          <p className="text-xs text-gray-400 mt-1">Identified by Home Admin</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Alerts — takes 2 cols */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Alerts & Actions</h2>
            <span className="text-xs text-gray-400">{alerts.length} active</span>
          </div>
          {alerts.map((alert) => {
            const style = alertStyles[alert.type as keyof typeof alertStyles];
            return (
              <div
                key={alert.id}
                className={`border rounded-xl p-4 flex items-start gap-3 ${style.border}`}
              >
                <div className="mt-0.5">{style.icon}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <p className="font-medium text-gray-900 text-sm">{alert.title}</p>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${style.badge}`}>
                      {style.label}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{alert.description}</p>
                </div>
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700 whitespace-nowrap flex items-center gap-1">
                  {alert.action}
                  <ArrowRight size={13} />
                </button>
              </div>
            );
          })}
        </div>

        {/* Right column */}
        <div className="space-y-6">
          {/* Upcoming tasks */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-gray-900">Upcoming Tasks</h2>
            </div>
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm divide-y divide-gray-50">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-center gap-3 px-4 py-3">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-800 font-medium truncate">{task.title}</p>
                    <p className="text-xs text-gray-400">{formatDate(task.due)}</p>
                  </div>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap ${
                      priorityStyles[task.priority as keyof typeof priorityStyles]
                    }`}
                  >
                    {task.priority}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="font-semibold text-gray-900 mb-3">Quick Access</h2>
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: "Utilities", to: "/utilities" },
                { label: "Insurance", to: "/insurance" },
                { label: "Vehicles", to: "/vehicles" },
                { label: "Subscriptions", to: "/subscriptions" },
                { label: "Maintenance", to: "/maintenance" },
                { label: "Documents", to: "/documents" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="bg-white border border-gray-100 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-200 transition-colors shadow-sm text-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Subscriptions summary */}
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-semibold text-gray-900">Subscriptions</h3>
              <Link to="/subscriptions" className="text-xs text-blue-600 hover:underline">
                View all
              </Link>
            </div>
            <p className="text-2xl font-bold text-gray-900">
              £{totalSubscriptions.toFixed(2)}
              <span className="text-sm font-normal text-gray-400">/mo</span>
            </p>
            <p className="text-xs text-gray-400 mt-0.5">{subscriptions.length} active subscriptions</p>
            <div className="mt-3 space-y-1.5">
              {subscriptions.slice(0, 3).map((sub) => (
                <div key={sub.id} className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">{sub.name}</span>
                  <span className="text-xs font-medium text-gray-800">£{sub.monthly}/mo</span>
                </div>
              ))}
              <p className="text-xs text-gray-400 pt-1">+{subscriptions.length - 3} more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
