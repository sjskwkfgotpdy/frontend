import styles from "./index1.module.css";

const Ac = () => {
  return (
      <div className={styles.ac1}>
        <div className={styles.wrapper}>
          <div className={styles.div}>어떤 방법으로 해소할까요?</div>
        </div>
        <FrameComponent />
      </div>
  );
};

export default Ac;


import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles2 from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  const router = useRouter();

  const onRectangleClick = useCallback(() => {
    router.push("/ac1");
  }, [router]);

  return (
      <section className={[styles2.frameParent, className].join(" ")}>
        <div className={styles2.rectangleWrapper}>
          <div className={styles2.frameChild} />
        </div>
        <div className={styles2.rectangleParent} onClick={onRectangleClick}>
          <div className={styles2.frameItem}  />
          <img
              className={styles2.image3Icon}
              loading="lazy"
              alt=""
              src="/image-3@2x.png"
          />
          <div className={styles2.div}>말로 이기기</div>
        </div>
        <div className={styles2.rectangleContainer}>
          <div className={styles2.frameChild} />
        </div>
      </section>
  );
};
