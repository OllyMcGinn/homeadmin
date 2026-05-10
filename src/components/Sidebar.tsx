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
  { to: "/", label: "Dashboard", icon: LayoutDashboard, end: true, color: "text-slate-400" },
  { to: "/utilities", label: "Utilities", icon: Zap, color: "text-indigo-400" },
  { to: "/insurance", label: "Insurance", icon: Shield, color: "text-sky-400" },
  { to: "/vehicles", label: "Vehicles", icon: Car, color: "text-slate-400" },
  { to: "/subscriptions", label: "Subscriptions", icon: CreditCard, color: "text-violet-400" },
  { to: "/maintenance", label: "Maintenance", icon: Wrench, color: "text-amber-400" },
  { to: "/documents", label: "Documents", icon: FileText, color: "text-emerald-400" },
  { to: "/briefing", label: "AI Briefing", icon: Sparkles, color: "text-blue-400" },
];

export default function Sidebar() {
  return (
    <aside className="w-60 min-h-screen bg-slate-950 flex flex-col border-r border-slate-800/50">
      {/* Brand */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-slate-800/60">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
          <Home size={15} className="text-white" />
        </div>
        <div>
          <p className="text-white font-bold text-sm tracking-tight leading-tight">Home Admin</p>
          <p className="text-slate-500 text-xs">Household HQ</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        <p className="text-slate-600 text-[10px] uppercase tracking-widest font-semibold px-3 mb-3">
          Overview
        </p>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              isActive
                ? "bg-white/10 text-white shadow-sm"
                : "text-slate-400 hover:text-white hover:bg-white/5"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <LayoutDashboard size={16} className={isActive ? "text-white" : "text-slate-400"} />
              Dashboard
            </>
          )}
        </NavLink>

        <p className="text-slate-600 text-[10px] uppercase tracking-widest font-semibold px-3 mb-2 mt-5">
          Services
        </p>

        {nav.slice(1).map(({ to, label, icon: Icon, color }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? "bg-white/10 text-white shadow-sm"
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon size={16} className={isActive ? "text-white" : color} />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-3 pb-5 border-t border-slate-800/60 pt-4">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
              isActive
                ? "bg-white/10 text-white"
                : "text-slate-500 hover:text-white hover:bg-white/5"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Settings size={16} className={isActive ? "text-white" : "text-slate-500"} />
              Settings
            </>
          )}
        </NavLink>

        <div className="mt-4 mx-1 rounded-xl bg-slate-900 border border-slate-800 p-3">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
              <span className="text-white text-[10px] font-bold">O</span>
            </div>
            <div>
              <p className="text-white text-xs font-medium leading-tight">Oliver McGinn</p>
              <p className="text-slate-500 text-[10px]">Level 1 · Advisory</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
