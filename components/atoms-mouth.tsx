import type { NextPage } from "next";
import styles from "./atoms-mouth.module.css";

export type AtomsMouthType = {
  className?: string;
};

const AtomsMouth: NextPage<AtomsMouthType> = ({ className = "" }) => {
  return (
    <div className={[styles.atomsMouth, className].join(" ")}>
      <div className={styles.text}>8월</div>
    </div>
  );
};

export default AtomsMouth;
