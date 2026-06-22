import CompanyCard from "@/components/recruiter/company/CompanyCard";
import EmptyCompany from "@/components/recruiter/company/EmptyCompany";

const company = {
  _id: "123",
  name: "HireLoop",
  logo: "https://placehold.co/100x100",
  industry: "Software",
  location: "Dhaka",
  employeeCount: "11-50",
  description: "Test",
  status: "approved",
};

export default function CompanyPage() {
  const hasCompany = true;

  return (
    <main className="mx-auto max-w-6xl p-8">
      {hasCompany ? <CompanyCard company={company} /> : <EmptyCompany />}
    </main>
  );
}
