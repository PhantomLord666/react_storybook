// Badge.js
import React from 'react';
import PropTypes from 'prop-types';
import './Badge.css';

const Badge = ({ text, variant, color, position, small }) => {
  return (
    <span className={`badge badge-${variant} badge-${color} badge-${position} ${small ? 'badge-small' : ''}`}>
      {text}
    </span>
  );
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['default', 'outlined', 'filled']),
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
  position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center']),
  small: PropTypes.bool,
};

Badge.defaultProps = {
  variant: 'default',
  color: 'primary',
  position: 'center',
  small: false,
};

export default Badge;

