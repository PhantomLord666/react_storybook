// Accordion.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Accordion.css';
import Badge from '../../Notifications/Badge/Badge.jsx'

const Accordion = ({ title, icon: Icon, variant, children, isTable, rightContent}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className={`accordion accordion-${variant}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        {Icon && <Icon className="accordion-icon-left" />}
        <h3 className="accordion-title">{title}</h3>
         <div className="accordion-icons-right">
          {rightContent?.showIcon && (
            isOpen ? <FaChevronUp className="accordion-icon-toggle" /> : <FaChevronDown className="accordion-icon-toggle" />
          )}
          {rightContent?.badge && (
            <Badge className="accordion-badge" {...rightContent.badge}/>
          )}
        </div>
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {isTable ? (
          <div className="accordion-table-wrapper">
            <table className="accordion-table">
              {children}
            </table>
          </div>
        ) : (
          <div className="accordion-text-content">{children}</div>
        )}
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
  variant: PropTypes.oneOf(['default', 'outlined', 'filled']),
  children: PropTypes.node,
  isTable: PropTypes.bool,
  rightContent: PropTypes.shape({
    showIcon: PropTypes.bool,
    badge: PropTypes.shape({
      text: PropTypes.string.isRequired,
      variant: PropTypes.oneOf(['default', 'outlined', 'filled']),
      color: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'danger']),
      position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right', 'center']),
      small: PropTypes.bool,
    }),
  }),
};

Accordion.defaultProps = {
  variant: 'default',
  isTable: false,
  rightContent: {
    showIcon: true,
    badge: null,
  },
};

export default Accordion;

