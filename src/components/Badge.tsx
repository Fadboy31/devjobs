import styles from "./Badge.module.css";

type BadgeVariant = "remote" | "fulltime" | "contract";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}

export default function Badge({ label, variant = "remote" }: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]}`}>
      {label}
    </span>
  );
}