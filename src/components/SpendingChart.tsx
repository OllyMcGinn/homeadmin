import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Utilities", value: 414, color: "#6366f1" },
  { name: "Insurance", value: 160, color: "#0ea5e9" },
  { name: "Subscriptions", value: 97, color: "#8b5cf6" },
  { name: "Mortgage", value: 1580, color: "#1e293b" },
  { name: "Maintenance", value: 89, color: "#f59e0b" },
];

const total = data.reduce((s, d) => s + d.value, 0);

function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null;
  const d = payload[0].payload;
  return (
    <div className="bg-white border border-gray-100 shadow-lg rounded-xl px-4 py-3 text-sm">
      <p className="font-semibold text-gray-900">{d.name}</p>
      <p className="text-gray-500">£{d.value.toLocaleString()}/mo</p>
      <p className="text-gray-400 text-xs">{((d.value / total) * 100).toFixed(0)}% of spend</p>
    </div>
  );
}

export default function SpendingChart() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="font-semibold text-gray-900">Monthly Spend</h2>
          <p className="text-xs text-gray-400">Breakdown by category</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-gray-900">£{total.toLocaleString()}</p>
          <p className="text-xs text-gray-400">per month</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative w-40 h-40 shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={46}
                outerRadius={68}
                paddingAngle={3}
                dataKey="value"
                strokeWidth={0}
              >
                {data.map((entry, i) => (
                  <Cell key={i} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <p className="text-xs text-gray-400">total</p>
            <p className="text-sm font-bold text-gray-900">£{total.toLocaleString()}</p>
          </div>
        </div>

        <div className="flex-1 space-y-2.5">
          {data.map((d) => (
            <div key={d.name} className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: d.color }} />
              <span className="text-sm text-gray-600 flex-1">{d.name}</span>
              <span className="text-sm font-semibold text-gray-900">£{d.value}</span>
              <span className="text-xs text-gray-400 w-8 text-right">
                {((d.value / total) * 100).toFixed(0)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
