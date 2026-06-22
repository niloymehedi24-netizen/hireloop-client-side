"use client";

import { useState } from "react";
import { Button } from "@heroui/react";

export default function CompanyForm() {
  const [form, setForm] = useState({
    name: "",
    industry: "",
    location: "",
    employeeCount: "",
    website: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8"
    >
      <h2 className="text-3xl font-bold text-white">Register Company</h2>

      <div className="grid gap-6 md:grid-cols-2">
        <input
          name="name"
          placeholder="Company Name"
          onChange={handleChange}
          className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none"
        />

        <input
          name="industry"
          placeholder="Industry"
          onChange={handleChange}
          className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none"
        />

        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
          className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none"
        />

        <select
          name="employeeCount"
          onChange={handleChange}
          className="rounded-2xl border border-white/10 bg-[#1F1D29] p-4 text-white outline-none"
        >
          <option value="">Employees</option>
          <option>1-10</option>
          <option>11-50</option>
          <option>51-100</option>
          <option>101-500</option>
          <option>500+</option>
        </select>

        <input
          name="website"
          placeholder="Website"
          className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none md:col-span-2"
          onChange={handleChange}
        />

        <textarea
          rows={6}
          name="description"
          placeholder="Company Description..."
          onChange={handleChange}
          className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white outline-none md:col-span-2"
        />
      </div>

      <Button
        type="submit"
        className="bg-linear-to-r from-violet-600 to-purple-500 text-white"
      >
        Save Company
      </Button>
    </form>
  );
}
