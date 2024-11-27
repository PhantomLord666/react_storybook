// Details.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './Details.css';

const Details = ({ title, content, icon: Icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => setIsOpen(!isOpen);

  return (
    <div className="details-container">
      <div className="details-header" onClick={toggleDetails}>
        {Icon && <Icon className="details-icon-left" />}
        <h3 className="details-title">{title}</h3>
        {isOpen ? <FaChevronUp className="details-icon-right" /> : <FaChevronDown className="details-icon-right" />}
      </div>
      <div className={`details-content ${isOpen ? 'open' : 'closed'}`}>
        <p>{content}</p>
      </div>
    </div>
  );
};

Details.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};

export default Details;

