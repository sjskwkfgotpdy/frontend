import type { NextPage } from "next";
import styles from "./chat.module.css";

const Chat: NextPage = () => {
  return (
    <div className={styles.chat}>
      <div className={styles.chatChild} />
      <div className={styles.chatItem} />
      <section className={styles.chatInner}>
        <textarea className={styles.frameChild} rows={6} cols={13} />
      </section>
      <div className={styles.frameDiv}>
        <img
          className={styles.frameItem}
          loading="lazy"
          alt=""
          src="/rectangle-11.svg"
        />
      </div>
      <section className={styles.chatInner}>
        <textarea className={styles.frameInner} rows={4} cols={13} />
      </section>
      <img
        className={styles.rectangleIcon}
        loading="lazy"
        alt=""
        src="/rectangle-9.svg"
      />
      <section className={styles.frameParent}>
        <div className={styles.rectangleWrapper}>
          <textarea className={styles.rectangleTextarea} rows={9} cols={13} />
        </div>
        <img
          className={styles.frameChild1}
          loading="lazy"
          alt=""
          src="/rectangle-9.svg"
        />
      </section>
      <section className={styles.chatInner1}>
        <textarea className={styles.frameChild2} rows={5} cols={13} />
      </section>
      <img
        className={styles.chatChild1}
        loading="lazy"
        alt=""
        src="/rectangle-15.svg"
      />
      <footer className={styles.rectangleParent}>
        <div className={styles.rectangleDiv} />
        <b className={styles.b}>대화 끝내기</b>
      </footer>
    </div>
  );
};

export default Chat;
