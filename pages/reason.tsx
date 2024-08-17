import type { NextPage } from "next";
import styles from "./reason.module.css";

const Reason: NextPage = () => {
  return (
    <div className={styles.reason}>
      <div className={styles.reasonChild} />
      <div className={styles.contentArea} />
      <section className={styles.reasonInner}>
        <div className={styles.parent}>
          <div className={styles.div}>8월 17일 토요일</div>
          <div className={styles.stressIndicator}>
            <div className={styles.stressIconArea}>
              <img
                className={styles.icon}
                loading="lazy"
                alt=""
                src="/-1-3.svg"
              />
              <div className={styles.stressDescriptionArea}>
                <div className={styles.div1}>스트레스 정도: 위험해요</div>
              </div>
            </div>
          </div>
          <div className={styles.eventArea}>
            <div className={styles.eventContent}>
              <div className={styles.eventContentChild} />
              <div className={styles.wrapper}>
                <div className={styles.div2}>말다툼</div>
              </div>
              <img
                className={styles.imageIcon}
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <div className={styles.background} />
      <div className={styles.contentArea1} />
    </div>
  );
};

export default Reason;
