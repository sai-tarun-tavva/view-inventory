import React from "react";
import { CONTENT } from "../../Content";
import styles from "./index.module.css";

// Define the prop types for the Bar component
interface BarProps {
  initialCount: number; // Initial count of items
  remainStock: number; // Remaining stock of items
}

/**
 * Bar component that visually represents the stock level of an item
 * using a progress bar and accompanying text to indicate stock status.
 *
 * @param {BarProps} props - The props for the Bar component.
 * @param props.initialCount - The initial count of items.
 * @param props.remainStock - The remaining stock of items.
 * @returns {JSX.Element} - The rendered Bar component.
 */
const Bar: React.FC<BarProps> = ({
  initialCount,
  remainStock,
}): JSX.Element => {
  const percentage = (remainStock / initialCount) * 100; // Calculate the percentage of remaining stock

  // Determine the stock level text and color based on percentage
  let stockLevelText = CONTENT.stock_levels[0];
  let backgroundColor = styles.goodStockBackground;
  let textColor = styles.goodStockText;

  // Set stock level text and styles based on percentage thresholds
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
