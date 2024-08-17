import type { NextPage } from "next";
import { useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./index.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  // Automatically redirect to the Calendar page after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/calendar");
    }, 2000);

    // Clear the timer if the component unmounts before the timeout
    return () => clearTimeout(timer);
  }, [router]);

  // Navigate to the Calendar page on container click
  const onHomeContainerClick = useCallback(() => {
    router.push("/calendar");
  }, [router]);

  return (
    <div className={styles.home} onClick={onHomeContainerClick}>
      <div className={styles.div}>
        <p className={styles.p}>너나</p>
        <p className={styles.p}>잘하세요</p>
      </div>
    </div>
  );
};

export default Home;