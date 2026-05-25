import "./App.css";
import { Header, JobCard } from "./components";
import type { JobProps } from "./components/JobCard";

const JOBS: JobProps[] = [
  {
    id: 1,
    title: "Frontend Engineer",
    company: "Stripe",
    location: "Remote — US",
    isRemote: true,
  },

  {
    id: 2,
    title: "React Developer",
    company: "Vercel",
    location: "Remote — Global",
    isRemote: true, },

  {
    id: 3,
    title: "UI Engineer",
    company: "Airbnb",
    location: "San Francisco, CA",
    isRemote: false,
    },

  {
    id: 4,
    title: "TypeScript Developer",
    company: "Microsoft",
    location: "Remote — US",
    isRemote: true,
     },

  {
    id: 5,
    title: "Web Developer",
    company: "Shopify",
    location: "Ottawa, Canada",
    isRemote: false,
    },
];

export default function App() {
  return (
    <>
      <Header />

      <main className="job-list">
        {JOBS.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </main>
    </>
  );
}