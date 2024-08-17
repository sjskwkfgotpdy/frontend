import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./atoms-dey-number.module.css";

export type AtomsDeyNumberType = {
  className?: string;
  text?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propWidth1?: CSSProperties["width"];
  propColor?: CSSProperties["color"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
};

const AtomsDeyNumber: NextPage<AtomsDeyNumberType> = ({
  className = "",
  propWidth,
  propPadding,
  propBackgroundColor,
  text,
  propWidth1,
  propColor,
  propDisplay,
  propMinWidth,
}) => {
  const atomsDeyNumberStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      backgroundColor: propBackgroundColor,
    };
  }, [propWidth, propPadding, propBackgroundColor]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
      color: propColor,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propWidth1, propColor, propDisplay, propMinWidth]);

  return (
    <div
      className={[styles.atomsDeyNumber, className].join(" ")}
      style={atomsDeyNumberStyle}
    >
      <div className={styles.text} style={textStyle}>
        {text}
      </div>
    </div>
  );
};

export default AtomsDeyNumber;
