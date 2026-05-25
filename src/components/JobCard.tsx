import Badge from "./Badge";
import styles from "./JobCard.module.css";
import type { Job } from "../types";

function JobCard({
  title,
  company,
  location,
  salary,
  isRemote,
  postedAt = "Recently",
}: Job) {
  return (
    <div className={styles.card}>
      {isRemote && (
        <Badge label="Remote" variant="remote" />
      )}

      <h2 className={styles.title}>{title}</h2>
{company.logo && (
  <img
    src={company.logo}
    alt={company.name}
    className={styles.logo}
  />
)}
      <p className={styles.company}>{company.name}</p>

      <p className={styles.location}>{location}</p>

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