// import React from "react";
import Bar from "../Bar";
import Details from "../Details";
import Status from "../Status";
// import styles from "./index.module.css";

const Card: React.FC = (): JSX.Element => {
  return (
    <article>
      <Details />
      <Status />
      <Bar />
    </article>
  );
};

Card.displayName = "Item";
export default Card;
