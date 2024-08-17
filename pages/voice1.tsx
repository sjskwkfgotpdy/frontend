import type { NextPage } from "next";
import {useCallback, useEffect, useState} from "react";
import { useRouter } from "next/router";
import styles from "./voice1.module.css";

const Voice1: NextPage = () => {
  const router = useRouter();
  const [isStart, setIsStart] = useState(false);
  const [a, setA] = useState(0);
  const onVoiceContainerClick = useCallback(() => {
    router.push("/chat");
  }, [router]);

  const onGroupClick = useCallback(() => {
    router.push("/ac1");
  }, [router]);


  useEffect(() => {
    setA(a + 1)
    console.log(a)
    if(a >= 2) {
      router.push("chat");
    }
  },[isStart])

  return (
    <div className={styles.voice}>
      <div className={styles.parent}>
        <div className={styles.div}>상황을 말해주세요.</div>
        <div className={styles.scenarioLayout}>
          <div className={styles.instanceParent} onClick={() => setIsStart(prev => !prev)}>
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
      <main className={styles.backgroundShapes} >
        {
          isStart ? <img src={'/move.gif'} className={styles.move}/> :
              <img src={'/image.png'} className={styles.stop}/>
        }
      </main>
    </div>
  );
};

export default Voice1;
