import type { NextPage } from "next";
import { useState } from "react";
import { useSwipeable } from "react-swipeable";
import { useRouter } from "next/router";
import styles from "./ac.module.css";

const Ac: NextPage = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const onRectangleClick = (index: number) => {
    setActiveSection(index);
    router.push("/ac2");
  };

  const swipeHandlers1 = useSwipeable({
    onSwipedLeft: () => setActiveSection(1),
    onSwipedRight: () => setActiveSection(null),
    trackMouse: true, 
  });

  const swipeHandlers2 = useSwipeable({
    onSwipedLeft: () => setActiveSection(null),
    onSwipedRight: () => setActiveSection(2),
    trackMouse: true, 
  });

  return (
    <div className={styles.ac1}>
      <div className={styles.ac1Child} />
      <section className={styles.ac1Inner}>
        <div className={styles.parent}>
          <div className={styles.div}>어떤 방법으로 해소할까요?</div>
          <div className={styles.frameWrapper}>
            <div
              className={`${styles.rectangleParent} ${
                activeSection === 1 ? styles.active : ""
              }`}
              {...swipeHandlers1}
              onClick={() => onRectangleClick(1)}
            >
              <div className={styles.frameChild} />
              <img
                className={styles.image3Icon}
                loading="lazy"
                alt=""
                src="/image-3@2x.png"
              />
              <div className={styles.div1}>말로 이기기</div>
            </div>
          </div>
        </div>
      </section>
      <div
        className={`${styles.ac1Item} ${
          activeSection === 1 ? styles.active : ""
        }`}
        {...swipeHandlers1}
      >
        <div className={styles.frameChild} />
        <img
          className={styles.image3Icon}
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
        <div className={styles.div1}>말로 이기기</div>
      </div>
      <div
        className={`${styles.rectangleDiv} ${
          activeSection === 2 ? styles.active : ""
        }`}
        {...swipeHandlers2}
      >
        <div className={styles.frameChild} />
        <img
          className={styles.image3Icon}
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
        <div className={styles.div1}>말로 이기기</div>
      </div>
      <div className={styles.ac1Child1} />
    </div>
  );
};

export default Ac;