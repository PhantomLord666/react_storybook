// src/components/CardOpacity/CardOpacity.js
import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardOpacity.module.css'; // Importamos los estilos como un objeto

const CardOpacity = ({ background, color, title, description, buttonText }) => {
  return (
    <div
      className={styles.cardOpacity}
      style={{
        background: background || 'rgba(0, 0, 0, 0.5)', // Default opacity background
        color: color || '#fff', // Default text color
      }}
    >
      <div className={styles.cardContent}>
        <h2>{title}</h2>
        <p>{description}</p>
        <button className={styles.cardContentButton}>{buttonText}</button>
      </div>
    </div>
  );
};

CardOpacity.propTypes = {
  background: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default CardOpacity;
