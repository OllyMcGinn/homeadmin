import { FileText, Upload } from "lucide-react";

const docs = [
  { id: 1, name: "Home Insurance Certificate", category: "Insurance", date: "2024-06-15", size: "240 KB" },
  { id: 2, name: "Car Insurance Schedule", category: "Insurance", date: "2024-09-22", size: "180 KB" },
  { id: 3, name: "Boiler Warranty", category: "Maintenance", date: "2023-11-04", size: "95 KB" },
  { id: 4, name: "Mortgage Statement 2024", category: "Finance", date: "2024-01-31", size: "320 KB" },
  { id: 5, name: "Energy Contract — Octopus", category: "Utilities", date: "2024-03-01", size: "140 KB" },
  { id: 6, name: "Ford Focus V5C", category: "Vehicles", date: "2021-05-14", size: "210 KB" },
];

const categoryColors: Record<string, string> = {
  Insurance: "bg-blue-100 text-blue-700",
  Maintenance: "bg-amber-100 text-amber-700",
  Finance: "bg-green-100 text-green-700",
  Utilities: "bg-purple-100 text-purple-700",
  Vehicles: "bg-slate-100 text-slate-700",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export default function Documents() {
  return (
    <div className="p-8">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <FileText size={20} className="text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Documents</h1>
          </div>
          <p className="text-gray-500 text-sm">All your important household documents in one place.</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors">
          <Upload size={15} />
          Upload document
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-100 shadow-sm divide-y divide-gray-50">
        {docs.map((doc) => (
          <div key={doc.id} className="flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors cursor-pointer">
            <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
              <FileText size={15} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900 text-sm">{doc.name}</p>
              <p className="text-xs text-gray-400">{formatDate(doc.date)} · {doc.size}</p>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[doc.category] ?? "bg-gray-100 text-gray-600"}`}>
              {doc.category}
            </span>
            <button className="text-xs text-blue-600 hover:underline ml-4 font-medium">
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
