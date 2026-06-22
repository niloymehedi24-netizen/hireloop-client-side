import Link from "next/link";
import { Button } from "@heroui/react";

export default function EmptyCompany() {
  return (
    <div className="rounded-3xl border border-dashed border-white/10 bg-white/5 px-10 py-20 text-center backdrop-blur-xl">
      <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-violet-500/10 text-5xl">
        🏢
      </div>

      <h2 className="text-3xl font-bold text-white">No Company Registered</h2>

      <p className="mx-auto mt-4 max-w-xl text-gray-400">
        Before posting jobs, you need to register your company. After approval
        by an admin, you will be able to publish jobs.
      </p>

      <Button
        as={Link}
        href="/dashboard/recruiter/company/new"
        className="mt-8 bg-linear-to-r from-violet-600 to-purple-500 text-white"
      >
        Register Company
      </Button>
    </div>
  );
}
