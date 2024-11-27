// BadgeWrapper.js
import React from 'react';
import PropTypes from 'prop-types';
import Badge from './Badge';
import './BadgeWrapper.css';

const BadgeWrapper = ({ children, badgeText, badgeVariant, badgeColor, badgePosition }) => {
  return (
    <div className="badge-wrapper">
      {children}
      <Badge 
        text={badgeText} 
        variant={badgeVariant} 
        color={badgeColor} 
        position={badgePosition} 
      />
    </div>
  );
};

BadgeWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  badgeText: PropTypes.string.isRequired,
  badgeVariant: PropTypes.oneOf(['default', 'outlined', 'filled']),
  badgeColor: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
  badgePosition: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center']),
};

BadgeWrapper.defaultProps = {
  badgeVariant: 'default',
  badgeColor: 'primary',
  badgePosition: 'top-right',
};

export default BadgeWrapper;
