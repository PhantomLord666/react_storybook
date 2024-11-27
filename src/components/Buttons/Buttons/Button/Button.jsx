// Button.js
import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ label, onClick, variant, size, disabled, icon }) => {
  return (
    <button
      className={`btn btn--${variant} btn--${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger', 'outline', 'link', 'just_icon']),
  size: PropTypes.oneOf(['small', 'medium', 'large', 'small-i', 'medium-i', 'large-i']),
  disabled: PropTypes.bool,
  icon: PropTypes.node,
};

Button.defaultProps = {
  onClick: () => {},
  variant: 'primary',
  size: 'medium',
  disabled: false,
  icon: null,
};

export default Button;

