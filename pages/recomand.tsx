import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import PositiveRecommendation from "../components/positive-recommendation";
import styles from "./recomand.module.css";

const Recomand: NextPage = () => {
  const router = useRouter();

  const onRecomandContainerClick = useCallback(() => {
    router.push("/voice1");
  }, [router]);

  return (
    <div className={styles.recomand} onClick={onRecomandContainerClick}>
      <div className={styles.recomandChild} />
      <div className={styles.positiveRecommendationWrapper}>
        <PositiveRecommendation />
      </div>
      <div className={styles.recomandItem} />
    </div>
  );
};

export default Recomand;
