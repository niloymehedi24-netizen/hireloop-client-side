"use client";

import { Switch } from "@heroui/react";

export default function JobInfoSection({ form, setForm }) {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Job Title */}
      <div className="md:col-span-2">
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Job Title *
        </label>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Frontend Developer"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-white placeholder:text-gray-500 outline-none transition focus:border-violet-500"
        />
      </div>

      {/* Category */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Job Category *
        </label>

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-[#1F1D29] px-5 py-3.5 text-white outline-none focus:border-violet-500"
        >
          <option value="">Select Category</option>
          <option>Software Development</option>
          <option>Design</option>
          <option>Marketing</option>
          <option>Sales</option>
          <option>Human Resources</option>
          <option>Finance</option>
          <option>Customer Support</option>
        </select>
      </div>

      {/* Job Type */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Job Type *
        </label>

        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-[#1F1D29] px-5 py-3.5 text-white outline-none focus:border-violet-500"
        >
          <option value="">Select Type</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Contract</option>
          <option>Internship</option>
        </select>
      </div>

      {/* Salary Min */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Minimum Salary
        </label>

        <input
          type="number"
          name="salaryMin"
          value={form.salaryMin}
          onChange={handleChange}
          placeholder="30000"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-white outline-none focus:border-violet-500"
        />
      </div>

      {/* Salary Max */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Maximum Salary
        </label>

        <input
          type="number"
          name="salaryMax"
          value={form.salaryMax}
          onChange={handleChange}
          placeholder="50000"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-white outline-none focus:border-violet-500"
        />
      </div>

      {/* Currency */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Currency
        </label>

        <select
          name="currency"
          value={form.currency}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-[#1F1D29] px-5 py-3.5 text-white outline-none focus:border-violet-500"
        >
          <option>USD</option>
          <option>BDT</option>
          <option>EUR</option>
          <option>GBP</option>
          <option>INR</option>
        </select>
      </div>

      {/* City */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          City
        </label>

        <input
          name="city"
          value={form.city}
          onChange={handleChange}
          placeholder="Dhaka"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-white outline-none focus:border-violet-500"
        />
      </div>

      {/* Country */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Country
        </label>

        <input
          name="country"
          value={form.country}
          onChange={handleChange}
          placeholder="Bangladesh"
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-white outline-none focus:border-violet-500"
        />
      </div>

      {/* Deadline */}
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-300">
          Application Deadline
        </label>

        <input
          type="date"
          name="deadline"
          value={form.deadline}
          onChange={handleChange}
          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3.5 text-white outline-none focus:border-violet-500"
        />
      </div>

      {/* Remote */}
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
        <div>
          <h4 className="font-medium text-white">Remote Job</h4>

          <p className="text-sm text-gray-400">
            Allow applicants from anywhere.
          </p>
        </div>

        <Switch
          isSelected={form.remote}
          onValueChange={(value) =>
            setForm((prev) => ({
              ...prev,
              remote: value,
            }))
          }
          color="secondary"
        />
      </div>
    </div>
  );
}
