import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Chips.css';

const Chips = ({
  label,
  icon,
  closable,
  onClose,
  selectable,
  selected,
  onSelect,
  disabled,
}) => {
  const [isSelected, setIsSelected] = useState(selected);

  // Manejar selección
  const handleSelect = () => {
    if (!disabled && selectable) {
      setIsSelected(!isSelected);
      onSelect && onSelect(!isSelected);
    }
  };

  // Manejar cierre
  const handleClose = (e) => {
    e.stopPropagation();
    onClose && onClose();
  };

  return (
    <div
      className={`chip ${isSelected ? 'chip-selected' : ''} ${disabled ? 'chip-disabled' : ''}`}
      onClick={handleSelect}
    >
      {icon && <span className="chip-icon">{icon}</span>}
      <span className="chip-label">{label}</span>
      {closable && !disabled && (
        <button className="chip-close" onClick={handleClose}>
          &times;
        </button>
      )}
    </div>
  );
};

Chips.propTypes = {
  label: PropTypes.string.isRequired,  // Texto del chip
  icon: PropTypes.node,  // Icono opcional para el chip
  closable: PropTypes.bool,  // Si se puede cerrar
  onClose: PropTypes.func,  // Función cuando el chip es cerrado
  selectable: PropTypes.bool,  // Si el chip es seleccionable
  selected: PropTypes.bool,  // Si el chip está seleccionado
  onSelect: PropTypes.func,  // Función cuando el chip es seleccionado
  disabled: PropTypes.bool,  // Si el chip está deshabilitado
};

Chips.defaultProps = {
  closable: false,
  selectable: false,
  selected: false,
  disabled: false,
};

export default Chips;

