import JobsTable from "@/components/recruiter/JobsTable";
import { getCompanyJobs } from "@/lib/api/jobs";

export default async function RecruiterJobs() {
  const jobs = await getCompanyJobs();

  return (
    <div className="space-y-8">
      <JobsTable jobs={jobs} />
    </div>
  );
}
