import React, { useContext } from "react";
import Details from "../Details";
import Status from "../Status";
import Bar from "../Bar";
import { DataContext, MenuItem } from "../../Store/DataContextProvider";
import styles from "./index.module.css";

// Define the prop types for the Card component
interface CardProps {
  id: number; // Unique identifier for the menu item
}

/**
 * Card component that displays details about a specific menu item.
 * It retrieves data from the DataContext, finds the corresponding
 * menu item by its ID, and renders its details, status, and a bar
 * component for stock visualization.
 *
 * @param {CardProps} props - The props for the Card component.
 * @param props.id - The identifier of the item.
 * @returns {JSX.Element} - The rendered Card component.
 */
const Card: React.FC<CardProps> = ({ id }): JSX.Element => {
  const context = useContext(DataContext);
  if (!context) {
    return <></>; // Return an empty fragment if context is not available
  }

  const { data } = context; // Destructure data from context

  // Find the specific item by id
  const menuItem = data.data.find((item: MenuItem) => item.id === id);

  // If no item is found, return empty component
  if (!menuItem) {
    return <></>;
  }

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
};

Card.displayName = "Item";
export default Card;
