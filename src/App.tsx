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
  },

  {
    id: 2,
    title: "Backend Engineer",
    company: "DataHub TZ",
    location: "Dar es Salaam, Tanzania",
    salary: "TZS 2M–3M",
    isRemote: false,
  },

  {
    id: 3,
    title: "DevOps Specialist",
    company: "CloudBase KE",
    location: "Mombasa, Kenya",
    salary: "KES 180k–250k",
    isRemote: true,
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