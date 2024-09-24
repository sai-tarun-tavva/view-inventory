import React from "react";
import { CONTENT } from "../../Content";
import styles from "./index.module.css";

// Define the prop types for the Status component
interface StatusProps {
  initialCount: number; // Initial count of items
  ordersReceived: number; // Number of orders received
  remainStock: number; // Remaining stock of items
}

/**
 * Status component that displays the current status of an item,
 * including the initial count, orders received, and remaining stock.
 *
 * @param {StatusProps} props - The props for the Status component.
 * @param props.initialCount - The initial count of items.
 * @param props.ordersReceived - The number of orders received.
 * @param props.remainStock - The remaining stock of items.
 * @returns {JSX.Element} - The rendered Status component.
 */
const Status: React.FC<StatusProps> = ({
  initialCount,
  ordersReceived,
  remainStock,
}): JSX.Element => {
  return (
    <div className={styles.status}>
      <div className={styles["status-column"]}>
        <span>{initialCount}</span>
        <span>{CONTENT.initialCount}</span>
      </div>
      <div className={styles["status-column"]}>
        <span>{ordersReceived}</span>
        <span>{CONTENT.orders}</span>
      </div>
      <div className={styles["status-column"]}>
        <span>{remainStock}</span>
        <span>{CONTENT.leftStock}</span>
      </div>
    </div>
  );
};

Status.displayName = "Status";
export default Status;
