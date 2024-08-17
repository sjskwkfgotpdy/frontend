import type { NextPage } from "next";
import styles from "./cause-options.module.css";

export type CauseOptionsType = {
  className?: string;
};

const CauseOptions: NextPage<CauseOptionsType> = ({ className = "" }) => {
  return (
    <div className={[styles.causeOptions, className].join(" ")}>
      <div className={styles.disputeCause}>
        <div className={styles.selector} />
      </div>
      <div className={styles.imageCause}>
        <div className={styles.imageCauseChild} />
        <div className={styles.imageName}>
          <div className={styles.div}>말다툼</div>
        </div>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/image@2x.png"
        />
      </div>
      <div className={styles.disputeCause1}>
        <div className={styles.selector} />
      </div>
    </div>
  );
};

export default CauseOptions;
