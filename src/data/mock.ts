export const alerts = [
  {
    id: 1,
    type: "urgent",
    title: "Car MOT Due",
    description: "Your Ford Focus MOT expires in 12 days.",
    action: "Book Now",
    category: "vehicles",
  },
  {
    id: 2,
    type: "warning",
    title: "Broadband Renewal",
    description: "Your Sky broadband contract ends in 5 days. Found a deal saving £28/mo.",
    action: "Review Deal",
    category: "utilities",
  },
  {
    id: 3,
    type: "info",
    title: "Home Insurance Renewing",
    description: "Renews automatically on 15 Jun. Review to ensure best price.",
    action: "Review",
    category: "insurance",
  },
  {
    id: 4,
    type: "success",
    title: "Boiler Service Booked",
    description: "British Gas engineer confirmed for 14 May, 1–3pm.",
    action: "View Details",
    category: "maintenance",
  },
];

export const utilities = [
  { id: 1, name: "Gas & Electric", provider: "Octopus Energy", monthly: 142, renewal: "2025-03-01", status: "active" },
  { id: 2, name: "Broadband", provider: "Sky", monthly: 49, renewal: "2025-05-15", status: "renewing" },
  { id: 3, name: "Water", provider: "Thames Water", monthly: 38, renewal: null, status: "active" },
  { id: 4, name: "Council Tax", provider: "Local Council", monthly: 185, renewal: null, status: "active" },
];

export const insurance = [
  { id: 1, name: "Home Insurance", provider: "Admiral", annual: 480, renewal: "2025-06-15", status: "active" },
  { id: 2, name: "Car Insurance", provider: "Direct Line", annual: 720, renewal: "2025-09-22", status: "active" },
  { id: 3, name: "Life Insurance", provider: "Aviva", monthly: 32, renewal: null, status: "active" },
  { id: 4, name: "Pet Insurance", provider: "Petplan", monthly: 28, renewal: "2025-07-01", status: "active" },
];

export const vehicles = [
  {
    id: 1,
    make: "Ford",
    model: "Focus",
    reg: "AB21 CDE",
    mot: "2025-05-22",
    tax: "2025-07-31",
    service: "2024-11-10",
    mileage: 42300,
  },
  {
    id: 2,
    make: "Volkswagen",
    model: "Golf",
    reg: "FG19 HIJ",
    mot: "2025-11-05",
    tax: "2025-10-31",
    service: "2025-01-15",
    mileage: 31100,
  },
];

export const subscriptions = [
  { id: 1, name: "Netflix", category: "Entertainment", monthly: 17.99, status: "active" },
  { id: 2, name: "Spotify Family", category: "Music", monthly: 16.99, status: "active" },
  { id: 3, name: "Amazon Prime", category: "Shopping", monthly: 8.99, status: "active" },
  { id: 4, name: "Disney+", category: "Entertainment", monthly: 4.99, status: "active" },
  { id: 5, name: "Apple iCloud", category: "Storage", monthly: 2.99, status: "active" },
  { id: 6, name: "Gym Membership", category: "Health", monthly: 45, status: "active" },
];

export const maintenance = [
  { id: 1, name: "Boiler Service", contractor: "British Gas", date: "2025-05-14", cost: 120, status: "booked" },
  { id: 2, name: "Gutter Cleaning", contractor: "Local Roofers Ltd", date: "2024-10-02", cost: 80, status: "completed" },
  { id: 3, name: "Boiler Repair", contractor: "British Gas", date: "2024-04-18", cost: 240, status: "completed" },
  { id: 4, name: "Fence Replacement", contractor: "Green Garden Co", date: "2023-08-11", cost: 650, status: "completed" },
];

export const stats = {
  monthlySpend: 2340,
  activeServices: 18,
  tasksThisWeek: 6,
  potentialSavings: 156,
};

export const upcomingTasks = [
  { id: 1, title: "MOT booking — Ford Focus", due: "2025-05-22", priority: "high" },
  { id: 2, title: "Broadband deal decision", due: "2025-05-15", priority: "high" },
  { id: 3, title: "Boiler engineer — be home 1–3pm", due: "2025-05-14", priority: "medium" },
  { id: 4, title: "Review home insurance renewal", due: "2025-06-01", priority: "medium" },
  { id: 5, title: "Car tax renewal — Ford Focus", due: "2025-07-31", priority: "low" },
];
