import React from "react";
import { CONTENT } from "../../Content";
import styles from "./index.module.css";

interface BarProps {
  initialCount: number;
  remainStock: number;
}

const Bar: React.FC<BarProps> = ({
  initialCount,
  remainStock,
}): JSX.Element => {
  const percentage = (remainStock / initialCount) * 100;

  // Determine the stock level text and color based on percentage
  let stockLevelText = CONTENT.stock_levels[0];
  let backgroundColor = styles.goodStockBackground;
  let textColor = styles.goodStockText;

  if (percentage <= 20) {
    stockLevelText = CONTENT.stock_levels[2];
    backgroundColor = styles.lowStockBackground;
    textColor = styles.lowStockText;
  } else if (percentage <= 50) {
    stockLevelText = CONTENT.stock_levels[1];
    backgroundColor = styles.mediumStockBackground;
    textColor = styles.mediumStockText;
  }

  return (
    <div className={styles.bar}>
      <div
        className={`${styles.indicator} ${backgroundColor}`}
        style={{ width: `${percentage}%` }}
      ></div>
      <div className={`${styles.text} ${textColor}`}>{stockLevelText}</div>
    </div>
  );
};

Bar.displayName = "Bar";
export default Bar;
