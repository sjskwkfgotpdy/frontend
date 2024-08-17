import type { NextPage } from "next";
import AtomsMouth from "./atoms-mouth";
import AtomsWeekDey from "./atoms-week-dey";
import AtomsDeyNumber from "./atoms-dey-number";
import styles from "./month202408-august.module.css";

export type Month202408AugustType = {
  className?: string;
};

const Month202408August: NextPage<Month202408AugustType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.month202408August, className].join(" ")}>
      <div className={styles.header}>
        <AtomsMouth />
      </div>
      <div className={styles.grid}>
        <nav className={styles.line}>
          <AtomsWeekDey text="월" />
          <AtomsWeekDey text="화" />
          <AtomsWeekDey text="수" />
          <AtomsWeekDey text="목" />
          <AtomsWeekDey text="금" />
          <AtomsWeekDey text="토" />
          <AtomsWeekDey text="일" />
        </nav>
        <div className={styles.line1}>
          <AtomsDeyNumber
            propWidth="unset"
            propPadding="0px 0px"
            propBackgroundColor="unset"
            text="29"
            propWidth1="unset"
            propColor="#616161"
            propDisplay="inline-block"
            propMinWidth="25px"
          />
          <AtomsDeyNumber
            propWidth="unset"
            propPadding="0px 0px"
            propBackgroundColor="unset"
            text="30"
            propWidth1="26px"
            propColor="#616161"
            propDisplay="flex"
            propMinWidth="26px"
          />
          <AtomsDeyNumber
            propWidth="24px"
            propPadding="unset"
            propBackgroundColor="unset"
            text="31"
            propWidth1="23px"
            propColor="#616161"
            propDisplay="flex"
            propMinWidth="23px"
          />
          <AtomsDeyNumber
            propWidth="unset"
            propPadding="0px 7px"
            propBackgroundColor="unset"
            text="1"
            propWidth1="10px"
            propColor="#212121"
            propDisplay="flex"
            propMinWidth="10px"
          />
          <AtomsDeyNumber
            propWidth="24px"
            propPadding="0px 5px"
            propBackgroundColor="unset"
            text="2"
            propWidth1="unset"
            propColor="#212121"
            propDisplay="inline-block"
            propMinWidth="13px"
          />
          <AtomsDeyNumber
            propWidth="24px"
            propPadding="0px 5px"
            propBackgroundColor="unset"
            text="3"
            propWidth1="unset"
            propColor="#212121"
            propDisplay="inline-block"
            propMinWidth="13px"
          />
          <AtomsDeyNumber
            propWidth="24px"
            propPadding="0px 5px"
            propBackgroundColor="unset"
            text="4"
            propWidth1="unset"
            propColor="#212121"
            propDisplay="inline-block"
            propMinWidth="13px"
          />
        </div>
        <div className={styles.line1}>
          <AtomsDeyNumber
            propWidth="24px"
            propPadding="0px 5px"
            propBackgroundColor="unset"
            text="5"
            propWidth1="13px"
            propColor="#212121"
            propDisplay="flex"
            propMinWidth="13px"
          />
          <AtomsDeyNumber
            propWidth="24px"
            propPadding="0px 5px"
            propBackgroundColor="unset"
            text="6"
            propWidth1="unset"
            propColor="#212121"
            propDisplay="inline-block"
            propMinWidth="13px"
          />
          <AtomsDeyNumber
            propWidth="unset"
            propPadding="0px 6px"
            propBackgroundColor="unset"
            text="7"
            propWidth1="unset"
            propColor="#212121"
            propDisplay="inline-block"
            propMinWidth="12px"
          />
          <AtomsDeyNumber
            propWidth="24px"
            propPadding="0px 5px"
            propBackgroundColor="unset"
            text="8"
            propWidth1="unset"
            propColor="#212121"
            propDisplay="inline-block"
            propMinWidth="13px"
          />
          <AtomsDeyNumber
            propWidth="24px"
            propPadding="0px 5px"
            propBackgroundColor="unset"
            text="9"
            propWidth1="unset"
            propColor="#212121"
            propDisplay="inline-block"
            propMinWidth="13px"
          />
          <AtomsDeyNumber
            propWidth="unset"
            propPadding="0px 1px"
            propBackgroundColor="unset"
            text="10"
            propWidth1="22px"
            propColor="#212121"
            propDisplay="flex"
            propMinWidth="22px"
          />
          <AtomsDeyNumber
            propWidth="24px"
            propPadding="0px 2px"
            propBackgroundColor="unset"
            text="11"
            propWidth1="19px"
            propColor="#212121"
            propDisplay="flex"
            propMinWidth="19px"
          />
        </div>
        <div className={styles.line1}>
          <AtomsDeyNumber
            propWidth="unset"
            propPadding="0px 1px"
            propBackgroundColor="unset"
            text="12"
            propWidth1="22px"
            propColor="#212121"
            propDisplay="flex"
            propMinWidth="22px"
          />
          <AtomsDeyNumber
            propWidth="24px"
            propPadding="unset"
            propBackgroundColor="unset"
            text="13"
            propWidth1="23px"
            propColor="#212121"
            propDisplay="flex"
            propMinWidth="23px"
          />
          <AtomsDeyNumber
            propWidth="24px"
            propPadding="unset"
            propBackgroundColor="unset"
            text="14"
            propWidth1="23px"
            propColor="#212121"
            propDisplay="flex"
            propMinWidth="23px"
          />
          <AtomsDeyNumber
            propWidth="unset"
            propPadding="0px 1px"
            propBackgroundColor="unset"
            text="15"
            propWidth1="22px"
            propColor="#212121"
            propDisplay="flex"
            propMinWidth="22px"
          />
          <AtomsDeyNumber
            propWidth="unset"
            propPadding="0px 1px"
            propBackgroundColor="unset"
            text="16"
            propWidth1="22px"
            propColor="#212121"
            propDisplay="flex"
            propMinWidth="22px"
          />
          <AtomsDeyNumber
            propWidth="24px"
            propPadding="0px 1px"
            propBackgroundColor="#fff"
            text="17"
            propWidth1="21px"
            propColor="#212121"
            propDisplay="flex"
            propMinWidth="21px"
          />
          <AtomsDeyNumber
            propWidth="unset"
            propPadding="0px 1px"
            propBackgroundColor="unset"
            text="18"
            propWidth1="22px"
            propColor="#212121"
            propDisplay="flex"
            propMinWidth="22px"
          />
        </div>
        <div className={styles.line1}>
          <AtomsDeyNumber
            propWidth="unset"
            propPadding="0px 1px"
            propBackgroundColor="unset"
            text="19"
            propWidth1="22px"
            propColor="#212121"
            propDisplay="flex"
            propMinWidth="22px"
          />
          <AtomsDeyNumber
            propWidth="unset"
            propPadding="0px 0px"
            propBackgroundColor="unset"
            text="20"
            propWidth1="unset"
            propColor="#212121"
            propDisplay="inline-block"
            propMinWidth="25px"
          />
          <AtomsDeyNumber
            propWidth="unset"
            propPadding="0px 1px"
            propBackgroundColor="unset"
            text="21"
            propWidth1="22px"
            propColor="#212121"
            propDisplay="flex"
            propMinWidth="22px"
          />
          <AtomsDeyNumber
            propWidth="unset"
            propPadding="0px 0px"
            propBackgroundColor="unset"
            text="22"
            propWidth1="unset"
            propColor="#212121"
            propDisplay="inline-block"
            propMinWidth="25px"
          />
          <AtomsDeyNumber
            propWidth="unset"
            propPadding="0px 0px"
            propBackgroundColor="unset"
            text="23"
            propWidth1="unset"
            propColor="#212121"
            propDisplay="inline-block"
            propMinWidth="25px"
          />
          <AtomsDeyNumber
            propWidth="unset"
            propPadding="0px 0px"
            propBackgroundColor="unset"
            text="24"
            propWidth1="unset"
            propColor="#212121"
            propDisplay="inline-block"
            propMinWidth="25px"
          />
          <AtomsDeyNumber
            propWidth="unset"
            propPadding="0px 0px"
            propBackgroundColor="unset"
            text="25"
            propWidth1="unset"
            propColor="#212121"
            propDisplay="inline-block"
            propMinWidth="25px"
          />
        </div>
        <div className={styles.line5}>
          <AtomsDeyNumber
            propWidth="unset"
            propPadding="0px 0px"
            propBackgroundColor="unset"
            text="26"
            propWidth1="unset"
            propColor="#212121"
            propDisplay="inline-block"
            propMinWidth="25px"
          />
          <div className={styles.atomsDeyNumber}>
            <div className={styles.text}>27</div>
          </div>
          <AtomsDeyNumber
            propWidth="unset"
            propPadding="0px 0px"
            propBackgroundColor="unset"
            text="28"
            propWidth1="unset"
            propColor="#212121"
            propDisplay="inline-block"
            propMinWidth="25px"
          />
          <AtomsDeyNumber
            propWidth="unset"
            propPadding="0px 0px"
            propBackgroundColor="unset"
            text="29"
            propWidth1="unset"
            propColor="#212121"
            propDisplay="inline-block"
            propMinWidth="25px"
          />
          <AtomsDeyNumber
            propWidth="unset"
            propPadding="0px 0px"
            propBackgroundColor="unset"
            text="30"
            propWidth1="26px"
            propColor="#212121"
            propDisplay="flex"
            propMinWidth="26px"
          />
          <AtomsDeyNumber text="31" />
        </div>
      </div>
    </div>
  );
};

export default Month202408August;
