import React from "react";
import styles from "./index.module.css";

interface DetailsProps {
  name: string;
  img: string;
}

const Details: React.FC<DetailsProps> = ({ name, img }): JSX.Element => {
  return (
    <div className={styles.details}>
      <span>{name}</span>
      <img src={img} alt={`${name}`}></img>
    </div>
  );
};

Details.displayName = "Details";
export default Details;
