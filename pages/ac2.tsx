import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import ResponseOptions from "../components/response-options";
import styles from "./ac2.module.css";

const Ac2: NextPage = () => {
  const router = useRouter();

  const onAc3ContainerClick = useCallback(() => {
    router.push("/recomand");
  }, [router]);

  return (
    <div className={styles.ac3} onClick={onAc3ContainerClick}>
      <main className={`${styles.main}`}>
        <section className={styles.frameParent}>
          <div className={`${styles.wrapper} w-100`}>
            <div className={styles.div}>스트레스의 강도는 어떤가요?</div>
          </div>
          <ResponseOptions />
        </section>
      </main>

    </div>
  );
};

export default Ac2;
