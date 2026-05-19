import JobCard from "./JobCard";

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  isRemote: boolean;
}

interface JobListProps {
  jobs: Job[];
}

export default function JobList({ jobs }: JobListProps) {
  return (
  <main className="job-list">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </main>
  );
}