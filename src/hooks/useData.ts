import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

function useTable<T>(table: string, order?: { column: string; ascending?: boolean }) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      let query = supabase.from(table).select("*");
      if (order) query = query.order(order.column, { ascending: order.ascending ?? true });
      const { data: rows, error: err } = await query;
      if (err) setError(err.message);
      else setData(rows ?? []);
      setLoading(false);
    }
    fetch();
  }, [table]);

  return { data, loading, error };
}

export const useUtilities = () => useTable("utilities", { column: "name" });
export const useInsurance = () => useTable("insurance_policies", { column: "name" });
export const useVehicles = () => useTable("vehicles", { column: "make" });
export const useSubscriptions = () => useTable("subscriptions", { column: "name" });
export const useMaintenance = () => useTable("maintenance_jobs", { column: "job_date", ascending: false });
export const useDocuments = () => useTable("documents", { column: "uploaded_at", ascending: false });
export const useTasks = () => useTable("tasks", { column: "due_date" });
export const useAlerts = () => useTable("alerts", { column: "created_at", ascending: false });
