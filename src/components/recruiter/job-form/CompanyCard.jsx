export default function CompanyCard() {
  return (
    <div className="rounded-3xl border border-violet-500/20 bg-violet-500/5 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold text-white">HireLoop Inc.</h3>

          <p className="mt-1 text-gray-400">Verified Company</p>
        </div>

        <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-400">
          Growth Plan
        </span>
      </div>

      <div className="mt-8">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-gray-400">Active Jobs</span>

          <span className="text-white">7 / 10</span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-[70%] rounded-full bg-linear-to-r from-violet-600 to-purple-500"></div>
        </div>
      </div>
    </div>
  );
}
