import Badge from "./Badge";
import styles from "./JobCard.module.css";

export interface JobProps {
  id: number;
  title: string;
  company: string;
  location: string;
  salary?: string;
  isRemote: boolean;
  postedAt: string;
}

function JobCard({
  title,
  company,
  location,
  salary,
  isRemote,
  postedAt,
}: JobProps) {
  return (
    <div className={styles.card}>
      {isRemote && (
        <Badge label="Remote" variant="remote" />
      )}

      <h2 className={styles.title}>{title}</h2>

      <p className={styles.company}>{company}</p>

      <p className={styles.salary}>
  {salary ?? "Salary not listed"}
</p>

      <p className={styles.postedAt}>
        Posted {postedAt}
      </p>
    </div>
  );
}

export default JobCard;