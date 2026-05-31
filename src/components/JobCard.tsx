import { useState } from "react";
import Badge from "./Badge";
import styles from "./JobCard.module.css";
import type { JobCardProps } from "../types";

export default function JobCard({
  id,
  title,
  company,
  location,
  salary,
  isRemote,
  postedAt = "Recently",
  onSave,
}: JobCardProps) {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  function handleSave() {
    setIsSaved(!isSaved);
    onSave?.(id);
  }

  return (
    <div className={styles.card}>
      {isRemote && (
        <Badge label="Remote" variant="remote" />
      )}

      {company.logo && (
        <img
          src={company.logo}
          alt={company.name}
          className={styles.logo}
        />
      )}

      <h2 className={styles.title}>
        {title}
      </h2>

      <p className={styles.company}>
        {company.name}
      </p>

      <p className={styles.location}>
        {location}
      </p>

      <p className={styles.salary}>
        {salary ?? "Salary not listed"}
      </p>

      <p className={styles.postedAt}>
        Posted {postedAt}
      </p>

      <button onClick={handleSave}>
        {isSaved ? "❤️ Saved" : "🤍 Save"}
      </button>
    </div>
  );
}