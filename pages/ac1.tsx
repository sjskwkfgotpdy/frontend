import type { NextPage } from "next";
import { useCallback } from "react";
import CauseOptions from "../components/cause-options";
import { useRouter } from "next/router";
import styles from "./ac1.module.css";

const Ac1: NextPage = () => {
  const router = useRouter();

  const onTextClick = useCallback(() => {
    router.push("/ac");
  }, [router]);

  return (
    <div className={styles.ac2}>
      <div className={styles.wrapper}>
        <div className={styles.div}>스트레스 원인이 무엇인가요?</div>
      </div>
      <section className={styles.causeOptionsParent}>
        <CauseOptions />
        <div className={styles.skipOptionWrapper}>
          <div className={styles.skipOption}>
            <div className={styles.skipButton}>
              <div className={styles.div1} onClick={onTextClick}>
                건너뛰기
              </div>
            </div>
            <div className={styles.placeholder}>{` `}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ac1;
