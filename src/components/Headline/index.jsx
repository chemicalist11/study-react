import classes from "src/components/Headline/Headline.module.css";

export const Headline = (props) => {
  return (
    <div>
      <p className={classes.title}>
        {props.page} page {props.children}
      </p>
      <button onClick={props.handleReduce}>減らす</button>
    </div>
  );
};
