import classes from "src/components/HeadLine/HeadLine.module.css";

export function Headline(props) {
  return (
    <div>
      <p className={classes.title}>
        {props.page} page {props.children}
      </p>
    </div>
  );
}
