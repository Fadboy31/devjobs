import "./App.css";
import { Header, JobList } from "./components";

const JOBS = [
  {
    id: 1,
    title: "Senior Frontend Dev",
    company: "TechCorp Africa",
    location: "Nairobi, Kenya",
    salary: "KES 150k–200k",
    isRemote: true,
    type: "Remote" as const,
    postedAt: "2 days ago",
  },

  {
    id: 2,
    title: "Backend Engineer",
    company: "DataHub TZ",
    location: "Dar es Salaam, Tanzania",
    salary: "TZS 2M–3M",
    isRemote: false,
    type: "Full Time" as const,
    postedAt: "1 week ago",
  },

  {
    id: 3,
    title: "DevOps Specialist",
    company: "CloudBase KE",
    location: "Mombasa, Kenya",
    salary: "KES 180k–250k",
    isRemote: false,
    type: "Contract" as const,
    postedAt: "4 days ago",
  },
];

export default function App() {
  return (
    <>
      <Header />
      <JobList jobs={JOBS} />
    </>
  );
}