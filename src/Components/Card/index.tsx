import React from "react";
import Details from "../Details";
import Status from "../Status";
import Bar from "../Bar";
import { MenuItem } from "../../Store/DataContextProvider";
import styles from "./index.module.css";

// Define the prop types for the Card component
interface CardProps {
  menuItem: MenuItem; // Unique identifier for the menu item
}

/**
 * Card component that displays details about a specific menu item.
 * It retrieves data from the DataContext, finds the corresponding
 * menu item by its ID, and renders its details, status, and a bar
 * component for stock visualization.
 *
 * @param {CardProps} props - The props for the Card component.
 * @param props.menuItem - The details of the item.
 * @returns {JSX.Element} - The rendered Card component.
 */
const Card: React.FC<CardProps> = React.memo(({ menuItem }) => {
  const { name, icon, orderCount, stock, remainStock } = menuItem;

  return (
    <article className={styles.card}>
      <Details name={name} img={icon} /> {/* Render details of the menu item */}
      <Status
        initialCount={stock}
        ordersReceived={orderCount}
        remainStock={remainStock}
      />
      {/* Render status for stock and order counts */}
      <Bar initialCount={stock} remainStock={remainStock} />
      {/* Render bar for stock visualization */}
    </article>
  );
});

Card.displayName = "Item";
export default Card;
