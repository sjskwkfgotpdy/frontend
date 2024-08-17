import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const Calendar: NextPage = () => {
  const router = useRouter();

  const onGroupClick = useCallback(() => {
    router.push("/ac1");
  }, [router]);

  return (
    <div className={styles.calendar}>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
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
