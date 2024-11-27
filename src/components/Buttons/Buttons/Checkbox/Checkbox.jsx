import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

const Checkbox = ({ label, checked, onChange }) => {
  return (
    <label className="checkbox-container">
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={(e) => onChange(e.target.checked)} 
      />
      <span className="checkbox-custom"></span>
      {label}
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,   // Texto mostrado junto al checkbox
  checked: PropTypes.bool.isRequired,   // Si el checkbox está marcado o no
  onChange: PropTypes.func.isRequired,  // Función para actualizar el estado
};

export default Checkbox;
