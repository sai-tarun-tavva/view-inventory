import React, { useContext } from "react";
import Card from "../Card";
import { DataContext, MenuItem } from "../../Store/DataContextProvider";
import { CONTENT } from "../../Content";
import styles from "./index.module.css";

const Cards: React.FC = (): JSX.Element => {
  const context = useContext(DataContext);
  if (!context) {
    return <div>{CONTENT.request_failure}</div>;
  }
  const { data } = context;

  return (
    <section className={styles.cards}>
      {data.data.map((item: MenuItem) => (
        <Card key={item.id} id={item.id} />
      ))}
    </section>
  );
};

Cards.displayName = "Items";
export default Cards;
