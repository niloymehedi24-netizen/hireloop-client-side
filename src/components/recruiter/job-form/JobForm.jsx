"use client";

import { useState } from "react";
import { Button } from "@heroui/react";

import CompanyCard from "./CompanyCard";
import FormSection from "./FormSection";
import JobInfoSection from "./JobInfoSection";

export default function JobForm() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    type: "",
    salaryMin: "",
    salaryMax: "",
    currency: "USD",
    city: "",
    country: "",
    remote: false,
    deadline: "",
  });

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      {/* Header */}

      <div className="mb-12">
        <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
          Recruiter Dashboard
        </span>

        <h1 className="mt-5 text-5xl font-bold text-white">Post a New Job</h1>

        <p className="mt-3 max-w-2xl text-lg text-gray-400">
          Create a new opportunity and publish it instantly to thousands of
          candidates on HireLoop.
        </p>
      </div>

      {/* Grid */}

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left */}

        <div className="space-y-8 lg:col-span-2">
          <FormSection
            title="Job Information"
            description="Basic information about the position."
          >
            <JobInfoSection form={form} setForm={setForm} />
          </FormSection>

          <FormSection
            title="Job Description"
            description="Describe the role and expectations."
          >
            <div className="flex h-56 items-center justify-center rounded-2xl border border-dashed border-white/10 text-gray-500">
              Description fields will be here
            </div>
          </FormSection>
        </div>

        {/* Right */}

        <div className="space-y-8">
          <CompanyCard />

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold text-white">
              Ready to Publish?
            </h3>

            <p className="mt-3 text-gray-400">
              Your job will become publicly visible immediately after
              publishing.
            </p>

            <Button className="mt-8 h-12 w-full bg-linear-to-r from-violet-600 to-purple-500 text-white">
              Publish Job
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
