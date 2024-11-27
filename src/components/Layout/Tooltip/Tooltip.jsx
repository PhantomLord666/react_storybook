// Tooltip.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tooltip.css';
import DOMPurify from 'dompurify';

const Tooltip = ({
  children,
  text,
  htmlContent,
  position = 'top', // top, bottom, left, right
  color = 'black',
  size = 'medium', // small, medium, large
  trigger = 'hover', // hover, click
  menuItems, // Nueva propiedad para menú
}) => {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    if (trigger === 'hover') setVisible(true);
  };

  const handleMouseLeave = () => {
    if (trigger === 'hover') setVisible(false);
  };

  const handleClick = () => {
    if (trigger === 'click') setVisible(!visible);
  };

  const sanitizedHtml = DOMPurify.sanitize(htmlContent);

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {children}
      {visible && (
        <div className={`tooltip-box ${position} ${size}`} style={{ backgroundColor: color }}>
          {menuItems ? (
            <ul className="tooltip-menu">
              {menuItems.map((item, index) => (
                <li key={index} className="tooltip-menu-item">
                  {item}
                </li>
              ))}
            </ul>
          ) : htmlContent ? (
            <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
          ) : (
            <span>{text}</span>
          )}
        </div>
      )}
    </div>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  color: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  trigger: PropTypes.oneOf(['hover', 'click']),
  menuItems: PropTypes.arrayOf(PropTypes.string), // Añadir la propiedad menuItems
};

export default Tooltip;

