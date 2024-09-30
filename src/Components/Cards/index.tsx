import React, { useContext } from "react";
import Card from "../Card";
import Loader from "../Loader";
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
  const { data, isLoading, error } = context; // Destructure data from context

  if (isLoading && data.length === 0) {
    return <Loader />;
  }

  if (error && data.length === 0) {
    return <p>Error: {error}</p>;
  }

  return data.length > 0 ? (
    <section className={styles.cards}>
      {data.map((item: MenuItem) => (
        <Card key={item.id} menuItem={item} /> // Render Card for each menu item
      ))}
    </section>
  ) : (
    <p>{CONTENT.request_failure}</p>
  );
};

Cards.displayName = "Items";
export default Cards;
