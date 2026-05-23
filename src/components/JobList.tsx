import JobCard, { type JobProps } from "./JobCard";

interface JobListProps {
  jobs: JobProps[];
}

export default function JobList({ jobs }: JobListProps) {
  return (
    <main className="job-list">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          company={job.company}
          location={job.location}
          salary={job.salary}
          isRemote={job.isRemote}
          postedAt={job.postedAt}
        />
      ))}
    </main>
  );
}