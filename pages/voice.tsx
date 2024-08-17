import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./voice.module.css";

const Voice: NextPage = () => {
  const router = useRouter();

  const onGroupClick = useCallback(() => {
    router.push("/ac1");
  }, [router]);

  return (
    <div className={styles.voice2}>
      <div className={styles.voice2Child} />
      <div className={styles.div}>데시벨이 좋아요!</div>
      <div className={styles.voice2Item} />
      <section className={styles.decibelIcon}>
        <div className={styles.circle} />
        <div className={styles.microphoneIcon}>
          <img
            className={styles.microphoneIconChild}
            alt=""
            src="/group-4.svg"
            onClick={onGroupClick}
          />
          <img
            className={styles.mingcutemicFillIcon}
            loading="lazy"
            alt=""
            src="/mingcutemicfill.svg"
          />
        </div>
      </section>
    </div>
  );
};

export default Voice;
