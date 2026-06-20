"use client";

import StatsCard from "@/components/dashboard/StatsCard";
import { useSession } from "@/lib/auth-client";
import React from "react";

const RecruiterDashboardPage = () => {
  const { data: session, isPending } = useSession();

  if (isPending) {
    return <div>Loading...</div>;
  }

  const user = session?.user;
  console.log(session);

  return (
    <div>
      <h2 className="text-3xl p-5">Welcome back, {user?.name}!</h2>
      <section className="grid grid-cols-1 gap-4 p-2 sm:grid-cols-2 xl:grid-cols-4">
        <StatsCard title="Total Job Posts" value="18" icon="💼" change="+12%" />

        <StatsCard
          title="Total Applicants"
          value="246"
          icon="📄"
          change="+28%"
        />

        <StatsCard title="Active Jobs" value="34" icon="🎯" change="+7%" />

        <StatsCard
          title="Jobs Closed"
          value="12"
          icon="🎉"
          change="-3%"
          positive={false}
        />
      </section>
    </div>
  );
};

export default RecruiterDashboardPage;
