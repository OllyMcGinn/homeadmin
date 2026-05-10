import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Zap,
  Shield,
  Car,
  CreditCard,
  Wrench,
  FileText,
  Sparkles,
  Settings,
  Home,
} from "lucide-react";

const nav = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/utilities", label: "Utilities", icon: Zap },
  { to: "/insurance", label: "Insurance", icon: Shield },
  { to: "/vehicles", label: "Vehicles", icon: Car },
  { to: "/subscriptions", label: "Subscriptions", icon: CreditCard },
  { to: "/maintenance", label: "Maintenance", icon: Wrench },
  { to: "/documents", label: "Documents", icon: FileText },
  { to: "/briefing", label: "AI Briefing", icon: Sparkles },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 flex flex-col">
      <div className="flex items-center gap-3 px-6 py-5 border-b border-slate-800">
        <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
          <Home size={16} className="text-white" />
        </div>
        <div>
          <p className="text-white font-semibold text-sm leading-tight">Home Admin</p>
          <p className="text-slate-400 text-xs">Household HQ</p>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {nav.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:text-white hover:bg-slate-800"
              }`
            }
          >
            <Icon size={17} />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="px-3 pb-4 border-t border-slate-800 pt-4">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isActive
                ? "bg-blue-600 text-white"
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`
          }
        >
          <Settings size={17} />
          Settings
        </NavLink>
      </div>
    </aside>
  );
}
