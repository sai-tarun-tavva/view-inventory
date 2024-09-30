import React from "react";
import styles from "./index.module.css";

/**
 * Loader component that displays a loading spinner.
 * It indicates to the user that data is being fetched or processed.
 *
 * @returns {JSX.Element} - The rendered Loader component.
 */
const Loader: React.FC = (): JSX.Element => {
  return (
    <div className={styles["loader-container"]}>
      <div className={styles.loader}></div>
    </div>
  );
};

Loader.displayName = "Loader";
export default Loader;
