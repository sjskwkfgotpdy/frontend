import type { NextPage } from "next";
import styles from "./chat.module.css";

const Chat: NextPage = () => {
  return (

      <footer className={styles.rectangleParent} onClick={() => location.href = '/calendar'}>
        <div className={styles.rectangleDiv} />
        <b className={styles.b}>대화 끝내기</b>
      </footer>
  );
};

export default Chat;
