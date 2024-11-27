import React from 'react';
import PropTypes from 'prop-types';
import './FloatingActionButton.css';

const FloatingActionButton = ({
 label,
  icon,
  color,
  hideLabelOnHover,
  onClick,
  disabled,
  fixed,
}) => {
    const hasLabel = Boolean(label); // Verifica si hay un label
  return (
    <button
      className={`fab fab-${color} ${disabled ? 'fab-disabled' : ''} ${!hasLabel ? 'fab-icon-only' : ''} ${fixed ? 'fab-fixed' : ''} ${hideLabelOnHover ? 'fab-hide-label' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className={`fab-icon ${hasLabel && !hideLabelOnHover ? 'fab-icon-margin' : ''}`}>{icon}</span>}
      {label && <span className="fab-label">{label}</span>}
    </button>
  );
};

FloatingActionButton.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node, // Puede ser un ícono de font-awesome o cualquier otro icono
  color: PropTypes.oneOf(['primary', 'secondary', 'danger', 'success', 'info', 'outline']),
  hideLabelOnHover: PropTypes.bool,  
  onClick: PropTypes.func, // Función que se dispara al hacer clic
  disabled: PropTypes.bool,
  fixed: PropTypes.bool,
};

FloatingActionButton.defaultProps = {
  color: 'primary',
  hideLabelOnHover: false,  // Por defecto no oculta el label
  disabled: false,
  fixed: true,
};

export default FloatingActionButton;
