import JobCard from "./JobCard";
import type { Job } from "../types";

interface JobListProps {
  jobs: Job[];
}

export default function JobList({ jobs }: JobListProps) {
  if (jobs.length === 0) {
    return (
      <div className="empty-state">
        <p>No jobs found. Try adjusting your search.</p>
      </div>
    );
  }

  return (
    <main className="job-list">
      {jobs.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </main>
  );
}