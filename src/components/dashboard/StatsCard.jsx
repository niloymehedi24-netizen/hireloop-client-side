export default function StatCard({
  title,
  value,
  icon,
  change,
  positive = true,
}) {
  return (
    <div className="group rounded-2xl border border-white/10 bg-[#1D1B27] p-6 transition-all duration-300 hover:border-violet-500/40 hover:bg-[#232030]">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <h3 className="text-lg font-medium text-white">{title}</h3>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-xl">
          {icon}
        </div>
      </div>

      {/* Value */}
      <h2 className="text-5xl font-bold tracking-tight text-white">{value}</h2>

      {/* Change */}
      <div
        className={`mt-6 flex items-center gap-2 text-sm font-medium ${
          positive ? "text-green-400" : "text-red-400"
        }`}
      >
        <span>{positive ? "▲" : "▼"}</span>

        <span>{change}</span>

        <span className="text-gray-500">vs last month</span>
      </div>
    </div>
  );
}
