import type { NextPage } from "next";
import styles from "./response-options.module.css";

export type ResponseOptionsType = {
  className?: string;
};

const ResponseOptions: NextPage<ResponseOptionsType> = ({ className = "" }) => {
  return (
    <div className={[styles.responseOptions, className].join(" ")}>
      <div className={styles.option}>
        <div className={styles.moderateStressOption}>
          <img className={styles.icon} loading="lazy" alt="" src="/-1.svg" />
          <div className={styles.moderateStressLabel}>
            <div className={styles.div}>적당해요</div>
          </div>
        </div>
      </div>
      <div className={styles.option1}>
        <div className={styles.option}>
          <div className={styles.moderateStressOption}>
            <img
              className={styles.icon}
              loading="lazy"
              alt=""
              src="/-1-1.svg"
            />
            <div className={styles.wrapper}>
              <div className={styles.div}>괜찮아요</div>
            </div>
          </div>
        </div>
        <div className={styles.option2}>
          <div className={styles.badStressOption}>
            <div className={styles.badStressIcon}>
              <div className={styles.badStressIconChild} />
              <img
                className={styles.icon2}
                loading="lazy"
                alt=""
                src="/-1-2.svg"
              />
              <div className={styles.container}>
                <div className={styles.div2}>좋지 않아요</div>
              </div>
            </div>
            <div className={styles.option3}>
              <div className={styles.dangerousStressOption}>
                <img
                  className={styles.icon}
                  loading="lazy"
                  alt=""
                  src="/-1-3.svg"
                />
                <div className={styles.dangerousStressLabel}>
                  <div className={styles.div}>위험해요</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.option4}>
            <div className={styles.moderateStressOption}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/-1-4.svg"
              />
              <div className={styles.wrapper}>
                <div className={styles.div4}>매우 위험해요</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponseOptions;
