"use client";

import { Briefcase, ChartColumn, Magnifier, Star } from "@gravity-ui/icons";
import Image from "next/image";
import { motion } from "motion/react";

const stats = [
  {
    icon: Briefcase,
    value: "50K",
    label: "Active Jobs",
  },
  {
    icon: ChartColumn,
    value: "12K",
    label: "Companies",
  },
  {
    icon: Magnifier,
    value: "2M",
    label: "Job Seekers",
  },
  {
    icon: Star,
    value: "97%",
    label: "Satisfaction Rate",
  },
];

export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-[#0D0A12] py-32">
      {/* Globe */}
      <div className="absolute inset-x-0 top-0 flex justify-center">
        <Image
          width={900}
          height={600}
          src="/images/globe.png"
          alt="Globe"
          className="w-full max-w-9xl opacity-90"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-4xl pt-48 text-center">
          <h2 className="text-3xl font-medium leading-tight text-white md:text-3xl">
            Assisting over 15,000 job seekers
            <br />
            find their dream positions.
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.label}
                className="rounded-[32px] border border-white/10 bg-white/3 p-8 backdrop-blur-xl"
              >
                <Icon className="mb-16 h-8 w-8 text-white" />

                <h3 className="text-3xl font-bold text-white">{item.value}</h3>

                <p className="mt-8 text-xl text-gray-300">{item.label}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
