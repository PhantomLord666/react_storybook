// DropdownList.jsx
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./DropdownList.css";

export const DropdownList = ({ items, placeholder, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleSelect = (item) => {
    setSelectedItem(item);
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleToggle}>
        {selectedItem ? selectedItem.label : placeholder}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {items.map((item) => (
            <li
              key={item.value}
              className="dropdown-item"
              onClick={() => handleSelect(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

DropdownList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  onSelect: PropTypes.func,
};

DropdownList.defaultProps = {
  placeholder: "Select an option",
  onSelect: () => {},
};
