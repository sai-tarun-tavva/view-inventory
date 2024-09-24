import React, { useContext } from "react";
import Card from "../Card";
import { DataContext, MenuItem } from "../../Store/DataContextProvider";
import { CONTENT } from "../../Content";
import styles from "./index.module.css";

/**
 * Cards component that renders a list of Card components based on the data
 * provided by the DataContext. If the context is not available, it displays
 * an error message.
 *
 * @returns {JSX.Element} - The rendered Cards component.
 */
const Cards: React.FC = (): JSX.Element => {
  const context = useContext(DataContext); // Retrieve the data context
  if (!context) {
    return <div>{CONTENT.request_failure}</div>; // Display error message if context is not available
  }
  const { data } = context; // Destructure data from context

  return (
    <section className={styles.cards}>
      {data.data.map((item: MenuItem) => (
        <Card key={item.id} id={item.id} /> // Render Card for each menu item
      ))}
    </section>
  );
};

Cards.displayName = "Items";
export default Cards;
