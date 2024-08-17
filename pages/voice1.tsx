import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./voice1.module.css";

const Voice1: NextPage = () => {
  const router = useRouter();

  const onVoiceContainerClick = useCallback(() => {
    router.push("/chat");
  }, [router]);

  const onGroupClick = useCallback(() => {
    router.push("/ac1");
  }, [router]);

  return (
    <div className={styles.voice} onClick={onVoiceContainerClick}>
      <div className={styles.parent}>
        <div className={styles.div}>상황을 말해주세요.</div>
        <div className={styles.scenarioLayout}>
          <div className={styles.instanceParent}>
            <img
              className={styles.frameChild}
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
        </div>
      </div>
      <main className={styles.backgroundShapes}>
        <div className={styles.shape} />
        <section className={styles.shape1} />
      </main>
      <div className={styles.shape2} />
    </div>
  );
};

export default Voice1;
