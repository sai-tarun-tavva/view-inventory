import React from "react";
import styles from "./index.module.css";

// Define the prop types for the Details component
interface DetailsProps {
  name: string; // Name of the item to be displayed
  img: string; // URL of the item's image
}

/**
 * Details component that displays the name and image of an item.
 * It accepts a name and an image URL as props and renders them
 * in a styled container.
 *
 * @param {DetailsProps} props - The props for the Details component.
 * @param props.name - The name of the item.
 * @param props.img - The image of the item.
 * @returns {JSX.Element} - The rendered Details component.
 */
const Details: React.FC<DetailsProps> = ({ name, img }): JSX.Element => {
  return (
    <div className={styles.details}>
      <h2>{name}</h2>
      <img src={img} alt={`${name}`} />
    </div>
  );
};

Details.displayName = "Details";
export default Details;
