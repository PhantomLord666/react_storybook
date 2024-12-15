import React from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css"; // Importamos el archivo CSS como un objeto

export const Card = ({ image, title, description, footer, layout }) => {
  const cardClass = layout === "horizontal" ? styles.cardHorizontal : styles.cardVertical;
  const imageClass = layout === "horizontal" ? styles.cardHorizontalImage : styles.cardImage;
  const footerClass = layout === "horizontal" ? styles.cardHorizontalFooter : styles.cardFooter;

  return (
    <div className={`${styles.card} ${cardClass}`}>
      {image && <img src={image} alt={title} className={imageClass} />}
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
      </div>
      {footer && <div className={footerClass}>{footer}</div>}
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  footer: PropTypes.node,
  layout: PropTypes.oneOf(["vertical", "horizontal"]),
};

Card.defaultProps = {
  description: "",
  footer: null,
  layout: "vertical",
};


