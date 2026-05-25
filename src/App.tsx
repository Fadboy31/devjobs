import "./App.css";
import { Header, JobCard } from "./components";
import { JOBS } from "./data/jobs";

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