import type { NextPage } from "next";
import { useCallback } from "react";
import Month202408August from "../components/month202408-august";
import { useRouter } from "next/router";
import styles from "./calendar.module.css";

const Calendar: NextPage = () => {
  const router = useRouter();

  const onGroupClick = useCallback(() => {
    router.push("/ac1");
  }, [router]);

  return (
    <div className={styles.calendar}>
      <section className={styles.month202408AugustParent}>
        <Month202408August />
        <img className={styles.icon} loading="lazy" alt="" src="/-11.svg" />
        <img className={styles.icon1} loading="lazy" alt="" src="/-1-11.svg" />
        <img className={styles.icon2} loading="lazy" alt="" src="/-1-11.svg" />
        <img className={styles.icon3} loading="lazy" alt="" src="/-1-31.svg" />
        <img className={styles.icon4} loading="lazy" alt="" src="/-1-41.svg" />
        <img className={styles.icon5} loading="lazy" alt="" src="/-1-41.svg" />
      </section>
      <img className={styles.icon6} loading="lazy" alt="" src="/-1-11.svg" />
      <img className={styles.icon7} loading="lazy" alt="" src="/-1-31.svg" />
      <img className={styles.icon8} loading="lazy" alt="" src="/-1-41.svg" />
      <div className={styles.calendarInner}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src="/group-4.svg"
          onClick={onGroupClick}
        />
      </div>
    </div>
  );
};

export default Calendar;
