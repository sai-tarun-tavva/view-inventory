import React, { useContext } from "react";
import Bar from "../Bar";
import Details from "../Details";
import Status from "../Status";
import { DataContext, MenuItem } from "../../Store/DataContextProvider";
import styles from "./index.module.css";

interface CardProps {
  id: number;
}

const Card: React.FC<CardProps> = ({ id }): JSX.Element => {
  const context = useContext(DataContext);
  if (!context) {
    return <></>;
  }
  const { data } = context;

  // Find the specific item by id
  const menuItem = data.data.find((item: MenuItem) => item.id === id);

  // If no item is found, return empty component
  if (!menuItem) {
    return <></>;
  }

  const { name, icon, orderCount, stock, remainStock } = menuItem;

  return (
    <article className={styles.card}>
      <Details name={name} img={icon} />
      <Status
        initialCount={stock}
        ordersReceived={orderCount}
        remainStock={remainStock}
      />
      <Bar initialCount={stock} remainStock={remainStock} />
    </article>
  );
};

Card.displayName = "Item";
export default Card;
