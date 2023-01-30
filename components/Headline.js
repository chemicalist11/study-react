import styles from "@/styles/Home.module.css";

export function Headline(props) {
  return (
    <div>
      <p className={styles.title}>
        {props.page} page&nbsp;
        <code className={styles.code}>pages/{props.page}.js</code>
      </p>
    </div>
  );
}
