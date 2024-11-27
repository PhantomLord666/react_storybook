import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ButtonGroup.css';

const ButtonGroup = ({ buttons, mode }) => {
  const [selected, setSelected] = useState([]);

  const handleClick = (index) => {
    if (mode === 'default') return;

    if (mode === 'single') {
      setSelected([index]);
    }

    if (mode === 'multiple') {
      if (selected.includes(index)) {
        setSelected(selected.filter((i) => i !== index));
      } else {
        setSelected([...selected, index]);
      }
    }
  };

  return (
    <div className="button-group">
      {buttons.map((button, index) => {
        const isSelected = selected.includes(index);
        return (
          <button
            key={index}
            className={`button ${isSelected ? 'selected' : ''}`}
            onClick={() => handleClick(index)}
          >
            {button.label}
          </button>
        );
      })}
    </div>
  );
};

ButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  mode: PropTypes.oneOf(['default', 'single', 'multiple']),
};

ButtonGroup.defaultProps = {
  mode: 'default',
};

export default ButtonGroup;

