import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./positive-recommendation.module.css";

export type PositiveRecommendationType = {
  className?: string;
};

const PositiveRecommendation: NextPage<PositiveRecommendationType> = ({
  className = "",
}) => {
  const router = useRouter();

  const onTextClick = useCallback(() => {
    router.push("/ac");
  }, [router]);

  return (
    <div className={[styles.positiveRecommendation, className].join(" ")}>
      <div className={styles.positiveOption}>
        <h3 className={styles.h3}>이 방법을 추천해요.</h3>
      </div>
      <div className={styles.alternativeRecommendation}>
        <div className={styles.alternativeRecommendationChild} />
        <img
          className={styles.image3Icon}
          loading="lazy"
          alt=""
          src="/image-3@2x.png"
        />
        <div className={styles.div}>말로 이기기</div>
      </div>
      <div className={styles.alternativeOption}>
        <div className={styles.div1} onClick={onTextClick}>
          다른 해소법을 사용할래요
        </div>
      </div>
    </div>
  );
};

export default PositiveRecommendation;
