import classes from "./TimeDateDisplay.module.css";

const TimeDateDisplay = () => {
  return (
    <div className={classes.timeDateDisplayContainer}>
      <div>
        <p className={classes.timeContent}>16:00pm</p>
      </div>

      <div>
        <p className={classes.dateContent}>Thursday,September 28,2023</p>
      </div>
    </div>
  );
};
export default TimeDateDisplay;
