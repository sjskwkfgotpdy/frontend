import type { NextPage } from "next";
import styles from "./atoms-week-dey.module.css";

export type AtomsWeekDeyType = {
  className?: string;
  text?: string;
};

const AtomsWeekDey: NextPage<AtomsWeekDeyType> = ({ className = "", text }) => {
  return (
    <div className={[styles.atomsWeekDey, className].join(" ")}>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default AtomsWeekDey;
