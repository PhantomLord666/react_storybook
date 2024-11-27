import React from 'react';
import PropTypes from 'prop-types';
import './RadioButton.css';

const RadioButton = ({ name, label, value, selectedValue, onChange }) => {
  return (
    <label className="radio-button">
      <input
        type="radio"
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={() => onChange(value)}
      />
      <span className="radio-custom"></span>
      {label}
    </label>
  );
};

RadioButton.propTypes = {
  name: PropTypes.string.isRequired,           // Nombre del grupo de radio buttons
  label: PropTypes.string.isRequired,          // Texto mostrado al lado del radio
  value: PropTypes.string.isRequired,          // Valor del radio button
  selectedValue: PropTypes.string.isRequired,  // Valor actualmente seleccionado
  onChange: PropTypes.func.isRequired,         // Función para cambiar el valor
};

export default RadioButton;
