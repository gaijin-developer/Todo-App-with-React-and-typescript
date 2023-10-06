import classes from "./TimeDateDisplay.module.css";
import { useState } from "react";

const TimeDateDisplay: React.FC = () => {
  const [todaysDate, setTodaysDate] = useState<Date>(new Date());

  setInterval(() => {
    setTodaysDate(new Date());
  }, 1000);

  return (
    <div className={classes.timeDateDisplayContainer}>
      <div>
        <p className={classes.timeContent}>
          {`${
            todaysDate.getHours() < 10
              ? "0" + todaysDate.getHours()
              : todaysDate.getHours()
          } : ${todaysDate.getMinutes()} : ${
            todaysDate.getSeconds() < 10
              ? "0" + todaysDate.getSeconds()
              : todaysDate.getSeconds()
          } ${todaysDate.getHours() > 12 ? "pm" : "am"}`}
        </p>
      </div>

      <div>
        <p className={classes.dateContent}>
          {todaysDate.toDateString().toLocaleUpperCase()}
        </p>
      </div>
    </div>
  );
};
export default TimeDateDisplay;
