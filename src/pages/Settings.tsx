import { Settings as SettingsIcon } from "lucide-react";

const trustLevels = [
  {
    level: 1,
    name: "Advisory",
    description: "Home Admin recommends actions. You decide everything.",
    active: true,
  },
  {
    level: 2,
    name: "Assisted",
    description: "Home Admin drafts actions for your approval — emails, forms, bookings.",
    active: false,
  },
  {
    level: 3,
    name: "Autonomous (Low Risk)",
    description: "Home Admin can automatically reorder groceries, renew subscriptions below your spending limit.",
    active: false,
  },
  {
    level: 4,
    name: "Fully Delegated",
    description: "Whitelist full categories — utilities, routine admin, recurring procurement.",
    active: false,
  },
];

export default function Settings() {
  return (
    <div className="p-8 max-w-2xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <SettingsIcon size={20} className="text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        </div>
        <p className="text-gray-500 text-sm">Manage your Home Admin preferences and trust levels.</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-semibold text-gray-900 mb-1">Household</h2>
          <p className="text-sm text-gray-500 mb-4">Basic household details.</p>
          <div className="space-y-4">
            {[
              { label: "Household name", value: "The McGinn Household" },
              { label: "Address", value: "London, UK" },
              { label: "Members", value: "2 adults" },
            ].map((field) => (
              <div key={field.label} className="flex items-center justify-between border-b border-gray-50 pb-3">
                <span className="text-sm text-gray-500">{field.label}</span>
                <span className="text-sm font-medium text-gray-900">{field.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-semibold text-gray-900 mb-1">AI Trust Level</h2>
          <p className="text-sm text-gray-500 mb-4">
            Choose how much autonomy Home Admin has. You can always override.
          </p>
          <div className="space-y-3">
            {trustLevels.map((level) => (
              <div
                key={level.level}
                className={`border rounded-xl p-4 cursor-pointer transition-colors ${
                  level.active
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-100 hover:border-gray-200"
                }`}
              >
                <div className="flex items-center justify-between mb-0.5">
                  <p className={`font-medium text-sm ${level.active ? "text-blue-900" : "text-gray-900"}`}>
                    Level {level.level} — {level.name}
                  </p>
                  {level.active && (
                    <span className="text-xs bg-blue-600 text-white px-2 py-0.5 rounded-full font-medium">
                      Current
                    </span>
                  )}
                </div>
                <p className={`text-xs ${level.active ? "text-blue-700" : "text-gray-500"}`}>
                  {level.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h2 className="font-semibold text-gray-900 mb-1">Notifications</h2>
          <p className="text-sm text-gray-500 mb-4">How and when Home Admin contacts you.</p>
          <div className="space-y-3">
            {[
              { label: "Daily briefing", sub: "Every morning at 8am", on: true },
              { label: "Urgent alerts", sub: "Immediate, any time", on: true },
              { label: "Weekly planning summary", sub: "Every Sunday evening", on: true },
              { label: "WhatsApp notifications", sub: "Connected", on: false },
            ].map((item) => (
              <div key={item.label} className="flex items-center justify-between py-2 border-b border-gray-50">
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-400">{item.sub}</p>
                </div>
                <div
                  className={`w-10 h-6 rounded-full relative cursor-pointer transition-colors ${
                    item.on ? "bg-blue-600" : "bg-gray-200"
                  }`}
                >
                  <div
                    className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-all ${
                      item.on ? "left-5" : "left-1"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
