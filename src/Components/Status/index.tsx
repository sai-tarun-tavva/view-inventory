import React from "react";
import { CONTENT } from "../../Content";
import styles from "./index.module.css";

interface StatusProps {
  initialCount: number;
  ordersReceived: number;
  remainStock: number;
}

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
