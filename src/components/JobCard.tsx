import Badge from "./Badge";
import styles from "./JobCard.module.css";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  isRemote: boolean;
}

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <div className={styles.card}>
      
      {/* Badge goes here */}
      {job.isRemote && (
        <Badge label="Remote" variant="remote" />
      )}

      <h2 className={styles.title}>{job.title}</h2>

      <p className={styles.company}>{job.company}</p>

      <p className={styles.location}>{job.location}</p>

      <p className={styles.salary}>{job.salary}</p>

    </div>
  );
}