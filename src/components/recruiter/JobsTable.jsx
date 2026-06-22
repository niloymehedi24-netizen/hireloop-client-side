"use client";

import Link from "next/link";

export default function JobsTable({ jobs }) {
  if (!jobs?.length) {
    return (
      <div className="rounded-3xl border border-dashed border-white/10 py-16 text-center">
        <h3 className="text-xl font-semibold text-white">No Jobs Found</h3>

        <p className="mt-2 text-gray-400">Start by posting your first job.</p>

        <Link
          href="/dashboard/recruiter/jobs/new"
          className="mt-6 inline-flex rounded-xl bg-violet-600 px-6 py-3 text-white hover:bg-violet-700"
        >
          Post Job
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-white/10 bg-white/5">
            <tr className="text-left">
              <th className="px-6 py-4 text-sm font-semibold text-gray-300">
                Job
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-300">
                Type
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-300">
                Location
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-300">
                Salary
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-300">
                Applications
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-300">
                Status
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-gray-300">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job) => (
              <tr
                key={job._id}
                className="border-b border-white/5 transition hover:bg-white/5"
              >
                <td className="px-6 py-5">
                  <h3 className="font-semibold text-white">{job.title}</h3>

                  <p className="mt-1 text-sm text-gray-400">{job.category}</p>
                </td>

                <td className="px-6 py-5 text-gray-300">{job.type}</td>

                <td className="px-6 py-5 text-gray-300">
                  {job.location?.remote
                    ? "Remote"
                    : `${job.location?.city}, ${job.location?.country}`}
                </td>

                <td className="px-6 py-5 text-gray-300">
                  {job.salary?.currency} {job.salary?.min} - {job.salary?.max}
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-sky-500/10 px-3 py-1 text-sm text-sky-400">
                    {job.applications || 0}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm capitalize text-green-400">
                    {job.status}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <Link
                    href={`/dashboard/recruiter/jobs/${job._id}`}
                    className="text-violet-400 hover:text-violet-300"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
