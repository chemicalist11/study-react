import styles from "@/styles/Home.module.css";

export function Headline(props) {
  return (
    <div>
      <p className={styles.title}>
        {props.page} page {props.children}
      </p>
    </div>
  );
}
