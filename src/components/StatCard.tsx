import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string;
  sub?: string;
  accent?: "default" | "green" | "amber" | "red";
  icon?: ReactNode;
}

const accentStyles = {
  default: { card: "bg-white border-gray-100", value: "text-gray-900", sub: "text-gray-400" },
  green: { card: "bg-green-50 border-green-200", value: "text-green-700", sub: "text-green-500" },
  amber: { card: "bg-amber-50 border-amber-200", value: "text-amber-700", sub: "text-amber-500" },
  red: { card: "bg-red-50 border-red-200", value: "text-red-700", sub: "text-red-500" },
};

export default function StatCard({ label, value, sub, accent = "default", icon }: StatCardProps) {
  const s = accentStyles[accent];
  return (
    <div className={`rounded-2xl border shadow-sm p-5 ${s.card}`}>
      <div className="flex items-start justify-between">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-wide">{label}</p>
        {icon && <div className="opacity-40">{icon}</div>}
      </div>
      <p className={`text-3xl font-bold mt-2 tracking-tight ${s.value}`}>{value}</p>
      {sub && <p className={`text-xs mt-1 ${s.sub}`}>{sub}</p>}
    </div>
  );
}
