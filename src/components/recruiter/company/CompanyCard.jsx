"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

import StatusBadge from "./StatusBadge";

export default function CompanyCard({ company }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      {/* Header */}

      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <img
            src={company.logo}
            alt={company.name}
            className="h-24 w-24 rounded-2xl border border-white/10 object-cover"
          />

          <div>
            <h1 className="text-3xl font-bold text-white">{company.name}</h1>

            <p className="mt-2 text-gray-400">{company.industry}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <StatusBadge status={company.status} />

          <Button
            as={Link}
            href={`/dashboard/recruiter/company/edit/${company._id}`}
            variant="bordered"
          >
            Edit Company
          </Button>
        </div>
      </div>

      {/* Details */}

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-2 text-sm text-gray-400">Location</h3>

          <p className="text-lg text-white">{company.location}</p>
        </div>

        <div>
          <h3 className="mb-2 text-sm text-gray-400">Employees</h3>

          <p className="text-lg text-white">{company.employeeCount}</p>
        </div>

        <div className="md:col-span-2">
          <h3 className="mb-2 text-sm text-gray-400">About Company</h3>

          <p className="leading-8 text-gray-300">{company.description}</p>
        </div>
      </div>
    </div>
  );
}
